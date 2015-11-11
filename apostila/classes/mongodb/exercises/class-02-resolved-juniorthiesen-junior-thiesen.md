# MongoDB - Aula 02 - Exercício
autor: Junior Thiesen

## Listagem das databases (passo 2)
> show dbs
be-meam            0.078GB
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
local              0.078GB
> 

## Listagem das coleções (passo 3)

> show collections
pokemons
system.indexes
> 

## Cadastro dos pokemons (passo 4)

var meuspoke = [{"name": "Pidgey","description": "passarim bunitim","type": "Flying","attack": 45,"height":1.8},{"name": "Arbok","description": "Acho q o suissa curte uma","type": "Poison","attack":85,"height": 65},{"name": "Psyduck","description": "usa dorgas ctza","type": "água","attack": 48,"height": 19.6},{"name": "Magikarp","description": "cospe mais q veia de manhã cedo","type": "água","attack": 10,"height": 10},{"name": "Snorlax","description": "gordinho saliente um poke pra frente","type": "normal","attack": 110,"height": 460}]

db.pokemons.insert(meuspoke)


## Lista dos pokemons (passo 5)

> db.pokemons.find().pretty()
{
	"_id" : ObjectId("5642b47308eabcdbb6eead89"),
	"name" : "Pidgey",
	"description" : "passarim bunitim",
	"type" : "Flying",
	"attack" : 45,
	"height" : 1.8
}
{
	"_id" : ObjectId("5642b47308eabcdbb6eead8a"),
	"name" : "Arbok",
	"description" : "Acho q o suissa curte uma",
	"type" : "Poison",
	"attack" : 85,
	"height" : 65
}
{
	"_id" : ObjectId("5642b47308eabcdbb6eead8b"),
	"name" : "Psyduck",
	"description" : "usa dorgas ctza",
	"type" : "água",
	"attack" : 48,
	"height" : 19.6
}
{
	"_id" : ObjectId("5642b47308eabcdbb6eead8c"),
	"name" : "Magikarp",
	"description" : "cospe mais q veia de manhã cedo",
	"type" : "água",
	"attack" : 10,
	"height" : 10
}
{
	"_id" : ObjectId("5642b47308eabcdbb6eead8d"),
	"name" : "Snorlax",
	"description" : "gordinho saliente um poke pra frente",
	"type" : "normal",
	"attack" : 110,
	"height" : 460
}
> 

## Psyduck (passo 6)
> var query = {name:'Psyduck'}
> db.pokemons.findOne(query)
{
	"_id" : ObjectId("5642b47308eabcdbb6eead8b"),
	"name" : "Psyduck",
	"description" : "usa dorgas ctza",
	"type" : "água",
	"attack" : 48,
	"height" : 19.6
}
> 

## Atualização do Psyduck (passo 6)
> var p = db.pokemons.findOne(query)
> p.description = "usa dorgas pessadas ctza"
> db.pokemons.save(p) 
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.findOne(query)
{
	"_id" : ObjectId("5642b47308eabcdbb6eead8b"),
	"name" : "Psyduck",
	"description" : "usa dorgas pessadas ctza",
	"type" : "água",
	"attack" : 48,
	"height" : 19.6
}