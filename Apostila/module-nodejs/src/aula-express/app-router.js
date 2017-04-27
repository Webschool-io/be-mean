'use strict';

const express = require('express');
const app = express();
const router = express.Router();

// Cria o módulo de roteamento
router.use((req, res, next) => {
  res.send('Hello World');
});

// Passa o módulo para a URL /hello
app.use('/hello', router);

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});