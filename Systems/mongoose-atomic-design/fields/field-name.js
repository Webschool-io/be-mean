const mongoose = require('mongoose');

// quarks
const quark_get = require('./../quarks/quark-toUpper');
const quark_set = require('./../quarks/quark-toUpper');
const quark_validate = require('./../quarks/quark-validate-string-lengthGTE3');

const Atom = {
  type: String
, get: quark_get
, set: quark_set
, validate: quark_validate
, required: true
, index: true
}

module.exports = Atom;