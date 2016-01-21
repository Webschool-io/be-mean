const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  phone: { type: String,
    validate: {
      validator: function(v) {
        return /^[1-9]{2}\-[2-9][0-9]{7,8}$/.test(v);
      },
      message: 'Valor {VALUE} não é permitida!'
    } }
});
const User = mongoose.model('user', userSchema);
const u = new User();

u.email = "11-00";
console.log(u.validateSync());