'use strict';

const http = require('http');
const url = require('url');
const Controller = require('./controller-teste');

http.createServer((req, res) => {
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/api/users':
      switch (req.method.toLowerCase()) {
        case 'get':
          Controller.retrieve(req, res);
          break;
        case 'post':
          Controller.create(req, res);
          break;
        case 'put':
          Controller.update(req, res);
          break;
        case 'delete':
          Controller.delete(req, res);
          break;
      }
      break;
    case '/api/users/get':
      Controller.get(req, res);
      break;
    default:
      res.end('ROTA NAO ENCONTRADA');
      break;
  }
}).listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});