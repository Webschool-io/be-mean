const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: 'Pikachu', attack: {$gt: 90}};
const fields = {name: 1, _id: 0}

PokemonModel.find(query, fields, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
})
module.exports = PokemonModel;