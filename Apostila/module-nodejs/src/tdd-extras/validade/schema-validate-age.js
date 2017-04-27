'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb:localhost/teste');

const greaterThanEighteen = age => age >= 18;

const userSchema = new Schema({
  age: {
    type: Number,
    validate: {
      validator: greaterThanEighteen,
      message: 'Sua idade({VALUE}) não é permitida!'
    }
  }
});

module.exports = mongoose.model('user', userSchema);
