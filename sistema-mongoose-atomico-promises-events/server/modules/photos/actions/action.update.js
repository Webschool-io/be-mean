'use strict';

let photo = require('../photo_model');

const Action = {
  update: function(req, res) {
		let promise = photo.update({_id : req.params.id},req.body);
		promise.then(succesHandler , errorHandler)

		function succesHandler (photo){
			res.status(202).json(photo);
		}

		function errorHandler (err) {
			res.status(400).json(err);
		}

  }
}
module.exports = Action;
