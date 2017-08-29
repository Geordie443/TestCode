var http = require('http');

http.createServer(function (request,response){
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.end('This Should appear on browser\n');
}).listen(8080);

console.log("Java Script Test");
