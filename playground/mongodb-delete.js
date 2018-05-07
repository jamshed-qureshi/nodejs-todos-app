const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost/27017', (err, db) => {
	if(err) {
		return console.log("Unable to connect to Mongodb server. ");
	}

	var database = db.db('TodoApp');

	console.log("Connected to Mongodb server");

	// deleteMany
	// database.collection('Todo').deleteMany({text: "Complete Task"}).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// database.collection('Todo').deleteOne({text: "Complete Task"}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	database.collection('Todo').findOneAndDelete({completed: false}).then((result) => {
		console.log(result);
	});
});