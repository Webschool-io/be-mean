# MongoDB - Aula 03 - Exercício
autor: Fellipe Pinheiro


## Liste todos Pokemons com a altura **menor que** 0.5;
```
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> var query = {height: {$lt: 0.5}}
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5644910686df9c8bbaa1d172"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletrico",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("5644915586df9c8bbaa1d173"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("5644918b86df9c8bbaa1d174"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3,
  "defense": 35
}
Fetched 3 record(s) in 1ms

```

## Liste todos Pokemons com a altura **maior ou igual que** 0.5
```
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> var query = {height: {$gte: 0.5}}
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564355fa17c6388471074b2d"),
  "name": "Eevee",
  "description": "There are a lot of evolutions",
  "attack": 55,
  "defense": 50,
  "height": 3,
  "type": "normal"
}
{
  "_id": ObjectId("56435a5ba43104534c4cf01d"),
  "name": "Jolteon",
  "description": "Electric evolution",
  "attack": 65,
  "defense": 60,
  "height": 8,
  "type": "electric"
}
{
  "_id": ObjectId("56435a5ba43104534c4cf01e"),
  "name": "Flareon",
  "description": "Fire evolution",
  "attack": 130,
  "defense": 60,
  "height": 9,
  "type": "fire"
}
{
  "_id": ObjectId("56435a5ba43104534c4cf01f"),
  "name": "Vaporeon",
  "description": "Water evolution",
  "attack": 65,
  "defense": 60,
  "height": 10,
  "type": "water"
}
{
  "_id": ObjectId("56435a5ba43104534c4cf020"),
  "name": "Leafeon",
  "description": "Graas evolution",
  "attack": 110,
  "defense": 130,
  "height": 10,
  "type": "grass"
}
{
  "_id": ObjectId("564491d086df9c8bbaa1d175"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
{
  "_id": ObjectId("5644923386df9c8bbaa1d176"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}


```

## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama
```
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{height: {$lte: 0.5}}, {type: 'grama'}]}
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5644915586df9c8bbaa1d173"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
Fetched 1 record(s) in 1ms
```

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5
```
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> var query = {$or: [{name: "Pikachu"}, {attack: {$lte: 0.5}}]}
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5644910686df9c8bbaa1d172"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletrico",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 1ms

```

## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5
```
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5644910686df9c8bbaa1d172"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletrico",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("5644915586df9c8bbaa1d173"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564491d086df9c8bbaa1d175"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 3 record(s) in 0ms

```