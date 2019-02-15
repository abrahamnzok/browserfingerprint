const knex = require('../knex');
const _ = require('lodash');
const timestamp = require('time-stamp');

createHandler = async (fingerprintHash, fingerprint) => {
    return await knex('fingerprintdata').insert({
        keys: fingerprintHash,
        fingerprint: fingerprint,
        timestamp: timestamp.utc()
    });
};

doesExist = async (fingerprint) => {
    const result = await knex('fingerprintdata').where({
        keys: fingerprint
    }).select('keys');
    const data  = _.head(result);
    const dbfingerprint = data === undefined ? false : data.key;
    return dbfingerprint === false ? false : _.isEqual(dbfingerprint, fingerprint);
};

module.exports = {
    createHandler: createHandler,
    doesExist: doesExist,
};
