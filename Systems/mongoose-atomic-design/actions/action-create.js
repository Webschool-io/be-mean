'use strict';

const callback = require('./action-response-200-json');

module.exports = (Model) => {
  return (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const obj = require('querystring').parse(queryData);
      Model.create(obj, (err, data) => callback(err, data, res));
    });
  };
};