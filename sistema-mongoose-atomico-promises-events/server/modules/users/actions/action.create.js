'use strict';

let user = require('../user_model');

const Action = {
		create: function(req, res) {

		let promise = user.create(req.body);
		promise.then(succesHandler , errorHandler)

		function succesHandler (user){
			res.status(201).json(user);
		}

		function errorHandler (err) {
			res.status(400).json(err);
		}
  }
}
module.exports = Action;
