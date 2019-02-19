// provides model for data stored in my shit, this gives a model for the attributes I want
var mongoose = require('mongoose');


var Todo = mongoose.model('Todo',{
	text: {
		type:String, 
		// this next line guarantees that the text property exists
		required: true,
		// this next line prevents you from inputting an empty string
		minLength: 1,
		// removes leading and trailing whitespace
		trim: true
	},
	completed:{
		type: Boolean,
		default: false
	},
	completedAt:{
		type: Number,
		default: null
	}
});

module.exports = {
  Todo
};


