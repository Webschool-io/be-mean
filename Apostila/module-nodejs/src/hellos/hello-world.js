var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Be MEAN');
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});