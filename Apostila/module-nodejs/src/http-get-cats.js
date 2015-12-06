'use strict';

const http = require('http');

http.get({
  hostname: 'http.cat',
  path: '/405.jpg',
  agent: false
}, function (response) {
   let body = '';

    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));

    response.on('data', function(data) {
      body += data;
    });
    response.on('end', function() {
      console.log("Resposta: ", body);
    });
});