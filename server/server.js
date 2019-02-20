var express = require('express');
// body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
var bodyParser = require('body-parser');
// this is what connected me to my database
var {mongoose} = require('./db/mongoose.js');
// model for todo
var {Todo} = require('./models/todo');
// model for user
var {User} = require('./models/user');

const {ObjectID} = require('mongodb');



// var otherTodo = new Todo({
// 	text: 'Finish videos',
// 	completed: false,
// 	completedAt: 123
// });

// otherTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc,undefined,2));
// }, (e) => {
// 	console.log('Unable to save todo',e);
// });



//new Express application inside the app variable (to start a new Express application)
var app = express();

app.use(bodyParser.json());

// to handle post requests
// post requests are used to send data to a server to create or update a ressource
// so you're placing a post request on your localhost:3000/todos
app.post('/todos',(req,res) => {
	var todo = new Todo({
		text:req.body.text
	});
	todo.save().then((doc) =>{
		res.send(doc);
	}, (e) =>{
		res.status(400).send(e);
	});
});

// app.get to register route handler, to handle get requests
// get requests are used to request data from a specified resource
app.get('/todos', (req,res) =>{
	Todo.find().then((todos) =>{
		res.send({todos});
	}), (e) =>{
		res.status(400).send(e);
	}
});





app.get('/todos/:id',(req,res) =>{
	var id =req.params.id;
if(!ObjectID.isValid(id)){
	return res.status(404).send();
}
Todo.findById(id).then((todo) =>{
	if(!todo){
		return res.status(404).send();
	}
	res.send({todo});
}).catch((e) => {
	res.status(400).send();
});

});




// so now you have a basic server setup
app.listen(3000, () =>{
	console.log('Started on port 3000');
});


module.exports = {app};