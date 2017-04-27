'use strict';

const express = require('express');
const app = express();
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Be MEAN', message: 'Bem vindo ao Be MEAN' });
});

app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});
