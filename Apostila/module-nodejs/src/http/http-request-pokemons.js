'use strict';

const http = require('http');

const options = {
  host: 'pokeapi.co'
, path: '/api/v1/pokemon/1/'
};

const req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    data += chunk;
  });
  res.on('end', function() {
    console.log('Dados finalizados: ', data)
  })
});

req.on('error', function(e) {
  console.log('ERROOOO: ' + e.message);
});
req.end();