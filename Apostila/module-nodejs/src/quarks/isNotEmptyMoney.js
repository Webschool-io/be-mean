'use strict';

module.exports = (value) => {

  // validação base
  let validated = require('./isEmpty')(value)
  if (validated) return false;

  // validação se é Number
  validated = require('./isNumber')(value)
  if (validated) {
    if(value > 0) return true;
    return false;
  }

  return false;
};