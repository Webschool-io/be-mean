const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
const EmailSchema = new Schema({
  email: {
    type: String
  , trim: true
  , unique: true
  , required: 'Email é obrigatório'
  , validate: [validateEmail, 'Preencha com um email válido']
  }
});
const Email = mongoose.model('Email', EmailSchema);
const mail = new Email({email: null});

console.log(mail.validateSync());