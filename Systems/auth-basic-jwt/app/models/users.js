"use strict";
let mongoose = require("mongoose");
let uniqueValidator = require("mongoose-unique-validator");
let bcrypt = require("bcrypt-nodejs");

module.exports = function(){
  let Schema = mongoose.Schema;
  let userSchema = new Schema({
    username: {
      type: String,
      required: true,
      lowercase: true,
      index:{
        unique: true
      }
    },
    name: {
      type: String,
      trim: true,
      required: true
    },
    password:{
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  });

  userSchema.plugin(uniqueValidator, {message: "Error, expected {PATH} to be unique"});

  userSchema.pre("save", function(next){
    let user = this;
    if(!user.isModified("password")) return next();
    bcrypt.genSalt(5, function(err, salt){
      if(err) return next(err);
      bcrypt.hash(user.password, salt, null, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        next();
      });
    });
  });

  userSchema.methods.verifyPassword = function(password, next){
    bcrypt.compare(password, this.password, function(err, isMatch){
      if(err) return next(err);
      next(isMatch);
    });
  };



  return mongoose.model("User", userSchema);

};

