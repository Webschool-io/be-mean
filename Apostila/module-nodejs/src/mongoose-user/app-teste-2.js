'use strict';

const http = require('http');
const Controller = require('./controller');

http.createServer((req, res) => {
  switch(req.url){
    case '/api/users/create':
      Controller.create(req, res);
      break;
    case '/api/users/retrieve':
      Controller.retrieve(req, res);
      break;
    case '/api/users/update':
      Controller.update(req, res);
      break;
    case '/api/users/delete':
      Controller.delete(req, res);
      break;
    default:
      // res.end('ROTA NAO ENCONTRADA');
      break;
  }
}).listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});


