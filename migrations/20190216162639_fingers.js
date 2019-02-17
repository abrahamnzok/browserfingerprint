exports.up = async (knex, Promise) => {
    return await knex.schema.createTable('fingerprintdata', (table) => {
        table.string('key').primary().index('key');
        table.string('name');
        table.timestamp('timestamp');
        table.json('fingerprint');
        table.integer('collisions');
        table.integer('visits');
    });
};

exports.down = async (knex, Promise) => {
    return await knex.schema.dropTable('fingerprintdata');
};
