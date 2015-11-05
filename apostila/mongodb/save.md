## save

Nós também podemos inserir objetos utilizando o `save`, ele tanto insere como altera valores.

```
var p = {
  name: 'Vinho',
  price: 23,
  description: 'Suco de uva alcoolico'
}

suissacorp(mongod-2.4.8) be-mean> db.products.save(p)
Inserted 1 record(s) in 0ms

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
{
  "_id": ObjectId("546157b75b9f2b586cb31d0c"),
  "name": "Vinho",
  "price": 23,
  "description": "Suco de uva alcoolico"
}
Fetched 5 record(s) in 1ms -- Index[none]
```

Para alterarmos um valor com `save`, precisamos inicialmente buscar o objeto desejado com `findOne`, pois ele me retorna apenas o primeiro objeto achado. Caso eu usasse o `find`, mesmo retornando **um** objeto, ainda seria dentro de um *Array*.

Por isso usamos o `find` para listagem de registros e o `findOne` para consulta de registros.

Veja a diferença de retorno das duas funções:

```
var query = {name: 'Vinho'}
suissacorp(mongod-2.4.8) be-mean> var p = db.products.find(query)
suissacorp(mongod-2.4.8) be-mean> p
{
  "_id": ObjectId("546157b75b9f2b586cb31d0c"),
  "name": "Vinho",
  "price": 23,
  "description": "Suco de uva alcoolico"
}
Fetched 1 record(s) in 1ms -- Index[none]
suissacorp(mongod-2.4.8) be-mean> p.price
```

Não conseguimos acessar diretamente nosso objeto pois ele é retornado na forma de [cursor](http://docs.mongodb.org/manual/core/cursors/), que possui métodos especiais para acessar seus valores, [como visto aqui](http://docs.mongodb.org/manual/tutorial/iterate-a-cursor/).

Então precisamos utilizar o `findOne` pois ele retorna um objeto comum.

```
var p = db.products.findOne(query)

suissacorp(mongod-2.4.8) be-mean> p
{
  "_id": ObjectId("546157b75b9f2b586cb31d0c"),
  "name": "Vinho",
  "price": 12,
  "description": "Suco de uva alcoolico"
}

suissacorp(mongod-2.4.8) be-mean> p.price
12

suissacorp(mongod-2.4.8) be-mean> p.price = 23
23

suissacorp(mongod-2.4.8) be-mean> db.products.save(p)
Updated 1 existing record(s) in 1ms

```

Voltando na alteração com `save`, vamos buscar nosso objeto a ser modificado e modificar o valor do preço:

```
var p = db.products.findOne()

suissacorp(mongod-2.4.8) be-mean> p
{
  "_id": ObjectId("54614a0a5b9f2b586cb31d08"),
  "name": "Cachaça",
  "description": "Mé brasileiro",
  "price": 23
}

suissacorp(mongod-2.4.8) be-mean> p.price
23

suissacorp(mongod-2.4.8) be-mean> p.price = 12
12

suissacorp(mongod-2.4.8) be-mean> p
{
  "_id": ObjectId("54614a0a5b9f2b586cb31d08"),
  "name": "Cachaça",
  "description": "Mé brasileiro",
  "price": 12
}
```


Depois salvamos o objeto modificado:

```
db.products.save(p)
Updated 1 existing record(s) in 50ms

suissacorp(mongod-2.4.8) be-mean> db.products.find({name: 'Cachaça'})
{
  "_id": ObjectId("54614a0a5b9f2b586cb31d08"),
  "name": "Cachaça",
  "description": "Mé brasileiro",
  "price": 12
}
Fetched 1 record(s) in 1ms -- Index[none]

```
