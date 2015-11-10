const field = 'email';
const Validate = {
  validator: function (data) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(data);
  },
  message: '{VALUE} não é um '+ field +' aceitável'
};


module.exports = Validate