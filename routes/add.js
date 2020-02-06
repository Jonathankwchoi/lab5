var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var nameToAdd = request.query.name;
	var descriptionToAdd = request.query.description;
	var imageURLToAdd = "http://lorempixel.com/400/400/people";
	console.log(nameToAdd+" " + descriptionToAdd + " " + imageURLToAdd);
	
	var newFriend = {
		"name": nameToAdd,
		"description": descriptionToAdd,
		"imageURL": imageURLToAdd
	}
	data.friends.push(newFriend);
	response.render('index', data);
 }