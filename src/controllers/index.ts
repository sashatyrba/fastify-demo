import knex from 'knex'
import { Model } from 'objection'

const db = knex({
  pool: {
    min: 2,
    max: 30,
  },
  client: 'pg',
  connection: {
    host: process.env.PG_HOST,
    port: 5432,
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
  },
})

Model.knex(db)

export { db }

export { getOwnerByEmail } from './auth'
