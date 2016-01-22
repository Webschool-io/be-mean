'use strict';
const querystring = require('querystring');
const mongoose = require('mongoose');
const Schema = require('./schema-teste');
const User = mongoose.model('User', Schema);
const CRUD = {
  create: (req, res) => {
    let queryData = '';
    req.on('data', function(data) {
      queryData += data;
    });

    req.on('end', function() {
      const obj = querystring.parse(queryData);
      User.create(obj, (err, data) => {
        if (err) return console.log('Erro:', err);
        return console.log('Inserido:', data);
      });
    });
  }
, retrieve: (query) => {
    User.find(query, (err, data) => {
      if (err) return console.log('Erro:', err);
      return console.log('Achou:', data)
    });
  }
, get: (query) => {
    User.findOne(query, (err, data) => {
      if (err) return console.log('Erro:', err);
      return console.log('Achou:', data)
    });
  }
, update: (query, mod) => {
    User.update(query, mod, (err, data) => {
      if (err) return console.log('Erro:', err);
      return console.log('Alterei:', data)
    });
  }
, delete: (query) => {
    User.remove(query, (err, data) => {
      if (err) return console.log('Erro:', err);
      return console.log('Deletou:', data)
    });
  }
};

module.exports = CRUD;

