'use strict';

const mongoose = require('mongoose');
const Molecule = require('./../molecules/molecule-user');
const Organism = mongoose.model('User', Molecule);
const create = require('./../actions/action-create')(Organism);
const find = require('./../actions/action-find')(Organism);
const findOne = require('./../actions/action-findOne')(Organism);
const update = require('./../actions/action-update')(Organism);
const remove = require('./../actions/action-remove')(Organism);
// console.log('find', find)
const CRUD = {
  create
, find
, findOne
, update
, remove
, Model: Organism
, test: () => { console.log('rodei'); }
};
module.exports = CRUD;