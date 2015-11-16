# MongoDB - Aula 02 - Exercício
autor: Kennedy Fernandes Sampaio

>use be-mean-pokemons
switched to db be-mean-pokemons

## Listagem das databases (passo 2)
>show dbs
be-mean-instagram    0.078GB
local                0.078GB

## Listagem das coleções (passo 3)
>show collections
>

## Cadastro dos pokemons (passo 4)
>var pokemons = [
{'name':'Bulbassauro','description':'Chicote de trepadeira','type': 'grama', 'attack': 49, height: 0.4 }, {'name':'Charmander','description':'Esse é o cão chupando manga de fofinho','type': 'fogo', 'attack': 52, height: 0.6 }, {'name':'Squirtle','description':'Ejeta água que passarinho não bebe','type': 'água', 'attack': 48, height: 0.5 }]
>pokemons
[
  {
    "name": "Bulbassauro",
    "description": "Chicote de trepadeira",
    "type": "grama",
    "attack": 49,
    "height": 0.4
  },
  {
    "name": "Charmander",
    "description": "Esse é o cão chupando manga de fofinho",
    "type": "fogo",
    "attack": 52,
    "height": 0.6
  },
  {
    "name": "Squirtle",
    "description": "Ejeta água que passarinho não bebe",
    "type": "água",
    "attack": 48,
    "height": 0.5
  }
]
> db.pokemons.insert(pokemons)
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 3,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]

## Lista dos pokemons (passo 5)
db.pokemons.find()
{
  "_id": ObjectId("5647d0f0613f89ac53a7b5d0"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 100,
  "height": 0.4
}
{
  "_id": ObjectId("5647d045613f89ac53a7b5d2"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("5647d045613f89ac53a7b5d8"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}

## Selecionar qualquer pokemon desejado (passo 6)

> var pokem = {'name': 'Pikachu'}
> var poke = db.pokemons.findOne(pokem)
> poke
{
  "_id": ObjectId("5647d0f0613f89ac53a7b5d0"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 100,
  "height": 0.4
}


## Atualização que desejar (passo 6)

> poke.name
Caterpie
> poke.defense = 35
35
> poke
{
  "_id": ObjectId("56422705613f89ac53a7b5d4"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3,
  "defense": 35
}
> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms

