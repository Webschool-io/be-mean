'use strict';

// const getQuery = require('./action-get-query-http');
const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
  return (req, res) => {
    const query = {_id: req.params.id};
    Organism.findOne(query, (err, data) => {
      callback(err, data, res);
    });
  };
}