# MongoDB - Aula 02 - Exercício
autor: Baltazar Parra

## Listagem das databases (passo 2)
Bal@raveNN MINGW64 ~ (master)
$ mongo
MongoDB shell version: 3.0.7
connecting to: test
use be-mean-instagram
switched to db be-mean-instagram
show dbs
andre              0.078GB
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB

## Listagem das coleções (passo 3)
Bal@raveNN MINGW64 ~ (master)
$ mongo be-mean-pokemons
MongoDB shell version: 3.0.7
connecting to: be-mean-pokemons
show collections
system.indexes

## Cadastro dos pokemons (passo 4)
connecting to: be-mean-pokemons
var pokemon = {'name':'Fumichu','description':'Rato de ervas diferenciadas','type':'natural', attack: 420, height: 10.0}
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
var pokemon = {'name':'Dechavassauro','description':'Dinossauro triturados de ervas diferenciadas','type':'triturador', attack: 666, height: 1.6}
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
var pokemon = {'name':'Isqueirozard','description':'Dragão tocador de fogo nas ervinhas diferenciadas','type':'dragão', attack: 9999, height: 99.9}
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
var pokemon = {'name':'Cedinhapi','description':'Folhinha abraçadora de ervinhas diferenciadas','type':'leda', attack: 1, height: 0.1}
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
var pokemon = {'name':'FumadorTwo','description':'Alienogeno pegador das coisa pra transformar em baseados','type':'fumero', attack: 420, height: 70.1}
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
var pokemon = {'name':'Pikachu','description':'Rato elétrico bem fofinho','type':'eletric', attack: 55, height: 0.4}
db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })


## Lista dos pokemons (passo 5)
db.pokemons.find()
{ "_id" : ObjectId("564285d5332e1197e9ae246a"), "name" : "Fumichu", "description" : "Rato de ervas diferenciadas", "type" : "natural", "attack" : 420, "height" : 10 }
{ "_id" : ObjectId("5642869a332e1197e9ae246b"), "name" : "Dechavassauro", "description" : "Dinossauro triturados de ervas diferenciadas", "type" : "triturador", "attack" : 666, "height" : 1.6 }
{ "_id" : ObjectId("564286df332e1197e9ae246c"), "name" : "Isqueirozard", "description" : "Dragão tocador de fogo nas ervinhas diferenciadas", "type" : "dragão", "attack" : 9999, "height" : 99.9 }
{ "_id" : ObjectId("5642871c332e1197e9ae246d"), "name" : "Cedinhapi", "description" : "Folhinha abraçadora de ervinhas diferenciadas", "type" : "leda", "attack" : 1, "height" : 0.1 }
{ "_id" : ObjectId("5642876d332e1197e9ae246e"), "name" : "FumadorTwo", "description" : "Alienogeno pegador das coisa pra transformar em baseados", "type" : "fumero", "attack" : 420, "height" : 70.1 }
{ "_id" : ObjectId("56428890332e1197e9ae246f"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type" : "eletric", "attack" : 55, "height" : 0.4 }

## Pikachu (passo 6)
var poke = {name: 'Pikachu'}
var p = db.pokemons.findOne(poke)
p
{
        "_id" : ObjectId("56428890332e1197e9ae246f"),
        "name" : "Pikachu",
        "description" : "Rato elétrico bem fofinho",
        "type" : "eletric",
        "attack" : 55,
        "height" : 0.4
}


## Atualização do Pikachu (passo 6)
p.description = "Ratão do matagal, tocador de raio nus oto"
Ratão do matagal, tocador de raio nus oto
db.pokemons.save(p)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
p
{
        "_id" : ObjectId("56428890332e1197e9ae246f"),
        "name" : "Pikachu",
        "description" : "Ratão do matagal, tocador de raio nus oto",
        "type" : "eletric",
        "attack" : 55,
        "height" : 0.4
}
