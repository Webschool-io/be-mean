const express = require('express');
const app = express();

app.get('/html', function (req, res) {
  // res.type('.html');            // => 'text/html'
  res.type('html');                // => 'text/html'
  res.send('<h1>Hello World!</h1>');
});

app.get('/json', function (req, res) {
  // res.type('application/json'); // => 'application/json'
  res.type('json');                // => 'application/json'
  res.send({message: 'Hello World'});
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});

