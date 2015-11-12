# MongoDB - Aula 02 - Exercício
autor: Otaviano Pires Amancio

## Listagem das databases (passo 2)

```
> use be-mean-pokemons
switched to db be-mean-pokemons

> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
be-mean-teste      0.078GB
local              0.078GB

```

## Listagem das coleções (passo 3)

```

> show collections
>

```

## Cadastro dos pokemons (passo 4)

```
> var pokemons = [{'name':'Psyduck','description':'Pato doidão','type': 'water', attack: 52, defense: 48, height: 0.8 },{'name':'Kakuna','description':'Esse é casca grossa','type': 'bug', attack: 25, defense: 50, height: 0.6 },{'name':'Victreebel','description':'Planta feia do caralho','type': 'grass', attack: 105, defense: 65, height: 1.7 },{'name':'Slowpoke','description':'Esse é bobo pra caralho','type': 'water',
attack: 65, defense: 65, height: 1.2 },{'name':'Charizard','description':'Eu taco fogo','type': 'fire', attack: 84, defense: 78, height: 1.7 }]
> pokemons
[
    {
        "name" : "Psyduck",
        "description" : "Pato doidão",
        "type" : "water",
        "attack" : 52,
        "defense" : 48,
        "height" : 0.8
    },
    {
        "name" : "Kakuna",
        "description" : "Esse é casca grossa",
        "type" : "bug",
        "attack" : 25,
        "defense" : 50,
        "height" : 0.6
    },
    {
        "name" : "Victreebel",
        "description" : "Planta feia do caralho",
        "type" : "grass",
        "attack" : 105,
        "defense" : 65,
        "height" : 1.7
    },
    {
        "name" : "Slowpoke",
        "description" : "Esse é bobo pra caralho",
        "type" : "water",
        "attack" : 65,
        "defense" : 65,
        "height" : 1.2
    },
    {
        "name" : "Charizard",
        "description" : "Eu taco fogo",
        "type" : "fire",
        "attack" : 84,
        "defense" : 78,
        "height" : 1.7
    }
]
db.pokemons.insert(pokemons)
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
> db.pokemons.find()
{ "_id" : ObjectId("564481fc8844881046640960"), "name" : "Psyduck", "description" :
"Pato doidão", "type" : "water", "attack" : 52, "defense" : 48, "height" : 0.8 }
{ "_id" : ObjectId("564481fc8844881046640961"), "name" : "Kakuna", "description" : "Esse é casca grossa", "type" : "bug", "attack" : 25, "defense" : 50, "height" : 0.6
}
{ "_id" : ObjectId("564481fc8844881046640962"), "name" : "Victreebel", "description" : "Planta feia do caralho", "type" : "grass", "attack" : 105, "defense" : 65, "height" : 1.7 }
{ "_id" : ObjectId("564481fc8844881046640963"), "name" : "Slowpoke", "description" : "Esse é bobo pra caralho", "type" : "water", "attack" : 65, "defense" : 65, "height" : 1.2 }
{ "_id" : ObjectId("564481fc8844881046640964"), "name" : "Charizard", "description"
: "Eu taco fogo", "type" : "fire", "attack" : 84, "defense" : 78, "height" : 1.7 }

```

## Buscar Pokemon (passo 6)

```
> var query = {"name" : "Psyduck"}
> var poke = db.pokemons.findOne(query)
> poke
{
    "_id" : ObjectId("564481fc8844881046640960"),
    "name" : "Psyduck",
    "description" : "Pato doidão",
    "type" : "water",
    "attack" : 52,
    "defense" : 48,
    "height" : 0.8
}

```

## Atualização do Pokemon (passo 7)

```
> var poke = db.pokemons.findOne(query)
> poke
{
    "_id" : ObjectId("564481fc8844881046640960"),
    "name" : "Psyduck",
    "description" : "Pato doidão",
    "type" : "water",
    "attack" : 52,
    "defense" : 48,
    "height" : 0.8
}
> poke.description
Pato doidão
> poke.description = "Esse tem uma enxaqueca da ruim"
Esse tem uma enxaqueca da ruim
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.findOne(query)
{
    "_id" : ObjectId("564481fc8844881046640960"),
    "name" : "Psyduck",
    "description" : "Esse tem uma enxaqueca da ruim",
    "type" : "water",
    "attack" : 52,
    "defense" : 48,
    "height" : 0.8
}

```


