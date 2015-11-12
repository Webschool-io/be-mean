# MongoDB - Aula 01 - Exercício
autor: Erni Augusto Fonseca Souza (Sistema_On)

## Crie uma database chamada be-mean-pokemons
Inspiron@Inspiron-PC MINGW64 ~
$ mongo be-mean-pokemon
2015-11-11T00:53:22.864-0200 I CONTROL  Hotfix KB2731284 or later update is not installed, will zero-out data files
MongoDB shell version: 3.0.7
connecting to: be-mean-pokemon

## Liste quais databases você possui nesse servidor
Inspiron@Inspiron-PC MINGW64 ~
show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
be-mean-pokemon    0.078GB
bemean             0.078GB
local              0.078GB

## Liste quais coleções você possui nessa database
Inspiron@Inspiron-PC MINGW64 ~
show collections
pokemons
system.indexes

## Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos,
utilizado: name, description, attack, defense e height

var pokemon = {name: "Charizard", description: "Charizard voa em torno do céu em busca de adversários poderosos.", type: "fogo", attack: 40, heigth: 1.7}
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {name: "Blastoise", description: "Blastoise tem bicas de água que se projetam de sua concha.", type: "ág
ua", attack: 40, heigth: 1.6}
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {name: "Raichu", description: "Se os sacos elétrica tornam-se excessivamente carregada, Raichu plantas a
 cauda no chão e descargas.", type: "elétrico", attack: 50, heigth: 0.8}
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {name: "Meowth", description: "Meowth retira suas garras afiadas em suas patas sobre a esgueirar-se slin
kily sem fazer quaisquer passos incriminatórias.", type: "normal", attack: 20, heigth: 0.4}
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {name: "Gengar", description: "Gengar correndo passado você, fingindo ser sua sombra.", type: "fantasma"
, attack: 30, heigth: 1.5}
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

## Liste os pokemons existentes na sua coleção

db.pokemons.find()
{ "_id" : ObjectId("5642b3e8fafb6e86fdc89ba1"), "name" : "Charizard", "description" : "Charizard voa em torno do céu em
busca de adversários poderosos.", "type" : "fogo", "attack" : 40, "heigth" : 1.7 }

{ "_id" : ObjectId("5642b5586b1455ae320750d3"), "name" : "Blastoise", "description" : "Blastoise tem bicas de água que s
e projetam de sua concha.", "type" : "água", "attack" : 40, "heigth" : 1.6 }

{ "_id" : ObjectId("5642b5c56b1455ae320750d4"), "name" : "Raichu", "description" : "Se os sacos elétrica tornam-se exces
sivamente carregada, Raichu plantas a cauda no chão e descargas.", "type" : "elétrico", "attack" : 50, "heigth" : 0.8 }

{ "_id" : ObjectId("5642b6086b1455ae320750d5"), "name" : "Meowth", "description" : "Meowth retira suas garras afiadas em
 suas patas sobre a esgueirar-se slinkily sem fazer quaisquer passos incriminatórias.", "type" : "normal", "attack" : 20
, "heigth" : 0.4 }

{ "_id" : ObjectId("5642b64d6b1455ae320750d6"), "name" : "Gengar", "description" : "Gengar correndo passado você, fingin
do ser sua sombra.", "type" : "fantasma", "attack" : 30, "heigth" : 1.5 }

## Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`
MongoDB shell version: 3.0.7
connecting to: be-mean-pokemon
var poke = {name: "Charizard"}
var p = db.pokemons.find(poke)
p
{ "_id" : ObjectId("5642b3e8fafb6e86fdc89ba1"), "name" : "Charizard", "description" : "Charizard voa em torno do céu em busca de adversários poderosos.", "type" : "fogo", "attack" : 40, "heigth" : 1.7 }

## Modifique sua `description` e salvê-o
var poke = {name: "Charizard"}
var p = db.pokemons.find(poke)
p
{ "_id" : ObjectId("5642b3e8fafb6e86fdc89ba1"), "name" : "Charizard", "description" : "Charizard voa em torno do céu em busca de adversários poderosos.", "type" : "fogo", "attack" : 40, "heigth" : 1.7 }
p.name
var p = db.pokemons.findOne(poke)
p
{
        "_id" : ObjectId("5642b3e8fafb6e86fdc89ba1"),
        "name" : "Charizard",
        "description" : "Charizard voa em torno do céu em busca de adversários poderosos.",
        "type" : "fogo",
        "attack" : 40,
        "heigth" : 1.7
}
p.description = "Charizard sempre derrotando os adversários"
Charizard sempre derrotando os adversários
p
{
        "_id" : ObjectId("5642b3e8fafb6e86fdc89ba1"),
        "name" : "Charizard",
        "description" : "Charizard sempre derrotando os adversários",
        "type" : "fogo",
        "attack" : 40,
        "heigth" : 1.7
}
db.pokemons.save(p)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
