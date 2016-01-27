'use strict';

const getQuery = require('./action-get-query-http');
const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
  return (req, res) => {
    const query = getQuery(req);

    User.find(query, (err, data) => callback(err, data, res));
  };
}