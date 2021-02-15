import * as Knex from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('owner').del()

  // Inserts seed entries
  await knex('owner').insert([
    {
      id: 'ff20d9ee-e0dc-41c5-b822-abd4b60fb419',
      email: 'user@example.com',
      password:
        '$argon2id$v=19$m=4096,t=3,p=1$6waQC9xbP5UzPjWm//2C4A$KUbBrYIDa8IVl84sYXWwfdlJ7RtYKn6Pq6y244ou5Ng',
    },
  ])

  // Deletes ALL existing entries
  await knex('todo').del()

  // Inserts seed entries
  await knex('todo').insert([
    {
      id: '4c18fa53-b5b6-480d-af7a-d10879ddeb30',
      ownerId: 'ff20d9ee-e0dc-41c5-b822-abd4b60fb419',
      task: 'Create sample app',
      updated: new Date(),
      completed: new Date(),
    },
    {
      id: '598bdd90-3135-4e8e-8b28-0f7060ec7e84',
      ownerId: 'ff20d9ee-e0dc-41c5-b822-abd4b60fb419',
      task: 'Get an awesome contract',
      updated: new Date(),
      completed: new Date(),
    },
    {
      id: '6d933547-95ae-4ca7-bc23-fa8704b663e0',
      ownerId: 'ff20d9ee-e0dc-41c5-b822-abd4b60fb419',
      task: 'Make some tea',
    },
  ])
}
