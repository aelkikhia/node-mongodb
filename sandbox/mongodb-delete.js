
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

  // db.collection(dbName).deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection(dbName).deleteOne({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection(dbName).findOneAndDelete({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  db.collection(dbName).deleteMany({name: 'taz'});

  db.collection(dbName).findOneAndDelete({
    _id: ObjectID('5b273ac9fb6f1c63671b30ed')
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  client.close();
});
