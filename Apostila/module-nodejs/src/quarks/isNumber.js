'use strict';

module.exports = (value) => {
  if(!isNaN(value) && isFinite(value)) return true;

  return false;
}