# MongoDB - Aula 02 - Exercício
autor: RUY OUTOR

## 1 - Criando o database be-mean-pokemons

> use be-mean-pokemons
switched to db be-mean-pokemons

## 2 - Listando databases

> show dbs
be-mean            0.063GB
be-mean-instagram  0.063GB
be-mean-pokemons   0.031GB
local              0.031GB

## 3 - Listando as coleções

> show collections
pokemons
system.indexes

## 4 - Inserindo pokemons

> bulbasaur = {"name" : "Bulbasaur", "description" : "Pode ser visto cochilando sob luz solar intensa. Há uma semente na sua parte traseira", "type" : "grama", "attack" : 30, "height" : 0.7, "defense" : 20}
{
        "name" : "Bulbasaur",
        "description" : "Pode ser visto cochilando sob luz solar intensa. Há uma semente na sua parte traseira",
        "type" : "grama",
        "attack" : 30,
        "height" : 0.7,
        "defense" : 20
}
> db.pokemons.insert(bulbasaur)

> charmander = {"name" : "Charmander", "description" : "A chama que arde na ponta da sua cauda é uma indicação das suas emoções", "type" : "fogo", "attack" : 30, "height" : 0.6, "defense" : 20}
{
        "name" : "Charmander",
        "description" : "A chama que arde na ponta da sua cauda é uma indicação das suas emoções",
        "type" : "fogo",
        "attack" : 30,
        "height" : 0.6,
        "defense" : 20
}
> db.pokemons.insert(charmander)

> charizard = {"name" : "Charizard", "description" : "Bicho feio que voa e cospe fogo", "type" : "fogo", "attack" : 40, "height" : 1.7, "defense" : 30}
{
        "name" : "Charizard",
        "description" : "Bicho feio que voa e cospe fogo",
        "type" : "fogo",
        "attack" : 40,
        "height" : 1.7,
        "defense" : 30
}
> db.pokemons.insert(charizard)

> squirtle = {"name" : "Squirtle", "description" : "Tartaruguinha gay", "type" : "agua", "attack" : 30, "height" : 0.5, "defense" : 30}
{
        "name" : "Squirtle",
        "description" : "Tartaruguinha gay",
        "type" : "agua",
        "attack" : 30,
        "height" : 0.5,
        "defense" : 30
}
> db.pokemons.insert(squirtle)

> caterpie = {"name" : "Caterpie", "description" : "Lagarta esfomiada", "type" : "inseto", "attack" : 20, "height" : 0.3, "defense" : 20}
{
        "name" : "Caterpie",
        "description" : "Lagarta esfomiada",
        "type" : "inseto",
        "attack" : 20,
        "height" : 0.3,
        "defense" : 20
}
> db.pokemons.insert(caterpie)


## 5 - Listando pokemons
> db.pokemons.find({})
{ "_id" : ObjectId("57a8df3dbf3e449cf3f49709"), "name" : "Bulbasaur", "description" : "Pode ser visto cochilando sob luz solar intensa. Há uma semente na sua parte traseira", "type" : "grama", "attack" : 30, "height" : 0.7, "defense" : 20 }
{ "_id" : ObjectId("57a8e0f1bf3e449cf3f4970a"), "name" : "Charmander", "description" : "A chama que arde na ponta da sua cauda é uma indicação das suas emoções", "type" : "fogo", "attack" : 30, "height" : 0.6, "defense" : 20 }
{ "_id" : ObjectId("57a8e1b2bf3e449cf3f4970b"), "name" : "Charizard", "description" : "Bicho feio que voa e cospe fogo", "type" : "fogo", "attack" : 40, "height" : 1.7, "defense" : 30 }
{ "_id" : ObjectId("57a8e2bcbf3e449cf3f4970c"), "name" : "Squirtle", "description" : "Tartaruguinha gay", "type" : "agua", "attack" : 30, "height" : 0.5, "defense" : 30 }
{ "_id" : ObjectId("57a8e331bf3e449cf3f4970d"), "name" : "Caterpie", "description" : "Lagarta esfomiada", "type" : "inseto", "attack" : 20, "height" : 0.3, "defense" : 20 }

## 6 - Buscando um pokemon
> query = {"name": "Charizard"}
{ "name" : "Charizard" }
> var poke = db.pokemons.findOne(query)
> poke
{
        "_id" : ObjectId("57a8e1b2bf3e449cf3f4970b"),
        "name" : "Charizard",
        "description" : "Bicho feio que voa e cospe fogo",
        "type" : "fogo",
        "attack" : 40,
        "height" : 1.7,
        "defense" : 30
}

## 7 - Alterando a descrição
> poke.description = "Bicho feio que voa e cospe fogo em adversários mais fortes"
Bicho feio que voa e cospe fogo em adversários mais fortes
> bd.pokemons.save(poke)
2016-08-08T20:16:35.686+0000 E QUERY    ReferenceError: bd is not defined
    at (shell):1:1
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> 