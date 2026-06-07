/**
 * @fileoverview Controller exposing passively captured Telegram groups to rsvpizza
 * @module captured-group.controller
 */

import {
  Controller,
  Get,
  UseGuards,
  UnauthorizedException,
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { CapturedGroupService } from './captured-group.service';

/**
 * Guard for protecting the rsvpizza captured-groups export route with API key auth.
 * @class RsvpizzaApiKeyGuard
 * @implements {CanActivate}
 * @description Mirrors the guard used by the `/city/groups` export: authorizes
 * against `RSVPIZZA_API_KEY` (and still accepts the shared `USER_API_KEY` for
 * backwards-compatible internal callers) via the `x-api-key` header.
 */
@Injectable()
class RsvpizzaApiKeyGuard implements CanActivate {
  /**
   * Validates the API key from request headers
   * @param {ExecutionContext} context - The execution context
   * @returns {boolean} True if the API key is valid
   * @throws {UnauthorizedException} If the API key is invalid or missing
   */
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest<Request>();
    const apiKey = request.headers['x-api-key'];
    if (
      apiKey &&
      (apiKey === process.env.RSVPIZZA_API_KEY || apiKey === process.env.USER_API_KEY)
    ) {
      return true;
    }
    throw new UnauthorizedException('Invalid API key');
  }
}

/**
 * Shape of a single captured group returned by the `/captured-groups` export
 * @interface ICapturedGroupExport
 */
interface ICapturedGroupExport {
  chatId: string;
  title: string;
  chatType: string;
  lastSeenAt: string;
}

/**
 * Normalizes a timestamp value (Date from pg, or already a string) to an ISO string.
 * @param {unknown} value - The raw timestamp value
 * @returns {string} ISO 8601 string, or empty string when absent
 */
function toIsoString(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value != null ? String(value) : '';
}

/**
 * Controller exposing the passively captured Telegram groups.
 * @class CapturedGroupController
 * @description Provides a read-only export of every group/supergroup the bot is
 * in, for rsvpizza to match against its own event data.
 */
@Controller('captured-groups')
export class CapturedGroupController {
  constructor(private readonly capturedGroupService: CapturedGroupService) {}

  /**
   * Exports every passively captured Telegram group.
   * @returns {Promise<{ groups: ICapturedGroupExport[] }>} Exported groups
   * @protected Requires valid `RSVPIZZA_API_KEY` (or `USER_API_KEY`) in `x-api-key`
   */
  @UseGuards(RsvpizzaApiKeyGuard)
  @Get()
  async getCapturedGroups(): Promise<{ groups: ICapturedGroupExport[] }> {
    const captures = await this.capturedGroupService.getAllCapturedGroups();

    const groups: ICapturedGroupExport[] = captures.map((capture) => ({
      chatId: capture.chat_id ?? '',
      title: capture.title ?? '',
      chatType: capture.chat_type ?? '',
      lastSeenAt: toIsoString(capture.last_seen_at),
    }));

    return { groups };
  }
}
