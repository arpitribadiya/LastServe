//Created by Viraj Joshi
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { MongoClient } = require("mongodb");

const uri = process.env.atlas_uri;

var client = null;

async function connectToDatabase() {
  if (client) {
    return client.db("lastserve");
  }

  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to MongoDB cluster
    await client.connect();

    console.log("Connected to MongoDB");

    // Return reference to database object
    return client.db("lastserve");
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connectToDatabase };
