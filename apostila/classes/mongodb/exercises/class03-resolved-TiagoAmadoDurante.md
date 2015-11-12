MongoDB shell version: 3.0.7
connecting to: test
 use be-mean-pokemons
switched to db be-mean-pokemons

 show collections
pokemons
system.indexes

 var query = {height: {$lt: 0.5}}
 db.pokemons.find(query)
{
  "_id" : ObjectId("5643296e0dacafad5d5c7ed1"),
  "name" : "Caterpie",
  "description" : "verme estranho fedido",
  "attack" : 20,
  "defense" : 20,
  "height" : 0.3
}
{
  "_id" : ObjectId("56432ad00dacafad5d5c7ed5"),
  "name" : "Pikachu",
  "description" : "rato eletrico maneiro",
  "attack" : 30,
  "defense" : 20,
  "height" : 0.4
}

 var query = {height: {$gte: 0.5}}
 db.pokemons.find(query)
{
  "_id" : ObjectId("564328060dacafad5d5c7ece"),
  "name" : "Blastoise",
  "description" : "tartaruga evoluida com canhao de agua",
  "attack" : 40,
  "defense" : 40,
  "height" : 1.6
}
{
  "_id" : ObjectId("564328910dacafad5d5c7ecf"),
  "name" : "Butterfree",
  "description" : "bicho que voa e pega mel das flor",
  "attack" : 20,
  "defense" : 20,
  "height" : 1.1
}
{
  "_id" : ObjectId("564329270dacafad5d5c7ed0"),
  "name" : "Metapod", "description" :
  "lagarto que talvez sirva para alguma coisa na vida",
  "attack" : 10,
  "defense" : 30,
  "height" : 0.7
}
{
  "_id" : ObjectId("564329a60dacafad5d5c7ed2"),
  "name" : "Charizard",
  "description" : "dragao maneiro",
  "attack" : 40,
  "defense" : 30,
  "height" : 1.7
}
{
  "_id" : ObjectId("564329ee0dacafad5d5c7ed3"),
  "name" : "Beedrill",
  "description" : "abelha encapetada que vive no acre",
  "attack" : 50,
  "defense" : 20,
  "height" : 1
}
{
  "_id" : ObjectId("56432a670dacafad5d5c7ed4"),
  "name" : "Arbok",
  "description" : "cobra do cao",
  "attack" : 40,
  "defense" : 30,
  "height" : 3.5
}

 var query = {$or: [{name: 'Pikachu'}, {attack: {$lte: 0.5}}]}
 db.pokemons.find(query)
{
  "_id" : ObjectId("56432ad00dacafad5d5c7ed5"),
  "name" : "Pikachu",
  "description" : "rato eletrico maneiro",
  "attack" : 30,
  "defense" : 20,
  "height" : 0.4
}
 var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
 db.pokemons.find(query)
>
