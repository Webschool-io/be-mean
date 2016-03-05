'use strict';

const mongoose = require('mongoose');

const Molecule = {
  name: require('./../atoms/atom-name')
}
module.exports = new mongoose.Schema(Molecule);