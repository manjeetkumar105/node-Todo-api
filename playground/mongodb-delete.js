// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to Mongodb server');

	const db = client.db('TodoApp');

	//delete many

	// db.collection('Users').deleteMany({location: 'jaitpur, New Delhi'}).then((result) => {
	// 	console.log(result);
	// })

	//delete one
	// db.collection('Users').deleteOne({name: 'Manjeet'}).then((result) => {
	// 	console.log(result);
	// });

	// find one and delete
	db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});

	client.close();
});