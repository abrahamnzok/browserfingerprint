// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      port: process.env.PG_PORT,
      database: process.env.PG_DATABASE,
      user : process.env.PG_USER,
      password : process.env.PG_PWD,
    },
    migrations: {
      directory: './migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      port: process.env.PG_PORT,
      database: process.env.PG_DATABASE,
      user : process.env.PG_USER,
      password : process.env.PG_PWD,
    },
    migrations: {
      directory: './migrations',
    }
  }

};
