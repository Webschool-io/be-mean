# MongoDB - Aula 02 - Exercício
autor: Anderson S Santos

## Criação do database (passo 1)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-instragram> use be-mean-pokemons
switched to db be-mean-pokemons
Mac-mini-de-Anderson(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: "Articuno", description: "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.", type: "ice", attack: 300, height: 2.0})
Inserted 1 record(s) in 1437ms
WriteResult({
  "nInserted": 1
})

## Listagem das databases (passo 2)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
be-mean            0.078GB
local              0.078GB

## Listagem das coleções (passo 3)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-pokemons> show collections
pokemons        0.000MB / 0.008MB
system.indexes  0.000MB / 0.008MB

## Cadastro dos pokemons (passo 4)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-pokemons> var pokemons = [{name: "Charizard", description: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.", type: "fire", attack: 100, height: 0.8 }, {name: "Blastoise", description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.", type: "water", attack: 100, height: 0.9}, {name: "Venusaur", description: "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.", type: "grass", attack: 90, height: 1.0}, {name: "Pidgeotto", description: "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.", type: "flying", attack: 85, height: 0.7}, {name: "Raichu", description: "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.", type: "eletric", attack: 110, height: 0.5}]

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemons)
Inserted 1 record(s) in 3ms
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

## Lista dos pokemons (passo 5)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56429df6ad5b2c885bd5cf86"),
  "name": "Articuno",
  "description": "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
  "type": "ice",
  "attack": 300,
  "height": 2
}
{
  "_id": ObjectId("56429e5bad5b2c885bd5cf88"),
  "name": "Charizard",
  "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
  "type": "fire",
  "attack": 100,
  "height": 0.8
}
{
  "_id": ObjectId("56429e5bad5b2c885bd5cf89"),
  "name": "Blastoise",
  "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
  "type": "water",
  "attack": 100,
  "height": 0.9
}
{
  "_id": ObjectId("56429e5bad5b2c885bd5cf8a"),
  "name": "Venusaur",
  "description": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
  "type": "grass",
  "attack": 90,
  "height": 1
}
{
  "_id": ObjectId("56429e5bad5b2c885bd5cf8b"),
  "name": "Pidgeotto",
  "description": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
  "type": "flying",
  "attack": 85,
  "height": 0.7
}
{
  "_id": ObjectId("56429e5bad5b2c885bd5cf8c"),
  "name": "Raichu",
  "description": "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
  "type": "eletric",
  "attack": 110,
  "height": 0.5
}

## Pikachu (passo 6)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name: "Raichu"})


## Atualização do Pikachu (passo 7)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-pokemons> poke.description = "pokemon eletrico"
Mac-mini-de-Anderson(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 3ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})