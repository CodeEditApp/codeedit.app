const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async () => {
 /*
   Check if client is already connected.
   If not, connect to the database, if already, return the database instance.
   **/
  !!client ? await client.connect() : null;
  return client.db();
};

module.exports = {
  connect,
};