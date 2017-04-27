O tipo *Number* aceita tanto números negativos como positivos e tanto interos como decimais e também aceita **frações!**

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  name:  Number
}
// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {name: 1/2}

var Model = mongoose.model('testepokemon', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})

```

Executando esse *script* você verá a seguinte mensagem no *terminal*:

```
Inseriu:  { _id: 5691c74c1349c94c148cd08a, name: 0.5, __v: 0 }
```

Claramente se a divisão funciona a multiplicação também, não preciso nem mostrar né?

![](https://media.giphy.com/media/A5oQ2YR8oyTuM/giphy.gif)