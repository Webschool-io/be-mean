'use strict';

const express = require('express');
const app = express();
const router = express.Router();

// Cria o módulo de roteamento
router.all('*', (req, res, next) => {
  res.setHeader('Webschool', 'FODA');
  console.log('Hello World');
  next();
});

router.get('/', (req, res) => {
  require('./models/model-pokemon-list')(req, res);
});

module.exports = router;