const mongo = require('mongodb').MongoClient;

client = (config, options) => {
    return new mongo(config.url, options);
};

connect = async (config, options) => {
  await client(config, options).connect();
};

module.exports = {
    client : client,
    connect: connect
};
