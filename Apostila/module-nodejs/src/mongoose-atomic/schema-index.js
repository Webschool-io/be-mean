const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/teste');

const userSchema = new Schema({
  name: String
, email: { type: String, unique: true }
, created_at: { type: String, default: Date.now, index: true }
});

userSchema.index({ name: 1, email: -1 });

const User = mongoose.model('Usuario', userSchema);
const _user = {
  name: 'Segundo Usuario'
, email: 'suissera@webschool.io'
}

User.create(_user, (err, data) => {
  if (err) return console.log('Error: ', err);
  return console.log('Inseriu:', data)
});
