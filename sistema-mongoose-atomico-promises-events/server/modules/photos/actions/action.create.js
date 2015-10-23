'use strict';

let photo = require('../photo_model');

const Action = {
		create: function(req, res) {
		debug('Action Create');
		let promise = photo.create(req.body);
		promise.then(succesHandler , errorHandler)

		function succesHandler (photo){
			debug('Action Create secces');
			res.status(201).json(photo);
		}

		function errorHandler (err) {
			debug('Action Create error');
			res.status(400).json(err);
		}
  }
}
module.exports = Action;
