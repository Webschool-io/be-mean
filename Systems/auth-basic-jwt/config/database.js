'use strict';
let mongoose = require("mongoose");

module.exports = function(uri){
  let db = mongoose.connect(uri);

  db.set("debug", true);

  db.connection.on("connected", function(){
    console.log("** \t MONGODB =>  it's running on localhost  "+uri+"\t **");
  });

  db.connection.on("error", function(err){
    console.log("** \t MONGODB =>  an error occurred  "+uri+"\t **");
    console.log("** err => ",err);
  });

  db.connection.on("disconnected", function(){
    console.log("** \t MONGODB => connection was closed on localhost "+uri+" \t **");

  });

  process.on("SIGINT", function(){
    db.connection.close(function(){
      console.log("** \t MONGODB => connection was closed the application "+uri+" \t **");
      process.exit(0);
    });
  });

};
