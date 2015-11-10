'use strict';

let photo = require('../photo_model');

const Action = {
  delete: function(req, res) {
		let promise = photo.remove({_id : req.params.id});
		promise.then(succesHandler , errorHandler)

		function succesHandler (photo){
			res.status(204).json(photo);
		}

		function errorHandler (err) {
			res.status(400).json(err);
		}

  }
}
module.exports = Action;
