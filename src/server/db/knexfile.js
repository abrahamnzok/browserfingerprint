const {knex} = require('./knex.config');
const path = require('path');
module.exports = {
    development : {
        client : knex.client,
        connection : knex.connection,
        migrations: {
            directory : path.join(__dirname, '../migrations')
        },
        seeds: {
            directory : path.join(__dirname, '../seeds')
        }
    },
    production : {
        client : knex.client,
        connection : knex.connection,
        migrations: {
            directory : path.join(__dirname, '../migrations')
        },
        seeds: {
            directory : path.join(__dirname, '../seeds')
        }
    }
};
