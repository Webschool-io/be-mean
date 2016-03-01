'use strict';

const mongoose = require('mongoose');

module.exports = (Name, Molecule) => {
  return mongoose.model(Name, Molecule);
};