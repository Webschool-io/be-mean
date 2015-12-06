'use strict';

const http = require('http');


const url = "http://webschool.io/";

const options = {
  host: 'www.readability.com'
, path: '/api/shortener/v1/urls/'
, method: 'POST'
};

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.write(JSON.stringify({url}));
req.end();