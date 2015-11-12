# MongoDB - Aula 03 - Exercício
autor: Lucas de Oliveira

## Listando todos Pokemons com a altura menor que 0.5

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> query = {height: {$lt: 0.5}}
{
  "height": {
    "$lt": 0.5
  }
}
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56427d3334289cd2f8f7c21e"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56427d7534289cd2f8f7c21f"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
Fetched 2 record(s) in 1ms
```

## Listando todos Pokemons com a altura maior ou igual que 0.5

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> query = {height: {$gte: 0.5}}
{
  "height": {
    "$gte": 0.5
  }
}
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56427d8734289cd2f8f7c220"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("56427e8634289cd2f8f7c223"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 2 record(s) in 1ms
```

## Listando todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> query = {$and: [{height: {$lte: 0.5}}, {type: 'grama'}]}
{
  "$and": [
    {
      "height": {
        "$lte": 0.5
      }
    },
    {
      "type": "grama"
    }
  ]
}
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56427d7534289cd2f8f7c21f"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
Fetched 1 record(s) in 22ms
```

## Listando todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> query = {$or: [{name: 'Pikachu'}, {attack: {$lte: 0.5}}]}
{
  "$or": [
    {
      "name": "Pikachu"
    },
    {
      "attack": {
        "$lte": 0.5
      }
    }
  ]
}
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56427d3334289cd2f8f7c21e"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 16ms
```

## Listando todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5

```
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
{
  "$and": [
    {
      "attack": {
        "$gte": 48
      }
    },
    {
      "height": {
        "$lte": 0.5
      }
    }
  ]
}
lucas-Vostro-14-5480(mongod-2.4.9) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56427d3334289cd2f8f7c21e"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56427d7534289cd2f8f7c21f"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56427e8634289cd2f8f7c223"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 3 record(s) in 0ms
```
