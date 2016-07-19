const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
module.exports = mongoose.model('Pokemon', pokemonSchema);