# MongoDB - Aula 02 - Exercício
autor: Marcelo Santana Martins


## Crie uma database chamada be-mean-pokemons (passo 1)
marcelo@marcelo-VirtualBox:~$ mongo be-mean-pokemons
MongoDB shell version: 3.0.7
connecting to: be-mean-pokemons
Mongo-Hacker 0.0.8
marcelo-VirtualBox(mongod-3.0.7) be-mean-pokemons>


## Listagem das databases (passo 2)
> show dbs
be-mean ? 0.078GB
be-mean-instagram ? 0.078GB
local ? 0.031GB


## Listagem das coleções (passo 3)
> show collections
> 


## Cadastro dos pokemons (passo 4)
> var pokemon = {'name':'Squirtle','description':'Squirtles shell is not merely used for protection.',attack: 30,defense: 30, height: 0.5 }
> db.pokemons.save(pokemon)
Inserted 1 record(s) in 128ms
WriteResult({
  "nInserted": 1
})

> var pokemon = {'name':'Chinchou','description':'Chinchou lets loose positive and negative electrical charges from its two antennas to make its prey faint.',attack: 20,defense: 20, height: 0.5 }
> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

> var pokemon = {'name':'Pichu','description':'Pichu charges itself with electricity more easily on days with thunderclouds or when the air is very dry.',attack: 20,defense: 10, height: 0.3 }
> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

> var pokemon = {'name':'Togepi','description':'As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pokémon',attack: 10,defense: 30, height: 0.3 }
> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

> var pokemon = {'name':'Togetic','description':'Togetic is said to be a Pokémon that brings good fortune.',attack: 20,defense: 40, height: 0.6 }
> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})


## Lista dos pokemons (passo 5)
> db.pokemons.find()
{
  "_id": ObjectId("5643cf3959b9f2f8f64d6c78"),
  "name": "Squirtle",
  "description": "Squirtles shell is not merely used for protection.",
  "attack": 30,
  "defense": 30,
  "height": 0.5
}
{
  "_id": ObjectId("5643cfc759b9f2f8f64d6c79"),
  "name": "Chinchou",
  "description": "Chinchou lets loose positive and negative electrical charges from its two antennas to make its prey faint.",
  "attack": 20,
  "defense": 20,
  "height": 0.5
}
{
  "_id": ObjectId("5643d04959b9f2f8f64d6c7a"),
  "name": "Pichu",
  "description": "Pichu charges itself with electricity more easily on days with thunderclouds or when the air is very dry.",
  "attack": 20,
  "defense": 10,
  "height": 0.3
}
{
  "_id": ObjectId("5643d12859b9f2f8f64d6c7b"),
  "name": "Togepi",
  "description": "As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pokémon",
  "attack": 10,
  "defense": 30,
  "height": 0.3
}
{
  "_id": ObjectId("5643d18b59b9f2f8f64d6c7c"),
  "name": "Togetic",
  "description": "Togetic is said to be a Pokémon that brings good fortune.",
  "attack": 20,
  "defense": 40,
  "height": 0.6
}
Fetched 5 record(s) in 13ms


## Pikachu (passo 6)
> var poke = {"name": "Pichu"}
> db.pokemons.findOne(poke)
{
  "_id": ObjectId("5643d04959b9f2f8f64d6c7a"),
  "name": "Pichu",
  "description": "Pichu charges itself with electricity more easily on days with thunderclouds or when the air is very dry.",
  "attack": 20,
  "defense": 10,
  "height": 0.3
}
Fetched 1 record(s) in 8ms



## Atualização do Pikachu (passo 6)
> poke.description = "The flame that burns at the tip of its tail is an indication of its emotions."
The flame that burns at the tip of its tail is an indication of its emotions.
> db.pokemons.save(poke)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
