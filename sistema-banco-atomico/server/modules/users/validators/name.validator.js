const field = 'name';
const Validate = {
  validator: function (data) {
    // test if is an email
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return !re.test(data);
  },
  message: '{VALUE} não é um '+ field +' aceitável, não pode ser um email'
};


module.exports = Validate