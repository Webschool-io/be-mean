 c:\MongoDB>cd Server/3.0/bin

 c:\MongoDB\Server\3.0\bin>mongo
MongoDB shell version: 3.0.7
connecting to: test
use be-mean-pokemons
switched to db be-mean-pokemons

show dbs
fazendatec  0.078GB
local       0.078GB
outropoke   0.078GB
test        0.078GB

 show collections

 var poke1 = {'name':'Blastoise', 'description':'tartaruga evoluida com canhao de agua', 'attack': 40, 'defense':40, 'height':1.6}
 db.pokemons.insert(poke1)
WriteResult({ "nInserted" : 1 })

 var poke2 = {'name':'Butterfree', 'description':'bicho que voa e pega mel das flor', 'attack': 20, 'defense':20, 'height':1.1}
 db.pokemons.insert(poke2)
WriteResult({ "nInserted" : 1 })

 var poke3 = {'name':'Metapod', 'description':'lagarto que nao serve pra nada', 'attack': 10, 'defense':30, 'height':0.7}
 db.pokemons.insert(poke3)
WriteResult({ "nInserted" : 1 })

 var poke4 = {'name':'Caterpie', 'description':'verme estranho fedido', 'attack': 20, 'defense':20, 'height':0.3}
 db.pokemons.insert(poke4)
WriteResult({ "nInserted" : 1 })

 var poke5 = {'name':'Charizard', 'description':'dragao maneiro', 'attack': 40, 'defense':30, 'height':1.7}
 db.pokemons.insert(poke5)
WriteResult({ "nInserted" : 1 })

 var poke6 = {'name':'Beedrill', 'description':'abelha encapetada que vive no acre', 'attack': 50, 'defense':20, 'height':1.0}
 db.pokemons.insert(poke6)
WriteResult({ "nInserted" : 1 })

 var poke7 = {'name':'Arbok', 'description':'cobra do cao', 'attack': 40, 'defense':30, 'height':3.5}
 db.pokemons.insert(poke7)
WriteResult({ "nInserted" : 1 })

 var poke8 = {'name':'Pikachu', 'description':'rato eletrico maneiro', 'attack': 30, 'defense':20, 'height':0.4}
 db.pokemons.insert(poke8)
WriteResult({ "nInserted" : 1 })

 db.pokemons.find()
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
  "name" : "Metapod",
  "description" : "lagarto que nao serve pra nada",
  "attack" : 10,
  "defense" : 30,
  "height" : 0.7
}
{
  "_id" : ObjectId("5643296e0dacafad5d5c7ed1"),
  "name" : "Caterpie",
  "description" : "verme estranho fedido", 
  "attack" : 20,
  "defense" : 20,
  "height" : 0.3
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
{
  "_id" : ObjectId("56432ad00dacafad5d5c7ed5"),
  "name" : "Pikachu",
  "description" : "rato eletrico maneiro",
  "attack" : 30,
  "defense" : 20,
  "height" : 0.4
}

 var poke = db.pokemons.findOne({name: 'Metapod'})
 poke
{
        "_id" : ObjectId("564329270dacafad5d5c7ed0"),
        "name" : "Metapod",
        "description" : "lagarto que nao serve pra nada",
        "attack" : 10,
        "defense" : 30,
        "height" : 0.7
}

 poke.description = 'lagarto que talvez sirva para alguma coisa na vida'
lagarto que talvez sirva para alguma coisa na vida

 poke
{
        "_id" : ObjectId("564329270dacafad5d5c7ed0"),
        "name" : "Metapod",
        "description" : "lagarto que talvez sirva para alguma coisa na vida",
        "attack" : 10,
        "defense" : 30,
        "height" : 0.7
}

 db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>
