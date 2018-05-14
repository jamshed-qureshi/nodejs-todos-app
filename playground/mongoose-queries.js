const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5af9252d2beeb53fe47a77e0";
var userId = "5af56320ba15ad37b4a4dc30";

if(!ObjectId.isValid(id) || !ObjectId.isValid(userId)) {
 console.log("Id not Valid.");
}

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos:', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo:', todo);
// });

Todo.findById(id).then((todo) => {
	if(!todo){
		return console.log("Id not found.");
	}
	console.log('One todo by Id:', todo);
}).catch((e) => console.log(e));


User.findById(userId).then((user) => {
	if(!user){
		return console.log("User id not found.");
	}
	console.log('One user by Id:', user);
}).catch((e) => console.log(e));

