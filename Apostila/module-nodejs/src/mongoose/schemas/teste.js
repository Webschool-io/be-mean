const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');


const userSchema = new Schema({
  name: String
, email: { type: String, unique: true }
, date_created: { type: Date, default: Date.now, index: true }
});

userSchema.index({ name: 1, date_created: -1 }); // schema level

const User = mongoose.model('User', userSchema);

User.create({name: 'itacir', email: 'itacir@webschool.io'}, (err, data) => {
  if (err) return console.log('Erro:', err);
  return console.log('Animal: ', data);
});

