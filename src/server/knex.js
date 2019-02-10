module.exports = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.pg_host,
        user: process.env.pg_user,
        password: process.env.pg_pwd,
        port: process.env.pg_port,
        database: process.env.pg_db
    }
});
