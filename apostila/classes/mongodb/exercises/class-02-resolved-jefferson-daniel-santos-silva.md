# MongoDB - Aula 02 - Exercício
autor: Jefferson Daniel (https://github.com/jeffersondanielss)

## 1 - Criando database

  ```
   use be-mean-pokemons
   switched to db be-mean-pokemons
  ```

## 2- Listando databases

  ```
  show dbs
  be-mean            0.078GB
  be-mean-instagram  0.078GB
  local              0.078GB
  ```

## 3- Listando collections

  ```
  show collections (Não retornou nada)
  ```

## 4- Inserindo pokemons

  ```
  var pk1 = {
    "name": "Blastoise",
    "description": "Blastoise has water spouts that protrude from its shell.",
    "type": "Water",
    "attack": 50,
    "height": 0.7
  }

  var pk2 = {
    "name": "Charmander",
    "description": "The flame that burns at the tip of its tail is an indication of its emotions.",
    "type": "Fire",
    "attack": 60,
    "height": 0.2
  }

  var pk3 = {
    "name": "Pikachu",
    "description": "Rato elétrico bem fofinho",
    "type": "electric",
    "attack": 55,
    "height": 0.4
  }

  var pk4 = {
    "name": "Bulbasaur",
    "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back.",
    "type": "Glass, Poison",
    "attack": 35,
    "height": 0.1
  }

  var pk5 = {
    'name': 'Caterpie'
    ,description:'larva lutadora'
    ,'type':'inseto'
    ,attack: 30
    ,height: 0.3
  }

  db.pokemons.insert(pk1)
  WriteResult({ "nInserted" : 1 })
  db.pokemons.insert(pk2)
  WriteResult({ "nInserted" : 1 })
  db.pokemons.insert(pk3)
  WriteResult({ "nInserted" : 1 })
  db.pokemons.insert(pk4)
  WriteResult({ "nInserted" : 1 })
  db.pokemons.insert(pk5)
  WriteResult({ "nInserted" : 1 })
  ```

## 5- Listando pokemons atuais

  AINDA TO SEM MONGO HACKER :/

  ```
  db.pokemons.find()

  { "_id" : ObjectId("5642b8fc5a9ee7a57d06589d"), "name" : "Blastoise", "description" : "Blastoise has water spouts that protrude from its shell.", "type" : "Water", "attack" : 50, "height" : 0.7 }
  { "_id" : ObjectId("5642b90e5a9ee7a57d06589e"), "name" : "Charmander", "description" : "The flame that burns at the tip of its tail is an indication of its emotions.", "type" : "Fire", "attack" : 60, "height" : 0.2 }
  { "_id" : ObjectId("5642b9125a9ee7a57d06589f"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type" : "electric", "attack" : 55, "height" : 0.4 }
  { "_id" : ObjectId("5642b9145a9ee7a57d0658a0"), "name" : "Bulbasaur", "description" : "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back.", "type" : "Glass, Poison", "attack" : 35, "height" : 0.1 }
  { "_id" : ObjectId("5642b9175a9ee7a57d0658a1"), "name" : "Caterpie", "description" : "larva lutadora", "type" : "inseto", "attack" : 30, "height" : 0.3 }
  ```

## 6- Buscando pokemon pelo nome e armazenando em uma variavel

  ```
  var search = db.pokemons.findOne( {name: 'Blastoise'} )
  search
  {
    "_id" : ObjectId("5642b8fc5a9ee7a57d06589d"),
    "name" : "Blastoise",
    "description" : "Blastoise has water spouts that protrude from its shell.",
    "type" : "Water",
    "attack" : 50,
    "height" : 0.7
  }
  ```

## 7- Modificando a description

  ```
  search.description = "Nova descrição após armazenar pokemon em uma variavel"
  Nova descrição após armazenar pokemon em uma variavel
  > db.pokemons.save(search)
  WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
  ```