
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var host = 'localhost';
var port = '32768';
var url = `mongodb://${host}:${port}/TodoApp`;

MongoClient.connect(url, (err, client) => {
  if(err) {
    console.log('error', `Unable to connect to MongoDB server at ${url}`);
  }
  console.log(`Connected to MongoDB server ${url}`);

  // const dbName = 'Users';
  const dbName = 'Todos';
  const collectionName = 'Todos';
  var db = client.db(dbName);
  db.collection(collectionName).find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // var body = {
  //   text: 'Something to do',
  //   completed: false
  // }
  // var body = {
  //   name: 'Taz',
  //   age: 35,
  //   location: 'Philadelphia'
  // }
  //
  // db.collection(dbName).insertOne(body, (err, result) => {
  //   if (err) {
  //     return console.log(`Unable to insert into ${dbName}`, err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});


// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Taz', age: 35};
// var {name} = user;
// console.log(name);
