# MongoDB - Aula 02 - Exercício
autor: Max Arouca

## Listagem das databases (passo 2)

MacMax(mongod-3.0.7) be-mean-instagram> use be-mean-pokemons
switched to db be-mean-pokemons
MacMax(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name:'', description:''})
Inserted 1 record(s) in 2436ms
WriteResult({
  "nInserted": 1
})
MacMax(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
be-mean            0.078GB
local              0.078GB

## Listagem das coleções (passo 3)

MacMax(mongod-3.0.7) be-mean-pokemons> show collections
pokemons        0.000MB / 0.008MB
system.indexes  0.000MB / 0.008MB

## Cadastro dos pokemons (passo 4)

var pokemon = {'name':'Wigglytuff','description':'Wigglytuff has large, saucerlike eyes','type': 'fairy', attack: 40, height: 1.0 }

db.pokemons.save(pokemon)

var pokemon = {'name':'Zubat','description':'Zubat remains quietly unmoving in a dark spot during the bright daylight hours.','type': 'poison', attack: 20, height: 0.8 }

db.pokemons.save(pokemon)

var pokemon = {'name':'Oddish','description':'Oddish buries itself in soil to absorb nutrients from the ground using its entire body','type': 'grass', attack: 30, height: 0.8 }

db.pokemons.save(pokemon)

var pokemon = {'name':'Gloom','description':'Gloom releases a foul fragrance from the pistil of its flower','type': 'grass', attack: 30, height: 0.8 }

db.pokemons.save(pokemon)

var pokemon = {'name':'Misdreavus','description':'Misdreavus frightens people with a creepy, sobbing cry','type': 'ghost', attack: 30, height: 0.7 }

db.pokemons.save(pokemon)

## Lista dos pokemons (passo 5)

be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56428a8909501b8c943c4a90"),
  "name": "",
  "description": ""
}
{
  "_id": ObjectId("56428bc409501b8c943c4a91"),
  "name": "Wigglytuff",
  "description": "Wigglytuff has large, saucerlike eyes",
  "type": "fairy",
  "attack": 40,
  "height": 1
}
{
  "_id": ObjectId("56428bef09501b8c943c4a92"),
  "name": "Zubat",
  "description": "Zubat remains quietly unmoving in a dark spot during the bright daylight hours.",
  "type": "poison",
  "attack": 20,
  "height": 0.8
}
{
  "_id": ObjectId("56428c2909501b8c943c4a93"),
  "name": "Oddish",
  "description": "Oddish buries itself in soil to absorb nutrients from the ground using its entire body",
  "type": "grass",
  "attack": 30,
  "height": 0.8
}
{
  "_id": ObjectId("56428c3a09501b8c943c4a94"),
  "name": "Gloom",
  "description": "Gloom releases a foul fragrance from the pistil of its flower",
  "type": "grass",
  "attack": 30,
  "height": 0.8
}
{
  "_id": ObjectId("56428c5109501b8c943c4a95"),
  "name": "Misdreavus",
  "description": "Misdreavus frightens people with a creepy, sobbing cry",
  "type": "ghost",
  "attack": 30,
  "height": 0.7
}



## Pikachu (passo 6)

MacMax(mongod-3.0.7) be-mean-pokemons> var query = {name: "Misdreavus"}
MacMax(mongod-3.0.7) be-mean-pokemons> var p = db.pokemons.findOne(query)
MacMax(mongod-3.0.7) be-mean-pokemons> p
{
  "_id": ObjectId("56428c5109501b8c943c4a95"),
  "name": "Misdreavus",
  "description": "Misdreavus frightens people with a creepy, sobbing cry",
  "type": "ghost",
  "attack": 30,
  "height": 0.7
}



## Atualização do Pikachu (passo 6)

MacMax(mongod-3.0.7) be-mean-pokemons> p.description = "The Pokémon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition"
The Pokémon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition
MacMax(mongod-3.0.7) be-mean-pokemons> p
{
  "_id": ObjectId("56428c5109501b8c943c4a95"),
  "name": "Misdreavus",
  "description": "The Pokémon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition",
  "type": "ghost",
  "attack": 30,
  "height": 0.7
}



