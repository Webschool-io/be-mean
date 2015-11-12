# MongoDB - Aula 02 - Exercício
autor: Paulo Tosi

##Criação das database

```
use be-mean-pokemons
switched to db be-mean-pokemons

```

## Listagem das databases (passo 2)

```
show dbs

be-mean                  0.078GB
be-mean-instagram  0.078GB
local                        0.078GB

```

## Listagem das coleções (passo 3)


```
show collections

```

## Cadastro dos pokemons (passo 4)

```
var pokemon = [{name: 'Fearow', description: 'passaro locao', type: 'passaro', attack: 50, defense: 30, height: 1.2},
{name: 'Arbok', description: 'Um cobra na ver', type:'cobra', attack: 40, defense: 100, height: 3.5},
{name: 'Raticate', description: 'Rato estranho', type:'rato', attack: 40, defense: 100, height: 0.7},
{name: 'Dima', description: 'Filha da puta', type:'Ladrao', attack: 13, defense: 100, height: 1.3},
{name: 'PT', description: 'bando de um filha da puta', type:'Ladrao', attack: 13, defense: 100, height: 1.3}]

db.pokemons.insert(pokemon)

BulkWriteResult({
    "writeErrors" : [ ],
    "writeConcernErrors" : [ ],
    "nInserted" : 5,
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

{ "_id" : ObjectId("5643fb9ee267de8e396719b3"), "name" : "Fearow", "description" : "passaro locao", "type" : "passaro", "attack" : 50, "defense" : 30, "height" : 1.2 }
{ "_id" : ObjectId("5643fb9ee267de8e396719b4"), "name" : "Arbok", "description" : "Um cobra na ver", "type" : "cobra", "attack" : 40, "defense" : 100, "height" : 3.5 }
{ "_id" : ObjectId("5643fb9ee267de8e396719b5"), "name" : "Raticate", "description" : "Rato estranho", "type" : "rato", "attack" : 40, "defense" : 100, "height" : 0.7 }
{ "_id" : ObjectId("5643fb9ee267de8e396719b6"), "name" : "Dima", "description" : "Filha da puta", "type" : "Ladrao", "attack" : 13, "defense" : 100, "height" : 1.3 }
{ "_id" : ObjectId("5643fb9ee267de8e396719b7"), "name" : "PT", "description" : "bando de um filha da puta", "type" : "Ladrao", "attack" : 13, "defense" : 100, "height" : 1.3 }

```

## Listar um determinado pokemon (passo 6)

```
var query = {"name" : "PT"}

var poke = db.pokemons.findOne(query)

poke

{
    "_id" : ObjectId("5643fb9ee267de8e396719b7"),
    "name" : "PT",
    "description" : "bando de um filha da puta",
    "type" : "Ladrao",
    "attack" : 13,
    "defense" : 100,
    "height" : 1.3
}

```


## Atualização do seu pokemon (passo 7)

```
poke.description = "banco de filha da puta, cuzão do caralho"

db.pokemons.save(poke)

WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

```