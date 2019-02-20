const expect = require('expect');
const request = require('supertest');

const{app} = require('./../server.js');
const{Todo} = require('./../models/todo.js');

// beforeEach allows you to run some code before every single test case
// so here we're allowing our assumptio that we're starting with 0 todos to be true
beforeEach((done) => {
	Todo.remove({}).then(() =>done());
});

describe('POST /todos', () =>{
	it('should create a new todo', (done) => {
		var text = 'Test todo text';

		request(app)
		.post('./todos')
		.send({text})
		// expect status to be 200
		.expect(200)
		.expect((res) =>{
			expect(res.body.text).toBe(text);
		})
		.end((err, res) => {
			if(err){
				return done(err);
			}

			Todo.find().then((todos) =>{
				expect(todos.length).toBe(1);
				expect(todos[0].text).toBe(text);
				done();
			}).catch((e) => done(e));
		});
	});
});