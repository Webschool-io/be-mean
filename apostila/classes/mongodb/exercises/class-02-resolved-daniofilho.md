# MongoDB - Aula 02 - Exercício
autor: Dânio Filho

## Listagem das databases (passo 2)

show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB

## Listagem das coleções (passo 3)


use be-mean
switched to db be-mean
show collections
restaurantes
system.indexes

use be-mean-instagram
switched to db be-mean-instagram
show collections
pokemons
system.indexes
teste


## Cadastro dos pokemons (passo 4)

var pokemon = {'name':'Cacturne','description':'Lorem ipsum dolor sit amet', 'attack': 115, 'defense': 68, height: 13 }
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {'name':'Chesnaught','description':'Maecenas non tincidunt sapien, in sodales augue.', 'attack': 107, 'defense': 49, height: 0 }
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {'name':'Phanpy','description':'Fusce blandit leo tristique sem facilisis luctus.', 'attack': 60, 'defense': 24, height: 5 }
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {'name':'Caterpie','description':'Suspendisse potenti. Nullam nec erat venenatis, cursus neque posuere.', 'attack': 30, 'defense': 35, height: 3 }
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {'name':'Voltorb','description':'Sed fringilla purus justo', 'attack': 30,'defense': 50, height: 5 }
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {'name':'Cherrim','description':'Quisque quis blandit eros.', 'attack': 60, 'defense': 70, height: 5 }
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {'name':'Glameow','description':'Nullam ornare sed nibh id gravida. ', 'attack': 55, 'defense': 42, height: 5 }
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

## Lista dos pokemons (passo 5)

db.pokemons.find()
{ "_id" : ObjectId("56427cfc03570fe3664c85ab"), "name" : "Cacturne", "description" : "Lorem ipsum dolor sit amet", "attack" : 115, "defense" : 68, "height" : 13 }
{ "_id" : ObjectId("56427cfe03570fe3664c85ac"), "name" : "Chesnaught", "description" : "Maecenas non tincidunt sapien, in sodales augue.", "attack" : 107, "defense" : 49, "height" : 0 }
{ "_id" : ObjectId("56427cfe03570fe3664c85ad"), "name" : "Phanpy", "description" : "Fusce blandit leo tristique sem facilisis luctus.", "attack" : 60, "defense" : 24, "height" : 5 }
{ "_id" : ObjectId("56427cfe03570fe3664c85ae"), "name" : "Caterpie", "description" : "Suspendisse potenti. Nullam nec erat venenatis, cursus neque posuere.", "attack" : 30, "defense" : 35, "height" : 3 }
{ "_id" : ObjectId("56427cfe03570fe3664c85af"), "name" : "Voltorb", "description" : "Sed fringilla purus justo", "attack" : 30, "defense" : 50, "height" : 5 }
{ "_id" : ObjectId("56427cfe03570fe3664c85b0"), "name" : "Cherrim", "description" : "Quisque quis blandit eros.", "attack" : 60, "defense" : 70, "height" : 5 }
{ "_id" : ObjectId("56427cfe03570fe3664c85b1"), "name" : "Glameow", "description" : "Nullam ornare sed nibh id gravida. ", "attack" : 55, "defense" : 42, "height" : 5 }


## Pikachu (passo 6)

var query = {name: "Voltorb"}
var poke = db.pokemons.findOne(query)


## Atualização do Pikachu (passo 6)

poke.description = "Descrição alterada"
Descrição alterada
db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
