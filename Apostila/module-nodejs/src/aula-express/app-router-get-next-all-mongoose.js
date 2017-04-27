'use strict';

require('./db/config');

const express = require('express');
const app = express();
const PokemonsAPI = require('./modules/pokemons/routes');

// Passa o módulo para a URL /api/pokemons
app.use('/api/pokemons', PokemonsAPI);

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});