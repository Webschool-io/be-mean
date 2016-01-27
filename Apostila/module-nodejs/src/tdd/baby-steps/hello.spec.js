'use strict';

const assert = require('assert');
const log =  require('./log');

assert.equal('Hello World', log('Hello World'));
assert.equal('final do hello world', log('final do hello world'));
