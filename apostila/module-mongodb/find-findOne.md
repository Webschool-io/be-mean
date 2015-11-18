## find

Lembrando da aula anterior quando falei que a busca com `find` retorna um cursor onde você deve iterar nele para buscar seus dados, hoje veremos a diferença dele para o `findOne`.

Como havia dito, o Mongoose irá converter esse cursor para `Array` então sempre quando quisermos **LISTAR** algo iremos utilizar o `find`.

**CUIDADO**

Mesmo você buscando diretamente com o `_id`


### _id

Esse `_id` que vocês devem ter visto nos registros inseridos nada mais é que um [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

Ele também é conhecido como `ObjectId` e ele é um tipo do BSON de 12-bytes, cconstruído usando:

4-bytes: valor que representa os segundos desde a época Unix;
3-bytes: identificador de máquina;
2-bytes: ID do processo;
3-bytes: contador, começando com um valor aleatório.
Sim essa porra é "**universalmente única**"!

O `_id` é nossa chave primária, olha aí relational-guys, é com ele que fazemos consultas específicas, por favor não esqueça disso!!!

### query

Para facilitar nossa vida iremos criar um JSON para nossa *query*, para isso iremos criar um JSON da seguinte forma:

```
var query = {name: 'Pikachu'}
```

Isso significa que iremos pesquisar apenas os Pokemons com o `name` igual a `Pikachu`.

Esse nosso objeto de `query` tem a mesma funcionalidade do tão conhecido `SELECT` dos bancos relacionais.

Eu já escrevi sobre [isso em 2010 no iMasters - Como utilizar selects com MongoDB](http://imasters.com.br/artigo/17308/mongodb/como-utilizar-selects-com-mongodb/?trace=1519021197&source=author-archive)

Claro que é bem defasado e escrito ainda com PHP ehhehehhehhe.

![](http://geradormemes.com/media/created/w0p6bh.jpg)

### fields

Se o nosso JSON de `query` é o `WHERE` do relacional, logo o JSON `fields` será o nosso `SELECT` onde o mesmo irá selecionar quais campos desejados na busca da `query`.

Para isso especificamos os campos desejados com `1` que significa `TRUE` ou os campos indesejados com `0` que significa `FALSE`

```
suissacorp(mongod-3.0.6) be-mean-instagram> var query = {name: 'Pikachu'}
suissacorp(mongod-3.0.6) be-mean-instagram> var fields = {name: 1, description: 1}
suissacorp(mongod-3.0.6) be-mean-instagram> db.pokemons.find(query, fields)
{
  "_id": ObjectId("564220f0613f89ac53a7b5d0"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho"
}
Fetched 1 record(s) in 1ms

```


### Operadores de Aritmética

#### < é $lt - less than

db.colecao.find({ "campo" : { $lt: value } } );
Retorna documentos com valores menores que value.

#### <= ou $lte - less than or equal

db.colecao.find({ "campo" : { $lte: value } } );
Retorna documentos com valores menores ou igual que value.

#### > ou $gt - greater than

db.colecao.find({ "campo" : { $gt: value } } );
Retorna documentos com valores maiores que value.

#### >= ou $gte - greater than or equal

db.colecao.find({ "campo" : { $gte: value } } );
Retorna documentos com valores maiores ou igual que value.

### Operadores Lógicos

#### $or

Retorna documentos caso a cláusula OU for verdadeira, ou seja, se **alguma das cláusulas forem verdadeiras**

##### Sintaxe

```js
{ $or : [ { campo1 : valor } , { campo2 : valor } ] }
```

##### Uso

Vamos buscar os Pokemons que possuam **OU** o `{name: Pikachu}` **OU** do tipo grama `{type: 'grama'}`.

#### $nor

Retorna documentos caso a cláusula negação do OU for verdadeira, ou seja, retorna **apenas documentos que não satisfaçam as cláusulas**.

##### Sintaxe

```js
{ $nor : [ { a : 1 } , { b : 2 } ] }
```

##### Uso

#### $and

Retorna documentos caso a cláusula E for verdadeira, ou seja, somente se **todos as cláusulas forem verdadeiras**.

##### Sintaxe

```js
{ $and: [ { a: 1 }, { a: { $gt: 5 } } ] }
```

##### Uso


### Operadores "Existênciais"

#### $exists

##### Sintaxe
```js
db.colecao.find( { campo : { $exists : true } } );
```
Retorna o objeto caso o campo exista.

##### Uso

### Operadores de Array

Antes de iniciar essa parte e já conhecendo sobre o `update`, pois foi dado anteriormente que esta parte, vamos deixar **todos** os pokemons com 1 ataque igual.

```js
var query = {}
var mod = {$set: {moves: ['investida']}}
var options = {multi: true}
db.pokemons.update(query, mod, options)
```

Pronto agora todos pokemons possuem um campo do tipo *Array*, para finalizar vamos adicionar 1 ataque para: Charmander, Squirtle e Bulbassauro.

```js
var query = {name: /pikachu/i}
var mod = {$push: {moves: 'choque do trovão'}}
db.pokemons.update(query, mod)

var query = {name: /squirtle/i}
var mod = {$push: {moves: 'hidro bomba'}}
db.pokemons.update(query, mod)

var query = {name: /charmander/i}
var mod = {$push: {moves: 'lança-chamas'}}
db.pokemons.update(query, mod)

var query = {name: /bulbassauro/i}
var mod = {$push: {moves: 'folha navalha'}}
db.pokemons.update(query, mod)
```

#### $in

O operador `$in` retorna o(s) documento(s) que possui(em) algum dos valores passados no `[Array_de_valores]`.

##### Sintaxe

```js
{ campo : { $in : [Array_de_valores] } }
```

##### Uso

Imaginemos que precisamos buscar todos Pokemons que possuam o ataque `choque do trovão`, pois o `investida` todos já possuem.

**DICA**: também pode usar **REGEX** aqui!

```js
var query = {moves: {$in: [/choque do trovão/i]}}
db.pokemons.find(query)
```

Pronto com isso achamos apenas o Pikachu.

#### $nin

Retorna documentos se nenhum dos valores for encontrado.

##### Sintaxe

```js
{ campo : { $nin :[ [Array_de_valores] ] } }
```

##### Uso

Podemos trazer todos Pokemons que não possuem o ataque `investida`.

```js
var query = {moves: {$nin: [/choque do trovão/i]}}
db.pokemons.find(query)
```

Nesse caso todos, excluindo o Pikachu.

#### $all

Retorna documentos se **todos** os valores foram encontrados.

##### Sintaxe

```js
{ campo : { $all :[ Array_de_valores ] } } )
```

##### Uso

Agora podemos buscar quais pokemons possuem os ataques `investida` e `hidro bomba`.

```js
var query = {moves: {$all: ['hidro bomba', 'investida']}}
db.pokemons.find(query)
```

Dessa vez retornará apenas o Squirtle.

### Operadores de Negação

#### $ne - not Equal

Retorna documentos se o valor não for igual.

##### Sintaxe

```js
{ campo : { $ne : valor} }
```

##### Uso

Podemos agora buscar **todos** os pokemons que não são do tipo `grama`.

```js
var query = {type: {$ne: 'grama'}}
db.pokemons.find(query)
```

**DICA**: Não aceita **REGEX!!!!**

##### Error

Caso tente passar um valor como **REGEX** o MongoDb retornará esse erro:

```
Error: error: {
  "$err": "Can't canonicalize query: BadValue Can't have regex as arg to $ne.",
  "code": 17287
}
```


#### $not

Retorna o objeto que não satisfaz a condição do campo, isso inclui documentos que não possuem o campo.

##### Sintaxe

```js
{ campo : { $not : { $gt: 666 } } }
```

##### Uso

Com esse operador iremos buscar os pokemons que não tem um `attack` acima de 50.

```js
var query = {attack: { $not : { $gt: 50 } } }
db.pokemons.find(query)
```

Percebeu que os documentos que não possuem o campo `attack` também retornaram e que `null` é menor que `50`.

E podemos usar **REGEX** para trazer todos os pokemons que não possuam o nome `Pikachu`.

```js
var query = { name : { $not : /pikachu/i } }
db.pokemons.find(query)
```
