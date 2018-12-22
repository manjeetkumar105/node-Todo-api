// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to Mongodb server');

	const db = client.db('TodoApp');

	//updating dbs
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5c1cdf6cdc72c9f9111a0c7c')
	// },{
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5c1b3a9f067ac835b8b49c25')
	}, {
		$set: {
			name: 'Baba'
		}
	}, {
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	})

	client.close();
});