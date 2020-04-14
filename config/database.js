/*Este es mi codigo conectado a MongoDBAltas

const mongoose = require('mongoose');
const _URI = 'mongodb+srv://floren:<password>@cluster0-ugmu0.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('BD Funcionando'))
    .catch(err => console.log(err));
});
*/

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://floren:Privat333@cluster0-ugmu0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


/*
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'cluster0-shard-00-01-ugmu0.mongodb.net:27017 ';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
*/

