'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function toLower (v) {
  return v.toLowerCase();
}

const UserSchema = new Schema({
  email: { type: String, set: toLower } 
});

module.exports = mongoose.model("Users",UserSchema);
