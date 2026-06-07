/**
 * @fileoverview Interfaces for the captured-group module
 * @module captured-group.interface
 */

/**
 * Interface representing a passively captured Telegram group row
 * @interface ICapturedGroup
 * @description Mirrors a row of the `telegram_group_captures` table. Records
 * every group/supergroup the bot is a member of, independent of whether the
 * group is mapped to a known city.
 */
export interface ICapturedGroup {
  /**
   * Unique identifier for the capture row
   * @type {string}
   */
  id: string;

  /**
   * Telegram chat id of the group (stored as string to preserve precision)
   * @type {string}
   */
  chat_id: string;

  /**
   * Title of the group at the time it was last seen
   * @type {string | null}
   * @optional
   */
  title?: string | null;

  /**
   * Telegram chat type, e.g. `group` or `supergroup`
   * @type {string | null}
   * @optional
   */
  chat_type?: string | null;

  /**
   * Timestamp the group was first recorded
   * @type {string}
   */
  first_seen_at: string;

  /**
   * Timestamp the group was last seen
   * @type {string}
   */
  last_seen_at: string;
}
