/**
 * @fileoverview Service for passively capturing every Telegram group the bot is in
 * @module captured-group.service
 */

import { Injectable, Logger } from '@nestjs/common';
import { Context, MiddlewareFn } from 'telegraf';
import { KnexService } from '../knex/knex.service';
import { ICapturedGroup } from './captured-group.interface';

const TABLE_NAME = 'telegram_group_captures';

/**
 * Telegram chat types that represent a group we want to record
 */
const GROUP_CHAT_TYPES = new Set(['group', 'supergroup']);

/**
 * Service that passively records the `chat_id` of every group/supergroup the bot
 * receives an update from.
 *
 * @class CapturedGroupService
 * @description The bot polls `getUpdates` with privacy OFF, so it already
 * receives every group message — this service simply records the group's
 * `chat_id` into the standalone `telegram_group_captures` table. It is wired in
 * as a global Telegraf middleware (via {@link middleware}) so it runs IN ADDITION
 * to — and ahead of — all existing `@On`/`@Command`/`@Start` handlers, and always
 * calls `next()` so it never disrupts the existing flow.
 *
 * To avoid a write-firehose it keeps an in-memory {@link seenChatIds} set: once a
 * `chat_id` has been recorded in this process it is never written again, so the
 * steady state is zero DB hits.
 */
@Injectable()
export class CapturedGroupService {
  private readonly logger = new Logger(CapturedGroupService.name);

  /**
   * In-memory guard of chat_ids already recorded this process lifetime.
   * Prevents a DB write on every single group message.
   * @private
   */
  private readonly seenChatIds = new Set<string>();

  constructor(private readonly knexService: KnexService) {}

  /**
   * Returns a Telegraf middleware that passively captures group chat ids.
   *
   * Registered via the TelegrafModule `middlewares` option so it is applied at
   * bot-construction time, guaranteeing it runs before any `@On('message')`
   * terminal handlers. It is fully fire-and-forget: any error is swallowed and
   * it always calls `next()`.
   *
   * @returns {MiddlewareFn<Context>} The capture middleware
   */
  middleware(): MiddlewareFn<Context> {
    return async (ctx, next) => {
      try {
        this.captureFromContext(ctx);
      } catch (error) {
        // Never let capture break the existing handler chain.
        this.logger.warn(`Passive group capture failed: ${String(error)}`);
      }
      return next();
    };
  }

  /**
   * Extracts the group chat from any update type and records it if new.
   * @param {Context} ctx - The Telegraf context
   * @private
   */
  private captureFromContext(ctx: Context): void {
    const chat = ctx.chat;
    if (!chat || !GROUP_CHAT_TYPES.has(chat.type)) {
      return;
    }

    const chatId = String(chat.id);
    if (this.seenChatIds.has(chatId)) {
      // Already recorded this process lifetime — no DB hit.
      return;
    }

    // Mark as seen immediately so concurrent updates for the same group don't
    // each fire an upsert before the first one resolves.
    this.seenChatIds.add(chatId);

    const title = 'title' in chat && typeof chat.title === 'string' ? chat.title : null;
    const chatType = chat.type;

    // Fire-and-forget; failures are logged and the chat_id is re-armed so a
    // later update can retry the write.
    void this.upsertGroup(chatId, title, chatType).catch((error) => {
      this.seenChatIds.delete(chatId);
      this.logger.warn(`Failed to upsert captured group ${chatId}: ${String(error)}`);
    });
  }

  /**
   * Upserts a captured group by `chat_id`, refreshing title/type and last_seen_at.
   * @param {string} chatId - Telegram chat id (string)
   * @param {string | null} title - Group title
   * @param {string} chatType - Telegram chat type
   * @private
   */
  private async upsertGroup(chatId: string, title: string | null, chatType: string): Promise<void> {
    await this.knexService
      .knex(TABLE_NAME)
      .insert({
        chat_id: chatId,
        title,
        chat_type: chatType,
      })
      .onConflict('chat_id')
      .merge({
        title,
        chat_type: chatType,
        last_seen_at: this.knexService.knex.fn.now(),
      });
  }

  /**
   * Returns every captured group for the rsvpizza export endpoint.
   * @returns {Promise<ICapturedGroup[]>} All captured groups
   */
  async getAllCapturedGroups(): Promise<ICapturedGroup[]> {
    return this.knexService
      .knex<ICapturedGroup>(TABLE_NAME)
      .select('id', 'chat_id', 'title', 'chat_type', 'first_seen_at', 'last_seen_at')
      .orderBy('last_seen_at', 'desc');
  }
}
