const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecule = {
  name: require('./../atoms/atom-name')
}
module.exports = new Schema(Molecule);