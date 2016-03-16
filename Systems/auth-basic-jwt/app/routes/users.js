"use strict";
module.exports = function(app){
  let userController = app.controllers.user;
  let loginController = app.controllers.login;
  app.route("/users")
  .post(userController.saveUser)
  .get(userController.findAllUsers);

  app.post("/login", loginController.login);

  app.route("/users/:id")
  .get(userController.findOneUser)
  .delete(userController.removeUser);

}
