'use strict';

let user = require('../user_model');

const Action = {
  retrieve: function(req, res) {
	
		let promise = user.find({}).exec();
		promise.then(succesHandler , errorHandler)

		function succesHandler (users){
			res.status(200).json(users);
		}

		function errorHandler (err) {
			res.status(400).json(err);
		}
  }
}
module.exports = Action;
