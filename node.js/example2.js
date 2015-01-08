var express = require('express');
var fs = require('fs');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '8889',
  user     : 'naxder',
  password : 'naxder',
  database : 'naxder'
});

var app = express();


app.get('/', function(req, res){
	
  console.log("request for /")
	
  res.send('hello world');
});

//next need to get this working more than once at a time - problem with closing?
app.get('/test', function(req, res){
	
	console.log("request for /test")
	
	var output = "hi";
	
	connection.connect();

	connection.query('SELECT * FROM Games', function(err, rows, fields) {
	  if (err) {
		  console.log(err);
		  throw err;
	  }
	  output = rows.length;
	  console.log('The solution is: '+ output);
	  
	  res.status(200);
	  res.send('The solution is: '+ output);
	});

	connection.end();

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

app.get('/poll', function(req, res){
	
  console.log("request for /poll ")
	
  res.send("helloWorld hello%20world\nxanderMama Xander%20Mama");
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
