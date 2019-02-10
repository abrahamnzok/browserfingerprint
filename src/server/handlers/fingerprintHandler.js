const knex = require('../knex');

createHandler = async (fingerprint) => {
    return await knex('fingerprintdata').insert({
        keys: fingerprint
    });
};

module.exports = {
    createHandler: createHandler
};
