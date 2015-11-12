# MongoDB - Aula 02 - Exercício
autor: Tiago Emerick Borsanyi

## Crie uma database chamada be-mean-pokemons (passo 1)

```
use be-mean-pokemons
switched to db be-mean-pokemons
```

## Listagem das databases (passo 2)

```
show dbs
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
local              0.078GB
```

## Listagem das coleções (passo 3)

```
show collections
pokemons
system.indexes
teste
use be-mean-pokemons
switched to db be-mean-pokemons
show collections
pokemons
system.indexes
```

## Cadastro dos pokemons (passo 4)

var pokemon2 = [{name: 'Pidgeotto', description: 'Garras mega foda', type: 'Brird', attack: 58, height: 0.9}, {name: 'Kakuna', description: 'Poderes da cevada', type: 'cocoon', attack: 28, height: 0.7}, {name: 'Venusaur', description: 'Meio dinossauro com água de coco pra colocar no wisk', attack: 60, height: 10.6}]

```
var pokemon = [{name: 'Bulbassauro', description: 'Chicote de trepadeira', type: 'grama', attack: 49, height: 0.4}, {name: 'Charmander', description: 'Esse é o cão chupando manga de fofinho', type: 'fogo', attack: 52, height: 0.6}, {name: 'Squirtle', description: 'Ejeta água que passarinho não bebe', type: 'água', attack: 48, height: 0.5}]
db.pokemons.insert(pokemon)
BulkWriteResult({
	"writeErrors" : [ ],
	"writeConcernErrors" : [ ],
	"nInserted" : 3,
	"nUpserted" : 0,
	"nMatched" : 0,
	"nModified" : 0,
	"nRemoved" : 0,
	"upserted" : [ ]
})

> var pokemon2 = [{name: 'Pidgeotto', description: 'Garras mega foda', type: 'Brird', attack: 58, height: 0.9}, {name: 'Kakuna', description: 'Poderes da cevada', type: 'cocoon', attack: 28, height: 0.7}, {name: 'Venusaur', description: 'Meio dinossauro com água de coco pra colocar no wisk', attack: 60, height: 10.6}]
> db.pokemons.insert(pokemon2)
BulkWriteResult({
	"writeErrors" : [ ],
	"writeConcernErrors" : [ ],
	"nInserted" : 3,
	"nUpserted" : 0,
	"nMatched" : 0,
	"nModified" : 0,
	"nRemoved" : 0,
	"upserted" : [ ]
})
```

## Lista dos pokemons (passo 5)

```
db.pokemons.find()
{ "_id" : ObjectId("5643a0fd0de0851ffeecb67a"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type" : "electric", "attack" : 55, "height" : 0.4 }
{ "_id" : ObjectId("5643a79b5c013fb08a6d5b2e"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
{ "_id" : ObjectId("5643a79b5c013fb08a6d5b2f"), "name" : "Charmander", "description" : "Esse é o cão chupando manga de fofinho", "type" : "fogo", "attack" : 52, "height" : 0.6 }
{ "_id" : ObjectId("5643a79b5c013fb08a6d5b30"), "name" : "Squirtle", "description" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "height" : 0.5 }
{ "_id" : ObjectId("5643aa429f927bdc79712d88"), "name" : "Pidgeotto", "description" : "Garras mega foda", "type" : "Brird", "attack" : 58, "height" : 0.9 }
{ "_id" : ObjectId("5643aa429f927bdc79712d89"), "name" : "Kakuna", "description" : "Poderes da cevada", "type" : "cocoon", "attack" : 28, "height" : 0.7 }
{ "_id" : ObjectId("5643aa429f927bdc79712d8a"), "name" : "Venusaur", "description" : "Meio dinossauro com água de coco pra colocar no wisk", "attack" : 60, "height" : 10.6 }
```



## Pikachu (passo 6)

```
var query = {name: 'Pikachu'}
db.pokemons.findOne(query)
{
 "_id" : ObjectId("5643a0fd0de0851ffeecb67a"),
 "name" : "Pikachu",
 "description" : "Rato elétrico bem fofinho",
 "type" : "electric",
 "attack" : 55,
 "height" : 0.4
}
```



## Atualização do Pikachu (passo 6)

```
var query = {name: 'Pikachu'}
var pokeUpdate = db.pokemons.findOne(query)
pokeUpdate
{
	"_id" : ObjectId("5643a0fd0de0851ffeecb67a"),
	"name" : "Pikachu",
	"description" : "Rato elétrico bem fofinho",
	"type" : "electric",
	"attack" : 55,
	"height" : 0.4
}
> pokeUpdate.defense = 48
48
> pokeUpdate
{
	"_id" : ObjectId("5643a0fd0de0851ffeecb67a"),
	"name" : "Pikachu",
	"description" : "Rato elétrico bem fofinho",
	"type" : "electric",
	"attack" : 55,
	"height" : 0.4,
	"defense" : 48
}
```
