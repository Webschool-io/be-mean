'use strict';

module.exports = (value) => {
  const isNull = (value === null);
  const isUndefined = (value === undefined);
  const isEmpty = (value === '');

  if (isNull || isUndefined  || isEmpty) return true;

  return false;
}