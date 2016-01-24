'use strict';

const mongoose = require('mongoose');
const _validate = (v) => v.length > 3;
const Field = {
    type: String
  , validate: [_validate, 'Nome precisa ser maior que 3 caracteres']
}

module.exports = Field;