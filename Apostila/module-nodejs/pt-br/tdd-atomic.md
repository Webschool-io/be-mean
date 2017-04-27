# TDD - Atomic Design

## Átomos

Para atomizar nossa arquitetura de testes precisamos antes perceber quais são os testes que sempre fazemos, vamos pegar um cenário simples: testar a função validação dos `fields`.

Vamos utilizar esse exemplo simples de validação de nome com a estrutura atômica do Mongoose:

```js
const _validate = (v) => v.length > 3;

const Field = {
  type: String
, validate: [_validate, 'Nome precisa ser maior que 3 caracteres']
}
```

