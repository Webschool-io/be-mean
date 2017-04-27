const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number,
  created_at: { type: Date, default: Date.now }
}

const pokemonSchema = new Schema(_schema);

const data = {name: 'Suissamon'};

var Model = mongoose.model('pokemons', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})

module.exports = pokemonSchema;