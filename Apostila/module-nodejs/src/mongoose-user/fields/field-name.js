const mongoose = require('mongoose');

const _get = (v) => v.toUpperCase();
const _set = (v) => v.toLowerCase();
const _validate = (v) => v.length > 3;

const Field = {
    type: String
  , get: _get
  , set: _set
  , validate: [_validate, 'Nome precisa ser maior que 3 caracteres']
  , required: true
  , index: true
}

module.exports = Field;