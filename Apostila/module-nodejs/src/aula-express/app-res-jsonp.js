'use strict';

const express = require('express');
const app = express();
const arr = [
  {name : 'Pompeu'},
  {name : 'Jean'}
];

app.get('/', function (req, res) {
  res.status(202).jsonp(arr);
});

app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});
