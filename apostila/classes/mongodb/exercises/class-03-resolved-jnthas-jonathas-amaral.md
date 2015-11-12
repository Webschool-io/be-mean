# MongoDB - Aula 03 - Exercicio
autor: Jonathas Amaral

## Listando pokemons com altura < 0.5 (Passo 1)

```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.find({height: {$lt: 0.5}});
{
  "_id": ObjectId("5642a5d24f9f678b0b9d94af"),
  "name": "Oddish",
  "description": "Cara de cebola",
  "type": "weed",
  "attack": 30,
  "height": 0.1
}
{
  "_id": ObjectId("5642a6614f9f678b0b9d94b0"),
  "name": "Gastly",
  "description": "Bola 8 da sinuca",
  "type": "gas",
  "attack": 20,
  "height": 0.4
}
{
  "_id": ObjectId("5642a6c64f9f678b0b9d94b1"),
  "name": "Rattata",
  "description": "Ratata é bicho solto, ficar ligeiro ja faz parte do jogo",
  "type": "mouse",
  "attack": 30,
  "height": 0.1
}
Fetched 3 record(s) in 1ms


```

## Listando pokemons com altura >= 0.5 (Passo 2)

```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.find({height: {$gte: 0.5}});
{
  "_id": ObjectId("5642a5354f9f678b0b9d94ad"),
  "name": "Snorlax",
  "description": "Pokemon preguiçoso",
  "type": "sleeping",
  "attack": 60,
  "height": 0.6
}
{
  "_id": ObjectId("5642a5844f9f678b0b9d94ae"),
  "name": "Blastoise",
  "description": "Pokemon com bazooka",
  "type": "shellfish",
  "attack": 40,
  "height": 0.5
}
Fetched 2 record(s) in 1ms

```

## Listando pokemons com altura <= 0.5 e do tipo weed (Passo 3)

```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.find({height: {$lte: 0.5}, $and: [{type: 'weed'}]});
{
  "_id": ObjectId("5642a5d24f9f678b0b9d94af"),
  "name": "Oddish",
  "description": "Cara de cebola",
  "type": "weed",
  "attack": 30,
  "height": 0.1
}
Fetched 1 record(s) in 1ms

```

## Listando pokemons com nome Rattata ou com ataque <= 50 (Passo 4)

```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.find({name: 'Rattata', $or: [{attack: {$lte: 50}}]});
{
  "_id": ObjectId("5642a6c64f9f678b0b9d94b1"),
  "name": "Rattata",
  "description": "Ratata é bicho solto, ficar ligeiro ja faz parte do jogo",
  "type": "mouse",
  "attack": 30,
  "height": 0.1
}
Fetched 1 record(s) in 2ms
```

## Listando pokemons com ataque >= 48 e altura <= 0.8 (Passo 5)

```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.find({attack: {$gte: 48}, $and: [{height: {$lte: 0.8}}]});
{
  "_id": ObjectId("5642a5354f9f678b0b9d94ad"),
  "name": "Snorlax",
  "description": "Pokemon preguiçoso",
  "type": "sleeping",
  "attack": 60,
  "height": 0.6
}
Fetched 1 record(s) in 0ms
```






