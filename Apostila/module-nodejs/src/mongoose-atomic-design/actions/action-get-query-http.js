'use strict';

module.exports = (req) => {
  return require('querystring').parse(require('url').parse(req.url).query);
};
