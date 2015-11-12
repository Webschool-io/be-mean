# MongoDB - Aula 03 - Exercício
autor: Natan Alves

##Liste todos Pokemons com a altura menor que 0.5
```
  stark(mongod-3.0.7) be-mean-pokemons> var query = { height: { $lt: 0.5 } };
  stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query);
  Fetched 0 record(s) in 15ms

```

## Liste todos Pokemons com a altura maior ou igual que 0.5
```
  stark(mongod-3.0.7) be-mean-pokemons> var query = { height: { $gte: 0.5 } };
stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("5642ad1c28bd7ce49be54023"),
  "name": "Mewtwo",
  "description": "Pokemon zika feito em laboratório",
  "type": "psychic",
  "attack": 110,
  "height": 2
}
{
  "_id": ObjectId("5642ad2428bd7ce49be54024"),
  "name": "Charizard",
  "description": "Dragão foda que cospe fogo",
  "type": "fire",
  "attack": 84,
  "height": 1.7
}
{
  "_id": ObjectId("5642ad6438764857c30e219e"),
  "name": "Zubat",
  "description": "Morcego do batman",
  "type": "poison",
  "attack": 45,
  "height": 0.8
}
{
  "_id": ObjectId("5642ad7438764857c30e219f"),
  "name": "Alakazam",
  "description": "Pira sua cabeça",
  "type": "rock",
  "attack": 50,
  "height": 1.5
}
{
  "_id": ObjectId("5642ad7838764857c30e21a0"),
  "name": "Onix",
  "description": "Snake de pedra",
  "type": "psychic",
  "attack": 45,
  "height": 8.8
}
Fetched 5 record(s) in 2ms

```

## Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama
```
  stark(mongod-3.0.7) be-mean-pokemons> var query = { $and: [ { height: { $lte: 0.5 } }, { type: 'grama' } ] };
  stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query);
  Fetched 0 record(s) in 1ms

```

## Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5
```
  stark(mongod-3.0.7) be-mean-pokemons> var query = { $or: [ { name: 'Pikachu' }, { attack: { $lte: 0.5 } } ] };
stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query);
Fetched 0 record(s) in 0ms

```

## Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5
```
  stark(mongod-3.0.7) be-mean-pokemons> var query = { $and: [ { attack: { $gte: 48 } }, { height: { $lte: 0.5 } } ] };
stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query);
Fetched 0 record(s) in 0ms

```
