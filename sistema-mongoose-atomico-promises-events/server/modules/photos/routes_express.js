'use strict';

const express = require('express')
		,	router = express.Router()
		,	Routes = require('./routes')
		;

let addRoute =  route => {
	router[route.method](route.url, route.callback)
	;
};

Routes.forEach(addRoute);

module.exports = router;
