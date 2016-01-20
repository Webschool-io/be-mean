const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongoose-user-test');

const name = require('./fields/field-name');
const _schema = {
  name
}
// const userSchema = new Schema(_schema);
console.log('_schema', _schema)
const _userData = {
  name: 'Jea S'
// , password: '1234567'
// , email: 'suissera@webschool.io'
};

const User = mongoose.model('User', new Schema(_schema));

// User.create(_userData, (err, data) => {
//   if (err) return console.log('Erro:', err);
//   return console.log('Inserido:', data)
// });
const u = new User(_userData);
console.log(u.validateSync());
// User.findOne({}, (err, data) => {
//   if (err) return console.log('Erro:', err);
//   return console.log('Nome:', data.name)
// })