module.exports = {
  type: String
, get: require('./../quarks/quark-toUpper')
, set: require('./../quarks/quark-toLower')
, validate: require('./../quarks/quark-validate-string-lengthGTE3')
, required: true
, index: true
}