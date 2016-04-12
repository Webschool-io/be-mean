const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.set('Content-Type', 'text/plain').send('Hello World!');
  console.log('Content-Type', res.get('Content-Type'));

});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});