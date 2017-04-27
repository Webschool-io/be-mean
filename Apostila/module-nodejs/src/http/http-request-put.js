'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'Suissera'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'PUT'
      , path: '/api/pokemons/566c5963819bb31100ad9aef'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
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
req.write(postData);
req.end();