// file: models/User.js - created at 2015-12-07, 03:46
'use strict';

function UserHandler() {
  const mongoose = require('mongoose');
  let Schema = mongoose.Schema;

  const schema = new Schema({
    id       : Schema.Types.ObjectId,
    name     : { type : String , required : true },
    email    : { type : String , required : true, uniq :true},
    password : { type : String , required : true}
  });

  return mongoose.model('User', schema);
}

module.exports = UserHandler();
