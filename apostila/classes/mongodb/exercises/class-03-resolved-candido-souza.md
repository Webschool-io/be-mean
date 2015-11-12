# MongoDB - Aula 03 - Exercício
autor: Candido Souza

## Listagem pokemons height < 0.5

```

dev(mongod-3.0.7) be-mean-pokemons> var query = {height : { $lt: 0.5} }
dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56429979766f48560d54c43b"),
  "name": "Pikachu",
  "description": "Rato elétrico",
  "type": "eletric",
  "attack": 100,
  "height": 0.4
}
{
  "_id": ObjectId("56429994766f48560d54c43c"),
  "name": "Bulbassauro",
  "description": "Chocote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564299c2766f48560d54c43f"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3
}
Fetched 3 record(s) in 2ms

```

## Listagem pokemons height >= 0.5

```

ev(mongod-3.0.7) be-mean-pokemons> var query = {height : { $gte: 0.5} }
dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564299a1766f48560d54c43d"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("564299b2766f48560d54c43e"),
  "name": "Squirtle",
  "description": "Bebedor de água ardente",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 2 record(s) in 1ms

```

## Listagem pokemons height <= 0.5 e type "grama"

```

dev(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{height: {$lte: 0.5}},{type: "grama"}]}
dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56429994766f48560d54c43c"),
  "name": "Bulbassauro",
  "description": "Chocote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
Fetched 1 record(s) in 1ms

```

## Listagem pokemons name "Pikachu" ou attack <= 0.5

```

dev(mongod-3.0.7) be-mean-pokemons> var query = {$or: [{name: "Pikachu"}, {attack: {$lte: 0.5}}]}
dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56429979766f48560d54c43b"),
  "name": "Pikachu",
  "description": "Rato elétrico",
  "type": "eletric",
  "attack": 100,
  "height": 0.4
}
Fetched 1 record(s) in 0ms

```

## Listagem pokemons attack >= 48 e height <= 0.5

```
dev(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56429979766f48560d54c43b"),
  "name": "Pikachu",
  "description": "Rato elétrico",
  "type": "eletric",
  "attack": 100,
  "height": 0.4
}
{
  "_id": ObjectId("56429994766f48560d54c43c"),
  "name": "Bulbassauro",
  "description": "Chocote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564299b2766f48560d54c43e"),
  "name": "Squirtle",
  "description": "Bebedor de água ardente",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 3 record(s) in 1ms

```