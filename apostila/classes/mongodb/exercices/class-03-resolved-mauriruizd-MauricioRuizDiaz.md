## MongoDB - Aula 02 - Exercício
autor : Mauricio Ruiz Diaz

## Liste todos Pokemons com a altura menor que 0.5

> var query = { height : { $lt : 0.5 } }
> db.pokemons.find(query).pretty()
{
        "_id" : ObjectId("564406426f3a5df04e2a86fa"),
        "name" : "Magnezone",
        "description" : "Paraliza todo mundo com magnetismo",
        "attack" : 70,
        "defense" : 115,
        "height" : 0.12,
        "type" : "magnetismo"
}

## Liste todos Pokemons com a altura maior ou igual que 0.5

> var query = { height : { $gte : 0.5 } }
> db.pokemons.find(query).pretty()
{
        "_id" : ObjectId("564406426f3a5df04e2a86f7"),
        "name" : "Quilava",
        "description" : "Tira fogo e sopra ar quente",
        "attack" : 55,
        "defense" : 40,
        "height" : 2.11,
        "type" : "grama"
}
{
        "_id" : ObjectId("564406426f3a5df04e2a86f8"),
        "name" : "Cloyster",
        "description" : "Atira espinhas",
        "attack" : 65,
        "defense" : 65,
        "height" : 2.4,
        "type" : "inseto"
}
{
        "_id" : ObjectId("564406426f3a5df04e2a86f9"),
        "name" : "Donphan",
        "description" : "Vira bola e bate em todo mundo",
        "attack" : 120,
        "defense" : 120,
        "height" : 3.07,
        "type" : "fogo"
}
{
        "_id" : ObjectId("564406426f3a5df04e2a86fb"),
        "name" : "Archen",
        "description" : "Revivido de um fosil. O ancestro de todos os passaros pokemon",
        "attack" : 112,
        "defense" : 45,
        "height" : 0.5,
        "type" : "ave"
}

## Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama

> var query = { $and : [ { height : { $lte : 0.5 } }, { type : 'grama' } ] }
> db.pokemons.find(query)
>

## Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5

> var query = { $or : [ { name : 'Pikachu' }, { attack : { $lte : 0.5 } } ] }
> db.pokemons.find(query)
>

Nao tenho nenhum Pikachu nem pokemons com atack menor a 0.5, mas se mudo o attack para menor ou igual a 70 da
> var query = { $or : [ { name : 'Pikachu' }, { attack : { $lte : 70 } } ] }
> db.pokemons.find(query).pretty()
{
        "_id" : ObjectId("564406426f3a5df04e2a86f7"),
        "name" : "Quilava",
        "description" : "Tira fogo e sopra ar quente",
        "attack" : 55,
        "defense" : 40,
        "height" : 2.11,
        "type" : "grama"
}
{
        "_id" : ObjectId("564406426f3a5df04e2a86f8"),
        "name" : "Cloyster",
        "description" : "Atira espinhas",
        "attack" : 65,
        "defense" : 65,
        "height" : 2.4,
        "type" : "inseto"
}
{
        "_id" : ObjectId("564406426f3a5df04e2a86fa"),
        "name" : "Magnezone",
        "description" : "Paraliza todo mundo com magnetismo",
        "attack" : 70,
        "defense" : 115,
        "height" : 0.12,
        "type" : "magnetismo"
}

## Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5

> var query = { $and : [ { attack : { $gte : 48 } }, { height : { $lte : 0.5 } } ] }
> db.pokemons.find(query).pretty()
{
        "_id" : ObjectId("564406426f3a5df04e2a86fa"),
        "name" : "Magnezone",
        "description" : "Paraliza todo mundo com magnetismo",
        "attack" : 70,
        "defense" : 115,
        "height" : 0.12,
        "type" : "magnetismo"
}
{
        "_id" : ObjectId("564406426f3a5df04e2a86fb"),
        "name" : "Archen",
        "description" : "Revivido de um fosil. O ancestro de todos os passaros pokemon",
        "attack" : 112,
        "defense" : 45,
        "height" : 0.5,
        "type" : "ave"
}