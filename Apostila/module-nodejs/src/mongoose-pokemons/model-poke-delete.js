const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/be-mean-instagram';

mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {
      name:  String,
      description: String,
      type:   String,
      attack:   Number,
      defense:   Number,
      height:   Number
    };
const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const query = {name: /Suissamon/i};

Pokemon.remove(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Deletou:', data);
});