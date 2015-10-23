'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  user_id: {
    type: Schema.ObjectId
  , ref: 'User'
	}
, legend: {
    type: String
  , default: ''
  }
, path: {type: String, default: '' }
, likes: [
    {
      user_id: { type : Schema.ObjectId , ref: 'User'	}
    }
  ]
, comments: [
    { user_id: { type: Schema.ObjectId , ref: 'User'	}
    , comment: {  type: String , default: '' }
		}
  ]
, created_at: { type: Date, default: Date.now }
}

module.exports = _schema;
