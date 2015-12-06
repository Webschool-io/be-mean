<<<<<<< HEAD
'use strict';

const VALIDATORS_PATH = './../../validators/';
const ValidateEmail = require(VALIDATORS_PATH + 'email_validate');
const ValidatePassword = require(VALIDATORS_PATH + 'password_validate');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  name: {
    type: String
  , default: ''
  }
, email: {
    type: String
  , default: ''
  , validate: ValidateEmail
  }
, password: {
    type: String
  , default: ''
  , validate: ValidatePassword
  }
, photos: [
    {
      photo_id: {
        type: Schema.ObjectId
      , ref: 'Photos' 
      }
    }
  ]
, created_at: {
    type: Date
  , default: Date.now
  }
};


module.exports = _schema;
=======
const VALIDATORS_PATH = './../../validators/';
const ValidateEmail = require(VALIDATORS_PATH + 'email_validate');
const ValidatePassword = require(VALIDATORS_PATH + 'password_validate');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  name: {
    type: String
  , default: ''
  }
, email: {
    type: String
  , default: ''
  , validate: ValidateEmail
  }
, password: {
    type: String
  , default: ''
  , validate: ValidatePassword
  }
, photos: [
    {
      photo_id: {
        type: Schema.ObjectId
      , ref: 'Photos' 
      }
    }
  ]
, created_at: {
    type: Date
  , default: Date.now
  }
}


module.exports = _schema;
>>>>>>> feb4b8bc3ac09a0c2fb371dbb1aecd8fcec3a5ca
