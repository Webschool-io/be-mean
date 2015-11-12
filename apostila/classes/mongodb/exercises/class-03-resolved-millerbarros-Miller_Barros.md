# MongoDB - Aula 03 - Exercício
autor: Miller Barros

## Pokemons com a altura menor que 0.5
...
miller-nt(mongod-3.0.7) be-mean-pokemons> var query = {height: {$lt: 0.5}}
miller-nt(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "\_id": ObjectId("5643fcd754d8612c0d6f4c29"),
  "name": "Pikachu",
  "description": "O pokemon do Ash",
  "attack": 30,
  "defense": 20,
  "height": 0.4
}
{
  "\_id": ObjectId("5643fcd754d8612c0d6f4c2b"),
  "name": "Nidoran",
  "description": "Nidoran? has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
  "attack": 30,
  "defense": 20,
  "height": 0.4
}
Fetched 2 record(s) in 1ms
...

## Pokemons com a altura maior ou igual que 0.5
...
miller-nt(mongod-3.0.7) be-mean-pokemons> var query = {height: {$gte: 0.5}}
miller-nt(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "\_id": ObjectId("5643fcd754d8612c0d6f4c28"),
  "name": "Bulbasaur",
  "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "attack": 30,
  "defense": 20,
  "height": 0.7
}
{
  "\_id": ObjectId("5643fcd754d8612c0d6f4c2a"),
  "name": "Raichu",
  "description": "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
  "attack": 50,
  "defense": 30,
  "height": 0.8
}
{
  "\_id": ObjectId("5643fcd754d8612c0d6f4c2c"),
  "name": "Nidoqueen",
  "description": "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
  "attack": 50,
  "defense": 40,
  "height": 1.3
}
Fetched 3 record(s) in 5ms
...

## Pokemons com a altura menor ou igual que 0.5 E do tipo grama
...
miller-nt(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{height: {$gte: 0.5}},{type: 'grama'}]}
miller-nt(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 1ms
...
