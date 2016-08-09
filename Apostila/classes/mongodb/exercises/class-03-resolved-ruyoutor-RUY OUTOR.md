# MongoDB - Aula 03 - Exercício
autor: RUY OUTOR

## 1 - Listando pokemons com altura menor que 5

> var query = {height: {$lt: 0.5}}
> db.pokemons.find(query)
{ "_id" : ObjectId("564b1dad25337263280d047e"), "attack" : 30, "created" : "2013-11-03T15:05:41.285736", "defense" : 35, "height" : 0.3, "hp" : 45, "name" : "Caterpie", "speed" : 45, "types" : [ "bug" ] }
{ "_id" : ObjectId("564b1dad25337263280d0481"), "attack" : 60, "created" : "2013-11-03T15:05:41.310402", "defense" : 30, "height" : 0.3, "hp" : 40, "name" : "Spearow", "speed" : 70, "types" : [ "normal", "flying" ] }
{ "_id" : ObjectId("564b1dad25337263280d0479"), "attack" : 56, "created" : "2013-11-03T15:05:41.305777", "defense" : 35, "height" : 0.3, "hp" : 30, "name" : "Rattata", "speed" : 72, "types" : [ "normal" ] }
{ "_id" : ObjectId("564b1dae25337263280d0484"), "attack" : 35, "created" : "2013-11-03T15:05:41.435237", "defense" : 70, "height" : 0.3, "hp" : 25, "name" : "Magnemite", "speed" : 45, "types" : [ "steel", "electric" ] }
{ "_id" : ObjectId("564b1db025337263280d049a"), "attack" : 47, "created" : "2013-11-03T15:05:41.323823", "defense" : 52, "height" : 0.4, "hp" : 55, "name" : "Nidoran-f", "speed" : 41, "types" : [ "poison" ] }
(ESTOU USANDO O ARQUIVO DE POKEMONS DO REPOSITOÓRIO)

## 2 - Listando pokemons com altura maior ou igual que 0.5

> var query = {height: {$gte: 0.5}}
> db.pokemons.find(query)
{ "_id" : ObjectId("564b1db025337263280d0499"), "attack" : 57, "created" : "2013-11-03T15:05:41.328297", "defense" : 40, "height" : 0.5, "hp" : 46, "name" : "Nidoran-m", "speed" : 50, "types" : [ "poison" ] }
{ "_id" : ObjectId("564b1dad25337263280d047a"), "attack" : 52, "created" : "2013-11-03T15:05:41.271082", "defense" : 43, "height" : 0.6, "hp" : 39, "name" : "Charmander", "speed" : 65, "types" : [ "fire" ] }
{ "_id" : ObjectId("564b1dad25337263280d047d"), "attack" : 83, "created" : "2013-11-03T15:05:41.282985", "defense" : 100, "height" : 1.6, "hp" : 79, "name" : "Blastoise", "speed" : 78, "types" : [ "water" ] }
{ "_id" : ObjectId("564b1dad25337263280d047f"), "attack" : 20, "created" : "2013-11-03T15:05:41.288107", "defense" : 55, "height" : 0.7, "hp" : 50, "name" : "Metapod", "speed" : 30, "types" : [ "bug" ] }
{ "_id" : ObjectId("564b1dad25337263280d0480"), "attack" : 45, "created" : "2013-11-03T15:05:41.290411", "defense" : 50, "height" : 1.1, "hp" : 60, "name" : "Butterfree", "speed" : 70, "types" : [ "flying", "bug" ] }
{ "_id" : ObjectId("564b1dad25337263280d0482"), "attack" : 25, "created" : "2013-11-03T15:05:41.294947", "defense" : 50, "height" : 0.6, "hp" : 45, "name" : "Kakuna", "speed" : 35, "types" : [ "poison", "bug" ] }
{ "_id" : ObjectId("564b1dae25337263280d0483"), "attack" : 65, "created" : "2013-11-03T15:05:41.439497", "defense" : 55, "height" : 0.8, "hp" : 52, "name" : "Farfetchd", "speed" : 60, "types" : [ "normal", "flying" ] }


## 3 - Listando pokemons com altura menor ou igula a 0.5 E do tipo grama

> var query = {height: {$lte: 0.5}, $and: [{types:{$elemMatch:{$eq: "grass"}}}]}
> db.pokemons.find(query).count()
33
> db.pokemons.find(query)
{ "_id" : ObjectId("564b1db525337263280d04c5"), "attack" : 50, "created" : "2013-11-03T15:05:41.348691", "defense" : 55, "height" : 0.5, "hp" : 45, "name" : "Oddish", "speed" : 30, "types" : [ "poison", "grass" ] }
{ "_id" : ObjectId("564b1db525337263280d04c8"), "attack" : 70, "created" : "2013-11-03T15:05:41.356361", "defense" : 55, "height" : 0.3, "hp" : 35, "name" : "Paras", "speed" : 25, "types" : [ "bug", "grass" ] }
{ "_id" : ObjectId("564b1db925337263280d04e9"), "attack" : 30, "created" : "2013-11-03T15:05:41.623266", "defense" : 30, "height" : 0.3, "hp" : 30, "name" : "Sunkern", "speed" : 30, "types" : [ "grass" ] }
{ "_id" : ObjectId("564b1dbc25337263280d0506"), "attack" : 60, "created" : "2013-11-03T15:05:42.033779", "defense" : 70, "height" : 0.5, "hp" : 70, "name" : "Cherrim", "speed" : 85, "types" : [ "grass" ] }
{ "_id" : ObjectId("564b1dbe25337263280d051c"), "attack" : 35, "created" : "2013-11-03T15:05:41.617346", "defense" : 40, "height" : 0.4, "hp" : 35, "name" : "Hoppip", "speed" : 50, "types" : [ "flying", "grass" ] }


## 4 - Listando pokemons com o nome Pikachu ou attack menor ou igual a 0.5

> var query = {$or: [{name: "Pikachu"},{attack: {$lte: 0.5}}]}
> db.pokemons.find(query)
{ "_id" : ObjectId("564b1dad25337263280d047e"), "attack" : 0.3, "created" : "2013-11-03T15:05:41.285736", "defense" : 35, "height" : 0.3, "hp" : 45, "name" : "Caterpie", "speed" : 45, "types" : [ "bug" ] }
{ "_id" : ObjectId("564b1dad25337263280d047f"), "attack" : 0.2, "created" : "2013-11-03T15:05:41.288107", "defense" : 55, "height" : 0.7, "hp" : 50, "name" : "Metapod", "speed" : 30, "types" : [ "bug" ] }
{ "_id" : ObjectId("564b1dad25337263280d0480"), "attack" : 0.45, "created" : "2013-11-03T15:05:41.290411", "defense" : 50, "height" : 1.1, "hp" : 60, "name" : "Butterfree", "speed" : 70, "types" : [ "flying", "bug" ] }
{ "_id" : ObjectId("564b1dad25337263280d0482"), "attack" : 0.25, "created" : "2013-11-03T15:05:41.294947", "defense" : 50, "height" : 0.6, "hp" : 45, "name" : "Kakuna", "speed" : 35, "types" : [ "poison", "bug" ] }


## 5 - Listando pokemons

> var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
> db.pokemons.find(query)
{ "_id" : ObjectId("564b1dad25337263280d0481"), "attack" : 60, "created" : "2013-11-03T15:05:41.310402", "defense" : 30, "height" : 0.3, "hp" : 40, "name" : "Spearow", "speed" : 70, "types" : [ "normal", "flying" ] }
{ "_id" : ObjectId("564b1dad25337263280d0479"), "attack" : 56, "created" : "2013-11-03T15:05:41.305777", "defense" : 35, "height" : 0.3, "hp" : 30, "name" : "Rattata", "speed" : 72, "types" : [ "normal" ] }
{ "_id" : ObjectId("564b1db025337263280d0499"), "attack" : 56, "created" : "2013-11-03T15:05:41.328297", "defense" : 40, "height" : 0.5, "hp" : 46, "name" : "Nidoran-m", "speed" : 50, "types" : [ "poison" ] }
{ "_id" : ObjectId("564b1db125337263280d04a7"), "attack" : 55, "created" : "2013-11-03T15:05:41.317235", "defense" : 40, "height" : 0.4, "hp" : 35, "name" : "Pikachu", "speed" : 90, "types" : [ "electric" ] }
