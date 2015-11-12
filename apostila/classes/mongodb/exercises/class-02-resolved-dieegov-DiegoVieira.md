# MongoDB - Aula 02 - Exercício
autor: Diego Vieira

## Criar database (passo 1)

C:\Users\diegovieira>mongo be-mean-pokemons
MongoDB shell version: 3.0.7
connecting to: be-mean-pokemons

## Listagem das databases (passo 2)

> show dbs
be-mean  0.078GB
local    0.078GB
>

## Listagem das coleções (passo 3)

> show collections
>

## Cadastro dos pokemons (passo 4)

> var pokemon = [{name:"Raikou",description:"Cachorro lendário eletrico",defense:30,attack:40,height:1.9}, {name:"Entei",description:"Cachorro lendário de fogo",defense:30,attack:60,height:2.1},{name:"Suicune",description:"Cachorro lendário de gelo",defense:50,attack:40,height:2},{name:"Articuno",description:"Ave lendário de gelo",defense:40,attack:40,height:1.7},{name:"Lugia ",description:"lendário mais badass que existe",defense:60,attack:50,height:5.2}];
> pokemon
[
        {
                "name" : "Raikou",
                "description" : "Cachorro lendário eletrico",
                "defense" : 30,
                "attack" : 40,
                "height" : 1.9
        },
        {
                "name" : "Entei",
                "description" : "Cachorro lendário de fogo",
                "defense" : 30,
                "attack" : 60,
                "height" : 2.1
        },
        {
                "name" : "Suicune",
                "description" : "Cachorro lendário de gelo",
                "defense" : 50,
                "attack" : 40,
                "height" : 2
        },
        {
                "name" : "Articuno",
                "description" : "Ave lendário de gelo",
                "defense" : 40,
                "attack" : 40,
                "height" : 1.7
        },
        {
                "name" : "Lugia ",
                "description" : "lendário mais badass que existe",
                "defense" : 60,
                "attack" : 50,
                "height" : 5.2
        }
]
> db.pokemons.insert(pokemon)
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

## Lista dos pokemons (passo 5)

> db.pokemons.find()
{ "_id" : ObjectId("56448b53e7835cf12d9fb4cc"), "name" : "Raikou", "description" : "Cachorro lendário eletrico", "defense" : 30, "attack" : 40, "height" : 1.9 }
{ "_id" : ObjectId("56448b53e7835cf12d9fb4cd"), "name" : "Entei", "description" : "Cachorro lendário de fogo", "defense" : 30, "attack" : 60, "height" : 2.1 }
{ "_id" : ObjectId("56448b53e7835cf12d9fb4ce"), "name" : "Suicune", "description" : "Cachorro lendário de gelo", "defense" : 50, "attack" : 40, "height" : 2 }
{ "_id" : ObjectId("56448b53e7835cf12d9fb4cf"), "name" : "Articuno", "description" : "Ave lendário de gelo", "defense" : 40, "attack" : 40, "height" : 1.7 }
{ "_id" : ObjectId("56448b53e7835cf12d9fb4d0"), "name" : "Lugia ", "description" : "lendário mais badass que existe", "defense" : 60, "attack" : 50, "height" : 5.2 }

## Buscar pokemon (passo 6)

> var query = {name: 'Entei'}
> var p = db.pokemons.findOne(query)
> p
{
        "_id" : ObjectId("56448b53e7835cf12d9fb4cd"),
        "name" : "Entei",
        "description" : "Cachorro lendário de fogo",
        "defense" : 30,
        "attack" : 60,
        "height" : 2.1
}


## Atualização do Pokemon (passo 7)
> p.description = "Cachorro lendário de fogo bonito pra caramba"
Cachorro lendário de fogo bonito pra caramba
> db.pokemons.save(p)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })




