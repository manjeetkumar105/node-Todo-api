var {ObjectId} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.finOneAndRemove({_id: '5c2e1dc164033604d0a13cab'}).then((todo) = {

});

Todo.findByIdAndRemove('5c2e1dc164033604d0a13cab').then((todo) => {
	console.log(todo);
});