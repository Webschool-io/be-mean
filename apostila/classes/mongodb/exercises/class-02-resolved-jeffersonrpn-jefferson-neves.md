# MongoDB - Aula 02 - Exercício
Autor: Jefferson Neves

## Create database

```
> use be-mean-pokemons
switched to db be-mean-pokemons
```

## List databases

```
> show dbs
be-mean   → 0.078GB
be-mean   → 0.078GB
local     → 0.078GB
```

## List collections

```
> show collections
```

## Insert data

```
> var pkmn1 = { name: "Bulbasaur", description: "BULBASAUR can be seen napping in bright sunlight. There is a seed on its back. By soaking up the suns rays, the seed grows progressively larger.", attack: 49, defense: 49, height: "7" }
> var pkmn2 = { name: "Charmander", description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when CHARMANDER is happy, and blazes when it is enraged.", attack: 52, defense: 43, height: "6" }
> var pkmn3 = { name: "Squirtle", description: "Its shell is not just for protection. Its rounded shape and the grooves on its surface minimize resistance in water, enabling SQUIRTLE to swim at high speeds.", attack: 48, defense: 65, height: "5" }
> var pkmn4 = { name: "Butterfree", description: "It has a superior ability to search for delicious honey from flowers. It can seek, extract, and carry honey from flowers blooming over six miles away.", attack: 45, defense: 50, height: "11" }
> var pkmn5 = { name: "Pidgeotto", description: "PIDGEOTTO claims a large area as its own territory. This POKMON flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.", attack: 60, defense: 55, height: "11" }
> var pkmn6 = { name: "Pikachu", description: "Whenever PIKACHU comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, its evidence that this POKEMON mistook the intensity of its charge.", attack: 55, defense: 40, height: "4" }

> db.pokemons.save(pkmn1)
Inserted 1 record(s) in 347ms
WriteResult({
  "nInserted": 1
})
> db.pokemons.save(pkmn2)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
> db.pokemons.save(pkmn3)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
> db.pokemons.save(pkmn4)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
> db.pokemons.save(pkmn5)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
> db.pokemons.save(pkmn6)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
```

## List data

```
> db.pokemons.find()
{
  "_id": ObjectId("5643dce8f18f9efb58762d4f"),
  "name": "Bulbasaur",
  "description": "BULBASAUR can be seen napping in bright sunlight. There is a seed on its back. By soaking up the suns rays, the seed grows progressively larger.",
  "attack": 49,
  "defense": 49,
  "height": "7"
}
{
  "_id": ObjectId("5643dcecf18f9efb58762d50"),
  "name": "Charmander",
  "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when CHARMANDER is happy, and blazes when it is enraged.",
  "attack": 52,
  "defense": 43,
  "height": "6"
}
{
  "_id": ObjectId("5643dceef18f9efb58762d51"),
  "name": "Squirtle",
  "description": "Its shell is not just for protection. Its rounded shape and the grooves on its surface minimize resistance in water, enabling SQUIRTLE to swim at high speeds.",
  "attack": 48,
  "defense": 65,
  "height": "5"
}
{
  "_id": ObjectId("5643dcf1f18f9efb58762d52"),
  "name": "Butterfree",
  "description": "It has a superior ability to search for delicious honey from flowers. It can seek, extract, and carry honey from flowers blooming over six miles away.",
  "attack": 45,
  "defense": 50,
  "height": "11"
}
{
  "_id": ObjectId("5643dcf4f18f9efb58762d53"),
  "name": "Pidgeotto",
  "description": "PIDGEOTTO claims a large area as its own territory. This POKMON flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
  "attack": 60,
  "defense": 55,
  "height": "11"
}
{
  "_id": ObjectId("5643dcf6f18f9efb58762d54"),
  "name": "Pikachu",
  "description": "Whenever PIKACHU comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, its evidence that this POKEMON mistook the intensity of its charge.",
  "attack": 55,
  "defense": 40,
  "height": "4"
}
Fetched 6 record(s) in 2ms
```

## Find data

```
> var query = { name: "Pidgeotto" }
> var poke = db.pokemons.findOne(query)
> poke
{
  "_id": ObjectId("5643dcf4f18f9efb58762d53"),
  "name": "Pidgeotto",
  "description": "PIDGEOTTO claims a large area as its own territory. This POKMON flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
  "attack": 60,
  "defense": 55,
  "height": "11"
}
```

## Modify data

```
> poke.description = "EDITED: "+poke.description
EDITED: PIDGEOTTO claims a large area as its own territory. This POKMON flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.
> poke
{
  "_id": ObjectId("5643dcf4f18f9efb58762d53"),
  "name": "Pidgeotto",
  "description": "EDITED: PIDGEOTTO claims a large area as its own territory. This POKMON flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
  "attack": 60,
  "defense": 55,
  "height": "11"
}
> db.pokemons.save(poke)
Updated 1 existing record(s) in 6ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```