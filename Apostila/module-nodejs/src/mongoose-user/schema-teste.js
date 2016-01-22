const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongoose-user-test');

const field_name = require('./fields/field-name');
const _schema = {
  name: require('./fields/field-name')
, created_at: require('./fields/field-created_at')
}
const userSchema = new Schema(_schema);
module.exports = userSchema;