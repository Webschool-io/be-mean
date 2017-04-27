const express = require('express');
const app = express();

app.get('/users', function (req, res) {
  res.links({
    next: 'http://api.example.com/users?page=2',
    last: 'http://api.example.com/users?page=5'
  });
  res.send('Listagem dos usuários da página 1');
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});

