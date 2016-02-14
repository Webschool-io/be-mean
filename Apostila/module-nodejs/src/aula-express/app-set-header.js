'use strict';

const express = require('express');
const app = express();

app.get('/',function (req, res) {
  res.set({ 'Auth' :  '123sf'});
  res.send({ hello :  'World!'});
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});
