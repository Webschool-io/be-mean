const ValidateEmail = require('./email_validate');
const ValidatePassword = require('./password_validate');
const mongoose = require('mongoose');

const Schema = {
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
        type: mongoose.Schema.ObjectId
      , ref: 'Photos' }
    }
  ]
, created_at: {
    type: Date
  , default: Date.now
  }
}


module.exports = Schema;
