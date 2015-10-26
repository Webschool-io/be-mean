'use strict';

let photo = require('../photo_model');

const Action = {
  retrieve: function(req, res) {
	
		let promise = photo.find({}).exec();
		promise.then(succesHandler , errorHandler)

		function succesHandler (photos){
			res.status(200).json(photos);
		}

		function errorHandler (err) {
			res.status(400).json(err);
		}
  }
}
module.exports = Action;
