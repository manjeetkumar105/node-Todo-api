var {ObjectId} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// var id = '5c1dd9150b2464121c50877c';

// if(!ObjectId.isValid(id)){
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		console.log('Id not found');
// 	}
// 	console.log('Todos By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5c1dd9150b2464121c50877c').then((user) => {
	if(!user){
		console.log('Unable to find user');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => console.log(e));