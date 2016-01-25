'use strict';

require('./db/config');
const mongoose = require('mongoose');
const Schema = require('./schema');
const Model = mongoose.model('User', Schema);

// Precisa passar o Model para as ações
const create = require('./actions/action-create')(Model);
const find = require('./actions/action-find')(Model);
const findOne = require('./actions/action-findOne')(Model);
const update = require('./actions/action-update')(Model);
const remove = require('./actions/action-remove')(Model);

const CRUD = {
  create
, find
, findOne
, update
, remove
};

module.exports = CRUD;

