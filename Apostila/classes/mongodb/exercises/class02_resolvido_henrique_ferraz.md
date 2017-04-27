## MongoDb - Aula 02 - Exercício

Autor: Henrique Ferraz

## Criar Collections

```
> use be-mean-pokemons
switched to db be-mean-pokemons

> show dbs
admin    0.000GB
be-mean  0.005GB
local    0.000GB

> show collections
> 
```

## Listagem pokemons

```
var pokemons = [{"name":"Rattata","description":"Pokemon tipo 1","types":"normal","attack":56,"defense":35,"height":"3"},{"name":"Charmander","description":"Pokemon tipo 1","types":"fire","attack":52,"defense":43,"height":"6"},{"name":"Charmeleon","description":"Pokemon tipo 2","types":"fire","attack":64,"defense":58,"height":"11"},{"name":"Wartortle","description":"Pokemon tipo 3","types":"water","attack":63,"defense":80,"height":"10"},{"name":"Blastoise","description":"Pokemon tipo 4","types":"water","attack":83,"defense":100,"height":"16"},{"name":"Caterpie","description":"Pokemon tipo 5","types":"bug","attack":30,"defense":35,"height":"3"},{"name":"Metapod","description":"Pokemon tipo 6","types":"bug","attack":20,"defense":55,"height":"7"},{"name":"Butterfree","description":"Pokemon tipo 7","types":"flying","attack":45,"defense":50,"height":"11"}]
```
## Éxercíocio 3
```
> pokemons
[
  {
    "name" : "Rattata",
    "description" : "Pokemon tipo 1",
    "types" : "normal",
    "attack" : 56,
    "defense" : 35,
    "height" : "3"
  },
  {
    "name" : "Charmander",
    "description" : "Pokemon tipo 1",
    "types" : "fire",
    "attack" : 52,
    "defense" : 43,
    "height" : "6"
  },
  {
    "name" : "Charmeleon",
    "description" : "Pokemon tipo 2",
    "types" : "fire",
    "attack" : 64,
    "defense" : 58,
    "height" : "11"
  },
  {
    "name" : "Wartortle",
    "description" : "Pokemon tipo 3",
    "types" : "water",
    "attack" : 63,
    "defense" : 80,
    "height" : "10"
  },
  {
    "name" : "Blastoise",
    "description" : "Pokemon tipo 4",
    "types" : "water",
    "attack" : 83,
    "defense" : 100,
    "height" : "16"
  },
  {
    "name" : "Caterpie",
    "description" : "Pokemon tipo 5",
    "types" : "bug",
    "attack" : 30,
    "defense" : 35,
    "height" : "3"
  },
  {
    "name" : "Metapod",
    "description" : "Pokemon tipo 6",
    "types" : "bug",
    "attack" : 20,
    "defense" : 55,
    "height" : "7"
  },
  {
    "name" : "Butterfree",
    "description" : "Pokemon tipo 7",
    "types" : "flying",
    "attack" : 45,
    "defense" : 50,
    "height" : "11"
  }
]
> 
```
## Éxercíocio 4
```
> db.pokemons.insert(pokemons)
BulkWriteResult({
  "writeErrors" : [ ],
  "writeConcernErrors" : [ ],
  "nInserted" : 8,
  "nUpserted" : 0,
  "nMatched" : 0,
  "nModified" : 0,
  "nRemoved" : 0,
  "upserted" : [ ]
})

```
## Éxercíocio 5
```
> db.pokemons.find()
{ "_id" : ObjectId("5901e7812a5b13c09de316f4"), "name" : "Rattata", "description" : "Pokemon tipo 1", "types" : "normal", "attack" : 56, "defense" : 35, "height" : "3" }
{ "_id" : ObjectId("5901e7812a5b13c09de316f5"), "name" : "Charmander", "description" : "Pokemon tipo 1", "types" : "fire", "attack" : 52, "defense" : 43, "height" : "6" }
{ "_id" : ObjectId("5901e7812a5b13c09de316f6"), "name" : "Charmeleon", "description" : "Pokemon tipo 2", "types" : "fire", "attack" : 64, "defense" : 58, "height" : "11" }
{ "_id" : ObjectId("5901e7812a5b13c09de316f7"), "name" : "Wartortle", "description" : "Pokemon tipo 3", "types" : "water", "attack" : 63, "defense" : 80, "height" : "10" }
{ "_id" : ObjectId("5901e7812a5b13c09de316f8"), "name" : "Blastoise", "description" : "Pokemon tipo 4", "types" : "water", "attack" : 83, "defense" : 100, "height" : "16" }
{ "_id" : ObjectId("5901e7812a5b13c09de316f9"), "name" : "Caterpie", "description" : "Pokemon tipo 5", "types" : "bug", "attack" : 30, "defense" : 35, "height" : "3" }
{ "_id" : ObjectId("5901e7812a5b13c09de316fa"), "name" : "Metapod", "description" : "Pokemon tipo 6", "types" : "bug", "attack" : 20, "defense" : 55, "height" : "7" }
{ "_id" : ObjectId("5901e7812a5b13c09de316fb"), "name" : "Butterfree", "description" : "Pokemon tipo 7", "types" : "flying", "attack" : 45, "defense" : 50, "height" : "11" }
> 

```
## Éxercíocio 6
```
> var query = {"name" : "Charmander"}
> query
{ "name" : "Charmander" }
> var poke = db.pokemons.findOne(query)
> poke
{
  "_id" : ObjectId("5901e7812a5b13c09de316f5"),
  "name" : "Charmander",
  "description" : "Pokemon tipo 1",
  "types" : "fire",
  "attack" : 52,
  "defense" : 43,
  "height" : "6"
}
```
## Éxercíocio 7
```
> poke.description
Pokemon tipo 1
> poke.description = "Pokemon com nova descrição"
Pokemon com nova descrição
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

```