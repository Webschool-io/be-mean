# MongoDB - Aula 03 - Exercício
autor: Jonatas Sales

## Liste pokemons com altura maior que 0.5 (passo 1)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var query = {height: {$lt: 0.5}}
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642bebb3e7b13c695792c3e"),
  "name": "bolsonaro",
  "description": "burro pra caralho",
  "attack": 0,
  "defense": 0,
  "height": 0
}
Fetched 1 record(s) in 1ms
```
## Liste pokemons com altura maior ou igual que 0.5 (passo 2)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var query = {height: {$gte: 0.5}}
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642bd913e7b13c695792c3c"),
  "name": "Pikachu",
  "description": "rato amarelo",
  "attack": 24,
  "defense": 24,
  "height": 0.5
}
{
  "_id": ObjectId("5642bd913e7b13c695792c3d"),
  "name": "exnamorada",
  "description": "vagabunda",
  "attack": 100,
  "defense": 100,
  "height": 1.6
}
{
  "_id": ObjectId("5642bede3e7b13c695792c3f"),
  "name": "sherazzadi",
  "description": "Solta fogo e merda pela boca, mal comida",
  "attack": 0,
  "defense": 0,
  "height": 1.6
}
{
  "_id": ObjectId("5642bf373e7b13c695792c40"),
  "name": "malafaia",
  "description": "viado",
  "attack": 24,
  "defense": 24,
  "height": 1.9
}
Fetched 4 record(s) in 2ms
```

## Liste pokemons com altura menor ou igual que 0.5 (passo 3)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var query = {height: {$lte: 0.5}}
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642bd913e7b13c695792c3c"),
  "name": "Pikachu",
  "description": "rato amarelo",
  "attack": 24,
  "defense": 24,
  "height": 0.5
}
{
  "_id": ObjectId("5642bebb3e7b13c695792c3e"),
  "name": "bolsonaro",
  "description": "burro pra caralho",
  "attack": 0,
  "defense": 0,
  "height": 0
}
Fetched 2 record(s) in 1ms
```

## Liste todos os pokemons com o nome 'Pikachu' e com attack menor ou igual que 5 (passo 4)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{name: 'Pikachu'}, {attack: {$lte: 0.5}}]}
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 0ms
```

## Liste todos os pokemons com o attack maior ou igual que 48 e com height menor ou igual que 0.5 (passo 5)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{attack: {$lte: 48}}, {height: {$lte: 0.5}}]}
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642bd913e7b13c695792c3c"),
  "name": "Pikachu",
  "description": "rato amarelo",
  "attack": 24,
  "defense": 24,
  "height": 0.5
}
{
  "_id": ObjectId("5642bebb3e7b13c695792c3e"),
  "name": "bolsonaro",
  "description": "burro pra caralho",
  "attack": 0,
  "defense": 0,
  "height": 0
}
Fetched 2 record(s) in 1ms
```
