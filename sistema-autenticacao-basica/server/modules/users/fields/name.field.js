'use strict';

const Config = require('./config.fields');
let FIELD_NAME = 'name';

let Field = {};
Field[FIELD_NAME] = require( Config.TYPES_PATH + 'string.type' );
Field[FIELD_NAME].validate = require( Config.VALIDATORS_PATH + FIELD_NAME + '.validator');

module.exports = Field;