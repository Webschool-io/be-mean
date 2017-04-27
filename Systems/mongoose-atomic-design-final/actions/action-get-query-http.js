'use strict';

module.exports = (_url) => {
  return require('querystring').parse(require('url').parse(_url).query);
};