# MongoDB - Aula 03 - Exercício
autor: Kennedy Sampaio

## Liste todos Pokemons com a altura **menor que** 0.5;

> var query = {height: {$lt: 0.5}}
> db.pokemons.find(query)
{ "_id" : ObjectId("5647d0387b3985d25c9230c8"), "name" : "Bulbassauro", "descrip
tion" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4
 }

## Liste todos Pokemons com a altura **maior ou igual que** 0.5

> var query = {height: {$gte: 0.5}}
> db.pokemons.find(query)
{ "_id" : ObjectId("5647d0387b3985d25c9230c9"), "name" : "Charmander", "descrip
ion" : "Esse é o cão chupando manga de fofinho", "type" : "fogo", "attack" : 52
 "height" : 0.6 }
{ "_id" : ObjectId("5647d0387b3985d25c9230ca"), "name" : "Squirtle", "descripti
n" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "hei
ht" : 0.5 }

## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama

> var query = {$and: [{type: 'grama'},{height: {$lte: 0.5}}]}
> query
{
        "$and" : [
                {
                        "type" : "grama"
                },
                {
                        "height" : {
                                "$lte" : 0.5
                        }
                }
        ]
}
> db.pokemons.find(query)
{ "_id" : ObjectId("5647d0387b3985d25c9230c8"), "name" : "Bulbassauro", "descrip
tion" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4
 }

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5

> var query = {$or: [{name: 'Pikachu'},{attack: {$lte: 49}}]}
> query
{
        "$or" : [
                {
                        "name" : "Pikachu"
                },
                {
                        "attack" : {
                                "$lte" : 49
                        }
                }
        ]
}
> db.pokemons.find(query)
{ "_id" : ObjectId("5647d0387b3985d25c9230c8"), "name" : "Bulbassauro", "descrip
tion" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4
 }
{ "_id" : ObjectId("5647d0387b3985d25c9230ca"), "name" : "Squirtle", "descriptio
n" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "heig

## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5

> var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
> query
{
        "$and" : [
                {
                        "attack" : {
                                "$gte" : 48
                        }
                },
                {
                        "height" : {
                                "$lte" : 0.5
                        }
                }
        ]
}
> db.pokemons.find(query)
{ "_id" : ObjectId("5647d0387b3985d25c9230c8"), "name" : "Bulbassauro", "descrip
tion" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4
 }
{ "_id" : ObjectId("5647d0387b3985d25c9230ca"), "name" : "Squirtle", "descriptio
n" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "heig
ht" : 0.5 }
