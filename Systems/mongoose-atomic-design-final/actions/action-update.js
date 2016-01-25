'use strict';

const callback = require('./action-response-200-json');
const getQuery = require('./action-get-query-http');

module.exports = (Model) => {
  return (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const mod = require('querystring').parse(queryData);
      const query = getQuery(req.url);
      Model.update(query, mod, (err, data) => callback(err, data, res));
    });
  };
};