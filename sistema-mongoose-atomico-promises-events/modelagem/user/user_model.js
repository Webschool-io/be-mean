'use strict';

const MODEL_NAME = 'User'
		, mongoose = require('mongoose')
		, skeconston = require('./user_schema')
		, Schema = mongoose.Schema
		, schema = new Schema(skeconston)
		, Model = mongoose.model(MODEL_NAME, schema)
		;

module.exports = Model;
