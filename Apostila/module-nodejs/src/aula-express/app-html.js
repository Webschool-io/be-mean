'use strict';

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});
