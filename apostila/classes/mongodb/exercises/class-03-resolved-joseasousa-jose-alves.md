# MongoDB - Aula 03 - Exercício
autor: Jose Alves de Sousa Neto

## Liste todos Pokemons com a altura **menor que** 0.5;

    Mac-mini-de-Jose(mongod-3.0.6) be-mean-pokemons> var query = {height: {$lt: 0.5}} 
    Mac-mini-de-Jose(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("564410bca83e5026a18ae3b6"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    {
      "_id": ObjectId("564410bca83e5026a18ae3b7"),
      "name": "Bulbassauro",
      "description": "Chicote de trepadeira",
      "type": "grama",
      "attack": 49,
      "height": 0.4
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3ba"),
      "name": "Nidoran",
      "description": "É um roedor maroto",
      "attack": 3,
      "defense": 2,
      "height": 0.4
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3bb"),
      "name": "Meowth",
      "description": "É um gatinho maroto",
      "attack": 2,
      "defense": 2,
      "height": 0.4
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3be"),
      "name": "Krabby",
      "description": "Parente do Sirigueijo",
      "attack": 5,
      "defense": 4,
      "height": 0.4
    }
    Fetched 5 record(s) in 41ms

## Liste todos Pokemons com a altura **maior ou igual que** 0.5

    Mac-mini-de-Jose(mongod-3.0.6) be-mean-pokemons> var query = {height: {$gte: 0.5}} 
    Mac-mini-de-Jose(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("564410bca83e5026a18ae3b8"),
      "name": "Charmander",
      "description": "Esse é o cão chupando manga de fofinho",
      "type": "fogo",
      "attack": 52,
      "height": 0.6
    }
    {
      "_id": ObjectId("564410bca83e5026a18ae3b9"),
      "name": "Squirtle",
      "description": "Ejeta água que passarinho não bebe",
      "type": "água",
      "attack": 48,
      "height": 0.5
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3bc"),
      "name": "Psyduck",
      "description": "Pato doido feito o batiman",
      "attack": 3,
      "defense": 2,
      "height": 0.8
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3bd"),
      "name": "Machop",
      "description": "Pokemn maromba",
      "attack": 4,
      "defense": 2,
      "height": 0.8
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3bf"),
      "name": "Yveltal",
      "description": "When this legendary Pokemon wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures",
      "attack": 7,
      "defense": 4,
      "height": 5.8
    }
    Fetched 5 record(s) in 31ms


## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama

    var query = {$and: [{height: {$lte: 0.5}}, {type: "grama"}]} 
    Mac-mini-de-Jose(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("564410bca83e5026a18ae3b7"),
      "name": "Bulbassauro",
      "description": "Chicote de trepadeira",
      "type": "grama",
      "attack": 49,
      "height": 0.4
    }
    Fetched 1 record(s) in 60ms

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5

    var query = {$or: [{name: "Pikachu"}, {attack: {$lte: 0.5}}]} 
    Mac-mini-de-Jose(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("564410bca83e5026a18ae3b6"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    Fetched 1 record(s) in 1ms


## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5

    db.pokemons.find(query)
    {
      "_id": ObjectId("564410bca83e5026a18ae3b6"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    {
      "_id": ObjectId("564410bca83e5026a18ae3b7"),
      "name": "Bulbassauro",
      "description": "Chicote de trepadeira",
      "type": "grama",
      "attack": 49,
      "height": 0.4
    }
    {
      "_id": ObjectId("564410bca83e5026a18ae3b9"),
      "name": "Squirtle",
      "description": "Ejeta água que passarinho não bebe",
      "type": "água",
      "attack": 48,
      "height": 0.5
    }
    Fetched 3 record(s) in 2ms
