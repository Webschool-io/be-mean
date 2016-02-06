'use strict';

const Model = require('./pokemon-schema');

const CRUD = {
  create: function(data,callback) {
    const Suissamon = new Model(data);
    Suissamon.save(callback);
  },
  retrieve: function(query,callback) {
    Model.find(query,callback);
  },
  update: function(query, mod, options) {
    options = options || {};
    Model.update(query, mod, options, function (err, data) {
      if (err) {
        return console.log('ERRO: ', err);
      }
      return console.log('Alterou:', data);
    });
  },
  delete: function(query) {
    Model.remove(query, function (err, data) {
      if (err)  { 
        return console.log('ERRO: ', err);
      }
      return console.log('Deletou:', data);
    });
  },
};

module.exports = CRUD;
