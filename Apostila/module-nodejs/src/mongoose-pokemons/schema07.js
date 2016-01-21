const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  pokemons:  [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
}

const pokemonSchema = new Schema(_schema);

const data = {
  pokemons: ['56422345613f89ac53a7b5d2', '564f84e89702f3e96279f749', '564220f0613f89ac53a7b5d0']
};

const Model = mongoose.model('mypokemons', pokemonSchema);
const poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})

module.exports = pokemonSchema;