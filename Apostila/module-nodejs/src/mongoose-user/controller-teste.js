const Model = require('./model-teste');
const Controller = {
  create: Model.create
, find: Model.find
, findOne: Model.findOne
, update: Model.update
, remove: Model.remove
};

module.exports = Controller;