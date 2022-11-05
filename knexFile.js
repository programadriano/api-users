module.exports = {
    development: {
      client: 'postgresql',
      connection: {
        host: 'db.bappmaovvkmoydjvzfka.supabase.co',
        user: 'postgres',
        password: 'b1PgXCIoeL5yCBY4',
        database: 'postgres',
        port: 5432
      },
      migrations: {
        directory: './src/infra/data/database/migrations',
        tableName: 'knex_migrations'
      }
    },
    staging: {},
    production: {}

  }
