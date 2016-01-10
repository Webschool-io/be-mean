# Mongoose

O Mongoose é um dos projetos mais utilizados quando trabalhamos com o MongoDb pois ele nos dá uma funcionalidade que o MongoDb não dá nativamente, você sabe qual?

![](https://media.giphy.com/media/IJ02hHchX5dok/giphy.gif)

## Ele nos proporciona **SCHEMAS**!!

![](https://media.giphy.com/media/2XskdWuNUyqElkKe4bm/giphy.gif)

Pois é isso para projetos médios/grandes **é muito necessário** para padronizar as coisas entre a equipe, caso você seja um programador de backend e utiliza algum banco relacional provavelmente já utilizou algum *ORM (Object-relational Mapper)* da vida, o Mongoose é parecido com um *ODM (Object-document Mapper)* porém não é um pois trabalha exclusivamente com o MongoDB.

Antes de iniciarmos nossa jornada pelos campos verdejantes do Mongoose precisamos conhecer alguns conceitos, não falaremos sobre plugins ainda.

## Schema

Tudo no Mongoose começa com o *Schema*, ele é o esqueleto da nossa coleção, é o objeto onde definimos cada campo da coleção com seu tipo, atributos e validação.

**Percebeu como é importante?**

![](https://media.giphy.com/media/vgUFOWBwBkziE/giphy.gif)

Bom já que você percebeu então vamos ver como criar nosso primeiro *Schema*, obviamente você precisa importar o módulo do `mongoose` antes:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
// Criação do Schema
const pokemonSchema = new Schema({
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number,
});
// apenas para verificar a criação
console.log(pokemonSchema);
```

No exemplo acima criamos o *Schema* para nossa coleção de Pokemons que criamos no [módulo de MongoDB](https://www.youtube.com/playlist?list=PL77JVjKTJT2gXHb9FEokJsPEcoOmyF1pY), mas podemos melhorar ele deixando o JSON de configuração do *Schema* separado da criação.

```js
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
let Schema = mongoose.Schema;
let _schema = {
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number,
}
// Criação do Schema
let pokemonSchema = new Schema(_schema);
// apenas para verificar a criação
console.log(pokemonSchema);
```

**Já ficou bem melhor né? Mas e se quisermos ter algum valor por padrão?**

Para isso usaremos o `default`!

#### default

Vamos adicionar o campo `created_at` no nosso esquema com um valor padrão, mas **você só verá ele em ação quando inserir um objeto novo**.

```js
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
let Schema = mongoose.Schema;
let _schema = {
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number,
  created_at: { type: Date, default: Date.now }
}
// Criação do Schema
let pokemonSchema = new Schema(_schema);
// apenas para verificar a criação
console.log(pokemonSchema);
```

Nesse caso quando um objeto for inserido ele colocará o valor da data atual no campo `created_at`, o MongoDB irá persistir essa data no formato [ISODate](http://whatis.techtarget.com/definition/ISO-date-format).

**Calma que já veremos isso em ação antes precisamos aprender mais algumas coisinhas.**

Você deve ter percebido que o campo `created_at` é um objeto diferente dos outros, **mas por quê?**

Basicamente é por que quando passamos apenas o nome do tipo estamos usando apenas o atributo `type` do objeto de configuração do campo, para conhecermos mais sobre isso precisamos conhecer primeiramente quais os tipos suportados pelo *Schema*.

### Tipos

O Mongoose aceita vários tipos diferentes, que são:

- [String](http://mongoosejs.com/docs/api.html#schema-string-js)
- [Number](http://mongoosejs.com/docs/api.html#schema-number-js)
- [Date](http://mongoosejs.com/docs/api.html#schema-date-js)
- [Buffer](http://mongoosejs.com/docs/api.html#schema-buffer-js)
- Boolean
- Mixed
- [Objectid](http://mongoosejs.com/docs/api.html#schema-objectid-js)
- Array

Vamos falar brevemente sobre cada um, os que não tem link é porque não tem [na documentação oficial](http://mongoosejs.com/docs/schematypes.html).

Se você entrar nos links verá que não tem nenhum tipo de explicação adicional sobre cada tipo, apenas suas funcionalidades, então vamos ver se eu posso ajudar nisso.

#### String

Obviamente é o tipo que aceita Strings, nesse caso ele irá converter o tipo *Number* para uma *String*, porém olhe o que acontece quando você tenta inserir um valor de um objeto:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  name:  String
}
// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {name: {teste: "Suissa"}}

var Model = mongoose.model('testepokemon', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})
```

Quando executar esse código ele irá mostrar o seguinte erro:

```
ERRO:  { [ValidationError: testepokemon validation failed]
  message: 'testepokemon validation failed',
  name: 'ValidationError',
  errors: 
   { name: 
      { [CastError: Cast to String failed for value "[object Object]" at path "name"]
        message: 'Cast to String failed for value "[object Object]" at path "name"',
        name: 'CastError',
        kind: 'String',
        value: [Object],
        path: 'name',
        reason: undefined } } }

```

**Não se preocupe em como inserir agora, pois já já chegaremos nisso.**

Então você percebeu que ele já possui uma validação padrão para os tipos, né?

**Falaremos mais sobre validação dos campos já na sequência dos tipos.**

#### Number

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

#### Date

Vamos utilizar o código já feito anteriormente.

```js
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
let Schema = mongoose.Schema;
let _schema = {
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number,
  created_at: { type: Date, default: Date.now }
}
// Criação do Schema
let pokemonSchema = new Schema(_schema);
// apenas para verificar a criação
console.log(pokemonSchema);
```

Agora eu lhe pergunto: por que usamos `Date.now` em vez de `Date.now()` que nos retorna o [timestamp](http://www.unixtimestamp.com/) atual?

![](https://media.giphy.com/media/bPTXcJiIzzWz6/giphy.gif)

> Porque o `Date.now` é uma função que irá executar quando você criar o objeto, nesse caso ele irá executar quando você criar o *Model*, se você usasse `Date.now()` todos os objetos teriam o mesmo valor.

#### Buffer
#### Boolean
#### Mixed
#### Objectid
#### Array


### Validation

## Model


- Create
- Retrieve
- Update
- Delete