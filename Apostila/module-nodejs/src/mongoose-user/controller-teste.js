const Model = require('./model-teste');
const Controller = {
  create: (req, res) => {
    Model.create(req, res);
  }
, retrieve: (req, res) => {
    Model.retrieve(req, res);
  }
, update: (req, res) => {
    Model.update(req, res);
  }
, delete: () => {
    const query = { name: /Itacir Pompeu/i };
    Model.delete(req, res);
  }
};

module.exports = Controller;