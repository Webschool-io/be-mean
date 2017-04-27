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
.virtual('name.full')
.get(function () {
  return this.name.first + ' ' + this.name.last;
});

const Person = mongoose.model('Person', PersonSchema);
// const Suissao = new Person({
//     name: { first: 'Jean', last: 'Suissa' }
// });

Person.findById('569e513f7672012c28da89f1', (err, data) => {
  if (err) return console.log('Erro:', err);
  return console.log('Nome completo: ', data.name.full);
});