const mongoose = require('mongoose');
const MODULES_PATH = './../modules/';
const MODEL_PATH = 'users/';
const MODEL = 'user_model';
const Model = require(MODULES_PATH + MODEL_PATH + MODEL);

const Returns = [
  {'save': Object}
, {'insert': Object}
, {'create': Object}
, {'update': Object}
, {'remove': Object}
];

function testReturn(action, data) {
  console.log('action', action, data)
};