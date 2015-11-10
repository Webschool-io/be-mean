## insert

Você deve ter notado que o database `worksop-be-mean` não foi criado né? Porque o MongoDB só irá realmente criar seu database quando você inserir um objeto em uma coleção. Então vamos fazer isso:

```
db.teste.insert({a: true})
```

Listamos novamente com `show dbs` e voiala!

Perceba que a sintaxe de um comando no MongoDb é:

`database.coleção.função()`

```
db.teste.insert()

// Inserindo diretamente via parametro
db.teste.insert({a: true})

// Inserindo via variável
var json = {b: 'TESTE'}
db.teste.insert(json)

```

Quando usamos o comando `use`, ele muda nosso database e o aponta para a variável `db` usada no inicio dos comandos, então ela sempre apontará para e database atual, como podemos ver executando apenas seu nome:

```
db
be-mean

```

**Dica**: instale o `mongo-hacker`, ver no github, manualmente.

```
db.teste.find()
{
  "_id": ObjectId("546142385b9f2b586cb31d06"),
  "a": true
}
{
  "_id": ObjectId("546142665b9f2b586cb31d07"),
  "b": "TESTE"
}
```


### ObjectId

Você deve ter percebido esse campo após listarmos os objetos da nossa coleção

* [ObjectId](http://docs.mongodb.org/manual/reference/object-id/)

### Inserindo

Para inserir um objeto no MongoDb podemos criá-lo em uma variável e depois passar como parâmetro para a função `insert` ou `save`:

```
var product = {
  "name": "Cachaça",
  "description": "Mé brasileiro",
  "price": 12.00
}

suissacorp(mongod-2.4.8) be-mean> product
{
  "name": "Cachaça",
  "description": "Mé brasileiro",
  "price": 12
}

suissacorp(mongod-2.4.8) be-mean> db.products.insert(product)
Inserted 1 record(s) in 2ms

suissacorp(mongod-2.4.8) be-mean> db.products.find()
{
  "_id": ObjectId("54614a0a5b9f2b586cb31d08"),
  "name": "Cachaça",
  "description": "Mé brasileiro",
  "price": 12
}
Fetched 1 record(s) in 1ms -- Index[none]
```

Para inserir diversos registros de uma só vez podemos criar um array com nossos objetos como abaixo:

```
var ps = [
  {
    "name":"Pinga",
    "description":"da braba po tubão",
    "price": 4.50
  },
  {
    "name":"Uísque",
    "description":"Pra preiboi toma com energético",
    "price":80.00
  },
  {
    "name":"Champagne",
    "description":"só podia ser saopaulino",
    "price":130.00
  }
]

suissacorp(mongod-2.4.8) be-mean> ps
[
  {
    "name": "Pinga",
    "description": "da braba po tubão",
    "price": 4.5
  },
  {
    "name": "Uísque",
    "description": "Pra preiboi toma com energético",
    "price": 80
  },
  {
    "name": "Champagne",
    "description": "só podia ser saopaulino",
    "price": 130
  }
]

```


```
suissacorp(mongod-2.4.8) be-mean> db.products.find()
{
  "_id": ObjectId("54614a0a5b9f2b586cb31d08"),
  "name": "Cachaça",
  "description": "Mé brasileiro",
  "price": 12
}
{
  "_id": ObjectId("54614d5c5b9f2b586cb31d09"),
  "name": "Pinga",
  "description": "da braba po tubão",
  "price": 4.5
}
{
  "_id": ObjectId("54614d5c5b9f2b586cb31d0a"),
  "name": "Uísque",
  "description": "Pra preiboi toma com energético",
  "price": 80
}
{
  "_id": ObjectId("54614d5c5b9f2b586cb31d0b"),
  "name": "Champagne",
  "description": "só podia ser saopaulino",
  "price": 130
}
Fetched 4 record(s) in 1ms -- Index[none]

```

**Dica**: quando utilizar o comando `find` ou `findOne` e não tiver o mongo-hacker, utilize no final a função `pretty()`.

```
find().pretty()
```
