const knex = require('../knex');

createHandler = async (fingerprint) => {
    await knex('fingerprintable').insert({
        value: fingerprint
    });
};

module.exports = {
    createHandler: createHandler
};
