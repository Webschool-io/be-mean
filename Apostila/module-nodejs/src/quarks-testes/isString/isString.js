'use strict';

module.exports = (value) => {
  if (typeof value === 'string' || value instanceof String) return true;
  return false;
}