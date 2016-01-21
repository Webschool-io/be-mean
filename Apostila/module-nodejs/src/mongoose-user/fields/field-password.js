const _validate = (v) => v.length >= 6 && v.length <= 10
const Field = {
  type: String
, validate: [_validate, 'Senha precisa ser maior que 6 e menor que 10 caracteres']
, required: true
}

module.exports = Field;