# MongoDB - Aula 03 - Exercício
autor: Bruno Stoffel Berté

## Liste todos Pokemons com a altura **menor que** 0.5;
```
brunoberte(mongod-3.0.7) be-mean-pokemons> var query = { height : { $lt : 0.5 } }
brunoberte(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 0ms
```

## Liste todos Pokemons com a altura **maior ou igual que** 0.5
```
brunoberte(mongod-3.0.7) be-mean-pokemons> var query = { height : { $gte : 0.5 } }
brunoberte(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5644727772b44f2ff6515819"),
  "name": "Bulbasaur",
  "description": "Bulbasaur can be seen napping in bright sunlight.",
  "type": "Seed",
  "attack": 30,
  "height": 0.7
}
{
  "_id": ObjectId("5644727772b44f2ff651581a"),
  "name": "Ivysaur",
  "description": "There is a bud on this Pokémon's back.",
  "type": "Seed",
  "attack": 30,
  "height": 1
}
{
  "_id": ObjectId("5644727772b44f2ff651581b"),
  "name": "Venusaur",
  "description": "There is a large flower on Venusaur's back.",
  "type": "Seed",
  "attack": 40,
  "height": 2
}
{
  "_id": ObjectId("5644727772b44f2ff651581c"),
  "name": "Charmander",
  "description": "The flame that burns at the tip of its tail is an indication of its emotions.",
  "type": "Lizard",
  "attack": 30,
  "height": 0.6
}
{
  "_id": ObjectId("5644727772b44f2ff651581d"),
  "name": "Charmeleon",
  "description": "Charmeleon mercilessly destroys its foes using its sharp claws. 222",
  "type": "Lizard",
  "attack": 30,
  "height": 1.1
}
Fetched 5 record(s) in 2ms
```


## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama
```
brunoberte(mongod-3.0.7) be-mean-pokemons> var query = { $and: [ { height : { $lte : 0.5 } }, { type : "grama"} ] }
brunoberte(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 0ms
```


## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5
```
brunoberte(mongod-3.0.7) be-mean-pokemons> var query = { $or : [ { name: "Pikacu" }, { attack: { $lt: 0.5 } }  ] }
brunoberte(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 2ms
```


## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5
```
brunoberte(mongod-3.0.7) be-mean-pokemons> var query = { $and : [ { attack: { $gte: 48 } }, { height: { $lte : 0.5 } } ] }
brunoberte(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 2ms
```
