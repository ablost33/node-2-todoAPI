var mongoose = require('mongoose');

// These next two lines configure mongoose:
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose
};