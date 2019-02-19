// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');





// with mongoclient in place, we call this to connect to database:
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
if (err){
	return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');


// db.collection('Todos').insertOne({
// 	text: 'Something to do',
// 	completed: false
// }, (err,result) =>{
// 	if(err){
// 		return console.log('Unable to insert todo', err);
// 	}

// // result.ops will print all of the the data in insertOne
// 	console.log(JSON.stringify(result.ops, undefined,2));

// });  

// Insert new doc into Users (name,age, location)


// db.collection('Users').insertOne({
// 	name: 'Alex Blostein',
// 	age: 20,
// 	location: 'Montreal'
// }, (err,result) =>{
// 	if(err){
// 		return console.log('Unable to insert todo', err);
// 	}

// // result.ops will print all of the the data in insertOne
// 	console.log(result.ops[0]._id.getTimestamp());

// });  

// this closes connection with server
db.close();
});