require('dotenv').config()
require('ts-node/register')

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASS,
      database: process.env.PG_DB,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'src/migrations',
      extension: 'ts',
    },
    seeds: {
      directory: 'src/seeds',
      extension: 'ts',
    },
  },
  production: {},
}
