module.exports = require('knex')({
    client: 'pg',
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 5432,
    database: 'fingerprint'
});
