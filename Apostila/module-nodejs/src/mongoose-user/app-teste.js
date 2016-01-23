'use strict';

const http = require('http');
const url = require('url');
const Controller = require('./controller-teste');

http.createServer(function(req, res){
  var url_parts = url.parse(req.url);
  let msg = '';
  switch(url_parts.pathname){
    case '/api/user/create':
      Controller.create(req, res);
      break;
    case '/api/user':
      Controller.retrieve(req, res);
      break;
    case '/api/user/update':
      Controller.update(req, res);
      break;
    default:
      msg = 'ROTA NAO ENCONTRADA';
      break;
  }
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});