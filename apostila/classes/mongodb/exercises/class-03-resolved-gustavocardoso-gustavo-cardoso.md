# MongoDB - Aula 02 - Exercício
autor: Gustavo Cardoso

## Listando pokemons com altura menor que 0.5

```
Grindhouse(mongod-3.0.4) be-mean-pokemons> var query = {height: {$lt: 0.5}}
Grindhouse(mongod-3.0.4) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("5645036ec7211828f46ca310"),
  "name": "Rotom",
  "description": "Research continues on this Pokémon, which could be the power source of a unique motor",
  "type": "electric",
  "attack": 30,
  "defense": 30,
  "height": 0.4
}
{
  "_id": ObjectId("564503bcc7211828f46ca311"),
  "name": "Yamask",
  "description": "Arose from the spirits of people interred in graves",
  "type": "ghost",
  "attack": 20,
  "defense": 40,
  "height": 0.3
}
Fetched 2 record(s) in 2ms
```

## Listando pokemons com altura maior ou igual a 0.5

```
Grindhouse(mongod-3.0.4) be-mean-pokemons> var query = {height: {$gte: 0.5}}
Grindhouse(mongod-3.0.4) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("56440f66a511bc2dc25a2e53"),
  "name": "Shedinja",
  "description": "A hard body doesn't move",
  "type": "bug",
  "attack": 50,
  "defense": 20,
  "height": 2.07
}
{
  "_id": ObjectId("56440ffda511bc2dc25a2e54"),
  "name": "Haunter",
  "description": "A dangerous pokemon",
  "type": "ghost",
  "attack": 30,
  "defense": 45,
  "height": 5.03
}
{
  "_id": ObjectId("5644103fa511bc2dc25a2e55"),
  "name": "Duskull",
  "description": "Can pass through any wall",
  "type": "ghost",
  "attack": 20,
  "defense": 40,
  "height": 2.07
}
{
  "_id": ObjectId("5644108aa511bc2dc25a2e56"),
  "name": "Froslass",
  "description": "A very nice and cute pokemon",
  "type": "ice",
  "attack": 40,
  "defense": 30,
  "height": 4.03
}
{
  "_id": ObjectId("564410d5a511bc2dc25a2e57"),
  "name": "Phantump",
  "description": "They prefer to live in abandoned forests",
  "type": "grass",
  "attack": 40,
  "defense": 20,
  "height": 1.04
}
Fetched 5 record(s) in 3ms
```

## Listando pokemons com altura menor ou igual a 0.5 e do tipo grama

```
Grindhouse(mongod-3.0.4) be-mean-pokemons> var query = {$and: [{height: {$lte: 0.5}}, {type: "grass"}]}
Grindhouse(mongod-3.0.4) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("564410d5a511bc2dc25a2e57"),
  "name": "Phantump",
  "description": "They prefer to live in abandoned forests",
  "type": "grass",
  "attack": 40,
  "defense": 20,
  "height": 0.5
}
Fetched 1 record(s) in 1ms
```

## Listando os pokemons com o nome 'Pikachu' ou com attack menor ou igual a 0.5

```
Grindhouse(mongod-3.0.4) be-mean-pokemons> var query = {$or: [{name: "Pikachu"}, {attack: {$lte: 0.5}}]}
Grindhouse(mongod-3.0.4) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("564410d5a511bc2dc25a2e57"),
  "name": "Phantump",
  "description": "They prefer to live in abandoned forests",
  "type": "grass",
  "attack": 0.4,
  "defense": 20,
  "height": 0.5
}
{
  "_id": ObjectId("56450608522a41dc0db3501c"),
  "name": "Pikachu",
  "description": "A very cute pokemon",
  "type": "electric",
  "attack": 40,
  "defense": 50,
  "height": 0.3
}
Fetched 2 record(s) in 1ms
```

## Buscando pokemon

```
Grindhouse(mongod-3.0.4) be-mean-pokemons> var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
Grindhouse(mongod-3.0.4) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("56440f66a511bc2dc25a2e53"),
  "name": "Shedinja",
  "description": "A hard body doesn't move",
  "type": "bug",
  "attack": 50,
  "defense": 20,
  "height": 0.4
}
Fetched 1 record(s) in 1ms
```