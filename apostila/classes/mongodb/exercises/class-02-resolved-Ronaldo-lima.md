# MongoDB - Aula 02 - Exercício
autor: Ronaldo Lima

## Listagem das databases (passo 2)

show dbs
be-mean      0.078GB
local        0.078GB
restaurants  0.078GB


## Listagem das coleções (passo 3)
	
> show collections

## Cadastro dos pokemons (passo 4)

> db.pokemons.insert({'name':'Riolu', 'description':'Cabrinha da peste', 'type':'Lutador',attack: 70, defense: 65, height: 7})
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert({'name':'Lucario', 'description':'Cabra da peste', 'type':'Lutador',attack: 110, defense: 98, height: 12},{'name':'Yveltal', 'description':'pelo nome deve ser do mal', 'type':'Dark',attack: 131, defense: 95, height: 0},{'name':'Zygarde', 'description':'Undiscovered', 'type':'Dark',attack: 100, defense: 121, height: 0},{'name':'Sylveon', 'description':'Tipo fada lol ', 'type':'Fada',attack: 65, defense: 65, height: 0})
> db.pokemons.insert({'name':'Zygarde', 'description':'Undiscovered', 'type':'Dark',attack: 100, defense: 121, height: 0})
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert({'name':'Sylveon', 'description':'Tipo fada lol ', 'type':'Fada',attack: 65, defense: 65, height: 0})
WriteResult({ "nInserted" : 1 })

## Lista dos pokemons (passo 5)

> db.pokemons.find();
{ "_id" : ObjectId("5642a7fd3759c611d12799ef"), "name" : "Riolu", "description" : "Cabrinha da peste", "type" : "Lutador", "attack" : 70, "defense" : 65, "height" : 7 }
{ "_id" : ObjectId("5642a8683759c611d12799f0"), "name" : "Lucario", "description" : "Cabra da peste", "type" : "Lutador", "attack" : 110, "defense" : 98, "height" : 12 }
{ "_id" : ObjectId("5642a8be3759c611d12799f1"), "name" : "Yveltal", "description" : "pelo nome deve ser do mal", "type" : "Dark", "attack" : 131, "defense" : 95, "height" : 0 }
{ "_id" : ObjectId("5642a8ec3759c611d12799f2"), "name" : "Zygarde", "description" : "Undiscovered", "type" : "Dark", "attack" : 100, "defense" : 121, "height" : 0 }
{ "_id" : ObjectId("5642a8ff3759c611d12799f3"), "name" : "Sylveon", "description" : "Tipo fada lol ", "type" : "Fada", "attack" : 65, "defense" : 65, "height" : 0 }
> 

## Pokemon (passo 6)

> var query = {name: 'Lucario'}
> var poke = db.pokemons.findOne(query)
> poke
{
	"_id" : ObjectId("5642a8683759c611d12799f0"),
	"name" : "Lucario",
	"description" : "Cabra da peste",
	"type" : "Lutador",
	"attack" : 110,
	"defense" : 98,
	"height" : 12
}
> 

## Atualização do Pokemon (passo 6)

> poke.description = "Cabra da peste Azul"
Cabra da peste Azul
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> 

> poke.description
Cabra da peste Azul
> 