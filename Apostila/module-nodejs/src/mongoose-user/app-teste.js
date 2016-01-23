'use strict';
const http = require('http');
const Model = require('./model-teste');



http.createServer(function(req, res){
  let msg = '';
  switch(req.url){
    case '/api/user/create':
      msg = 'USUARIO CADASTRADO';
      const obj = {
        name: 'Jean Suissa'
      , password: '1234567'
      , email: 'suissera@webschool.io'
      };
      const cb = 
      User.create(req, res);
      break;
    default:
      msg = 'ROTA NAO ENCONTRADA';
      break;
  }
  res.end(msg);
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});


