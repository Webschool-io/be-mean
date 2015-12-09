// file: models/pokemon.js - created at 2015-12-07, 04:23
'use strict';

const mongoose = require('mongoose');
const util = require('util');

function pokemonHandler() {
  let Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;         

  const schema = new Schema({
    id          : ObjectId,
    name        : {type : String, trin : true},
    type        : {type : String, trin : true},
    attack      : {type : Number},
    defence     : {type : Number},
    height      : {type : Number},
    description : {type : String, trin : true}
  });

  schema.pre('find',function (next) {
    this.start = Date.now();
    util.log("finding ...");
    next();
  });

  schema.post('find', function(result) {
    setTimeout(function(){
      console.log('finding end :P')
    },1000);
  });

  return mongoose.model('Pokemon', schema);
}

module.exports = exports = pokemonHandler();
