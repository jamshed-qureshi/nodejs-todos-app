const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
	if(err) {
		return console.log("Unable to connect to Mongodb server. ");
	}

	var database = db.db('TodoApp');

	console.log("Connected to Mongodb server");

	database.collection('Todo').find().count().then((count) => {
		console.log(`Todos Count: ${count}`);
	}, (err) => {
		console.log("Unable to fetch todos.", err);
	});	

	// database.collection('Todo').find({
	// 	_id: new ObjectID("5aefee4d2eb74c3408bc09e8")
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log("Unable to fetch todos.", err);
	// });

	// db.close();
});
