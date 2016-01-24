const Model = require('./model-teste');
const Controller = {
  create: (req, res) => {
    Model.create(req, res);
  }
, retrieve: (req, res) => {
    Model.retrieve(req, res);
  }
, get: (req, res) => {
    Model.get(req, res);
  }
, update: (req, res) => {
    Model.update(req, res);
  }
, delete: (req, res) => {
    Model.delete(req, res);
  }
};

module.exports = Controller;