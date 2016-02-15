'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'modules'));
app.set('view engine', 'jade');

app.get('/users', function (req, res) {
  res.render('users/views/index');
});

app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});
