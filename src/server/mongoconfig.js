const mongo = require('mongodb').MongoClient;

client = () => {
    return new mongo(process.env.MONGOHOST, {useNewUrlParser: process.env.useNewUrlParser});
};

connect = async () => {
    await client().connect();
};

module.exports = {
    client: client,
    connect: connect
};
