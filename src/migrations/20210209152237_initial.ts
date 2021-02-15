import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

  return knex.schema
    .createTable('owner', (table) => {
      table
        .uuid('id')
        .unique()
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
      table.string('email').unique().notNullable().index()
      table.string('password').notNullable()
    })
    .createTable('todo', (table) => {
      table
        .uuid('id')
        .unique()
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
      table
        .uuid('ownerId')
        .references('id')
        .inTable('owner')
        .onDelete('CASCADE')
        .index()
      table.string('task')
      table.timestamp('created').notNullable().defaultTo(knex.raw('now()'))
      table.timestamp('updated').notNullable().defaultTo(knex.raw('now()'))
      table.timestamp('completed')
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('todo').dropTableIfExists('owner')
}
