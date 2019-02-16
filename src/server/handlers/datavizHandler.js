const knex = require('../knex');

retrieveData = async () => {
    return await knex.select('key', 'collisions', 'visits').from('fingerprintdata') ;
};

module.exports = {
    retrieveData : retrieveData
};
