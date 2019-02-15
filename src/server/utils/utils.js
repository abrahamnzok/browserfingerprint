const _ = require('lodash');

isFingerHashPrintUnique = (result, fingerprint) => {
    const data  = _.head(result);
    const dbfingerprint = data === undefined ? false : data.key;
    return dbfingerprint === false ? false : _.isEqual(dbfingerprint, fingerprint);
};

renderFingerprint = (result) => {
    const data = _.head(result);
    return data === undefined ? false : data.fingerprint;
};

renderKey = (result) => {
    const data = _.head(result);
    return data === undefined ? false : data.key;
};


areFingerPrintsEqual = (fingerprintA, fingerprintB) => {
    return _.isEqual(fingerprintA, fingerprintB);
};

module.exports = {
    isFingerHashPrintUnique : isFingerHashPrintUnique,
    areFingerPrintsEqual: areFingerPrintsEqual,
    renderFingerprint : renderFingerprint
};
