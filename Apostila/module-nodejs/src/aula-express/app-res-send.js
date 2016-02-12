'use strict';

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send(new Buffer('bufferinggggg'));
  // res.send({ algum: 'json' });
  // res.send('<h1>algum html</h1>');
  // res.send(404, 'Não achei!');
  // res.send(500, { error: 'FFFFFUUUUUUU' });
  // res.send(200);
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});