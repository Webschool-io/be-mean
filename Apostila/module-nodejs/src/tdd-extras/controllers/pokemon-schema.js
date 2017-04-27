'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/teste');

const pokemonSchema = new Schema({
  name        : String,
  description : String,
  type        : String,
  attack      : Number,
  defense     : Number,
  height      : Number
});

module.exports = mongoose.model('Pokemon',pokemonSchema);
