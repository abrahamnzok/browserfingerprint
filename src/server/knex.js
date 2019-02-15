module.exports = require('knex')({
    client: 'pg',
    connection: {
        port: process.env.PG_PORT,
        database: process.env.PG_DB,
        user : process.env.PG_USER,
        password : process.env.PG_PWD,
    },
});
