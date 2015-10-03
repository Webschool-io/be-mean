'use strict';

const Config = require('./config.fields');
const FIELD_NAME = 'email';

let Field = {};
Field[FIELD_NAME] = require( Config.FIELDS_TYPES_PATH + 'string.type' );
Field[FIELD_NAME].validate = require( Config.FIELDS_VALIDATORS_PATH + FIELD_NAME + '.validator');

module.exports = Field;