// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
	if(err) {
		return console.log("Unable to connect to Mongodb server. ");
	}

	var database = db.db('TodoApp');

	console.log("Connected to Mongodb server");

	// database.collection('Todo').insertOne({
	// 	text: 'Sample Text',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log("Unable to insert document", err);
	// 	}	

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	database.collection('Users').insertOne({
		name: "Jamshed",
		age: 27,
		location: "Mumbai"
	},(err, result) => {
		if(err) {
			return console.log("Unable to insert document", err);
		}	

		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	db.close();
});
