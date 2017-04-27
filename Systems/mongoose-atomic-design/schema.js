const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
  name: require('./fields/field-name')
}

module.exports = new Schema(Molecule);