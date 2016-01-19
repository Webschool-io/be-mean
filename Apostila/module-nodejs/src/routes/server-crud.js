'use strict';

const date = (new Date()).toJSON()
  , http = require('http')
  , SUCCESS = {
      version: '1.0'
    , name: 'Be MEAN'
    , returned_at: date
    }
  , ERROR = {
      message: "DEU MERDA FI!!!!"
    };

http.createServer(function(req, res){
  let msg = '';
  switch(req.url){
    case '/api/pokemons':
      statements_1
      break;
    default:
      req.write
      break;
  }
  res.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});