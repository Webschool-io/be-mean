'use strict';

const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
  return (req, res) => {
    Organism.create(req.body, (err, data) => {
      callback(err, data, res);
    });
  }
};