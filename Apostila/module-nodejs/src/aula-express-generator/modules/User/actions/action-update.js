'use strict';

const getQuery = require('./action-get-query-http');
const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
  return (req, res) => {
    const query = {_id: req.params.id};
    const mod = req.body;
    Organism.update(query, mod, (err, data) => callback(err, data, res));
  };
};