'use strict';

let user = require('../user_model');

const Action = {
  update: function(req, res) {
		let promise = user.update({_id : req.params.id},req.body);
		promise.then(succesHandler , errorHandler)

		function succesHandler (user){
			res.status(202).json(user);
		}

		function errorHandler (err) {
			res.status(400).json(err);
		}

  }
}
module.exports = Action;
