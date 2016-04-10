"use strict";
let express = require("express")
  , methodOverride = require("method-override")
  , bodyParser = require("body-parser")
  , load = require("express-load")
  , morgan = require("morgan")
  , helmet = require("helmet")
;

module.exports = function(){
  let app = express();
  //using the express middlewares
  app.use(express.static("./public"));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(function(req, res, next){
    res.setHeader("Acess-Control-Allow-Origin", "*");
    res.setHeader("Acess-Control-Allow-Methods", "GET", "POST")
    res.setHeader("Acess-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
    next();
  });
  app.use(helmet());
  app.use(helmet.xframe());
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff()); // to block the link of another files that don't be .css or .js on the content-type header
  // settings
  app.set("port", 3000);

  // to responde with a false information
  app.use(helmet.hidePoweredBy({ setTo: "PHP 5.5.14"}));

  load("models",{cwd:"app"})
  .then("services")
  .then("controllers")
  .then("routes")
  .into(app);

  return app;
};
