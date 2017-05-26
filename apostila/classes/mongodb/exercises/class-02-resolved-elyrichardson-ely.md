# MongoDB - Aula 02 - Exercício
Autor: Ely Richardson 

## Create database

> use be-mean-pokemons
switched to db be-mean-pokemons
> db
be-mean-pokemons

## List databases

> show dbs
local           0.078GB
wikilibras-api  0.078GB

## List collections

> show collections
>

## Insert data

> var poke1 = {"name":"Magnemite", "description":"deu trabalho para encontrar","type":"electric",attack:35,height:0.6}
> db.pokemons.save(poke1)
WriteResult({ "nInserted" : 1 })
> var poke2 = {"name":"Gastly", "description":"deu trabalho para encontrar","type":"ghost", attack:35, height: 0.6}
> db.pokemons.save(poke2)
WriteResult({ "nInserted" : 1 })
> var poke3 = {"name":"Ivysaur", "description":"deu trabalho para encontrar","type":"grass",attack:62, height: 0.7}
> db.pokemons.save(poke3)
WriteResult({ "nInserted" : 1 })
> var poke4 = {"name":"Blastoise", "description":"deu trabalho para encontrar", "type":"water", attack:83, height: 0.4}
> db.pokemons.save(poke4)
WriteResult({ "nInserted" : 1 })
> var poke5 = {"name":"Caterpie", "description":"deu trabalho para encontrar", "type":"bug", attack:30, height: 0.3}
> db.pokemons.save(poke5)
WriteResult({ "nInserted" : 1 })
> var poke6 = {"name":"Pidgeotto", "description":"deu trabalho para encontrar", "type":"normal", attack:60, height: 0.6}
> db.pokemons.save(poke6)
WriteResult({ "nInserted" : 1 })
> var poke7 = {"name":"Raichu", "description":"pikachu mais foda", "type":"electric", attack:90, height: 0.6}
> db.pokemons.save(poke7)
WriteResult({ "nInserted" : 1 })

## List data

> db.pokemons.find()
{ "_id" : ObjectId("56449212cf5faf88f1c1ceb8"), "name" : "Magnemite", "description" : "deu trabalho para encontrar", "type" : "electric", "attack" : 35, "height" : 0.6 }
{ "_id" : ObjectId("56449222cf5faf88f1c1ceb9"), "name" : "Gastly", "description" : "deu trabalho para encontrar", "type" : "ghost", "attack" : 35, "height" : 0.6 }
{ "_id" : ObjectId("5644922dcf5faf88f1c1ceba"), "name" : "Ivysaur", "description" : "deu trabalho para encontrar", "type" : "grass", "attack" : 62, "height" : 0.7 }
{ "_id" : ObjectId("5644923acf5faf88f1c1cebb"), "name" : "Blastoise", "description" : "deu trabalho para encontrar", "type" : "water", "attack" : 83, "height" : 0.4 }
{ "_id" : ObjectId("56449246cf5faf88f1c1cebc"), "name" : "Caterpie", "description" : "deu trabalho para encontrar", "type" : "bug", "attack" : 30, "height" : 0.3 }
{ "_id" : ObjectId("56449258cf5faf88f1c1cebd"), "name" : "Pidgeotto", "description" : "deu trabalho para encontrar", "type" : "normal", "attack" : 60, "height" : 0.6 }
{ "_id" : ObjectId("56449263cf5faf88f1c1cebe"), "name" : "Raichu", "description" : "pikachu mais foda", "type" : "electric", "attack" : 90, "height" : 0.6 }

## Find data

> var query = {name:'Raichu'}
> var poke = db.pokemons.findOne(query)
> poke
{
	"_id" : ObjectId("56449263cf5faf88f1c1cebe"),
	"name" : "Raichu",
	"description" : "pikachu mais foda",
	"type" : "electric",
	"attack" : 90,
	"height" : 0.6
}

## Modify data

> poke.description = "descricao alterada"
descricao alterada
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

