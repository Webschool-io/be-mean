'use strict';

const MODEL_NAME	= "Photos"
		,	mongoose		= require('mongoose')
		,	skeleton		= require('./photo_schema')
		,	Schema			= mongoose.Schema
		,	schema			= new Schema(skeleton)
		,	Model 			= mongoose.model(MODEL_NAME,schema)
		;

module.exports = Model;
