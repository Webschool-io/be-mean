'use strict';
const http = require('http');
const Model = require('./model');

const User = {
  create: () => {
    const obj = {
      name: 'Jean Suissa'
    , password: '1234567'
    , email: 'suissera@webschool.io'
    };
    Model.create(obj);
  }
, retrieve: () => {
    const query = { name: 'Itacir Pompeu' };
    Model.retrieve(query);
    Model.get(query);
  }
, update: () => {
    const query = { name: /jean suissa/i };
    const mod = {name: 'Itacir Pompeu'};
    Model.update(query, mod);
  }
, delete: () => {
    const query = { name: /Itacir Pompeu/i };
    Model.delete(query);
  }
};

http.createServer(function(req, res){
  let msg = '';
  switch(req.url){
    case '/api/user/create':
      msg = 'USUARIO CADASTRADO';
      User.create();
      break;
    default:
      msg = 'ROTA NAO ENCONTRADA';
      break;
  }
  res.end(msg);
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});


