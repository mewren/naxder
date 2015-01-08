var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"helloWorld"="Hello World"}');
}).listen(12345, '127.0.0.1');
console.log('Server running at http://127.0.0.1:12345/');
