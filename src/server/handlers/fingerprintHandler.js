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

isCollision =  async (fingerprintHash, currentFingerPrint) => {
    const result = await knex('fingerprintdata').where({
        key : fingerprintHash
    }).select('fingerprint');
    const fingerprint = renderFingerprint(result);
    return areFingerPrintsEqual(fingerprint, currentFingerPrint) ;
};

handleCollision = async (fingerPrintHash, currentFingerPrint) => {
  const fingerPrintExist = await doesFingerPrintHashExist(fingerPrintHash);
  const collision = await isCollision(fingerPrintHash, currentFingerPrint);
  if( fingerPrintExist) {
      if(!collision) {
          console.log(collision);
          await knex('fingerprintdata').where({
              key: fingerPrintHash
          }).increment('collisions', 1)
      }else{
          await knex('fingerprintdata').where({
              key: fingerPrintHash
          }).increment('visits', 1)
      }
  }
};

module.exports = {
    createHandler: createHandler,
    doesFingerPrintHashExist: doesFingerPrintHashExist,
    handleCollision : handleCollision
};
