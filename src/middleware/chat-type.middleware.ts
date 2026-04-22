/**
 * @fileoverview Middleware for handling chat type restrictions
 * @module chat-type.middleware
 */

import { Context, MiddlewareFn } from 'telegraf';
import { Injectable } from '@nestjs/common';

/**
 * Interface for new chat members message
 * @interface INewChatMembersMessage
 * @description Defines the structure of a message containing new chat members
 */
interface INewChatMembersMessage {
  /** Array of new chat members */
  new_chat_members: Array<{
    /** Unique identifier for the user */
    id: number;
    /** Whether the user is a bot */
    is_bot: boolean;
    /** First name of the user */
    first_name: string;
  }>;
}

/**
 * Middleware for handling private chat restrictions
 * @class PrivateChatMiddleware
 * @description Restricts bot commands and text messages to private chats only,
 * while allowing specific exceptions like inline queries and new member notifications
 */
@Injectable()
export class PrivateChatMiddleware {
  /**
   * Creates a middleware function that enforces chat type restrictions
   * @returns {MiddlewareFn<Context>} Middleware function that handles chat type restrictions
   */
  use(): MiddlewareFn<Context> {
    return async (ctx, next) => {
      // Allow all non-message updates (inline queries, callback queries, etc.)
      if (!ctx.chat && (ctx.inlineQuery || ctx.callbackQuery)) {
        return next();
      }

      // Allow "new_chat_members" in any chat
      if (
        'message' in ctx &&
        ctx.message &&
        'new_chat_members' in ctx.message &&
        Array.isArray((ctx.message as INewChatMembersMessage).new_chat_members)
      ) {
        return next();
      }

      // Allow /chatid in any chat type
      if (
        ctx.message &&
        typeof ctx.message === 'object' &&
        'text' in ctx.message &&
        typeof ctx.message.text === 'string' &&
        ctx.message.text.startsWith('/chatid')
      ) {
        return next();
      }

      // Send a message to /start command in groups
      if (
        ctx.chat?.type !== 'private' &&
        ctx.message &&
        typeof ctx.message === 'object' &&
        'text' in ctx.message &&
        typeof ctx.message.text === 'string' &&
        ctx.message.text.startsWith('/start')
      ) {
        await ctx.reply(`MoltoBene Bot here!
Configuration looks perfect – I'm able to detect new users and greet them with their pizza names when I have admin access.

If you're seeing this message, that means I'm already in the group – just doing a quick check to confirm I have admin rights.

No need to run any commands here. I'll handle the greetings and updates automatically from now on.

Stay saucy! 

Built with ❤️ From Sri Lanka`);
      }

      // Allow only private chats for commands and text
      if (ctx.chat?.type === 'private') {
        return next();
      }
      // Block everything else (like group text/commands)

      return;
    };
  }
}
