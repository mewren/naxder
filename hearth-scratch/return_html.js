var express = require('express');
var fs = require('fs');

var app = express();

app.get('/*', function(req, res){
	
    console.log("request for *")
	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log( req.originalUrl)
	
	// Read the contents of the file into memory.
	//fs.readFile('index.html', function (err, logData) {
  	
	res.sendFile(__dirname + req.originalUrl);

	// If an error occurred, throwing it will
	  // display the exception and end our app.
	  //if (err) throw err;

	  //var text = logData.toString();
	  
	  //res.send(text);
	//});
	
});

app.listen(1338);
console.log('Express Server running at http://127.0.0.1:1338/');