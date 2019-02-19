// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




// with mongoclient in place, we call this to connect to database:
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
if (err){
	return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Todos').find({
// 	_id: new ObjectID('5c6b642339884f51291db417')  
// }).toArray().then((docs) =>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));
// }, (err) => {
// 	console.log('Unable to fetch todos', err)
// });

// db.collection('Todos').find().count().then((count) =>{
// console.log(`Todos counte: ${count}`);
// }, (err) => {
// 	console.log('Unable to fetch todos', err)
// });

db.collection('Users').find({
	name:'Alex Blostein'
}).toArray().then((docs) =>{
console.log('Users');
console.log(JSON.stringify(docs,undefined,2));
}, (err) => {
	console.log('Unable to fetch todos', err)
});






});