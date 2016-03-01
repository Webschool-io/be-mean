'use strict';

const mongoose = require('mongoose');
const Organism = require('./organism-user');
const create = require('./../actions/action-create')(Organism);
const find = require('./../actions/action-find')(Organism);
const findOne = require('./../actions/action-findOne')(Organism);
const update = require('./../actions/action-update')(Organism);
const remove = require('./../actions/action-remove')(Organism);

module.exports = {
  create
, find
, findOne
, update
, remove
};
