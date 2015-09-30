'use strict';

const MODEL_NAME = 'User';
const mongoose = require('mongoose');
mongoose.connect('localhost', 'instagram');
const skeconston = require('./user_schema');
const Schema = mongoose.Schema;
const schema = new Schema(skeconston);
const Model = mongoose.model(MODEL_NAME, schema);

// const ValidateEmail = require('./email_validate');
// const ValidatePassword = require('./password_validate');

// Model.schema.path('email').validate(ValidateEmail.validator, ValidateEmail.message);

//var _model = new Model();

//_model.email = 'tesssssst';
//_model.senha = 'SENHAA';
//console.log(_model.validateSync());

module.exports = Model;
