"use strict";
module.exports = function(app){
	var userController = app.controllers.user;
	var loginController = app.controllers.login;
	app.route("/users")
 	.post(userController.saveUser)
 	.get(userController.findAllUsers);

  app.post("/login", loginController.login); 

	app.route("/users/:id")
	.get(userController.findOneUser)
	.delete(userController.removeUser);

}
