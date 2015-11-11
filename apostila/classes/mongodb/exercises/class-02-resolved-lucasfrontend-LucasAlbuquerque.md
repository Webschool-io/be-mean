# MongoDB - Aula 02 - Exercício
autor: Lucas Albuquerque

## Criando database (passo 1)
> use be-mean-pokemons

## Listagem das databases (passo 2)
> show dbs
be-mean-instagram  0.078GB
bemean             0.078GB
local              0.078GB

## Listagem das coleções (passo 3)
> db.createCollection("pokemon")
{ "ok" : 1 }
> show collections
pokemon
system.indexes

## Cadastro dos pokemons (passo 4)
> var pokemon = {'name':'Pikachu','description':'Rato elétrico do bemean','type':'electric',attack: 55, height: 0.4}
> db.pokemon.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Squirtle','description:'Fofura azul do bemean','type':'torrent',attack: 30, height: 0.4}
2015-11-10T22:44:02.153-0200 E QUERY    SyntaxError: Unexpected identifier
> var pokemon = {'name':'Squirtle','description':'Fofura azul do bemean','type':'torrent', attack: 55, height: 0.4}
> db.pokemon.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Metapod','description:'fofura verde do bemean','type':'shed skin',attack:21, height:0.4}
2015-11-10T22:46:44.127-0200 E QUERY    SyntaxError: Unexpected identifier
> var pokemon = {'name':'Metapod','description':'fofura verde do bemean','type':'shed skin', attack:21, height:0.4}
> db.pokemon.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Butterfree','description':'Não é fofo, mas é do bemean','type':'Compound Eyes', attack:70, height:0.7}
> db.pokemon.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Blastoise','description':'Tartaruga doida do bemean','type':'torrent', attack:188, height:0.3}
> db.pokemon.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Wartortle','description':'monstrinho do bemean','type':'torrent', attack:49, height:0.3}
> db.pokemon.insert(pokemon)
WriteResult({ "nInserted" : 1 })

## Lista dos pokemons (passo 5)
> db.pokemon.find()
{ "_id" : ObjectId("56428e54a3217f24f6be8b0a"), "name" : "Pikachu", "description" : "Rato elétrico do bemean", "type" : "electric", "attack" : 55, "height" : 0.4 }
{ "_id" : ObjectId("56428fa3a3217f24f6be8b0b"), "name" : "Squirtle", "description" : "Fofura azul do bemean", "type" : "torrent", "attack" : 55, "height" : 0.4 }
{ "_id" : ObjectId("56429031a3217f24f6be8b0c"), "name" : "Metapod", "description" : "fofura verde do bemean", "type" : "shed skin", "attack" : 21, "height" : 0.4 }
{ "_id" : ObjectId("56429090a3217f24f6be8b0d"), "name" : "Butterfree", "description" : "Não é fofo, mas é do bemean", "type" : "Compound Eyes", "attack" : 70, "height" : 0.7 }
{ "_id" : ObjectId("564290e2a3217f24f6be8b0e"), "name" : "Blastoise", "description" : "Tartaruga doida do bemean", "type" : "torrent", "attack" : 188, "height" : 0.3 }
{ "_id" : ObjectId("5642912da3217f24f6be8b0f"), "name" : "Wartortle", "description" : "monstrinho do bemean", "type" : "torrent", "attack" : 49, "height" : 0.3 }

## Pikachu (passo 6)
> var poke = db.pokemon.findOne({"name":"Pikachu"})
> poke
{
        "_id" : ObjectId("56428e54a3217f24f6be8b0a"),
        "name" : "Pikachu",
        "description" : "Rato elétrico do bemean",
        "type" : "electric",
        "attack" : 55,
        "height" : 0.4
}

## Atualização do Pikachu (passo 6)
> poke.description = "Modificando esse viadinho amarelo"
Modificando esse viadinho amarelo
> db.pokemon.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })