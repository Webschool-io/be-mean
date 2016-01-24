'use strict';
const url = require('url');
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
        console.log('Inserido:', JSON.stringify(data));
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(data));
      });
    });
  }
, retrieve: (req, res) => {
    User.find({}, (err, data) => {
      if (err) return console.log('Erro:', err);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    });
  }
, get: (query) => {
    User.findOne(query, (err, data) => {
      if (err) return console.log('Erro:', err);
      return console.log('Achou:', data)
    });
  }
, update: (req, res) => {
    let queryData = '';

    req.on('data', function(data) {
      queryData += data;
    });

    req.on('end', function() {
      const mod = querystring.parse(queryData);
      const url_parts = url.parse(req.url);
      const query = querystring.parse(url_parts.query);

      User.update(query, mod, (err, data) => {
        if (err) return console.log('Erro:', err);
        console.log('Alterado:', JSON.stringify(data));
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(data));
      });
    });
  }
, delete: (req, res) => {
    const url_parts = url.parse(req.url);
    const query = querystring.parse(url_parts.query);

    User.remove(query, (err, data) => {
      if (err) return console.log('Erro:', err);
      console.log('Deletou:', JSON.stringify(data));
      res.writeHead(200, {'Content-Type': 'application/json'});
      return res.end(JSON.stringify(data));
    });
  }
};

module.exports = CRUD;

