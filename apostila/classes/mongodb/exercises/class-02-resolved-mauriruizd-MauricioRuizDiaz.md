# MongoDB - Aula 02 - Exercício
autor: Mauricio Ruiz Diaz

## Criar db
mongo be-mean-pokemons

## Listagem das databases (passo 2)
> show dbs
be-mean  0.078GB
blog     0.078GB
local    0.078GB
test     0.078GB

## Listagem das coleções (passo 3)
> show collections


## Cadastro dos pokemons (passo 4)
> var pokemon = { name : 'Quilava', description : 'Tira fogo e sopra ar quente', attack : 55, defense : 40, height : 2.11 }
> db.save(pokemon)
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = { name : 'Cloyster', description : 'Atira espinhas', attack : 65, defense : 65, height : 2.4 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = { name : 'Donphan', description : 'Vira bola e bate em todo mundo', attack : 120, defense : 120, height : 3.07 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = { name : 'Magnezone', description : 'Paraliza todo mundo com magnetismo', attack : 70, defense : 115, height : 12 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = { name : 'Archen', description : 'Revivido de um fosil. O ancestro de todos os passaros pokemon', attack : 112, defense : 45, height : 5 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

## Lista dos pokemons (passo 5)
> db.pokemons.find().pretty()
{
        "_id" : ObjectId("5643306d39d24ed267b4d0ff"),
        "name" : "Quilava",
        "description" : "Tira fogo e sopra ar quente",
        "attack" : 55,
        "defense" : 40,
        "height" : 2.11
}
{
        "_id" : ObjectId("5643314539d24ed267b4d100"),
        "name" : "Cloyster",
        "description" : "Atira espinhas",
        "attack" : 65,
        "defense" : 65,
        "height" : 2.4
}
{
        "_id" : ObjectId("5643318e39d24ed267b4d101"),
        "name" : "Donphan",
        "description" : "Vira bola e bate em todo mundo",
        "attack" : 120,
        "defense" : 120,
        "height" : 3.07
}
{
        "_id" : ObjectId("564331d839d24ed267b4d102"),
        "name" : "Magnezone",
        "description" : "Paraliza todo mundo com magnetismo",
        "attack" : 70,
        "defense" : 115,
        "height" : 12
}
{
        "_id" : ObjectId("5643331d39d24ed267b4d103"),
        "name" : "Archen",
        "description" : "Revivido de um fosil. O ancestro de todos os passaros pokemon",
        "attack" : 112,
        "defense" : 45,
        "height" : 5
}

## Pikachu (passo 6)
> var poke = db.pokemons.findOne({ name : 'Quilava' })

## Atualização do Pikachu (passo 7)
> poke.description = 'Joga fogo como louco'
Joga fogo como louco
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })