# MongoDB - Aula 03 - Exercício
autor: Francisross Soares de Oliveira

#### Liste todos os pokemons com altura menor que 0.5

```
FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> var query = {height: {$lt: 0.5}}
FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564361bbdac2ae49ce8b809b"),
  "name": "Nidoran",
  "description": "Nidoran? has barbs that secrete a powerful poison. ",
  "attack": 47,
  "defense": 52,
  "height": 0.41
}
Fetched 1 record(s) in 2ms
```

#### Liste todos os pokemons com altura maior ou igual a 0.5
```
FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> var query = {height: {$gte: 0.5}}
FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564361bbdac2ae49ce8b8099"),
  "name": "Arbok",
  "description": "This Pokémon is terrifically strong in order to constrict things with its body.",
  "attack": 85,
  "defense": 69,
  "height": 3.5
}
{
  "_id": ObjectId("564361bbdac2ae49ce8b809a"),
  "name": "Sandshrew",
  "description": "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert.",
  "attack": 75,
  "defense": 85,
  "height": 0.61
}
{
  "_id": ObjectId("564361bbdac2ae49ce8b809c"),
  "name": "Nidoking",
  "description": "Fofinho =)",
  "attack": 102,
  "defense": 77,
  "height": 1.4
}
{
  "_id": ObjectId("564361bbdac2ae49ce8b809d"),
  "name": "Vulpix",
  "description": "At the time of its birth, Vulpix has one white tail. ",
  "attack": 41,
  "defense": 40,
  "height": 0.6
}
{
  "_id": ObjectId("564361bbdac2ae49ce8b809e"),
  "name": "Ninetales",
  "description": "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind.",
  "attack": 76,
  "defense": 75,
  "height": 0.5
}
Fetched 5 record(s) in 4ms
```

#### Listar todos os pokemons com altura <= 0.5 e do tipo 'grama'
```
FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{height: {$lte: 0.5}, type: 'grama'}]}
FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564361bbdac2ae49ce8b809e"),
  "name": "Ninetales",
  "description": "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind.",
  "attack": 76,
  "defense": 75,
  "height": 0.5,
  "type": "grama"
}
Fetched 1 record(s) in 1ms
```

#### Listar todos os pokemons name = 'Pikachu' ou attack <= 0.5
```
FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> var query = {$or: [{name: 'Pikachu', attack: {$lte: 0.5}}]}
FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 0ms
```
#### Lista todos os pokemons com attack >= 48 e altura <= 0.5
```
FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{attack: {$gte: 48}, height: {$lte: 0.5}}]}
FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564361bbdac2ae49ce8b809e"),
  "name": "Ninetales",
  "description": "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind.",
  "attack": 76,
  "defense": 75,
  "height": 0.5
}
Fetched 1 record(s) in 1ms
```
