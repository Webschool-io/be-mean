'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/teste');

const PersonSchema = new Schema({
  name: {
    first: String,
    last: String
  }
});

PersonSchema
.virtual('name.full')
.get(function () { 
  return  this.name.first + ' ' + this.name.last; 
});

module.exports = mongoose.model('Person', PersonSchema);
