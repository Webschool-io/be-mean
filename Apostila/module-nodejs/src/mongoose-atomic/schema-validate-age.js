const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

mongoose.connect('mongodb://localhost/teste');


const userSchema = new Schema({
  age: {
    type: Number,
    validate: {
      validator: function(v) {
        return v >= 18;
      },
      message: 'Sua idade({VALUE}) não é permitida!'
    }
  }
});

const User = mongoose.model('user', userSchema);
const u = new User();

// u.age = 24;
// console.log('Validou: ', u.validateSync());

u.age = 69;
console.log('Apenas msg:', u.validateSync().toString());

// u.age = 2;
// console.log('Todo objeto: ', u.validateSync());


