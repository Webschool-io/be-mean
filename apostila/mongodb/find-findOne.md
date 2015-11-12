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

db.collection.find({ "campo" : { $lt: value } } );
Retorna objetos com valores menores que value.

#### <= ou $lte - less than or equal

db.collection.find({ "campo" : { $lte: value } } );
Retorna objetos com valores menores ou igual que value.

#### > ou $gt - greater than

db.collection.find({ "campo" : { $gt: value } } );
Retorna objetos com valores maiores que value.

#### >= ou $gte - greater than or equal

db.collection.find({ "campo" : { $gte: value } } );
Retorna objetos com valores maiores ou igual que value.

### Operadores Lógicos

$or
db.collection.find( { $or : [ { a : 1 } , { b : 2 } ] } )
db.foo.find( { name : "bob" , $or : [ { a : 1 } , { b : 2 } ] } )
Retorna objetos caso a cláusula OU for verdadeira.

$nor
db.collection.find( { $nor : [ { a : 1 } , { b : 2 } ] } )
Retorna objetos caso a cláusula negação do OU for verdadeira, ou seja, não pode encontrar nenhuma cláusula verdadeira.

$and
db.foo.insert( { a: [ 1, 10 ] } )
db.foo.find( { $and: [ { a: 1 }, { a: { $gt: 5 } } ] } )
Retorna objetos caso a cláusula E for verdadeira.


### Operadores "Existênciais"

$exists
db.collection.find( { campo : { $exists : true } } );
Retorna o objeto caso o campo exista.


### Operadores de Array

$in
db.collection.find( { campo : { $in : array } } );
db.products.find( { tags : { $in : [‘marvada’, ‘teste’] } } );
Retorna objetos se o valor foi encontrado.

$nin
db.collection.find({ tags : { $nin :[ ‘teste’] } } );
Retorna objetos se nenhum dos valores foi encontrado.

### Operadores de Negação

$ne
db.collection.find( { name : { $ne : ‘Pinga’} } );
Retorna objetos se o valor não for igual.


$not
db.collection.find( { campo : { $not : { $gt: 666 } } } );
Retorna o objeto que não satisfaz a condição do campo, isso inclui documentos que não possuem o campo.
