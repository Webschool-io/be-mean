const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/be-mean-instagram');

const _schema = {
  name:  String
, description: String
, type:   String
, attack:   Number
, defense:   Number
, height:   Number
};
const PokemonSchema = new Schema(_schema);

PokemonSchema.methods.findSimilarType = function (cb) {
  return this.model('Pokemon').find({ type: this.type }, cb);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const poke = new Pokemon({ name: 'Teste', type: 'besta' });

poke.findSimilarType(function (err, data) {
  if (err) return console.log('Erro:', err);
  return data.forEach((pokemon) => console.log('pokemon: ', pokemon));
});

// poke
// .findSimilarType()
// .where('attack').gt(9990)
// .limit(4)
// .exec(function (err, data) {
//   if (err) return console.log('Erro:', err);
//   return data.forEach((pokemon) => console.log('pokemon: ', pokemon));
// });

