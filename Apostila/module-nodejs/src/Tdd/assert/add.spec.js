'use strict';

const assert = require('assert');
const add = require('./add');

assert.equal(3, add(1,2));
assert.equal(8, add(1,2,5));
