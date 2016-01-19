const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  pokemons: [String]
}
const pokemonSchema = new Schema(_schema);
const data = {
  pokemons: ['Poke01', 'Poke02']
};
const Model = mongoose.model('mypokemons', pokemonSchema);
const poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})

module.exports = pokemonSchema;