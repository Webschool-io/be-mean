# MongoDB - Aula 03 - Exercício
autor: Jefferson Daniel (https://github.com/jeffersondanielss)

## Meus Pokemons

  ```
   > db.pokemons.find().pretty()

  {
    "_id" : ObjectId("5642b8fc5a9ee7a57d06589d"),
    "name" : "Blastoise",
    "description" : "Nova descrição após armazenar pokemon em uma variavel",
    "type" : "Water",
    "attack" : 50,
    "height" : 0.7
  }
  {
    "_id" : ObjectId("5642b90e5a9ee7a57d06589e"),
    "name" : "Charmander",
    "description" : "The flame that burns at the tip of its tail is an indication of its emotions.",
    "type" : "Fire",
    "attack" : 60,
    "height" : 0.2
  }
  {
    "_id" : ObjectId("5642b9125a9ee7a57d06589f"),
    "name" : "Pikachu",
    "description" : "Rato elétrico bem fofinho",
    "type" : "electric",
    "attack" : 55,
    "height" : 0.4
  }
  {
    "_id" : ObjectId("5642b9145a9ee7a57d0658a0"),
    "name" : "Bulbasaur",
    "description" : "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back.",
    "type" : "Glass, Poison",
    "attack" : 35,
    "height" : 0.1
  }
  {
    "_id" : ObjectId("5642b9175a9ee7a57d0658a1"),
    "name" : "Caterpie",
    "description" : "larva lutadora",
    "type" : "inseto",
    "attack" : 30,
    "height" : 0.3
  }
  ```

## 1 - Listar pokemons com height menor que 0.5

  ```
  var query = { height: { $lt: 0.5 } }
  > db.pokemons.find( query ).pretty()
  {
    "_id" : ObjectId("5642b90e5a9ee7a57d06589e"),
    "name" : "Charmander",
    "description" : "The flame that burns at the tip of its tail is an indication of its emotions.",
    "type" : "Fire",
    "attack" : 60,
    "height" : 0.2
  }
  {
    "_id" : ObjectId("5642b9125a9ee7a57d06589f"),
    "name" : "Pikachu",
    "description" : "Rato elétrico bem fofinho",
    "type" : "electric",
    "attack" : 55,
    "height" : 0.4
  }
  {
    "_id" : ObjectId("5642b9145a9ee7a57d0658a0"),
    "name" : "Bulbasaur",
    "description" : "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back.",
    "type" : "Glass, Poison",
    "attack" : 35,
    "height" : 0.1
  }
  {
    "_id" : ObjectId("5642b9175a9ee7a57d0658a1"),
    "name" : "Caterpie",
    "description" : "larva lutadora",
    "type" : "inseto",
    "attack" : 30,
    "height" : 0.3
  }
  ```

## 2- Listar pokemons com height maior ou igual que 0.5

  ```
  > var query = { height: { $gte: 0.5 } }
  > db.pokemons.find( query ).pretty()
  {
    "_id" : ObjectId("5642b8fc5a9ee7a57d06589d"),
    "name" : "Blastoise",
    "description" : "Nova descrição após armazenar pokemon em uma variavel",
    "type" : "Water",
    "attack" : 50,
    "height" : 0.7
  }
  ```

## 3- Listar pokemons com height menor ou igual que 0.5 e do tipo grama

  ```
  > var query = { $and: [ { height: { $lte: 0.5 } }, { type: 'grama' } ] }
  > db.pokemons.find( query ).pretty()
  >
  ```

## 4- Listar pokemons com name 'Pikachu' ou com Attack menor ou igual que 0.5

  ```
  > var query = { $or: [ { name: 'Pikachu' }, { attack: { $lte: 0.5 } } ] }
  > db.pokemons.find( query ).pretty()
  {
    "_id" : ObjectId("5642b9125a9ee7a57d06589f"),
    "name" : "Pikachu",
    "description" : "Rato elétrico bem fofinho",
    "type" : "electric",
    "attack" : 55,
    "height" : 0.4
  }
  ```

## 5- Listar pokemons com Attack maior ou igual que 48 e com height menor ou igual a 0.5


  ```
  > var query = { $and: [ { attack: { $gte: 48 } }, { height: { $lte: 0.5 } } ] }
  > db.pokemons.find( query ).pretty()
  {
    "_id" : ObjectId("5642b90e5a9ee7a57d06589e"),
    "name" : "Charmander",
    "description" : "The flame that burns at the tip of its tail is an indication of its emotions.",
    "type" : "Fire",
    "attack" : 60,
    "height" : 0.2
  }
  {
    "_id" : ObjectId("5642b9125a9ee7a57d06589f"),
    "name" : "Pikachu",
    "description" : "Rato elétrico bem fofinho",
    "type" : "electric",
    "attack" : 55,
    "height" : 0.4
  }
  ```