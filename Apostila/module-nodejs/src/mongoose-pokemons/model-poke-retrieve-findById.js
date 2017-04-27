const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const id = '56422705613f89ac53a7b5d4';

PokemonModel.findById(id, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
})

module.exports = PokemonModel;