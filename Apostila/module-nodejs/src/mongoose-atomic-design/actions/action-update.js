'use strict';

const getQuery = require('./action-get-query-http');
const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
  return (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const query = getQuery(req);
      const mod = querystring.parse(queryData);

      Organism.update(query, mod, (err, data) => callback(err, data, res));
    });
  };
};