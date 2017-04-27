"use strict";

let jwt = require("jwt-simple");
let moment = require("moment");
let secret = "I'm a rockstar, baby! and you will not discover this.";

module.exports = function(app){
  let User = app.models.users;
  let loginController = {};
  loginController.login = function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    User.findOne({username: username}, function(err, user){
      // null or undefined returns false
      // so I can do this :)
      if(!user){
        return res.status(404).json(err);
      }
      else{
        if(err){
          return res.json(401).json(err);
        }
        user.verifyPassword(password, function(isMatch){
          if(!isMatch){
            console.log("Attempt failed to login with "+ user.username);
            return res.status(401).json();
          }
          let expires = moment().add(7, "days").valueOf();
          let token = jwt.encode({
            iss: user.id,
            name: user.name,
            exp: expires
          }, secret);

          return res.json({
            token: token,
            expires: expires,
            user: user.toJSON()
          });
        });
      }
    });
  };

  return loginController;
}
