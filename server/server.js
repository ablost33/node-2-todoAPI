var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');



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


var app = express();

app.use(bodyParser.json());


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


// so now you have a basic server setup
app.listen(3000, () =>{
	console.log('Started on port 3000');
});