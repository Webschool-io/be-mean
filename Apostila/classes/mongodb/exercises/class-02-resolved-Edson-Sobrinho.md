# MongoDB - Aula 02 - Exercício
Autor: Edson Sobrinho

## Criando tabela 

> use be-mean-pokemons
switched to db be-mean-pokemons


## Listando tabelas

> show dbs
admin              0.000GB
be-mean            0.005GB
be-mean-instagram  0.000GB
config             0.000GB
local              0.000GB

## Listando collections

> show collections

## Inserindo 5 pokemons

> var pokemons = [{name:'Charmeleon',description:'Um mini drag�o com rabo pegando fogo',attack:80,defense:65,height:11},{name:'Pikachu',description:'Ele � bix�o doido e el�trico',attack:50,defense:50,height:4},{name:'Ivysaur',description:'Com dente e uma planta loca na costa',attack:80,defense:80,height:10},{name:'Blastoise',description:'Parece ser uma tartaruga com casco vida loka',attack:85,defense:105,height:16},{name:'Rattata',description:'Rato vida loka',attack:25,defense:35,height:3}]
> pokemons
[
        {
                "name" : "Charmeleon",
                "description" : "Um mini drag�o com rabo pegando fogo",
                "attack" : 80,
                "defense" : 65,
                "height" : 11
        },
        {
                "name" : "Pikachu",
                "description" : "Ele � bix�o doido e el�trico",
                "attack" : 50,
                "defense" : 50,
                "height" : 4
        },
        {
                "name" : "Ivysaur",
                "description" : "Com dente e uma planta loca na costa",
                "attack" : 80,
                "defense" : 80,
                "height" : 10
        },
        {
                "name" : "Blastoise",
                "description" : "Parece ser uma tartaruga com casco vida loka",
                "attack" : 85,
                "defense" : 105,
                "height" : 16
        },
        {
                "name" : "Rattata",
                "description" : "Rato vida loka",
                "attack" : 25,
                "defense" : 35,
                "height" : 3
        }
]

> db.pokemons.insert(pokemons)
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

## Listando os pokemons

> db.pokemons.find()
{ "_id" : ObjectId("5b4fce81e4354131765d796f"), "name" : "Charmeleon", "description" : "Um mini drag�o com rabo pegando fogo", "attack" : 80, "defense" : 65, "height" : 11 }
{ "_id" : ObjectId("5b4fce81e4354131765d7970"), "name" : "Pikachu", "description" : "Ele � bix�o doido e el�trico", "attack" : 50, "defense" : 50, "height" : 4 }
{ "_id" : ObjectId("5b4fce81e4354131765d7971"), "name" : "Ivysaur", "description" : "Com dente e uma planta loca na costa", "attack" : 80, "defense" : 80, "height" : 10 }
{ "_id" : ObjectId("5b4fce81e4354131765d7972"), "name" : "Blastoise", "description" : "Parece ser uma tartaruga com casco vida loka", "attack" : 85, "defense" : 105, "height" : 16 }
{ "_id" : ObjectId("5b4fce81e4354131765d7973"), "name" : "Rattata", "description" : "Rato vida loka", "attack" : 25, "defense" : 35, "height" : 3 }

## Buscando um pokemon e armazenando numa variavel

> var query = {"name":"Rattata"}
> query
> var query = {"name":"Rattata"}
> var poke = db.pokemons.findOne(query)
> poke
{
        "_id" : ObjectId("5b4fce81e4354131765d7973"),
        "name" : "Rattata",
        "description" : "Rato vida loka",
        "attack" : 25,
        "defense" : 35,
        "height" : 3
}

## Modificando o resultado

>> var query = {"name":"Rattata"}
> var poke = db.pokemons.findOne(query)
> poke
{
        "_id" : ObjectId("5b4fce81e4354131765d7973"),
        "name" : "Rattata",
        "description" : "Rato vida loka",
        "attack" : 25,
        "defense" : 35,
        "height" : 3
}
> poke.descripiton
> poke.description
Rato vida loka
> poke.description = "Rato boladão"
Rato boladão
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.findOne(query)
{
        "_id" : ObjectId("5b4fce81e4354131765d7973"),
        "name" : "Rattata",
        "description" : "Rato boladão",
        "attack" : 25,
        "defense" : 35,
        "height" : 3
}
>