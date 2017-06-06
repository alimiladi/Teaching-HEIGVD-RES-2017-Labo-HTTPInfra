var Chance = require ("chance");
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send(generateCitiesAndCities());
	//console.log('Received GET request to the root page !');	
});

app.listen(3000,  function() {
	console.log('Accepting HTTP requests on port 3000.')
});

//Generate random cities in random countries around the world
function generateCitiesAndCities(){
	var numberOfCities = chance.integer({min: 0, max: 15});
	console.log("Number of generated cities : " + numberOfCities);
	var cities = [];
	for (var i = 0 ; i < numberOfCities ; i++) {
		var country = chance.country({full: true});
		var city = chance.city({country: country});
		cities.push({
			country: country,
			city: city
		});
	};
	console.log(cities);
	return cities; 
}