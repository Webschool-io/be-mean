const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

module.exports = (req, res) => {
  PokemonModel.find({}, function (err, data) {
    if (err) return console.log('ERRO: ', err);
    res.send(data);
  });
};