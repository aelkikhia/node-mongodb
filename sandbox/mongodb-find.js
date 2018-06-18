
const {MongoClient, ObjectID} = require('mongodb');

var host = 'localhost';
var port = '32768';
var url = `mongodb://${host}:${port}/TodoApp`;

MongoClient.connect(url, (err, client) => {
  if(err) {
    console.log('error', `Unable to connect to MongoDB server at ${url}`);
  }
  console.log(`Connected to MongoDB server ${url}`);

  const dbName = 'Users';
  // const dbName = 'Todos';
  var db = client.db(dbName);
  // db.collection(collectionName).find({
  //   _id: new ObjectID('5b273f1a1017017f8254e114')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection(collectionName).count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos count', err);
  // });

  db.collection(dbName).find({name: 'Taz'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  client.close();
});
