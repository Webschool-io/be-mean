'use strict';

let user = require('../user_model');

const Action = {
  delete: function(req, res) {
		let promise = user.remove({_id : req.params.id});
		promise.then(succesHandler , errorHandler)

		function succesHandler (user){
			res.status(204).json(user);
		}

		function errorHandler (err) {
			res.status(400).json(err);
		}

  }
}
module.exports = Action;
