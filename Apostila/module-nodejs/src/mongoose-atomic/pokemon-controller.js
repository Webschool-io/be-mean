'use strict';

const Schema = require('./schema');
const Model = require('./model')(Schema, 'Pokemon');
const CRUD = {
  create: function(data) {
    console.log("create: ", data);
    const Suissamon = new Model(data);
    Suissamon.save(function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Inseriu:', data);
    });
  },
  retrieve: function(query) {
    Model.find(query, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Buscou:', data);
    });
  },
  update: function(query, mod, options) {
    var options = options || {};
    Model.update(query, mod, options, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Alterou:', data);
    });
  },
  delete: function(query) {
    Model.remove(query, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Deletou:', data);
    });
  },
};

module.exports = CRUD;
