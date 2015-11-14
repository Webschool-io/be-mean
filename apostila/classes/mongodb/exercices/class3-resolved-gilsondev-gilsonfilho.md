# MongoDB - Aula 03 - Exercício

Autor: Gilson Filho


## 1. Liste todos os pokemons com a altura **menor que ** 0.5

```bash
be-mean-pokemons> var query = {height: {$lt: 0.5}}
be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643a6a374c9f8d5e993a639"),
  "name": "Pikachu",
  "description": "Rato eletrico",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 1ms
```

## 2. Liste todos os pokemons com a altura **maior ou igual que ** 0.5

```bash
be-mean-pokemons> var query = {height: {$lte: 0.5}}
be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643a6a374c9f8d5e993a639"),
  "name": "Pikachu",
  "description": "Rato eletrico",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 1ms
```

## 3. Liste todos os pokemons com a altura **menor ou igual que **0.5 **e** do tipo grama

```bash
be-mean-pokemons> var query = {$and: [{height: {$lte: 0.5}}, {type: "grass"}]}
be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643a6a374c9f8d5e993a639"),
  "name": "Bulbasaur",
  "description": "Bicho da Grama",
  "type": "grass",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 1ms
```

## 4. Liste todos os pokemons com o name "Pikachu" **OU** com attack **menor ou igual que** 0.5


```bash
be-mean-pokemons> var query = {$or: [{name: "Pikachu"}, {height: {$lte: 0.5}}]}
be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643a6a374c9f8d5e993a639"),
  "name": "Pikachu",
  "description": "Rato eletrico",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 1ms
```

## 5. Liste todos os pokemons com attack **maior ou igual que** 48 **E** com height **menos ou igual que** 0.5

```bash
be-mean-pokemons> var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643a6a374c9f8d5e993a639"),
  "name": "Pikachu",
  "description": "Rato eletrico",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 1ms
```
