'use strict';

const value = 'a';

const validate = require('./isEmpty')(value);

console.log('is empty?', validate);