'use strict';

const url = require('url');
const querystring = require('querystring');
const mongoose = require('mongoose');
const Schema = require('./schema-teste');
const User = mongoose.model('User', Schema);

const callback = (err, data, res) => {
  if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};

const getQuery = (req) => {
  return querystring.parse(url.parse(req.url).query);
};

const create = (req, res) => {
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const obj = querystring.parse(queryData);
    User.create(obj, (err, data) => callback(err, data, res));
  });
};

const find = (req, res) => {
  const query = getQuery(req);

  User.find(query, (err, data) => callback(err, data, res));
};

const findOne = (req, res) => {
  const query = getQuery(req);

  User.findOne(query, (err, data) => callback(err, data, res));
};

const update = (req, res) => {
  let queryData = '';

  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const query = getQuery(req);
    const mod = querystring.parse(queryData);

    User.update(query, mod, (err, data) => callback(err, data, res));
  });
};

const remove = (req, res) => {
  const query = getQuery(req);

  User.remove(query, (err, data) => callback(err, data, res));
};

const CRUD = {
  create
, find
, findOne
, update
, remove
};

module.exports = CRUD;