const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  pokemons:  [{type: Schema.Types.ObjectId, ref: 'testepokemons'}]
}
// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {
  pokemons: ['5691d60743056d6e1566274e']

};

var Model = mongoose.model('mypokemons', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})
