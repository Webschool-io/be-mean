'use strict';

const express = require('express');
const app = express();
const arr = [
  {name : 'Pompeu'},
  {name : 'Jean'}
];

app.get('/', function (req, res) {
  //res.send(null);
  //res.send({name : 'Pompeu'});
  //res.send( { arr : [1,2,3] });
  res.send(arr);
});

app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});
