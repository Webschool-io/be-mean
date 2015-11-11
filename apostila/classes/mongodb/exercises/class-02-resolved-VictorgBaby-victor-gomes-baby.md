## MongoDb - Aula 02 - Exercício
autor: Victor Gomes Baby

## Criando uma database be-mean-pokemons

> use be-mean-pokemon
switched to db be-mean-pokemon

## Listagem das databases

> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB


## Listagem das coleções

> show collections
>

## Cadastro dos pokemons

> var pokemons = [{'name':'Geodude', 'description':'The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon heart will remain hard, craggy, and rough always.', 'type':'rock', 'attack':65, 'defense':40, 'height':0.4}, { 'name':'Zubat', 'description':'Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.', 'type':'poison', 'attack':30, 'defense':30, 'height':0.8}, {'name':'Lapras', 'description':'People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.', 'type':'water', 'attack':40, 'defense':40, 'height':2.5}, {'name':'Sandshrew', 'description':'Sandshrews body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.', 'type':'ground', 'attack':45, 'defense':45, 'height':0.6}, {'name':'Pidgey', 'description':'Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.', 'type':'flying', 'attack':30, 'defense':30, 'height':0.3}];
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
> 

## Listagem dos pokemons

> db.pokemons.find()
{ "_id" : ObjectId("564292e2cb1c07093682ea93"), "name" : "Geodude", "description" : "The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon heart will remain hard, craggy, and rough always.", "type" : "rock", "attack" : 65, "defense" : 40, "height" : 0.4 }
{ "_id" : ObjectId("564292e2cb1c07093682ea94"), "name" : "Zubat", "description" : "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.", "type" : "poison", "attack" : 30, "defense" : 30, "height" : 0.8 }
{ "_id" : ObjectId("564292e2cb1c07093682ea95"), "name" : "Lapras", "description" : "People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.", "type" : "water", "attack" : 40, "defense" : 40, "height" : 2.5 }
{ "_id" : ObjectId("564292e2cb1c07093682ea96"), "name" : "Sandshrew", "description" : "Sandshrews body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.", "type" : "ground", "attack" : 45, "defense" : 45, "height" : 0.6 }
{ "_id" : ObjectId("564292e2cb1c07093682ea97"), "name" : "Pidgey", "description" : "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.", "type" : "flying", "attack" : 30, "defense" : 30, "height" : 0.3 }
> 

## Buscar pokemon

> var query = {name:'Pidgey'}
> var poke = db.pokemons.findOne(query)
> poke
{
	"_id" : ObjectId("564292e2cb1c07093682ea97"),
	"name" : "Pidgey",
	"description" : "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
	"type" : "flying",
	"attack" : 30,
	"defense" : 30,
	"height" : 0.3
}
> 

## Altera description do pokemon

> poke.description = 'Passarinho foda para karaleo'
Passarinho foda para karaleo
> poke
{
	"_id" : ObjectId("564292e2cb1c07093682ea97"),
	"name" : "Pidgey",
	"description" : "Passarinho foda para karaleo",
	"type" : "flying",
	"attack" : 30,
	"defense" : 30,
	"height" : 0.3
}
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> 

