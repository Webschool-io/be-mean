# MongoDB - Aula 01 - Exercício
autor: MARCOS ALEXANDRE

## Importando os restaurantes

root@marcos-Aspire-5350:/data/db# mongoimport --host=127.0.0.1 --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-09T22:20:17.341-0200	connected to: 127.0.0.1
2015-11-09T22:20:17.342-0200	dropping: be-mean.restaurantes
2015-11-09T22:20:19.880-0200	imported 25359 documents

## Contando os restaurantes

> db.restaurantes.find({}).count()
25359
>


# MongoDB - Aula 02 - Exercício
autor: MARCOS ALEXANDRE

## 1- Crie uma database chamada be-mean-pokemons;

> use be-mean-pokemons
switched to db be-mean-pokemons
> 

## 2- Liste quais databases você possui neste servidor;

> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB
pokemons           0.078GB
> 

## 3- Liste quais coleções você possui nesta database;

> db
be-mean-pokemons
> show collections
> 

## 4- Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height

> var pokemon = {'name':'Butterfree','description':'Borboleta vampiro','type':'butterfly','attack':35, 'defense': 30, height: 0.6 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Metapod','description':'Casulo de borboleta','type':'cocoon','attack':32, 'defense': 29, height: 0.5 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Blastoise','description':'Tartaruga canhão de água','type':'shellfish','attack':54, 'defense': 40, height: 0.7 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Wartortle','description':'Tartaruga orelhuda','type':'turtle','attack':48, 'defense': 38, height: 0.5 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Ivysaur','description':'Sapo flor','type':'seed','attack':51, 'defense': 45, height: 0.4 }


## 5- Liste os pokemons existentes na sua coleção


> db.pokemons.find()
{ "_id" : ObjectId("5642898fc487db8b329a4699"), "name" : "Butterfree", "description" : "Borboleta vampiro", "type" : "butterfly", "attack" : 35, "defense" : 30, "height" : 0.6 }
{ "_id" : ObjectId("5642899bc487db8b329a469a"), "name" : "Metapod", "description" : "Casulo de borboleta", "type" : "cocoon", "attack" : 32, "defense" : 29, "height" : 0.5 }
{ "_id" : ObjectId("564289a3c487db8b329a469b"), "name" : "Blastoise", "description" : "Tartaruga canhão de água", "type" : "shellfish", "attack" : 54, "defense" : 40, "height" : 0.7 }
{ "_id" : ObjectId("564289adc487db8b329a469c"), "name" : "Wartortle", "description" : "Tartaruga orelhuda", "type" : "turtle", "attack" : 48,  "defense" : 38, "height" : 0.5 }
{ "_id" : ObjectId("564289b8c487db8b329a469d"), "name" : "Ivysaur", "description" : "Sapo flor", "type" : "seed", "attack" : 51,  "defense" : 45, "height" : 0.4 }
>

## 6- Busque o pokemon a sua escolha pelo nome e armazene-o em uma variável chamada 'poke'; 

> var query = {name: 'Ivysaur'}
> var poke = db.pokemons.find(query)
> poke
{ "_id" : ObjectId("564289b8c487db8b329a469d"), "name" : "Ivysaur", "description" : "Sapo flor", "type" : "seed", "attack" : 51, "defense" : 45, "height" : 0.4 }
> 

> var poke = db.pokemons.findOne(query)
> poke
{
	"_id" : ObjectId("564289b8c487db8b329a469d"),
	"name" : "Ivysaur",
	"description" : "Sapo flor",
	"type" : "seed",
	"attack" : 51,
	"defense" : 45,
	"height" : 0.4
}
> 
> poke.name
Ivysaur
> 

## 7- Modifique sua description e salvê-o

> poke.description = "Sapo flor vermelha"
Sapo flor vermelha
> poke
{
	"_id" : ObjectId("564289b8c487db8b329a469d"),
	"name" : "Ivysaur",
	"description" : "Sapo flor vermelha",
	"type" : "seed",
	"attack" : 51,
	"defense" : 45,
	"height" : 0.4
}
> 

> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> 

> db.pokemons.find(query)
{ "_id" : ObjectId("564289b8c487db8b329a469d"), "name" : "Ivysaur", "description" : "Sapo flor vermelha", "type" : "seed", "attack" : 51, "defense" : 45, "height" : 0.4 }
> 
