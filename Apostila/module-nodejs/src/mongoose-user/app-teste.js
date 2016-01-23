'use strict';

const http = require('http');
const Controller = require('./controller-teste');

http.createServer(function(req, res){
  let msg = '';
  switch(req.url){
    case '/api/user/create':
      Controller.create(req, res);
      break;
    // case '/api/user':
    //   msg = 'USUARIO CADASTRADO';
    //   Controller.create(req, res);
    //   break;
    default:
      msg = 'ROTA NAO ENCONTRADA';
      break;
  }
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});