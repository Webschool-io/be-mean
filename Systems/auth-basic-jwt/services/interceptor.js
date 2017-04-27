"use strict";
let jwt = require("jwt-simple")
, secret = "I'm a rockstar, baby! and you don't will discover this";

module.exports = function(app){
  let controller = {};
  let user = app.models.users;

  controller.ensureAuthorized = function (req, res, next){
    let token = req.headers["authorization"] || req.body;
    if(token){
      try {
        let decoded = jwt.decode(token, secret);
        console.log("decoding " + decoded);

        if(decoded.exp <= Date.now()){
          res.status(401).json({statusText: "Access expired, do the login again!"});
        }

        user.findOne({"_id": decoded.iss}, function(err, user){
          if(err){
            console.log("user not found!");
            res.status(401).json({statusText: "User not found with this token!"});
          }
          req.user = user;
          console.log(" I found this user "+ req.user);
          return next();
        });

      }
      catch(err){
        return res.status(401).json({statusText: "Invalid token!"});
      }
    }
    else{
      res.status(401).json({statusText: " I'm not get a token.."});
    }
  };

  return controller;
}
