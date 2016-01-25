const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongoose-user-test');

const name = require('./fields/field-name');
const _schema = {
  name
}
const _userData = {
  name: 'Jean Suissa'
};
const UserSchema = new Schema(_schema);

UserSchema
.virtual('name.initials')
.get(function () {
  const name_array = this.name.split(' '); console.log('name_array', name_array)
  const first = name_array[0];
  const last = name_array[name_array.length-1];

  return 'Susu';
});
const User = mongoose.model('User', UserSchema);

// User.create(_userData, (err, data) => {
//   if (err) return console.log('Erro:', err);
//   return console.log('Inserido:', data)
// });
// const u = new User(_userData);
// console.log(u.validateSync());
User.findOne({name: /jean suissa/i}, (err, data) => {
  if (err) return console.log('Erro:', err);
  return console.log('Nome:', data.name.initials)
})