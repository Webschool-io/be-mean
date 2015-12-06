<<<<<<< HEAD
'use strict';

let user = require('../user_model');

const Action = {
  create: function(req, res) {

    let promise = user.create(req.body);
    promise.then(succesHandler , errorHandler);

    function succesHandler (user){
      res.status(201).json(user);
    }

    function errorHandler (err) {
      res.status(400).json(err);
    }
  }
};

module.exports = Action;
=======
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
>>>>>>> feb4b8bc3ac09a0c2fb371dbb1aecd8fcec3a5ca
