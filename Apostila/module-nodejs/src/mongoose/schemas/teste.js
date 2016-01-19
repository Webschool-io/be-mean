const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequisitosSchema = new Schema({
  name: String
});
const Requisitos = mongoose.model('Requisitos', RequisitosSchema);

Requisitos.schema.path('name').validate(function (value) {
  return /js|html|css|angular|node|mongodb/i.test(value);
}, 'Requisito({VALUE}) inválido!');

const toy = new Requisitos({ name: 'php'});
console.log(toy.validateSync());

// const userSchema = new Schema({
//   phone: {
//     type: String,
//     validate: {
//       validator: function(v) {
//         return /d{3}-d{3}-d{4}/.test(v);
//       },
//       message: '{VALUE} não é um número de telefone válido!'
//     }
//   }
// });

// const User = mongoose.model('user', userSchema);

// const u = new User();

// u.phone = '555.0123';
// // Prints "ValidationError: 555.0123 is not a valid phone number!"
// console.log(u.validateSync().toString());

// u.phone = '201-555-0123';
// // Prints undefined - validation succeeded!
// console.log(u.validateSync());