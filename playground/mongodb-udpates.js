// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




// with mongoclient in place, we call this to connect to database:
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
if (err){
	return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');


db.collection('Todos').findOneAndUpdate({
	_id: new ObjectID('5c6b83ecb54f2d3dd6f3ec34')
}, {
	$set: {
		completed: true
	}
}, {
	returnOriginal: false
}).then((result) =>{
	console.log(result); 
}); 

db.collection('Users').findOneAndUpdate({
	name: 'Jen'
}, {
	$set: {
		name: 'Alexander Blostein'
	},
	$inc:{age:2}
}, {
	returnOriginal: false
}).then((result) =>{
	console.log(result); 
}); 







});