# MongoDB - Aula 03 - Exercício
autor: Mate Paiva

## Liste todos Pokemons com a altura **menor que** 0.5;
```
levelho(mongod-3.0.7) be-mean-pokemons> var query = {height: {$lt:50}}
levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56466997888331064ae5020f"),
  "name": "Raichu",
  "description": "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
  "attack": 90,
  "defense": 55,
  "height": 8
}
{
  "_id": ObjectId("564669b4888331064ae50210"),
  "name": "Snorlax",
  "description": "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.",
  "attack": 110,
  "defense": 65,
  "height": 21
}
{
  "_id": ObjectId("564669bb888331064ae50211"),
  "name": "Vulpix",
  "description": "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.",
  "attack": 41,
  "defense": 40,
  "height": 6
}
{
  "_id": ObjectId("564669c0888331064ae50212"),
  "name": "Dragonite",
  "description": "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
  "attack": 134,
  "defense": 95,
  "height": 22
}
Fetched 4 record(s) in 2ms

```

## Liste todos Pokemons com a altura **maior ou igual que** 0.5
```
levelho(mongod-3.0.7) be-mean-pokemons> var query = {height: {$gte:50}}
levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564669c5888331064ae50213"),
  "name": "Lugia",
  "description": "Uma pokemona!",
  "attack": 90,
  "defense": 130,
  "height": 52
}
Fetched 1 record(s) in 1ms
```

## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama
```
levelho(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{height: {$lte:50}}, {type: 'grass'}]}
levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 1ms
```

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5
```
levelho(mongod-3.0.7) be-mean-pokemons> var query = {$or: [{attack: {$lte:50}}, {name: 'Pikachu'}]}
levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564669bb888331064ae50211"),
  "name": "Vulpix",
  "description": "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.",
  "attack": 41,
  "defense": 40,
  "height": 6
}
Fetched 1 record(s) in 1ms

```

## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5
```
levelho(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{attack: {$gte:48}}, {height: {$lte:50}}]}
levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56466997888331064ae5020f"),
  "name": "Raichu",
  "description": "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
  "attack": 90,
  "defense": 55,
  "height": 8
}
{
  "_id": ObjectId("564669b4888331064ae50210"),
  "name": "Snorlax",
  "description": "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.",
  "attack": 110,
  "defense": 65,
  "height": 21
}
{
  "_id": ObjectId("564669c0888331064ae50212"),
  "name": "Dragonite",
  "description": "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
  "attack": 134,
  "defense": 95,
  "height": 22
}
Fetched 3 record(s) in 2ms

```
