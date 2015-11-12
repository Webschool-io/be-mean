# MongoDB - Aula 03 - Exercício

autor: Lucas Moreira

## Liste todos Pokemons com a altura **menor que** 0.5

```
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-instagram> var query =
{heigth: {$lt: 0.5}}
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-instagram>
db.pokemons.find(query)
{
  "_id": ObjectId("5642744276cb4bb0ef93cbbc"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "heigth": 0.3,
  "defense": 35
}
Fetched 1 record(s) in 28ms
```

## Liste todos Pokemons com a altura **maior ou igual que** 0.5

```
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-instagram> var query =
{height: {$gte: 0.5}}
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-instagram>
db.pokemons.find(query)
{
  "_id": ObjectId("564272c076cb4bb0ef93cbba"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.5
}
{
  "_id": ObjectId("564272f276cb4bb0ef93cbbb"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 2 record(s) in 1ms
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-instagram> 
```

## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama

```
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-instagram> var query = {$and:
[{height: {$lte: 0.5}}, {type: 'grama'}]}
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-instagram>
db.pokemons.find(query)
{
  "_id": ObjectId("5642727676cb4bb0ef93cbb9"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
Fetched 1 record(s) in 2ms
```

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5

```
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-instagram> var query = {$or:
[{name: 'Pikachu'}, {attack: {$lte: 0.5}}]}
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-instagram>
db.pokemons.find(query)
{
  "_id": ObjectId("5642723a76cb4bb0ef93cbb8"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 26ms
```

## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com height **menor ou igual que** 0.5

```
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-instagram> var query = {$and:
[{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-instagram>
db.pokemons.find(query)
{
  "_id": ObjectId("5642723a76cb4bb0ef93cbb8"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("5642727676cb4bb0ef93cbb9"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564272c076cb4bb0ef93cbba"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.5
}
{
  "_id": ObjectId("564272f276cb4bb0ef93cbbb"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 4 record(s) in 3ms
```
