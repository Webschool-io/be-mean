const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/teste');

const PersonSchema = new Schema({
  name: {
    first: String
  , last: String
  }
});

PersonSchema
.virtual('name.initials')
.get(function () {
  return this.name.first[0] + this.name.last[0];
});

const Person = mongoose.model('Person', PersonSchema);

Person.findById('569e513f7672012c28da89f1', (err, data) => {
  if (err) return console.log('Erro:', err);
  return console.log('Iniciais: ', data.name.initials);
});