'use strict';

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.redirect('login');
})
.get('/login', function(req,res) {
  res.send('login route');
});

app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});
