const knex = require('../knex');

retrieveData = async () => {
    return await knex.select('name', 'collisions', 'visits').from('fingerprintdata') ;
};

module.exports = {
    retrieveData : retrieveData
};
