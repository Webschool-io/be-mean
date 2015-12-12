'use strict';

const https = require('https');

const options = {
  hostname: 'http.cat'
, method: 'GET'
, path: '/405'
};

const req = https.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let chunk = '';

  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    chunk += chunk;
    console.log('BODY: ' + chunk);
  });
  res.on('end', function() {
    console.log('No more data in response.', chunk)
  })
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
req.end("Ta ai mermao!");