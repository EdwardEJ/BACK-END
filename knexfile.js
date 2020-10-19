const pgConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './data/db_1.db3',
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
