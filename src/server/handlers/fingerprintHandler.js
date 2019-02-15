const knex = require('../knex');
const {isFingerHashPrintUnique, areFingerPrintsEqual, renderFingerprint } = require('../utils/utils');
const timestamp = require('time-stamp');

createHandler = async (fingerprintHash, fingerprint) => {
    return await knex('fingerprintdata').insert({
        key: fingerprintHash,
        fingerprint: fingerprint,
        timestamp: timestamp.utc(),
    });
};

doesFingerPrintHashExist = async (fingerprintHash) => {
    const result = await knex('fingerprintdata').where({
        key: fingerprintHash
    }).select('key');
    return isFingerHashPrintUnique(result, fingerprintHash)
};

isCollision =  async (fingerprintHash, newFingerprint) => {
    const result = await knex('fingerprintdata').where({
        key : fingerprintHash
    }).select('fingerprint');
    const fingerprint = renderFingerprint(result);
    return areFingerPrintsEqual(fingerprint, newFingerprint) ;
};

module.exports = {
    createHandler: createHandler,
    doesExist: doesFingerPrintHashExist,
    isCollision : isCollision
};
