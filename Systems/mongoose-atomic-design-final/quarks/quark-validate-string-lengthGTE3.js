module.exports = {
  validator: function(v) {
    return v.length >= 3;
  }
, message: 'Nome {VALUE} precisa ser maior que 3 caracteres'
};