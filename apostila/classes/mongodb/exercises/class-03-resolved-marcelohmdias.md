# MongoDB - Aula 03 - Exercício
autor: Marcelo H M Dias

## 1. Liste todos Pokemons com a altura menor que 0.5;

```
MH-Note(mongod-3.0.7) pokemons> var poke = {height: {$lt: 0.5}}
MH-Note(mongod-3.0.7) pokemons> db.pokemons.find(poke)
    {
      "_id": ObjectId("564274af7c67ab735900a427"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    {
      "_id": ObjectId("564275ca0e809dab0c949d65"),
      "name": "Bulbassauro",
      "description": "Chicote de trepadeira",
      "type": "grama",
      "attack": 49,
      "height": 0.4
    }
    Fetched 2 record(s) in 1ms
MH-Note(mongod-3.0.7) pokemons> 

```

## 2. Liste todos Pokemons com a altura maior ou igual que 0.5;

```
MH-Note(mongod-3.0.7) pokemons> var poke = {height: {$gte: 0.5}}
MH-Note(mongod-3.0.7) pokemons> db.pokemons.find(poke)
    {
      "_id": ObjectId("564275dc0e809dab0c949d66"),
      "name": "Squirtle",
      "description": "Ejeta água que passarinho não bebe",
      "type": "água",
      "attack": 48,
      "height": 0.5
    }
    {
      "_id": ObjectId("564275e80e809dab0c949d67"),
      "name": "Charmander",
      "description": "Esse é o cão chupando manga de fofinho",
      "type": "fogo",
      "attack": 52,
      "height": 0.6
    }
    Fetched 2 record(s) in 1ms
MH-Note(mongod-3.0.7) pokemons> 

```

## 3. Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama;

```
MH-Note(mongod-3.0.7) pokemons> var poke = {height: {$lte: 0.5}}
MH-Note(mongod-3.0.7) pokemons> db.pokemons.find(poke)
    {
      "_id": ObjectId("564274af7c67ab735900a427"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    {
      "_id": ObjectId("564275ca0e809dab0c949d65"),
      "name": "Bulbassauro",
      "description": "Chicote de trepadeira",
      "type": "grama",
      "attack": 49,
      "height": 0.4
    }
    {
      "_id": ObjectId("564275dc0e809dab0c949d66"),
      "name": "Squirtle",
      "description": "Ejeta água que passarinho não bebe",
      "type": "água",
      "attack": 48,
      "height": 0.5
    }
    Fetched 3 record(s) in 0ms
MH-Note(mongod-3.0.7) pokemons> 

```

## 4. Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5;

```
MH-Note(mongod-3.0.7) pokemons> var poke = {$or: [{name: 'Pikachu'}, {attack: {$lte: 0.5}}]}
MH-Note(mongod-3.0.7) pokemons> db.pokemons.find(poke)
    {
      "_id": ObjectId("564274af7c67ab735900a427"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    Fetched 1 record(s) in 1ms
MH-Note(mongod-3.0.7) pokemons>


```

## 5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5;

```
MH-Note(mongod-3.0.7) pokemons> var poke = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
MH-Note(mongod-3.0.7) pokemons> db.pokemons.find(poke)
    {
      "_id": ObjectId("564274af7c67ab735900a427"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    {
      "_id": ObjectId("564275ca0e809dab0c949d65"),
      "name": "Bulbassauro",
      "description": "Chicote de trepadeira",
      "type": "grama",
      "attack": 49,
      "height": 0.4
    }
    {
      "_id": ObjectId("564275dc0e809dab0c949d66"),
      "name": "Squirtle",
      "description": "Ejeta água que passarinho não bebe",
      "type": "água",
      "attack": 48,
      "height": 0.5
    }
    Fetched 3 record(s) in 1ms
MH-Note(mongod-3.0.7) pokemons>

```
