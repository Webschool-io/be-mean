const Model = require('./model');

const CRUD = {
  create: Model.create
, find: Model.find
, findOne: Model.findOne
, update: Model.update
, remove: Model.remove
};

module.exports = CRUD;