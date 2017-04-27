'use strict';

const describes = [
  {
    type: true
  , message: 'é String'
  , values: ['Suissa', '1', '', ' ', 'true', 'vai', 'suissa']
  }
, {
    type: false
  , message: 'não é String'
  , values: [1, null, undefined, true, {}, ()=>{}]
  }
];

require('./testModule')('isString', describes);