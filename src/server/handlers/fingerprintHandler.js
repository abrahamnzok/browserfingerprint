const knex = require('../knex');
const {isFingerHashPrintUnique, areFingerPrintsEqual, renderFingerprint } = require('../utils/utils');
const timestamp = require('time-stamp');

createHandler = async (fingerprintHash, fingerprint) => {
    return await knex('fingerprintdata').insert({
        key: fingerprintHash,
        fingerprint: fingerprint,
        timestamp: timestamp.utc(),
        collisions: 0,
        visits: 0
    });
};

doesFingerPrintHashExist = async (fingerprintHash) => {
    const result = await knex('fingerprintdata').where({
        key: fingerprintHash
    }).select('key');
    return isFingerHashPrintUnique(result, fingerprintHash)
};

isCollision =  async (fingerprintHash, currentFingerPrint) => {
    const result = await knex('fingerprintdata').where({
        key : fingerprintHash
    }).select('fingerprint');
    const fingerprint = renderFingerprint(result);
    return areFingerPrintsEqual(fingerprint, currentFingerPrint) ;
};

incrementHashCollision = async (fingerPrintHash) => {
    await knex('fingerprintdata').where({
        key: fingerPrintHash
    }).increment('collisions', 1)
};

incrementVisit = async (fingerPrintHash) => {
    await knex('fingerprintdata').where({
        key: fingerPrintHash
    }).increment('visits', 1);
};

module.exports = {
    createHandler: createHandler,
    doesFingerPrintHashExist: doesFingerPrintHashExist,
    isCollision : isCollision,
    incrementHashCollision : incrementHashCollision,
    incrementVisits : incrementVisits
};
