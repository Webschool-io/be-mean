'use strict';

let photo = require('../photo_model');

const Action = {
		create: function(req, res) {
		console.log('create photo')
		let promise = photo.create(req.body);
		promise.then(succesHandler , errorHandler)

		function succesHandler (photo){
			res.status(201).json(photo);
		}

		function errorHandler (err) {
			res.status(400).json(err);
		}
  }
}
module.exports = Action;
