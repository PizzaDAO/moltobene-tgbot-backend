import type { Knex } from 'knex';

const tableName = 'telegram_group_captures';

/**
 * Creates the standalone `telegram_group_captures` table.
 *
 * This table passively records every Telegram group/supergroup the bot is a
 * member of, keyed by `chat_id`. Unlike the `city` table it has NO foreign keys
 * and no required city/country mapping, so it can store groups (e.g. "goshen")
 * that are not yet linked to a known city. It is exposed read-only to rsvpizza
 * via `GET /captured-groups` so rsvpizza can match captured groups against its
 * own event data.
 */
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('chat_id').notNullable().unique();
    table.string('title');
    table.string('chat_type');
    table.timestamp('first_seen_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
    table.timestamp('last_seen_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());

    table.index('chat_id', 'idx_telegram_group_captures_chat_id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
