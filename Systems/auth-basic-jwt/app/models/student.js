"use strict";
let mongoose = require("mongoose");
module.exports = function(){
  let Schema = mongoose.Schema;
  let studentSchema = new Schema({
    name: {
       type: String,
       required: true
     },
     surname : {
       type: String,
       required: true
     },
     address : {
       street: String,
       district: String,
       city: String,
       state: String,
       telephone: String,
       email: String
     },
     user:{
       type: mongoose.Schema.ObjectId,
       ref: "User"
     }
  });

  return mongoose.model("Student", studentSchema);

};
