const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost/27017', (err, db) => {
	if(err) {
		return console.log("Unable to connect to Mongodb server. ");
	}

	var database = db.db('TodoApp');

	console.log("Connected to Mongodb server");

	database.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5aefef65c34b67343484b26f')
	}, {
		$set: { 
			name: "Jammy",
		},
		$inc: {
				age: -1
		}	
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// database.collection('Todo').findOneAndUpdate({
	// 	_id: new ObjectID('5af019f50ea014898499bbf0')
	// }, {
	// 	$set: { 
	// 		completed: true
	// 	}	
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });



	// db.close();
});