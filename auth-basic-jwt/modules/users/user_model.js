const MODEL_NAME = 'User';
const mongoose = require('mongoose');
const skeleton = require('./user_schema');
const Schema = new mongoose.Schema(skeleton);
const Model = mongoose.model(MODEL_NAME, Schema);

// const ValidateEmail = require('./email_validate');
// const ValidatePassword = require('./password_validate');

// Model.schema.path('email').validate(ValidateEmail.validator, ValidateEmail.message);

var _model = new Model();

_model.email = 'tesssssst';
_model.senha = 'SENHAA';
console.log(_model.validateSync().toString());

module.exports = Model;