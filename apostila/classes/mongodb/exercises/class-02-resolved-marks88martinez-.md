# MongoDB - Aula 02 - Exercício
autor: Marcos Martinez

## Listagem das databases (passo 2)
>use be-mean-pokemons
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
local              0.078GB


## Listagem das coleções (passo 3)
> show collections
pokemons
system.indexes

## Cadastro dos pokemons (passo 4)
var pokemones =[{"name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type" : "electric", "attack" : 55, "height" : 0.4, "defense" : 35 },
{"name" : "charmander", "description" : "fogo do casete nivel 1", "type" : "fogo", "attack" : 54, "height" : 0.3 },
{"name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 },
{ "name" : "Squirtle", "description" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "height" : 0.5 },
{ "name" : "Bulbasaur", "description" : "ataque con las platas", "type" : "plantas", "attack" : 54, "height" : 0.9 }]

>db.pokemons.insert(pokemones)
## Lista dos pokemons (passo 5)

> db.pokemons.find()
{ "_id" : ObjectId("5642961ec9222a3fc35f8e08"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type" : "electric", "attack" : 55, "height" : 0.4, "defense" : 35 }
{ "_id" : ObjectId("5642998cc9222a3fc35f8e09"), "name" : "charmander", "description" : "fogo do casete nivel 1", "type" : "fogo", "attack" : 54, "height" : 0.3 }
{ "_id" : ObjectId("56429a47c9222a3fc35f8e0a"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
{ "_id" : ObjectId("56429abec9222a3fc35f8e0b"), "name" : "Squirtle", "description" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "height" : 0.5 }
{ "_id" : ObjectId("56429c22c9222a3fc35f8e0c"), "name" : "Bulbasaur", "description" : "ataque con las platas", "type" : "plantas", "attack" : 54, "height" : 0.9 }

## Pikachu (passo 6)

> var pokem = {name:'charmander'}
> var poke = db.pokemons.findOne(pokem)
> poke
{
	"_id" : ObjectId("5642998cc9222a3fc35f8e09"),
	"name" : "charmander",
	"description" : "fogo do casete nivel 1",
	"type" : "fogo",
	"attack" : 54,
	"height" : 0.3
}
> 

## Atualização do charmander (passo 7)
> var pokem = {name:'charmander'}
> var poke = db.pokemons.findOne(pokem)
> 
> poke
{
	"_id" : ObjectId("5642998cc9222a3fc35f8e09"),
	"name" : "charmander",
	"description" : "fogo do casete nivel 1",
	"type" : "fogo",
	"attack" : 54,
	"height" : 0.3,
	"descripcion" : "tira fogo pela bunda"
}
> delete poke.descripcion
true
> poke
{
	"_id" : ObjectId("5642998cc9222a3fc35f8e09"),
	"name" : "charmander",
	"description" : "fogo do casete nivel 1",
	"type" : "fogo",
	"attack" : 54,
	"height" : 0.3
}
> poke.description = 'tira fogo pela bunda'
tira fogo pela bunda
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> poke
{
	"_id" : ObjectId("5642998cc9222a3fc35f8e09"),
	"name" : "charmander",
	"description" : "tira fogo pela bunda",
	"type" : "fogo",
	"attack" : 54,
	"height" : 0.3
}




