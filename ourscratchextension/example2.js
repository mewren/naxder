var express = require('express');
var fs = require('fs');

var app = express();
var gameNumber;
var ohnumber;

// Random Integer between two values
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}


app.get('/', function(req, res){
	
  console.log("request for /")
	
  res.send('hello world');
});

app.get('/crossdomain.xml', function(req, res){
	
	console.log("request for /crossdomain.xml")
	
	// Read the contents of the file into memory.
	fs.readFile('crossdomain.xml', function (err, logData) {
  
	// If an error occurred, throwing it will
	  // display the exception and end our app.
	  if (err) throw err;

	  var text = logData.toString();
	  
	  res.send(text);
	});

});

app.get('/getGame', function(req, res){
	
  	console.log("request for /getGame")
  	gameNumber = randomInt(1, 200) 
	console.log(gameNumber)
  	res.send("gameNumber " + gameNumber);
  	//console.log(res)
});
app.get('/naxder', function(req, res){
	
  	console.log("request for /naxder")
  	naxder2 = randomInt(1, 200) 
	console.log("naxder2")
  	res.send("naxder");
  	//console.log(res)
});
app.get('/poll', function(req, res){
	
  //console.log("request for /poll ")
	
  res.send("helloWorld hello_world\nxanderMama Xander_Mama\ngameNumber "+gameNumber+"\noh# "+ohnumber);
  //console.log(res)
});

app.get('*', function(req, res){
	
  console.log("request for *")
	  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log( fullUrl)
	
  res.send('hello world');
});

app.listen(12345);
console.log('Express Server running at http://127.0.0.1:12345/');