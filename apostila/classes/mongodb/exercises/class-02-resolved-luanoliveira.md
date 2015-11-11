# MongoDB - Aula 02 - Exercício
autor: Luan Oliveira

## Listagem das databases (passo 2)
luanoliveira(mongod-3.0.7) be-mean-instagram> use be-mean-pokemons
switched to db be-mean-pokemons
luanoliveira(mongod-3.0.7) be-mean-pokemons> show dbs
local              0.078GB
be-mean-instagram  0.078GB
restaurantes       0.078GB
be-mean            0.078GB

## Listagem das coleções (passo 3)
luanoliveira(mongod-3.0.7) be-mean-pokemons> show collections
luanoliveira(mongod-3.0.7) be-mean-pokemons>

## Cadastro dos pokemons (passo 4)
var pokemons = []

pokemons.push({name: "Ivysaur", description: "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.", attack: "Overgrow", defense: 40, height: "1.0m"})

pokemons.push({name: "Metapod", description: "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.", attack: "Shed Skin", defense: 25, height: "0.7m"})

pokemons.push({name: "Butterfree", description: "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.", attack: "Compound Eyes", defense: 58, height: "1.1m"})

pokemons.push({name: "Ekans", description: "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.", attack: "Shed Skin", defense: 38, height: "2.0m"})

pokemons.push({name: "Sandslash", description: "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.", attack: "Sand Veil", defense: 42, height: "1.0m"})

pokemons.push({name: "Jigglypuff", description: "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.", attack: "Cute Charm", defense: 22, height: "0.5m"})

db.pokemons.insert(pokemons)

## Lista dos pokemons (passo 5)

luanoliveira(mongod-3.0.7) be-mean-pokemons> show collections
pokemons        0.003MB / 0.008MB
system.indexes  0.000MB / 0.008MB
luanoliveira(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5643bcf883ba0f9fe7048a4c"),
  "name": "Ivysaur",
  "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
  "attack": "Overgrow",
  "defense": 40,
  "height": "1.0m"
}
{
  "_id": ObjectId("5643bcf883ba0f9fe7048a4d"),
  "name": "Metapod",
  "description": "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
  "attack": "Shed Skin",
  "defense": 25,
  "height": "0.7m"
}
{
  "_id": ObjectId("5643bcf883ba0f9fe7048a4e"),
  "name": "Butterfree",
  "description": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
  "attack": "Compound Eyes",
  "defense": 58,
  "height": "1.1m"
}
{
  "_id": ObjectId("5643bcf883ba0f9fe7048a4f"),
  "name": "Ekans",
  "description": "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
  "attack": "Shed Skin",
  "defense": 38,
  "height": "2.0m"
}
{
  "_id": ObjectId("5643bcf883ba0f9fe7048a50"),
  "name": "Sandslash",
  "description": "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
  "attack": "Sand Veil",
  "defense": 42,
  "height": "1.0m"
}
{
  "_id": ObjectId("5643bcf883ba0f9fe7048a51"),
  "name": "Jigglypuff",
  "description": "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
  "attack": "Cute Charm",
  "defense": 22,
  "height": "0.5m"
}
Fetched 6 record(s) in 7ms

## Pikachu (passo 6)

luanoliveira(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({ name: "Ivysaur" })
luanoliveira(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5643bcf883ba0f9fe7048a4c"),
  "name": "Ivysaur",
  "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
  "attack": "Overgrow",
  "defense": 40,
  "height": "1.0m"
}

## Atualização do Pikachu (passo 6)
luanoliveira(mongod-3.0.7) be-mean-pokemons> poke.description = "Alter description"
Alter description
luanoliveira(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5643bcf883ba0f9fe7048a4c"),
  "name": "Ivysaur",
  "description": "Alter description",
  "attack": "Overgrow",
  "defense": 40,
  "height": "1.0m"
}
luanoliveira(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 23ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
