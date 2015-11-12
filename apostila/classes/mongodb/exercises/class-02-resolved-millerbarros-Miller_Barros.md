# MongoDB - Aula 02 - Exercício
autor: Miller Barros

...
miller-nt(mongod-3.0.7) test> use be-mean-pokemons
switched to db be-mean-pokemons
...

## Listagem das databases (passo 2)
...
miller-nt(momiller-nt(mongod-3.0.7) be-mean-pokemons> show dbs
local   → 0.078GB
be-mean → 0.078GB
...

## Listagem das coleções (passo 3)
...
miller-nt(mongod-3.0.7) be-mean-pokemons> show collections
...

## Cadastro dos pokemons (passo 4)
...
miller-nt(mongod-3.0.7) be-mean-pokemons> var pokemons = [{name:"Bulbasaur",description:"Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",attack:30,defense:20,height:0.7},{name:"Pikachu",description:"Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",attack:30,defense:20,height:0.4},{name:"Raichu",description:"If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",attack:50,defense:30,height:0.8},{name:"Nidoran",description:"Nidoran? has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",attack:30,defense:20,height:0.4},{name:"Nidoqueen",description:"Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",attack:50,defense:40,height:1.3}];
miller-nt(mongod-3.0.7) be-mean-pokemons> pokemons
[
  {
    "name": "Bulbasaur",
    "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    "attack": 30,
    "defense": 20,
    "height": 0.7
  },
  {
    "name": "Pikachu",
    "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    "attack": 30,
    "defense": 20,
    "height": 0.4
  },
  {
    "name": "Raichu",
    "description": "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
    "attack": 50,
    "defense": 30,
    "height": 0.8
  },
  {
    "name": "Nidoran",
    "description": "Nidoran? has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    "attack": 30,
    "defense": 20,
    "height": 0.4
  },
  {
    "name": "Nidoqueen",
    "description": "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    "attack": 50,
    "defense": 40,
    "height": 1.3
  }
]
miller-nt(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemons)
Inserted 1 record(s) in 972ms
BulkWriteResult({
  "writeErrors": [ ],
  "writeConcernErrors": [ ],
  "nInserted": 5,
  "nUpserted": 0,
  "nMatched": 0,
  "nModified": 0,
  "nRemoved": 0,
  "upserted": [ ]
})
...

## Lista dos pokemons (passo 5)
...
miller-nt(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "\_id": ObjectId("5643fcd754d8612c0d6f4c28"),
  "name": "Bulbasaur",
  "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "attack": 30,
  "defense": 20,
  "height": 0.7
}
{
  "\_id": ObjectId("5643fcd754d8612c0d6f4c29"),
  "name": "Pikachu",
  "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
  "attack": 30,
  "defense": 20,
  "height": 0.4
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
  "\_id": ObjectId("5643fcd754d8612c0d6f4c2b"),
  "name": "Nidoran",
  "description": "Nidoran? has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
  "attack": 30,
  "defense": 20,
  "height": 0.4
}
{
  "\_id": ObjectId("5643fcd754d8612c0d6f4c2c"),
  "name": "Nidoqueen",
  "description": "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
  "attack": 50,
  "defense": 40,
  "height": 1.3
}
Fetched 5 record(s) in 25ms
...

## Pikachu (passo 6)
...
miller-nt(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name: 'Pikachu'})
miller-nt(mongod-3.0.7) be-mean-pokemons> poke
{
  "\_id": ObjectId("5643fcd754d8612c0d6f4c29"),
  "name": "Pikachu",
  "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
  "attack": 30,
  "defense": 20,
  "height": 0.4
}
...
## Atualização do Pikachu (passo 6)
...
miller-nt(mongod-3.0.7) be-mean-pokemons> poke.description = "O pokemon do Ash"
O pokemon do Ash
miller-nt(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 27ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
...
