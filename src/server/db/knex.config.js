const knex = require('knex')({
    client: 'pg',
    connection: process.env.DOCKER_POSTGRES
});

module.exports = {
    knex : knex
};
