# Mongoose

O Mongoose é um dos projetos mais utilizados quando trabalhamos com o MongoDb pois ele nos dá uma funcionalidade que o MongoDb não dá nativamente, você sabe qual?

![](https://media.giphy.com/media/IJ02hHchX5dok/giphy.gif)

## Ele nos proporciona **SCHEMAS**!!

![](https://media.giphy.com/media/2XskdWuNUyqElkKe4bm/giphy.gif)

Pois é, isso para projetos médios/grandes **é muito necessário** para padronizar as coisas entre a equipe, caso você seja um programador de backend e utiliza algum banco relacional provavelmente já utilizou algum *ORM (Object-relational Mapper)* da vida, o Mongoose é um *ODM (Object-document Mapper)*.

Antes de iniciarmos nossa jornada pelos campos verdejantes do Mongoose precisamos conhecer alguns conceitos, não falaremos sobre *plugins* e *middlewares* ainda.

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

Antes de continuarmos a explicação de *Schemas* vamos entender um pouco sobre os eventos e a conexão do Mongoose.

## connect

Obviamente precisamos conectar no MongoDb antes de fazermos qualquer coisa com o Mongoose e para isso também contamos com eventos para nos ajudar a gerenciar essa conexão.

Primeiramente passamos a *string* de conexão para a função `connect`:

```js
const dbURI = 'mongodb://localhost/be-mean-instagram';

mongoose.connect(dbURI);
```

Para depois trabalharmos com esses 4 eventos:

```js
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});
```

E para colocar a cereja no bolo, vamos fechar a conexão com o MongoDb caso o processo do Node.js seja finalizado:

```js
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
```

Agora juntando tudo isso temos um arquivo de configuração/conexão com o MongoDb que podde ser re-usado.

```js
const dbURI = 'mongodb://localhost/be-mean-instagram';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

```

Para saber mais [visite a documentação](http://mongoosejs.com/docs/connections.html).

## Schema - continuação

No exemplo anterior criamos o *Schema* para nossa coleção de Pokemons que criamos no [módulo de MongoDB](https://www.youtube.com/playlist?list=PL77JVjKTJT2gXHb9FEokJsPEcoOmyF1pY), mas podemos melhorar ele deixando o JSON de configuração do *Schema* separado da criação.

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

Basicamente é porque quando passamos apenas o nome do tipo estamos usando apenas o atributo `type` do objeto de configuração do campo, para conhecermos mais sobre isso precisamos conhecer primeiramente quais os tipos suportados pelo *Schema*.

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

const Model = mongoose.model('testepokemon', pokemonSchema);
const poke = new Model(data);
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

Você percebeu que ele já possui uma validação padrão para os tipos, né?

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

const Model = mongoose.model('testepokemon', pokemonSchema);
const poke = new Model(data);
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

Armazena datas no formato ISODate, vamos utilizar o código já feito anteriormente.

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number,
  created_at: { type: Date, default: Date.now }
}
// Criação do Schema
const pokemonSchema = new Schema(_schema);
// apenas para verificar a criação
console.log(pokemonSchema);
```

Agora eu lhe pergunto: por que usamos `Date.now` em vez de `Date.now()` que nos retorna o [timestamp](http://www.unixtimestamp.com/) atual?

![](https://media.giphy.com/media/bPTXcJiIzzWz6/giphy.gif)

> Porque o `Date.now` é uma função que irá executar quando você criar o objeto, nesse caso ele irá executar quando você criar o *Model*, se você usasse `Date.now()` todos os objetos teriam o mesmo valor.


**Simples não?**

![](http://www.reactiongifs.com/wp-content/uploads/2013/05/oh-yea-duh.gif)

#### Buffer

O tipo *Buffer* é muito para salconst arquivos e retorná-los da forma que conhecemos [no Node.js](https://nodejs.org/api/buffer.html), porém o MongoDB converte para [Binary](http://mongodb.github.io/node-mongodb-native/api-bson-generated/binary.html).

*Dica: caso for graconst uma imagem, converta-a para base64*.

```js
const imageSchema = new Schema({
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

const Model = mongoose.model('testepokemon', pokemonSchema);
const poke = new Model(data);
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

const Model = mongoose.model('testepokemon', pokemonSchema);
const poke = new Model(data);
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

#### ObjectId

![](http://i.imgur.com/eOBCaUl.jpg)

Esse tipo de campo **é importantíssimo** quando queremos fazer ligações entre as coleções, pois é com ele que definimos o tipo de campo que receberá o ObjectID de algum documento, podendo ser da própria coleção ou outra, de preferência outra né queridinha(o).

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

const Model = mongoose.model('mypokemons', pokemonSchema);
const poke = new Model(data);
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

E isso será muito importante por causa de uma coisa chamada: [populate](http://jaketrent.com/post/mongoose-population/).

O *populate* será o responsável por fazer a busca pelos `_ids` especificados no campo com `Schema.Types.ObjectId` e como você deve ter percebido também usamos mais um atributo:

```js
ref: 'testepokemons'
```

Pois é com o valor de `ref`, que é o nome da coleção que possui aquele documento, que o Mongoose irá fazer a busca nessa coleção, retornando o resultado já adicionado no objeto de resposta, iremos ver melhor sobre isso futuramente.

Mas lembre-se:

> É muito importante!

![](http://cdn.gifbay.com/2014/05/the_infamous_nod_and_wink-135227.gif)

#### Array

Obviamente é o tipo que aceita apenas *array* correto?

![](https://media.giphy.com/media/YuEdUiDmey8W4/giphy.gif)

**Mas como assim tio Suissa?**

Vou mostrar com código que ficará mais fácil, vamos utilizar o código abaixo:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  pokemons:  Schema.Types.Array
}
const pokemonSchema = new Schema(_schema);
const data = {
  pokemons: ['Pikachu', 'Squirtle']
};

const Model = mongoose.model('mypokemons', pokemonSchema);
const poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})
```

Depois de executado você receberá a seguinte resposta:

```
Inseriu:  { pokemons: [ [ 'Pikachu' ], [ 'Squirtle' ] ],
  _id: 5691e6c10f9e77c316c518f2,
  __v: 0 }
```

![](http://geradormemes.com/media/created/qwhlit.jpg)

Isso acontece porque definimos `pokemons:  Schema.Types.Array` e com isso ele irá gerar um *array* para cada valor passado nesse campo, para *"corrigirmos"* isso precisamos criar o *Schema* dessa forma:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  pokemons:  [String]
}
const pokemonSchema = new Schema(_schema);
const data = {
  pokemons: ['Pikachu', 'Squirtle']
};

const Model = mongoose.model('mypokemons', pokemonSchema);
const poke = new Model(data);
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

### __v

Com certeza você percebeu que quando inserimos algum documento o Mongoose nos retorna o objeto com um atributo que não inserimos, o `_v`.

**Tudo bem, mas para que serve essa biroska?**

![](http://i.imgur.com/7L366pN.jpg)

Esse campo é adicionado automaticamente pelo Mongoose quando inserimos algum documento novo, ele serve para o Mongoose gerenciar, **internamente**, a versão de cada documento caso haja alguma alteração concorrente.

Caso necessário você pode modificar sua versão manualmente, se desejar utilizar esse campo como versionador também.

### Validation

Agora sim chegamos em algo de **extrema importância**, a validação dos campos.

![](https://media.giphy.com/media/yNQ2SoQYdvUs0/giphy.gif)

Antes de entrarmos em suas especificidades, vamos conhecer algumas regras:

- Validação é definida no tipo do campo, no *Schema*;
- Validação é uma peça interna do [*Middleware*](http://mongoosejs.com/docs/middleware.html);
- Validação ocorre quando um documento tenta ser salvo, após ter sido definido com seu padrão;
- Validadores não são executados em valores indefinidos. A única exceção é a validação required;
- Validação é assincronamente recursiva, quando você chamar a função `save` do *Model*, a validação dos sub-documentos é executado também. Se ocorrer um erro ele será enviado para o *callback* da função `save`;
- Validação suporta a personalização completa.

#### Validação padrão

Como já vimos anteriormente o Mongoose possui validações padrão para alguns tipos de campos, além disso todos os tipos também possui a validação de `required`.

Porém alguns tipos possuem validadores mais específicos como:

- Number: possui os validadores de `max` e `min`
- String: possui os validadores de `enum`, `match`, `maxlength` e `minlength`

Sabendo disso vamos analisar um erro já demonstrado anteriormente com o tipo *String* quando tenta-se inserir um tipo *Array* nesse campo.

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

Vamos analisar esse objeto de retorno do Mongoose parte por parte.

```
ERRO:  { [ValidationError: testepokemon validation failed] ...}
```

Acima podermos ver qual foi o erro, porém não fazemos nada com essa informação, por nossa sorte ela vem separadinha logo abaixo:

```js
{ [ValidationError: testepokemon validation failed]
  message: 'testepokemon validation failed',
  name: 'ValidationError'
  ...
}
```

Então podemos perceber que a mensagem de erro contida em `message` é composta pelo nome do *Model* que deu a merda, `testepokemon`, mais `validation failed` e no campo `name` é o nome da validação que deu errado, no caso `ValidationError`.

Logo após chegamos no objeto mais importante, `errors`:

```
ERRO:  { ...
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

Dentro do objeto `errors` existe um atributo com o nome do campo, que gerou o erro, e atrelado a ele o seu objeto do erro.

```js
{ name: 
  { [CastError: Cast to String failed for value "[object Object]" at path "name"]
    message: 'Cast to String failed for value "[object Object]" at path "name"',
    name: 'CastError',
    kind: 'String',
    value: [Object],
    path: 'name',
    reason: undefined 
  } 
}
```

Sendo essa a estrutura padrão para os erros da validação do Mongoose:

```js
{ message: 'Cast to String failed for value "[object Object]" at path "name"',
  name: 'CastError',
  kind: 'String',
  value: [Object],
  path: 'name',
  reason: undefined 
}
```

Analisando cada atributo nós temos:

- message: texto da mensagem de erro;
- name: nome do erro;
- kind: tipo do campo;
- value: valor que provocou o erro;
- path: nome do campo;
- reason: razão porque o erro ocorreu, raramente usado.

Porém nesse caso estamos mostrando apenas 1 erro, do campo `name`.

**E se tivermos mais erros como ficará?**

Vou mostrar para você com um exemplo:

```js
ERRO:  { [ValidationError: testepokemon validation failed]
  message: 'testepokemon validation failed',
  name: 'ValidationError',
  errors: 
   { age: 
      { [CastError: Cast to Number failed for value "bazinga" at path "age"]
        message: 'Cast to Number failed for value "bazinga" at path "age"',
        name: 'CastError',
        kind: 'Number',
        value: 'bazinga',
        path: 'age',
        reason: undefined },
     name: 
      { [CastError: Cast to String failed for value "[object Object]" at path "name"]
        message: 'Cast to String failed for value "[object Object]" at path "name"',
        name: 'CastError',
        kind: 'String',
        value: [Object],
        path: 'name',
        reason: undefined } } }
```

Interessante que mesmo com mais de 1 erro o objeto `errors` não é convertido para *Array*, mas sim terá o erro de cada campo como um objeto interno sendo identificado pelo seu nome.

#### Validação customizada

Para criar uma validação customizada é bem simples, basta passar um objeto para o atributo `validate` do seu campo, no *Schema*:

```js
age: {
  type: Number,
  validate: {
    validator: function(v) {
      return v >= 18;
    },
    message: 'Sua idade({VALUE}) não é permitida!'
  }
}
```

Aposto que você imagina para que essa validação serve né?

![](https://media.giphy.com/media/EGGjIQvuBasLK/giphy.gif)

Validadores sempre recebem o valor para validar como seu primeiro argumento e devem retornar um valor **booleano**. Retornando `false` significa que a validação falhou.

Vamos testar a validação:

```js
const User = mongoose.model('user', userSchema);
const u = new User();

u.age = 24;
console.log(u.validateSync());

u.age = 6;
console.log(u.validateSync().toString());

u.age = 2;
console.log(u.validateSync());
```

Executando essa validação temos:

```
undefined
ValidationError: Sua idade(6) não é permitida!
{ [ValidationError: user validation failed]
  message: 'user validation failed',
  name: 'ValidationError',
  errors: 
   { age: 
      { [ValidatorError: Sua idade(2) não é permitida!]
        properties: [Object],
        message: 'Sua idade(2) não é permitida!',
        name: 'ValidatorError',
        kind: 'user defined',
        path: 'age',
        value: 2 } } }
```

Percebeu então que `undefined` é o retorno de uma validação de sucesso e logo abaixo temos apenas a mensagem de erro que vem de `u.validateSync().toString()` e por último objeto de erro que já conhecemos.

Agora vamos tentar `validateSync().toString()` com um valor maior que 18:

```js
u.age = 69;
console.log(u.validateSync().toString());
```

E o resultado é esse erro:

```
console.log(u.validateSync().toString());
                            ^
TypeError: Cannot read property 'toString' of undefined
    at Object.<anonymous> (/Users/jeancarlonascimento/www/projetos/webschool/cursos/be-mean-instagram/repo-oficial/Apostila/module-nodejs/src/mongoose/schemas/teste.js:23:29)
    at Module._compile (module.js:399:26)
    at Object.Module._extensions..js (module.js:406:10)
    at Module.load (module.js:345:32)
    at Function.Module._load (module.js:302:12)
    at Function.Module.runMain (module.js:431:10)
    at startup (node.js:141:18)
    at node.js:977:3
```

Com isso conseguimos deduzir que a função `toString` não existe em undefined e podemos proconst isso indo no console do node, para isso basta executar `node` no seu terminal:

```js
➜  ~  node
> undefined.toString()
TypeError: Cannot read property 'toString' of undefined
    at repl:1:10
    at REPLServer.defaultEval (repl.js:252:27)
    at bound (domain.js:281:14)
    at REPLServer.runBound [as eval] (domain.js:294:12)
    at REPLServer.<anonymous> (repl.js:417:12)
    at emitOne (events.js:83:20)
    at REPLServer.emit (events.js:170:7)
    at REPLServer.Interface._onLine (readline.js:211:10)
    at REPLServer.Interface._line (readline.js:550:8)
    at REPLServer.Interface._ttyWrite (readline.js:827:14)
> "Suissa".toString()
'Suissa'
```

**Por isso cuidado ao usar essa função, tenha certeza que esteja executando em um erro!**

Vamos criar uma validação um pouco mais complexa agora:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
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
const mail = new Email({email: "suissera@webschool.io"});

console.log(mail.validateSync());
```

Também tem a forma simples de testar regex com validate:

```js
const userSchema = new Schema({
  email: {
    type: String,
    validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  }
});
```

Além do `match`:

```js
const userSchema = new Schema({
  email: {
    type: String,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        , 'Preencha com um email válido'
        ]
  }
});
```

Existe mais uma forma de utilizar a validação com Mongoose, utilizando o `Model.schema.path('campo')`, passando uma função e a mensagem de erro para o `validate`:

```js
const RequisitosSchema = new Schema({
  name: String
});

const Requisitos = mongoose.model('Requisitos', RequisitosSchema);

Requisitos.schema.path('name').validate(function (value) {
  return /js|html|css|angular|node|mongodb/i.test(value);
}, 'Requisito({VALUE}) inválido!');

const req = new Requisitos({ name: 'php'});
console.log(req.validateSync());
```

## Model

O *Model* é a implementação do *Schema*, sendo o objeto com o qual trabalhamos.

```js
const Model = mongoose.model('Model', schema);
```

Para trabalhar com o *Model* iremos instanciar um documento para isso:

```js
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);

const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const Suissamon = new PokemonModel({ name: 'Suissamon' });
Suissamon.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu:', data);
});
// ou
Suissamon.create({ name: 'Suissamon' }, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu:', data);
});
```

## Create - save()

Já vimos em outros exemplos como criar um documento novo, então agora vamos padronizar seu uso.

```js
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);
const dataModel = { name: 'Suissamon' };
const Suissamon = new PokemonModel(dataModel);

Suissamon.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu:', data);
});
```

Iremos sempre separar o JSON com os dados do *Model*(`dataModel`) da sua criação `new PokemonModel(dataModel)` para depois executar a função `save`, passando como parâmetro uma função de *callback* **que irá sempre receber 2 parâmetros nessa ordem: erro(err) e retorno(data).**

## Retrieve - find()

Existem 2 formas diferentes de executar uma busca com o Mongoose:

- via callback com JSON
- encadeando funções

Vamos aprender das 2 formas, então vamos buscar por exemplo o `Pikachu` que foi inserido em exercícios anteriores, buscando pelo `name` e se o `attack` for maior que `90`:

```js
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: 'Pikachu', attack: {'$gt': 90}};

PokemonModel.find(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
});
```

Então perceba que agora utilizamos diretamente o *Model* `PokemonModel` para executar a função `find`, passando como parâmetros a *query* e o *callback*. Nesse caso a `query` é um JSON que usa a mesma sintaxe do cliente do MongoDb.

Agora vamos ver da outra forma:

```js
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: 'Pikachu'};
const callback = function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
};

PokemonModel.find(query).where({attack: {$gt: 90}}).exec(callback);
```

Caso você queira limitar quais campos devem ser retornados basta passar como JSON no segundo parâmetro, assim:

```js
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: 'Pikachu', attack: {'$gt': 90}};
const fields = {name: 1};

PokemonModel.find(query, fields, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
});
```

Para você fazer uma busca independente de maiúscula ou minúscula você deve usar de `RegEx` para isso:

```js
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: /pikachu/i};

PokemonModel.find(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
});
```

Você pode ver todas as funções dessa segunda forma [aqui na documentação oficial](http://mongoosejs.com/docs/api.html#query-js).

### findOne

Como você deve lembrar que além do `find` também temos o `findOne` que serve para quê?

![](https://media.giphy.com/media/ZgqJGwh2tLj5C/giphy.gif)

Isso mesmo! Para buscar **apenas 1 documento**.

```js
PokemonModel.findOne(query, function (err, data) {});

PokemonModel.findOne(query).exec(callback);
```

### findById

O `findById` é equivalente ao `findOne({_id: id})`, com valor `findById(undefined)` ele converte para `findById({ _id: null })`.

```js
PokemonModel.findById(id, function (err, data) {});

PokemonModel.findById(id).exec(callback);
```

Vamos buscar o `Pikachu` porém pelo seu `_id`:

```js
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const id = '564220f0613f89ac53a7b5d0';

PokemonModel.findById(id, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
})
```

## Update - update()

Para alterarmos um documento iremos seguir a mesma lógica do `update` do cliente do MongoDb, porém no Mongoose podemos omitir o operador `$set` pois ele não irá sobrescrever todo seu objeto caso não o use, assim como é no cliente.

**Lembra-se?**

![](https://media.giphy.com/media/NQr9CR7KooV7G/giphy.gif)

Vamos então reaproveitar a *query* passada e mudar o `attack` do `Pikachu` para `666`:

```js
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: /pikachu/i};
const mod = {attack: 666};

PokemonModel.where(query).update(mod).exec(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Alterou:', data);
});
```

### findAndModify


```js
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: /pikachu/i};
const mod = {attack: 666};

PokemonModel.findAndModify(query, mod, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Alterou:', data);
})
```

### findOneAndUpdate

### upsert

### multi

## Delete - remove()

### findOneAndRemove

## Indexes

Quando o aplicativo é iniciado, Mongoose chama automaticamente `ensureIndex` para cada índice definido no seu *Schema*. Mongoose chamará `ensureIndex` sequencialmente para cada índice, e emitem um evento `index` no *Model* quando todas as chamadas de `ensureIndex` sejam sucesso ou quando houver um erro.

```js
var userSchema = new Schema({
  name: String,
  email: String,
  date_created: { type: Date, , default: Date.now, index: true }
});

userSchema.index({ name: 1, type: -1 });
```

Recomenda-se que seja desativado em produção, a criação do índice pode causar um impacto significativo no desempenho. Desativar o comportamento, definindo a opção `autoIndex` do seu *Schema* para `false`, ou globalmente na conexão, definindo a opção `config.autoIndex` como `false`.

```js
userSchema.set('autoIndex', false);
// or
new Schema({..}, { autoIndex: false });
```

Mas ele só impacta quando você levanta seu sistema, sabendo disso você não precisa seguir essa recomendação de desligar o `autoIndex`, pois ele irá garantir certa integridade dos seus dados.

```js
const userSchema = new Schema({
  name: String
, email: { type: String, unique: true }
, date_created: { type: Date, default: Date.now, index: true }
});

userSchema.index({ name: 1, date_created: -1 });

const User = mongoose.model('User', userSchema);

User.create({name: 'suissa', email: 'suissa@webschool.io'}, (err, data) => {
  if (err) return console.log('Erro:', err);
  return console.log('Animal: ', data);
});
```

Basta pesquisar na *database* `test` e na coleção `system.indexes` que iremos encontrar a seguinte parte da busca:

```js
test> db.system.indexes.find()
{
  "v": 1,
  "key": {
    "_id": 1
  },
  "name": "_id_",
  "ns": "test.users"
}
{
  "v": 1,
  "unique": true,
  "key": {
    "email": 1
  },
  "name": "email_1",
  "ns": "test.users",
  "background": true
}
{
  "v": 1,
  "key": {
    "date_created": 1
  },
  "name": "date_created_1",
  "ns": "test.users",
  "background": true
}
```

Para criar um índice composto basta fazê-lo passando o JSON para a função `index` do *Schema*:

```js
const userSchema = new Schema({
  name: String
, email: { type: String, unique: true }
, date_created: { type: String, default: Date.now, index: true }
});

userSchema.index({ name: 1, date_created: -1 });
```

Buscando em `system.indexes` achamos nosso índice:

```js
{
  "v": 1,
  "key": {
    "name": 1,
    "date_created": -1
  },
  "name": "name_1_date_created_-1",
  "ns": "test.users",
  "background": true
}
```


## Methods e Statics

No Mongoose podemos definir métodos específicos para um *Schema*, como também métodos *"estáticos"*.

### Methods

Para se definir um método é muito simples, basta criarmos ele no objeto `Schema.methods`:

```js
const _schema = {
  name:  String
, description: String
, type:   String
, attack:   Number
, defense:   Number
, height:   Number
};
const PokemonSchema = new Schema(_schema);

PokemonSchema.methods.findSimilarType = function findSimilarType (cb) {
  return this.model('Pokemon').find({ type: this.type }, cb);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const poke = new Pokemon({ name: 'Teste', type: 'inseto' });

poke.findSimilarType(function (err, data) {
  if (err) return console.log('Erro:', err);
  return data.forEach((pokemon) => console.log('pokemon: ', pokemon));
})
```

Como nós retornamos o `find`, que é uma instância de *Query*, na função `findSimilarType` podemos escrever a busca dessa forma:

```js
poke
.findSimilarType()
.where('defense').gt(50)
.limit(2)
.exec(function (err, data) {
  if (err) return console.log('Erro:', err);
  return data.forEach((pokemon) => console.log('pokemon: ', pokemon));
});
```

### Statics

Além dos métodos normais também podemos criar os métodos estáticos, os quais sempre estarão acessíveis no seu *Model*.

```js
const _schema = {
  name:  String
, description: String
, type:   String
, attack:   Number
, defense:   Number
, height:   Number
};
const PokemonSchema = new Schema(_schema);

PokemonSchema.statics.search = function (name, cb) {
  return this.where('name', new RegExp(name, 'i')).exec(cb);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

Pokemon.search('caterpie', function (err, data) {
  if (err) return console.log('Erro:', err);
  return data.forEach((pokemon) => console.log('pokemon: ', pokemon));
});
```

O que fazemos na função `search` é receber um nome e depois retornamos um `find` implícito pois usamos o `where` para testar o valor de `name` com uma expressão regular gerada pela função [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), finalizando com a execução do callback `cb`.


## Getters e Setters

Getters e setters ajudam a mudar a forma como você obtém e/ou define os atributos do documento.

### Setters

*Setters* permitem que você transforme os dados originais antes que cheguem ao documento.

Suponha que você está implementando o registro do usuário para um site. Usuário fornecer um e-mail e senha, que fica guardado no MongoDB. O e-mail é uma seqüência de caracteres que você vai querer normalizar para minúsculas.

Você pode configurar a normalização do e-mail para minúsculas facilmente através de um *setter*.

```js
function toLower (v) {
  return v.toLowerCase();
}

const UserSchema = new Schema({
  email: { type: String, set: toLower } 
});

const User = mongoose.model('User', UserSchema);
const user = new User({email: 'SUISSERA@webschool.io'});

console.log(user.email); // 'suissera@webschool.io'
```

### Getters

*Getters* permitem que você transforme a representação dos dados, uma vez que é transformado a partir do documento para o valor que você vê.

Suponha que você queira retornar o título do *post* todo em maiúscula.

Você pode fazê-lo através da definição de um *getter*.

```js
function apenasMaiusculas (v) {
  return v.toUpperCase();
};
const CommentsSchema = new Schema({
  title: String
, body: String
, date: Date
});
const BlogPostSchema = new Schema({
  title: { type: String, get: apenasMaiusculas }
, body: String
, comments: [CommentsSchema]
});

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const post_id = '569e36b2d6a928b526db9135';

BlogPostModel.findById(post_id, function (err, post) {
  if (err) return console.log('Erro:', err);
  return console.log('Título: ', post.title);
});
```

## Virtuals

O Mongoose suporta atributos virtuais, que são convenientes em alguns momentos, mas não são armazenados no MongoDB.

Pense no seguinte *Schema*:

```js
const PersonSchema = new Schema({
  name: {
    first: String
  , last: String
  }
});
```

Se você deseja mostrar os valores dos *virtuals* no cliente deve setar `{ virtuals: true }` para `toObject` e `toJSON` no *Schema*, como mostrado abaixo:

```js
const PersonSchema = new Schema({
    name: {
      first: String
    , last: String
    }
}, {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});
```

Depois defina o nome:

```js
const Person = mongoose.model('Person', PersonSchema);

const Suissao = new Person({
    name: { first: 'Jean', last: 'Suissa' }
});
```

Se você quiser mostrar o nome completo terá que fazer:

```js
console.log(Suissao.name.first + ' ' + Suissao.name.last);
```

É mais conveniente definir um atributo virtual `name.full` e escrever dessa forma:

```js
console.log(Suissao.name.full); 
```

Para fazer isso basta passar `'name.full'` para a função `virtual` do *Schema*:

```js
PersonSchema
.virtual('name.full')
.get(function () {
  return this.name.first + ' ' + this.name.last;
});
```

Cadastre uma `Person` nova:

```js
Person.create({ name: { first: 'Jean', last: 'Suissa' }}, (err, data) => {
   if (err) return console.log('Erro:', err);
   return console.log('Cadastrou: ', data);
});
```

*ps: Fiz com o `create` para economizar código.*

Agora buscando o `Person` para verificar seu nome completo:

```js
Person.findById('569e513f7672012c28da89f1', (err, data) => {
  if (err) return console.log('Erro:', err);
  return console.log('Nome completo: ', data.name.full);
});
```

Retornando:

```
Nome completo:  Jean Suissa
```

Vamos fazer um outro campo virtual que irá retornar apenas as iniciais de `Person`:

```js
PersonSchema
.virtual('name.initials')
.get(function () {
  return this.name.first[0] + this.name.last[0];
});

const Person = mongoose.model('Person', PersonSchema);

Person.findById('569e513f7672012c28da89f1', (err, data) => {
  if (err) return console.log('Erro:', err);
  return console.log('Iniciais: ', data.name.initials);
});
```

**E nossa resposta é:**

```
Iniciais:  JS
```

## Embedded Documents

Esse tópico é muito interessante pois diversas vezes iremos colocar um documento dentro de outro(*embedded*). Documentos incorporados desfrutam dos mesmos recursos que os *Models*. Sempre que ocorrer um erro ele irá para o *callback* do `save()`.

### Adicionando

Vamos iniciar com um exemplo clássico, de Blog:

```js
const CommentsSchema = new Schema({
  title: String,
  body: String,
  date: Date
});

const BlogPostSchema = new Schema({
  title: String,
  body: String,
  comments: [CommentsSchema]
});

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
```

O atributo `comments` em `BlogPostSchema` será uma instância de `DocumentArray`, que é um subclasse especial de `Array` que possui métodos específicos para trabalhar co documentos incorporados.

```js
const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel();
const comment = {
  title: 'Comentei aqui'
, body: 'Tá comentando meu fiiiii!'
, date: Date.now()
};

BlogPost.comments.push(comment);
BlogPost.save(function (err, data) {
  if (err) return console.log('Erro:', err);
  return console.log('Sucesso:', data);
});
```

Quando executamos esse código recebemos a seguinte mensagem:

```
Sucesso: { comments:
   [ { _id: 569e2ef6e17e3736266c9cd7,
       date: Tue Jan 19 2016 10:41:26 GMT-0200 (BRST),
       body: 'Tá comentando meu fiiiii!',
       title: 'Comentei aqui' } ],
  _id: 569e2ef6e17e3736266c9cd6,
  __v: 0 }
```

Não ficou muito claro? Então vamos colocar os valores do *Post*.

```js
const post = {
  title: 'Primeiro POST'
, body: 'Post inicial do blog UEBAAA'
, date: Date.now()
}
const comment = {
  title: 'Comentei aqui'
, body: 'Tá comentando meu fiiiii!'
, date: Date.now()
};
const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);

BlogPost.comments.push(comment);
BlogPost.save(function (err, data) {
  if (err) return console.log('Erro:', err);
  return console.log('Sucesso:', data);
});
```

Como resultado recebemos:

```
Sucesso: { comments: 
   [ { _id: 569e300ad1455a8326c9aa92,
       date: Tue Jan 19 2016 10:46:02 GMT-0200 (BRST),
       body: 'Tá comentando meu fiiiii!',
       title: 'Outro comentário' } ],
  _id: 569e300ad1455a8326c9aa91,
  body: 'Post inicial do blog UEBAAA',
  title: 'Primeiro POST',
  __v: 0 }
```

### Removendo

Para remover um documento incorporado precisamos primeiramente buscar o documento *"pai"*, pelo `_id` de preferência, para depois selecionar qual documento interno deve ser removido e depois salconst o documento modificado.

```js
const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);
const id = '569e300ad1455a8326c9aa91';

BlogPostModel.findById(id, function (err, post) {

  if (err) return console.log('Erro:', err);
  console.log('post.comments', post.comments)
  post.comments[0].remove();
  post.save(function (err, data) {
    if (err) return console.log('Erro interno:', err);
    return console.log('Sucesso:', data);
  });
});
```

Como resultado recebos a seguinte mensagem no terminal:

```
post.comments [{ title: 'Outro comentário',
  body: 'Tá comentando meu fiiiii!',
  date: Tue Jan 19 2016 10:46:02 GMT-0200 (BRST),
  _id: 569e300ad1455a8326c9aa92 }]
Sucesso: { comments: [],
  __v: 1,
  body: 'Post inicial do blog UEBAAA',
  title: 'Primeiro POST',
  _id: 569e300ad1455a8326c9aa91 }
```


### Procurando pelo _id

O tipo `DocumentArray` possui o método especial `id()` o qual filtra os documentos incorporados pelo seu atributo `_id`.

Vamo inserir novamente o comentário e depois buscar pelo seu `_id`.

```js
const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);
const post_id = '569e36b2d6a928b526db9135';
const comment_id = '569e36b2d6a928b526db9136';

BlogPostModel.findById(post_id, function (err, post) {
  if (err) return console.log('Erro:', err);
  console.log('Achou esse comentário: ', post.comments.id(comment_id));
});
```

Executando, recebemos:

```
Achou esse comentário:  { title: 'Outro comentário',
  body: 'Tá comentando meu fiiiii!',
  date: Tue Jan 19 2016 11:14:26 GMT-0200 (BRST),
  _id: 569e36b2d6a928b526db9136 }
```

## Juntando tudo

Vamos agora criar um *Schema* mais completo e atômico com o conhecimento adquirido.

Já conhecemos o conceito de **Arquitetura Atômica** para o Mongoose, então vamos criar um *Schema* de usuário, primeiramente da forma simples:

```js
const userSchema = new Schema({
  name: String
, password: String
, email: String
, type: String
, created_at: { type: Date, default: Date.now }
});
```

Antes de tudo vamos criar um projeto novo chamado `mongoose-user` via `npm init`, depois instalando localmente o `mongoose` vamos copiar a pasta `fields` do projeto `mongoose-atomic` e colar na pasta do projeto `mongoose-user`, para podermos reaproveitar o código criado anteriormente.

Agora salve o código abaixo como `schema.js` na pasta do `mongoose-user`:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongoose-user-test');

const userSchema = new Schema({
  name: String
, password: String
, email: String
, type: String
, created_at: { type: Date, default: Date.now }
});
```

Depois disso vamos *atomizar* nosso *Schema* re-usando os *fields*:

```js
const userSchema = new Schema({
  name: require('./fields/fields-name')
, password: String
, email: String
, type: require('./fields/fields-type')
, created_at: { type: Date, default: Date.now }
});
```

Agora vamos criar os *fields* faltantes para `password`, `email` e `created_at`, você deve ter percebido que `name`, `password` e `email`
 são iguais.

> Então para que criar um arquivo para cada se podemos reaproveitar?

Calma que logo logo você entenderá essa separação, vamos continuar:

```js
const userSchema = new Schema({
  name: require('./fields/field-name')
, password: require('./fields/field-password')
, email: require('./fields/field-email')
, type: require('./fields/field-type')
, created_at: require('./fields/field-created_at')
});
```

Pronto agora *atomizamos* nossos *fields* então está na hora de trabalhar em cada campo para definir suas peculiaridades, vamos começar pelo `name` (`fields/field-name`):

```js
module.exports = { type: String }
```

Vamos definir para esse *Field*:

- *index*;
- *virtual*;
- *getter* e *setter*;
- *validate*.

```js
const _get = (v) => v.toUpperCase();
const _set = (v) => v.toLowerCase();
const _validate = (v) => v.length > 3

const Field = {
    type: String
  , get: _get
  , set: _set
  , validate: [_validate, 'Nome precisa ser maior que 3 caracteres']
  , required: true
  , index: true
}

module.exports = Field;
```



# Escrever aqui o que falta

Vamos separar os contextos, perceba que o `app.js` está com muita responsabilidade, por exemplo o objeto de `User` que tende a ser o *Controller*, então vamos refatorar esse código retirando o objeto `User` de `app.js` para um arquivo novo chamado `controller.js`, contendo o seguinte código:

```js
const Model = require('./model');
const Controller = {
  create: (req, res) => {
    Model.create(req, res);
  }
, retrieve: (req, res) => {
    Model.retrieve(req, res);
  }
, update: () => {
    const query = { name: /jean suissa/i };
    const mod = {name: 'Itacir Pompeu'};
    Model.update(req, res);
  }
, delete: () => {
    const query = { name: /Itacir Pompeu/i };
    Model.delete(req, res);
  }
};

module.exports = Controller;
```

Perceba que mudei o nome do objeto de `User` para `Controller` a fim de deixar o código mais genérico, você entenderá o porqueê mais para frente.

![](https://media.giphy.com/media/bYpgM8bi7QV3i/giphy.gif)

Tendo retirado o código anterior de `app.js` logicamente precisamos importar esse *Controller* para o `app`, ficando assim:

```js
'use strict';

const http = require('http');
const Controller = require('./controller');

http.createServer((req, res) => {
  let msg = '';
  switch(req.url){
    case '/api/users/create':
      msg = 'USUARIO CADASTRADO';
      Controller.create(req, res);
      break;
    default:
      msg = 'ROTA NAO ENCONTRADA';
      break;
  }
  res.end(msg);
}).listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});
```


Agora precisamos refatorar nossa função de `create`:

```js
create: () => {
  const obj = {
    name: 'Jean Suissa'
  , password: '1234567'
  , email: 'suissera@webschool.io'
  };
  Model.create(obj);
}
```

Para receber o objeto a ser inserido, esse objeto vem de onde?

![](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/src/images/rolling-eyes.gif?raw=true)

**Como não!??? Do objeto `req`!**

Então refatorando o código ficará:

```js
create: (req, res) => {
  Model.create(req, res);
}
```

Se refatorarmos essa função agora precisamos refatorar a função `create` do *Model*:

```js
create: (req, res) => {
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const obj = querystring.parse(queryData);
    User.create(obj, (err, data) => {
      if (err) return console.log('Erro:', err);
      return console.log('Inserido:', data);
    });
  });
}
```

**Caraio mas como que ficou assim!!???**

![](https://media.giphy.com/media/X5xgyBLedf70c/giphy.gif)

Se liga só!

Para recebermos dados no nosso servidor nós *escutaremos* o evento `data` do objeto *Request*(`req`), pois pense que você pode estar enviando um vídeo, logo não tem como o Node.js ter uma função para receber o vídeo inteiro, em vez disso precisamos apenas escutar o evento `data` até o *Request* emitir o evento `end`.

Sei que não é aula sobre `http`, mas o objeto de *Request* é uma instância de [http.IncomingMessage.](https://nodejs.org/api/http.html#http_class_http_incomingmessage) que implementa a interface de [Readable Stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) e uma interface de *Readable stream* é uma abstração para uma fonte de dados que você esteja lendo, em outras palavras os dados são lidos em um fluxo legível, palavras da própria documentação. :p

Ou seja, *(quase)*sempre que você for ler dados com o Node.js poderá utilizar essa interface para leitura de dados.

*ps: O Node.js não verifica se o `Content-Length` e o comprimento do corpo que tenham sido enviados são iguais ou não.*

Vamos voltar para o código, agora que ja o entendemos:

```js
create: (req, res) => {
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const obj = querystring.parse(queryData);
    User.create(obj, (err, data) => {
      if (err) return console.log('Erro:', err);
      return console.log('Inserido:', data);
    });
  });
}
```

Então entendemos que, enquanto nosso servidor recebe os dados ele vai adicionando em `queryData` para depois esse objeto ser *parseado*, por `querystring.parse`, de *string* para objeto quando executar o evento `end` de *Request*.

Para depois inserirmos com `User.create` e **PIMBA!**

![](https://cldup.com/CqPtMbgXnZ-1200x1200.png)

Agora que conseguimos chegar no banco precisamos retornar a resposta que retorna para o usuário, para isso precisamos refatorar o *Model*, pois é ele que recebe a resposta do Mongoose.

```js
create: (req, res) => {
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const obj = querystring.parse(queryData);
    User.create(obj, (err, data) => {
      console.log('criando');
      if (err) return console.log('Erro:', err);
      res.writeHead(200, {'Content-Type': 'application/json'});
      return res.end(JSON.stringify(data));
    });
  });
}
```

Como estamos criando uma API vamos retornar nossa resposta em forma de JSON, por isso esse trecho:

```js
res.writeHead(200, {'Content-Type': 'application/json'});
return res.end(JSON.stringify(data));
```

Onde `res.writeHead(200, {'Content-Type': 'application/json'})` escreve o cabeçalho da resposta e `res.end(JSON.stringify(data));` finaliza a conexão enviando os dados em formato de *string*(`JSON.stringify`).

A função `res.end` finaliza a conexão enviando uma *string* para o cliente, podemos utilizar a função `res.write` que além de *string* também aceita *buffer*, sendo `utf8` sua codificação padrão.

Vamos para a próxima função, *retrieve*. Para isso precisamos adicionar sua rota em `app.js`:

```js
'use strict';

const http = require('http');
const Controller = require('./controller');

http.createServer((req, res)=> {
  let msg = '';
  switch(req.url){
    case '/api/users/create':
      Controller.create(req, res);
      break;
    case '/api/users':
      Controller.retrieve(req, res);
      break;
    default:
      msg = 'ROTA NAO ENCONTRADA';
      break;
  }
}).listen(3000, ()=> {
  console.log('Servidor rodando em localhost:3000');
});
```

Agora vamos fazer a listagem dos usuários, então seguimos o mesmo padrão do *Create*, tanto em `app.js` como em `controller.js`, logo vamos refatorar o *Model.*

```js
retrieve: (req, res) => {
  const query = {};
  User.find(query, (err, data) => {
    if (err) return console.log('Erro:', err);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
  });
}
```


Não iremos perder mais tempo com isso pois usaremos o Express futuramente.

Então vamos fazer mais uma função do CRUD, o *Update*, para isso iniciamos adicionando sua rota no `app.js`:

```js
'use strict';

const http = require('http');
const url = require('url');
const Controller = require('./controller');

http.createServer((req, res)=> {
  var url_parts = url.parse(req.url);
  let msg = '';
  switch(url_parts.pathname){
    case '/api/users/create':
      Controller.create(req, res);
      break;
    case '/api/users':
      Controller.retrieve(req, res);
      break;
    case '/api/users/update':
      Controller.update(req, res);
      break;
    default:
      res.end('ROTA NAO ENCONTRADA');
      break;
  }
}).listen(3000, ()=> {
  console.log('Servidor rodando em localhost:3000');
});
```

O *Controller* fica com o padrão:

```js
update: (req, res) => {
  Model.update(req, res);
}
```

Porém olha como fica o *Model*:

```js
update: (req, res) => {
  let queryData = '';

  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const mod = querystring.parse(queryData);
    const url_parts = url.parse(req.url);
    const query = querystring.parse(url_parts.query);

    User.update(query, mod, (err, data) => {
      if (err) return console.log('Erro:', err);

      res.writeHead(200, {'Content-Type': 'application/json'});
      return res.end(JSON.stringify(data));
    });
  });
}
```

Utilizamos a mesma forma de pegar os valor da função `create`, a única diferença é como pegamos o valor da *query* então vamos analisar:

```js

const mod = querystring.parse(queryData);
//name=ValorNOVO
const url_parts = url.parse(req.url);
/*
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=valorBUSCADO',
  query: 'name=valorBUSCADO',
  pathname: '/api/users/update',
  path: '/api/users/update?name=valorBUSCADO',
  href: '/api/users/update?name=valorBUSCADO' }
*/
const query = querystring.parse(url_parts.query);
// { name: 'valorBUSCADO' }
```

Primeiramente *parseamos* `queryData` para pegar o conteúdo do envio, para depois utilizar `url.parse` para colocar os dados da *url* requisitada no objeto `url_parts` e depois precisamos apenas pegar o valor do atributo `url_parts.query`(`'name=valorBUSCADO'`), utilizando `querystring.parse` convertemos essa *string* no objeto `query` e **PIMBA!**

![pimba-gorduchinha](https://cldup.com/rvbIMjaIrG-3000x3000.jpeg)

Depois alteramos com `User.update` passando os objetos `query` e `mod` como parâmetros

```js
User.update(query, mod, (err, data) => {
  if (err) return console.log('Erro:', err);
  console.log('Alterado:', JSON.stringify(data));
  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
});
```

Agora para finalizar o CRUD faremos a função *Delete*, iniciando por adicionar sua rota em `app.js`:

```js
'use strict';

const http = require('http');
const url = require('url');
const Controller = require('./controller');

http.createServer((req, res)=> {
  var url_parts = url.parse(req.url);
  let msg = '';
  switch(url_parts.pathname){
    case '/api/users/create':
      Controller.create(req, res);
      break;
    case '/api/users':
      Controller.retrieve(req, res);
      break;
    case '/api/users/update':
      Controller.update(req, res);
      break;
    case '/api/users/delete':
      Controller.delete(req, res);
      break;
    default:
      msg = 'ROTA NAO ENCONTRADA';
      break;
  }
}).listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});
```

**Percebeu essa parte `url_parts = url.parse(req.url)`?**

Pois então, utilizamos ela para separar a *query* da *url* para que a requisição chegue na rota correta, se não a rota `api/users/update?name=valorNOVO` nunca chegará em `case '/api/users/update`.

Refatorando a função `delete` me `controller.js`:

```js
const Model = require('./model');
const Controller = {
  create: (req, res) => {
    Model.create(req, res);
  }
, retrieve: (req, res) => {
    Model.retrieve(req, res);
  }
, update: (req, res) => {
    Model.update(req, res);
  }
, delete: (req, res) => {
    Model.delete(req, res);
  }
};

module.exports = Controller;
```


```js
delete: (req, res) => {
  const url_parts = url.parse(req.url);
  const query = querystring.parse(url_parts.query);

  User.remove(query, (err, data) => {
    if (err) return console.log('Erro:', err);

    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(data));
  });
}
```

Ahhhhh agora você entendeu como pegar os valores da requisição na URL, vamos refatorar a função *Retrieve* para que ela aceite valores para buscar.

```js
retrieve: (req, res) => {
  const url_parts = url.parse(req.url);
  const query = querystring.parse(url_parts.query);

  User.find(query, (err, data) => {
    if (err) return console.log('Erro:', err);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
  });
}
```

Agora para fazer a função `get` usando `User.findOne` ficou bem fácil:


```js
get: (req, res) => {
  const url_parts = url.parse(req.url);
  const query = querystring.parse(url_parts.query);

  User.findOne(query, (err, data) => {
    if (err) return console.log('Erro:', err);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
  });
}
```

Então usaremos a função `retrieve` para listagem dos usuários e `get` para consultar 1 usuário, não esqueça de adicionar a rota em `app.js` e a função `controller.js`.

**Percebeu algum padrão nesse CRUD?**

![jogador de futebol fazendo sim com a cabeça](https://media.giphy.com/media/QWOKV8ERAshJm/giphy.gif)

Vamos então analisar o código de `model.js`:

```js
'use strict';

const url = require('url');
const querystring = require('querystring');
const mongoose = require('mongoose');
const Schema = require('./schema');
const User = mongoose.model('User', Schema);
const CRUD = {
  create: (req, res) => {
    let queryData = '';
    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const obj = querystring.parse(queryData);
      User.create(obj, (err, data) => {
        if (err) return console.log('Erro:', err);
        console.log('Inserido:', JSON.stringify(data));
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(data));
      });
    });
  }
, retrieve: (req, res) => {
    const url_parts = url.parse(req.url);
    const query = querystring.parse(url_parts.query);

    User.find(query, (err, data) => {
      if (err) return console.log('Erro:', err);

      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    });
  }
, get: (req, res) => {
    const url_parts = url.parse(req.url);
    const query = querystring.parse(url_parts.query);

    User.findOne(query, (err, data) => {
      if (err) return console.log('Erro:', err);

      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    });
  }
, update: (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const mod = querystring.parse(queryData);
      const url_parts = url.parse(req.url);
      const query = querystring.parse(url_parts.query);

      User.update(query, mod, (err, data) => {
        if (err) return console.log('Erro:', err);

        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(data));
      });
    });
  }
, delete: (req, res) => {
    const url_parts = url.parse(req.url);
    const query = querystring.parse(url_parts.query);

    User.remove(query, (err, data) => {
      if (err) return console.log('Erro:', err);

      res.writeHead(200, {'Content-Type': 'application/json'});
      return res.end(JSON.stringify(data));
    });
  }
};

module.exports = CRUD;
```

Perceba que o callback em cada função é o mesmo:

```js
(err, data) => {
  if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
}
```

Logo podemos encapsular sua lógica em uma função:

```js
const callback = (err, data) => {
  if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
}
```

Deixando assim o código de `model.js`:

```js
'use strict';

const url = require('url');
const querystring = require('querystring');
const mongoose = require('mongoose');
const Schema = require('./schema');
const User = mongoose.model('User', Schema);

const callback = (err, data, res) => {
  if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};

const CRUD = {
  create: (req, res) => {
    let queryData = '';
    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const obj = querystring.parse(queryData);
      User.create(obj, (err, data) => callback(err, data, res));
    });
  }
, retrieve: (req, res) => {
    const url_parts = url.parse(req.url);
    const query = querystring.parse(url_parts.query);

    User.find(query, (err, data) => callback(err, data, res));
  }
, get: (req, res) => {
    const url_parts = url.parse(req.url);
    const query = querystring.parse(url_parts.query);

    User.findOne(query, (err, data) => callback(err, data, res));
  }
, update: (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const mod = querystring.parse(queryData);
      const url_parts = url.parse(req.url);
      const query = querystring.parse(url_parts.query);

      User.update(query, mod, (err, data) => callback(err, data, res));
    });
  }
, delete: (req, res) => {
    const url_parts = url.parse(req.url);
    const query = querystring.parse(url_parts.query);

    User.remove(query, (err, data) => callback(err, data, res));
  }
};

module.exports = CRUD;
```

Nesse caso não podemos fazer apenas:

```js
User.create(obj, callback);
```

Pois para isso nosso callback deveria ter os mesmo parâmetros e como é nele que estamos devolvendo a resposta com `res.end(JSON.stringify(data))` precisamos então fazer a chamada da função para passar o *Request* como último parâmetro:

```js
(err, data) => callback(err, data, res)
```

Vamos refatorar essa parte:

```js
const url_parts = url.parse(req.url);
const query = querystring.parse(url_parts.query);
```

Pois ela também é usada em mais de 1 lugar, ficando assim:

```js
const getQuery = (req) => {
  return querystring.parse(url.parse(req.url).query);
};
```

Finalmente nosso código refatorado é esse:

```js
'use strict';

const url = require('url');
const querystring = require('querystring');
const mongoose = require('mongoose');
const Schema = require('./schema');
const User = mongoose.model('User', Schema);

const callback = (err, data, res) => {
  if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};

const getQuery = (req) => {
  return querystring.parse(url.parse(req.url).query);
};

const CRUD = {
  create: (req, res) => {
    let queryData = '';
    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const obj = querystring.parse(queryData);
      User.create(obj, (err, data) => callback(err, data, res));
    });
  }
, retrieve: (req, res) => {
    const query = getQuery(req);

    User.find(query, (err, data) => callback(err, data, res));
  }
, get: (req, res) => {
    const query = getQuery(req);

    User.findOne(query, (err, data) => callback(err, data, res));
  }
, update: (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const query = getQuery(req);
      const mod = querystring.parse(queryData);

      User.update(query, mod, (err, data) => callback(err, data, res));
    });
  }
, delete: (req, res) => {
    const query = getQuery(req);

    User.remove(query, (err, data) => callback(err, data, res));
  }
};

module.exports = CRUD;
```

Aproveitando o ensejo vamos ajeitar o `controller.js` para:

```js
const Model = require('./model');
const Controller = {
  create: Model.create
, retrieve: Model.retrieve
, get: Model.get
, update: Model.update
, delete: Model.delete
};

module.exports = Controller;
```


**Mais refatoração**

Dessa vez iremos refatorar algo muito importante em uma API REST, é a aceitação de diferentes verbos do HTTP na mesma rota, então vamos começar refatorando a rota `/api/users` para receber os verbos:

- `GET`
- `POST`
- `PUT`
- `DELETE`

Então veja como ficou o `swicth` das rotas em `app.js`:

```js
var url_parts = url.parse(req.url);
switch (url_parts.pathname) {
  case '/api/users':
    switch (req.method.toLowerCase()) {
      case 'get':
        Controller.retrieve(req, res);
        break;
      case 'post':
        Controller.create(req, res);
        break;
      case 'put':
        Controller.update(req, res);
        break;
      case 'delete':
        Controller.delete(req, res);
        break;
    }
    break;
  case '/api/users/get':
    Controller.get(req, res);
    break;
  default:
    res.end('ROTA NAO ENCONTRADA');
    break;
}
```

**Notou de onde vem o verbo?**

No *Request* há o atributo `method` que nos fornece essa informação, depois bastou criar um `switch` para testar qual o verbo é e chamar sua função correta.

Para finalizar essa refatoração vamos mudar o nome das funções:

- `retrieve` para `find`
- `get` para `findOne`
- `delete` para `remove`

Em `app.js`:

```js
'use strict';

const http = require('http');
const url = require('url');
const Controller = require('./controller-teste');

http.createServer((req, res) => {
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/api/users':
      switch (req.method.toLowerCase()) {
        case 'get':
          Controller.find(req, res);
          break;
        case 'post':
          Controller.create(req, res);
          break;
        case 'put':
          Controller.update(req, res);
          break;
        case 'delete':
          Controller.remove(req, res);
          break;
      }
      break;
    case '/api/users/get':
      Controller.findOne(req, res);
      break;
    default:
      res.end('ROTA NAO ENCONTRADA');
      break;
  }
}).listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});
```

Em `controller.js`:

```js
const Model = require('./model-teste');
const Controller = {
  create: Model.create
, find: Model.find
, findOne: Model.findOne
, update: Model.update
, remove: Model.remove
};

module.exports = Controller;
```

E para finalizar em `model`:

```js
'use strict';

const url = require('url');
const querystring = require('querystring');
const mongoose = require('mongoose');
const Schema = require('./schema-teste');
const User = mongoose.model('User', Schema);

const callback = (err, data, res) => {
  if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};

const getQuery = (req) => {
  return querystring.parse(url.parse(req.url).query);
};

const create = (req, res) => {
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const obj = querystring.parse(queryData);
    User.create(obj, (err, data) => callback(err, data, res));
  });
};

const find = (req, res) => {
  const query = getQuery(req);

  User.find(query, (err, data) => callback(err, data, res));
};

const findOne = (req, res) => {
  const query = getQuery(req);

  User.findOne(query, (err, data) => callback(err, data, res));
};

const update = (req, res) => {
  let queryData = '';

  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const query = getQuery(req);
    const mod = querystring.parse(queryData);

    User.update(query, mod, (err, data) => callback(err, data, res));
  });
};

const remove = (req, res) => {
  const query = getQuery(req);

  User.remove(query, (err, data) => callback(err, data, res));
};

const CRUD = {
  create
, find
, findOne
, update
, remove
};

module.exports = CRUD;
```

## Atomic Design

Essa estrutura que eu utilizo é baseada no [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) que utilizo no *front-end*, porém eu modifiquei um pouco essa metodologia para adicionar a parte de **Comportamento** para que eu pudesse extender ela com novas funcionalidades.

[Essa palestra está gravada aqui na InfoQ](http://www.infoq.com/br/presentations/atomic-design-behavior).

Nesse caso cada átomo possuirá um comportamento padrão que pode ser sobrescrito quando adicionado em uma molécula, também podendo mudar quando adicionado em um organismo.

Então vamos entender quais são suas partes.

### Átomo

O Átomo é a menor parte indivisível do Mongoose.

**Sabe qual é?**

![](https://media.giphy.com/media/uwZhzLqlV0cZq/giphy.gif)

Como visto anteriormente a parte *indivisível* da nossa arquitetura é o *Field* o qual possui seus atributos, os quais podem ser [quarks](http://nomadev.com.br/atomic-design-b%C3%B3sons-e-quarks-extended/).

Vamos analisar o *Field* `name`:

```js
const _get = (v) => v.toUpperCase();
const _set = (v) => v.toLowerCase();
const _validate = (v) => v.length > 3;

const Field = {
    type: String
  , get: _get
  , set: _set
  , validate: [_validate, 'Nome precisa ser maior que 3 caracteres']
  , required: true
  , index: true
}

module.exports = Field;
```

#### Quarks

Levando isso em consideração podemos dizer que as partes que formam nosso átomo são os quarks:

- type
- get
- set
- validate
- required
- index

Vamos refatorar o código, para reorganizar e refatorar o `validate` para objeto:

```js
// quarks
const quark_get = (v) => v.toUpperCase();
const quark_set = (v) => v.toLowerCase();
const quark_validate = {
        validator: (v) => v >= 3
      , message: 'Nome {VALUE} precisa ser maior que 3 caracteres'
      };

const Atom = {
  type: String
, get: quark_get
, set: quark_set
, validate: quark_validate
, required: true
, index: true
}

module.exports = Atom;
```

Vamos separar em arquivos os quarks que são funções ou objetos, pois podemos reaproveitá-las futuramente:

```js
// quark-toUpper.js
module.exports = (v) => v.toUpperCase();
```

```js
// quark-toLower.js
module.exports = (v) => v.toLowerCase();
```

```js
// quark-validate-string-lengthGTE3
module.exports = {
  validator: (v) => v >= 18
, message: 'Nome {VALUE} precisa ser maior que 3 caracteres'
};
```

Com isso o arquivo do átomo ficou assim:

```js
const Atom = {
  type: String
, get: require('./../quarks/quark-toUpper')
, set: require('./../quarks/quark-toLower')
, validate: require('./../quarks/quark-validate-string-lengthGTE3')
, required: true
, index: true
}

module.exports = Atom;
```

### Molécula

Sabendo que o *Field* é o Átomo logicamente a Molécula será o *Schema*, então vamos utilizar o seguinte *Schema*:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
  name: require('./fields/field-name')
}

module.exports = new Schema(Molecule);
```

### Organismo

Para finalizar esse conceito o o Organismo será o *Model*:

```js
const url = require('url');
const querystring = require('querystring');
const Schema = require('./schema');
const User = mongoose.model('User', Schema);

const callback = (err, data, res) => {
    if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};

const getQuery = (_url) => {
  const url_parts = url.parse(_url);
  return querystring.parse(url_parts.query);
};

const create = (req, res) => {

  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const obj = querystring.parse(queryData);
    User.create(obj, (err, data) => callback(err, data, res));
  });
};

const find = (req, res) => {
  const query = getQuery(req.url);
  User.find(query, (err, data) => callback(err, data, res));
};

const findOne = (req, res) => {
  const query = getQuery(req.url);
  User.findOne(query, (err, data) => callback(err, data, res));
};

const update = (req, res) => {
  let queryData = '';

  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const mod = querystring.parse(queryData);
    const query = getQuery(req.url);
    User.update(query, mod, (err, data) => callback(err, data, res));
  });
};

const remove = (req, res) => {
  const query = getQuery(req.url);
  User.remove(query, (err, data) => callback(err, data, res));
};

const CRUD = {
  create
, find
, findOne
, update
, remove
};

module.exports = CRUD;
```

Como o Organismo possui seu próprio comportamento(*Behavior*), podemos separar suas funções desse arquivo ficando:

```js
'use strict';

const mongoose = require('mongoose');
const url = require('url');
const querystring = require('querystring');
const Schema = require('./schema');
const User = mongoose.model('User', Schema);

const callback = (err, data, res) => {
    if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};

const getQuery = (_url) => {
  const url_parts = url.parse(_url);
  return querystring.parse(url_parts.query);
};

const create = require('./actions/action-create');
const find = require('./actions/action-find');
const findOne = require('./actions/action-findOne');
const update = require('./actions/action-update');
const remove = require('./actions/action-remove');

const CRUD = {
  create
, find
, findOne
, update
, remove
};

module.exports = CRUD;
```

Porém perceba que as *Actions* necessitam do `callback`e do `getQuery`, por isso vamos separá-los também:

```js
// action-get-query-http.js
module.exports = (_url) => {
  return require('querystring').parse(require('url').parse(_url).query);
};
```

```js
// action-response-200-json.js
module.exports = (err, data, res) => {
    if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};
```

Agora as *Actions* do *Field* ficam assim:

```js
// action-create.js
const callback = require('./action-response-200-json');

module.exports = (Model) => {
  return (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const obj = require('querystring').parse(queryData);
      Model.create(obj, (err, data) => callback(err, data, res));
    });
  };
};
```

```js
// action-find.js
const callback = require('./action-response-200-json');
const getQuery = require('./action-get-query-http');

module.exports = (Model) => {
  return (req, res) => {
    const query = getQuery(req.url);
    Model.find(query, (err, data) => callback(err, data, res));
  };
};
```

```js
// action-findOne
const callback = require('./action-response-200-json');
const getQuery = require('./action-get-query-http');

module.exports = (Model) => {
  return (req, res) => {
    const query = getQuery(req.url);
    Model.findOne(query, (err, data) => callback(err, data, res));
  };
};
```

```js
// action-update
const callback = require('./action-response-200-json');
const getQuery = require('./action-get-query-http');

module.exports = (Model) => {
  return (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const mod = require('querystring').parse(queryData);
      const query = getQuery(req.url);
      Model.update(query, mod, (err, data) => callback(err, data, res));
    });
  };
};
```

```js
// action-remove
const callback = require('./action-response-200-json');
const getQuery = require('./action-get-query-http');

module.exports = (Model) => {
  return (req, res) => {
    const query = getQuery(req.url);
    User.remove(query, (err, data) => callback(err, data, res));
  };
};
```

Logo atomizamos as 4 funções do CRUD para que possa ser reaproveitado em todos nossos futuros sistemas.

Agora o Organismo ficou assim:

```js
require('./db/config');
const mongoose = require('mongoose');
const Schema = require('./schema');
const Model = mongoose.model('User', Schema);

// Precisa passar o Model para as ações
const create = require('./actions/action-create')(Model);
const find = require('./actions/action-find')(Model);
const findOne = require('./actions/action-findOne')(Model);
const update = require('./actions/action-update')(Model);
const remove = require('./actions/action-remove')(Model);

const CRUD = {
  create
, find
, findOne
, update
, remove
};

module.exports = CRUD;
```

**Muito melhor não?**

![](https://media.giphy.com/media/LYDNZAzOqrez6/giphy.gif)

**UM ADENDO MUITO IMPORTANTE!!!**

Quando estava trabalhando com TDD nesse modelo senti falta de exportar o *Model* no *Organism* para facilitar nossa vida nos testes.

Por exemplo nesse teste:

```js
'use strict';

const Doador = require('./../Organisms/doadorOrganism');
const expect = require('chai').expect;

describe('Setter Schema doadorSchema', () => {
  // body...
  describe('setter to uppercase', () => {
    // body...
    it('primeiro nome ONLY lower case save in mongo', () => {
      const d = new Doador.Organism();
      const fieldTestName = 'primeiroNome';
      const fieldTestValue = 'ERNI';
      d[fieldTestName] = fieldTestValue;
      d.save((Doador) => {
        expect(Doador[fieldTestName]).to.be.equal('erni');
      });
    });
  });
});
```





