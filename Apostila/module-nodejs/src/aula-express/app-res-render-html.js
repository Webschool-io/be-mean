'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.get('/users', function (req, res) {
  res.sendFile(path.join(__dirname, 'modules/users/views/list.html'));
});

app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});
