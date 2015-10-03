'use strict';

const Config = require('./config.fields');
let FIELD_NAME = 'created_at';

let Field = {};
Field[FIELD_NAME] = require( Config.TYPES_PATH + 'date.type' );
Field[FIELD_NAME].validate = require( Config.VALIDATORS_PATH + FIELD_NAME + '.validator');

module.exports = Field;
