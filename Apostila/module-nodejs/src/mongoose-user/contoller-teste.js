const Model = require('./model-teste');
const Controller = {
  create: (req, res) => {
    Model.create(req, res);
  }
, retrieve: (req, res) => {
    Model.retrieve(req, res);
  }
, update: () => {
    const query = { name: /jean suissa/i };
    const mod = {name: 'Itacir Pompeu'};
    Model.update(req, res);
  }
, delete: () => {
    const query = { name: /Itacir Pompeu/i };
    Model.delete(req, res);
  }
};

module.exports = Controller;