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


**Simples não?**

![](http://www.reactiongifs.com/wp-content/uploads/2013/05/oh-yea-duh.gif)

#### Buffer

O tipo *Buffer* é muito para salvar arquivos e os retorná-los da forma que conhecemos [no Node.js](https://nodejs.org/api/buffer.html), porém o MongoDB converte para [Binary](http://mongodb.github.io/node-mongodb-native/api-bson-generated/binary.html).

*Dica: caso for gravar uma imagem, converta-a para base64*.

```js
var imageSchema = new Schema({
    mime: String,
    bin: Buffer
});
```


#### Boolean

O tipo *Boolean* todo mundo sabe como é, correto?

![](https://media.giphy.com/media/xT77XKI3JAqduyee6A/giphy.gif)

Claro que sabe, se não souber da uma conferida [nesse material **ultra básico** que criamos para o JS4Girls](https://github.com/Webschool-io/js4girls/blob/master/material-didatico/etapa-1/logic.md#boolean).

Ou seja, ele basicamente aceita **apenas valores booleanos** que podem ser:

- true ou 1
- false ou 0

Por exemplo nesse código:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  name:  Boolean
}
// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {name: 1}

var Model = mongoose.model('testepokemon', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})
```

Quando executado irá retornar a seguinte mensagem no *terminal*:

```
Inseriu:  { _id: 5691d23e85e26411154c8d12, name: true, __v: 0 }
```

Então perceba que ele converteu o `1` para `true`.

**Ridicularmente simples né?**

![](http://i.imgur.com/fq7RVBe.gif)

#### Mixed

![](https://s-media-cache-ak0.pinimg.com/originals/fb/e2/53/fbe253bb518e4d749c40dbec5c6506dc.gif)

Agora chegamos em um tipo altamente cabuloso!

**Por que tio Suissa?**

Pois ele virtualmente aceita qualquer tipo, do Mongoose, e podemos utilizar diferentes tipos de uma só vez, por exemplo:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  attacks:  Schema.Types.Mixed
}
// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = { attacks: 
  [
    { name: 'Soco na cara',
      power: 9000,
      order: 1,
      active: true,
      created_at: Date.now()
    },
    { name: 'Soco no peito',
      power: 9400,
      order: 2,
      active: false,
      created_at: Date.now()
    }
  ]
};

var Model = mongoose.model('testepokemon', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})
```

Executando esse código você receberá a seguinte mensagem:

```
Inseriu:  { _id: 5691d60743056d6e1566274e,
  attacks: 
   [ { name: 'Soco na cara',
       power: 9000,
       order: 1,
       active: true,
       created_at: 1452398087679 },
     { name: 'Soco no peito',
       power: 9400,
       order: 2,
       active: false,
       created_at: 1452398087679 } ],
  __v: 0 }
```

Percebeu que o tipo do campo agora é `Schema.Types.Mixed` e não apenas `Mixed`?

Só não me pergunte o porquê pois não encontrei essa informação em nenhum lugar, **caso você saiba o porquê por favor adicione aqui.**

Obrigado.

**Por favor só não vá usar esse tipo indiscriminadamente se não irei puxar seu pé a noite!**

![](https://i.imgur.com/tqByXqh.gif)

#### Objectid

![](http://i.imgur.com/eOBCaUl.jpg)

Esse tipo de campo **é importantíssimo** quando queremos fazer ligações entre as coleções, pois é com ele que definimos um tipo de campo que receberá um ObjectID de algum documento, podendo ser da própria coleção ou outra, de preferência outra né queridinha(o).

Irei utilizar no exemplo o *ObjectID* criado no exemplo anterior:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  pokemons:  [{type: Schema.Types.ObjectId, ref: 'testepokemons'}]
}
// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {
  pokemons: ['5691d60743056d6e1566274e']

};

var Model = mongoose.model('mypokemons', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})
```

```
Inseriu:  { pokemons: [ 5691d60743056d6e1566274e ],
  _id: 5691db690526e62d1671fdc2,
  __v: 0 }

```

Depois conferindo no MongoDb como foi inserido:

```js
db.mypokemons.find()
{
  "_id": ObjectId("5691db690526e62d1671fdc2"),
  "pokemons": [
    ObjectId("5691d60743056d6e1566274e")
  ],
  "__v": 0
}

```

E isso será muito importante por causa de 1 coisa chamada: [populate](http://jaketrent.com/post/mongoose-population/).

O *populate* será o responsável por fazer a busca pelos `_ids` especificados no campo com `Schema.Types.ObjectId` e como você deve ter percebido também usamos mais um atributo:

```js
ref: 'testepokemons'
```

Pois é com o valor de `ref`, que é o nome da coleção que possui aquele documento, que o Mongoose irá fazer a busca nessa coleção, retornando o resultado já adicionado no objeto de resposta, iremos ver melhor sobre isso futuramente.

Mas lembre-se:

> É muito importante.

![](http://cdn.gifbay.com/2014/05/the_infamous_nod_and_wink-135227.gif)

#### Array

Obviamente é o tipo que aceita apenas *array* e ele pode conter qualquer tipo internamente.

Confira o exemplo abaixo:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  pokemons:  Schema.Types.Array
}
// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {
  pokemons: ['Pikachu', 'Squirtle']

};

var Model = mongoose.model('mypokemons', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})
```

```
Inseriu:  { pokemons: [ [ 'Pikachu' ], [ 'Squirtle' ] ],
  _id: 5691e6c10f9e77c316c518f2,
  __v: 0 }
```

![](http://geradormemes.com/media/created/qwhlit.jpg)

Porém como definimos `pokemons:  Schema.Types.Array` ele irá gerar um array para cada valor passado nesse campo, para corrigirmos isso precisamos criar o *Schema* dessa forma:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  pokemons:  [String]
}
// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {
  pokemons: ['Pikachu', 'Squirtle']

};

var Model = mongoose.model('mypokemons', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})
```

Executando...

```
Inseriu:  { pokemons: [ 'Pikachu', 'Squirtle' ],
  _id: 5691ea660fc87d1317e5d91f,
  __v: 0 }
```

Percebeu então que apenas mudei para `pokemons:  [String]` pois nesse caso o campo `pokemons` irá receber um **array de Strings** como seria o procedimento mais natural.

Então agora você sabe que o tipo `Schema.Types.Array` **cria um array para cada elemento contido no campo.**

Então eu aconselho a você usar a segunda forma que é utilizando o *Array* do JavaScript mesmo, aliás dificilmente você encontrará códigos com `Schema.Types.Array` mas eu tinha que explicar. :p

### _v

Com certeza você percebeu que quando inserimos algum documento o Mongoose nos retorna o objeto com um atributo que não inserimos, o `_v`.

**Tudo bem, mas para que serve essa biroska?**

![](http://i.imgur.com/7L366pN.jpg)

### Validation

## Model


- Create
- Retrieve
- Update
- Delete