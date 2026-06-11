/**
 * @fileoverview Forwards inbound host DM submissions (receipt/event photos and
 * bare-number headcounts) from Telegram to the rsvpizza backend, which does all
 * the downloading, OCR and persistence. moltobene stays thin: it only forwards
 * `{ chatId, kind, fileId|text }` and lets rsvpizza send the real confirmation DM.
 * @module host-inbound.service
 */

import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Context } from 'telegraf';
import { Ctx, Next, On, Update } from 'nestjs-telegraf';
import axios from 'axios';
import { CommonService } from '../common/common.service';
import { getContextTelegramUserId } from 'src/utils/context';

/**
 * Payload forwarded to rsvpizza's POST /api/telegram/host-inbound endpoint.
 */
interface IForwardHostInbound {
  /** The host's Telegram user id (== chat id for private chats). */
  chatId: number;
  /** What kind of submission this is. */
  kind: 'photo' | 'text';
  /** Telegram file_id of the largest photo size (photo kind only). */
  fileId?: string;
  /** Telegram file_unique_id of the largest photo size (photo kind only). */
  fileUniqueId?: string;
  /**
   * MIME type of the forwarded media (photo kind only). rsvpizza uses this to
   * decide whether to rasterize a PDF before OCR — `application/pdf` documents
   * are forwarded as `kind: 'photo'` with this hint, real photos as `image/jpeg`.
   */
  mimeType?: string;
  /** Raw text payload (text kind only — currently a bare headcount number). */
  text?: string;
}

/**
 * Service that forwards inbound host submissions to rsvpizza.
 * @class HostInboundService
 */
@Update()
@Injectable()
export class HostInboundService {
  constructor(
    @Inject(forwardRef(() => CommonService))
    private readonly commonService: CommonService,
  ) {}

  /**
   * POSTs a host submission to rsvpizza. Fire-and-forget-ish: never throws, just
   * logs on failure so a flaky rsvpizza never crashes the bot. rsvpizza is
   * responsible for replying to the host with the real confirmation.
   * @param {IForwardHostInbound} body - The payload to forward.
   * @returns {Promise<boolean>} True on a 2xx, false otherwise.
   */
  async forwardHostInbound(body: IForwardHostInbound): Promise<boolean> {
    try {
      await axios.post(`${process.env.RSVPIZZA_BASE_URL}/api/telegram/host-inbound`, body, {
        headers: { 'x-api-key': process.env.TELEGRAM_LINK_CALLBACK_SECRET ?? '' },
      });
      return true;
    } catch (error) {
      console.error('Failed to forward host inbound submission to rsvpizza:', error);
      return false;
    }
  }

  /**
   * Returns true when the user is NOT inside an active broadcast/registration
   * flow, i.e. when a private-chat message should be treated as a host
   * submission rather than flow input.
   * @param {string | number} userId - The Telegram user id.
   * @returns {Promise<boolean>}
   * @private
   */
  private async hasNoActiveSession(userId: string | number): Promise<boolean> {
    const state = await this.commonService.getUserState(Number(userId));
    // No state at all, or an explicitly idle flow with no in-progress step.
    return !state || ((!state.flow || state.flow === 'idle') && !state.step);
  }

  /**
   * Forwards an inbound host PHOTO to rsvpizza when the user is in a private chat
   * and NOT inside an active broadcast/registration flow.
   *
   * This runs alongside the broadcast module's own `@On('photo')` handler
   * (`BroadcastService.onPhoto`), which only acts when `session.step ===
   * 'creating_post'` and otherwise returns early. Since HostInboundModule is
   * registered ahead of BroadcastModule, this handler runs FIRST: if the update
   * is not an idle-private host submission we own, we call `next()` so broadcast
   * (and any other downstream handler) still gets a chance to process it. We only
   * consume (terminal, no next()) when we actually ack + forward.
   * @param {Context} ctx - The Telegraf context.
   * @param {() => Promise<void>} next - Pass-through to downstream handlers.
   * @returns {Promise<void>}
   */
  @On('photo')
  async onHostPhoto(@Ctx() ctx: Context, @Next() next: () => Promise<void>): Promise<void> {
    const userId = getContextTelegramUserId(ctx);

    // Not an idle-private host photo submission → pass downstream (broadcast etc.).
    if (
      ctx.chat?.type !== 'private' ||
      !ctx.from?.id ||
      !ctx.message ||
      !('photo' in ctx.message) ||
      ctx.message.photo.length === 0 ||
      !userId ||
      !(await this.hasNoActiveSession(userId))
    ) {
      await next();
      return;
    }

    const p = ctx.message.photo;
    const best = p[p.length - 1];
    const fileId = best.file_id;
    const fileUniqueId = best.file_unique_id;

    // Optional instant ack so the bot isn't silent during OCR. rsvpizza sends
    // the real "✅ added" confirmation.
    try {
      await ctx.reply('📥 Got it, processing…');
    } catch {
      // Acks are best-effort; ignore failures.
    }

    // Terminal: we consumed this update, do NOT call next().
    await this.forwardHostInbound({
      chatId: ctx.from.id,
      kind: 'photo',
      fileId,
      fileUniqueId,
      mimeType: 'image/jpeg',
    });
  }

  /**
   * Forwards an inbound host IMAGE DOCUMENT to rsvpizza when the user is in a
   * private chat and NOT inside an active broadcast/registration flow.
   *
   * Telegram delivers forwarded or uncompressed ("send as file") images as a
   * `document`, not a `photo`, so the `@On('photo')` handler above never fires
   * for them and the submission was silently dropped. This mirrors `onHostPhoto`
   * but reads `ctx.message.document` and acts on `image/*` MIME types and on
   * `application/pdf` (rsvpizza rasterizes the PDF before OCR using the mimeType
   * hint). Other file types are out of scope and passed downstream.
   *
   * It forwards with `kind: 'photo'` (even for PDFs) because rsvpizza downloads
   * any `file_id` via getFile and branches on `mimeType`, not `kind`, to decide
   * whether to rasterize.
   *
   * This runs alongside the broadcast module's own `@On('document')` handler,
   * which only acts when `session.step === 'creating_post'` and otherwise returns
   * early. Since HostInboundModule registers ahead of BroadcastModule, this runs
   * FIRST: if the update is not an idle-private host document we own, we call
   * `next()` so broadcast and other downstream handlers still run.
   * @param {Context} ctx - The Telegraf context.
   * @param {() => Promise<void>} next - Pass-through to downstream handlers.
   * @returns {Promise<void>}
   */
  @On('document')
  async onHostDocument(@Ctx() ctx: Context, @Next() next: () => Promise<void>): Promise<void> {
    const userId = getContextTelegramUserId(ctx);
    const doc = ctx.message && 'document' in ctx.message ? ctx.message.document : undefined;
    const mime = doc?.mime_type || '';
    // Images and PDFs only — other file types are out of scope.
    const isSupported = mime.startsWith('image/') || mime === 'application/pdf';

    // Not an idle-private supported host document → pass downstream (broadcast etc.).
    if (
      ctx.chat?.type !== 'private' ||
      !ctx.from?.id ||
      !doc ||
      !isSupported ||
      !userId ||
      !(await this.hasNoActiveSession(userId))
    ) {
      await next();
      return;
    }

    // Optional instant ack so the bot isn't silent during OCR. rsvpizza sends
    // the real "✅ added" confirmation.
    try {
      await ctx.reply('📥 Got it, processing…');
    } catch {
      // Acks are best-effort; ignore failures.
    }

    // Terminal: we consumed this update, do NOT call next().
    await this.forwardHostInbound({
      chatId: ctx.from.id,
      kind: 'photo',
      fileId: doc.file_id,
      fileUniqueId: doc.file_unique_id,
      mimeType: doc.mime_type,
    });
  }

  /**
   * Forwards a BARE NUMBER text DM (e.g. a headcount) to rsvpizza when the user
   * is in a private chat and NOT inside an active flow. Called from
   * CommonService's `@On('message')` idle branch so it doesn't compete with the
   * registration/edit text handlers in WelcomeService.handlePrivateChat.
   * @param {Context} ctx - The Telegraf context.
   * @returns {Promise<boolean>} True if the message was handled as a headcount.
   */
  async tryForwardBareNumber(ctx: Context): Promise<boolean> {
    if (ctx.chat?.type !== 'private') return false;
    if (!ctx.from?.id) return false;
    if (!ctx.message || !('text' in ctx.message) || typeof ctx.message.text !== 'string') {
      return false;
    }

    const text = ctx.message.text.trim();
    if (!/^\d{1,6}$/.test(text)) return false;

    const userId = getContextTelegramUserId(ctx);
    if (!userId) return false;

    // Belt-and-suspenders: caller already checks idle, re-check here.
    if (!(await this.hasNoActiveSession(userId))) return false;

    await this.forwardHostInbound({ chatId: ctx.from.id, kind: 'text', text });
    return true;
  }
}
