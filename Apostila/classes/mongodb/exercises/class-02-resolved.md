#MongoDB - Aula 02 - Exercício
Autor: Rodrigo Nogueira

##Database criada e nomeada "be-mean-pokemons" (passo 01)

> use be-mean-pokemons
switched to db be-mean-pokemons
> 
##Listagem das databases (passo 02)
> show dbs
be-mean      0.078GB
contactlist  0.078GB
local        0.078GB
> 
##Listagem das coleções (passo 03)

> use be-mean-pokemons
switched to db be-mean-pokemons
> show collections
> 
##Cadastro dos pokemons (passo 04)

 > var pokemons = [{name: 'pokemon', description: 'exemplo', type: 'pokemon', attack: 70, defence: 80, height: 1.45},{name: 'monstermon', description: 'montro', type: 'monstruoso', attack: 90, defence: 50, height: 1.75},{name: 'mastermon', description: 'master', type: 'supreme', attack: 99, defence: 30, height: 1.10}]
> pokemons
[
	{
		"name" : "pokemon",
		"description" : "exemplo",
		"type" : "pokemon",
		"attack" : 70,
		"defence" : 80,
		"height" : 1.45
	},
	{
		"name" : "monstermon",
		"description" : "montro",
		"type" : "monstruoso",
		"attack" : 90,
		"defence" : 50,
		"height" : 1.75
	},
	{
		"name" : "mastermon",
		"description" : "master",
		"type" : "supreme",
		"attack" : 99,
		"defence" : 30,
		"height" : 1.1
	}
]
> db.pokemons.insert(pokemons)
BulkWriteResult({
	"writeErrors" : [ ],
	"writeConcernErrors" : [ ],
	"nInserted" : 3,
	"nUpserted" : 0,
	"nMatched" : 0,
	"nModified" : 0,
	"nRemoved" : 0,
	"upserted" : [ ]
})
> 
##Lista dos pokemons (passo 05)

>  db.pokemons.find().pretty()
{
	"_id" : ObjectId("57701c7ce727775d5449d5ca"),
	"name" : "pokemon",
	"description" : "exemplo",
	"type" : "pokemon",
	"attack" : 70,
	"defence" : 80,
	"height" : 1.45
}
{
	"_id" : ObjectId("57701c7ce727775d5449d5cb"),
	"name" : "monstermon",
	"description" : "montro",
	"type" : "monstruoso",
	"attack" : 90,
	"defence" : 50,
	"height" : 1.75
}
{
	"_id" : ObjectId("57701c7ce727775d5449d5cc"),
	"name" : "mastermon",
	"description" : "master",
	"type" : "supreme",
	"attack" : 99,
	"defence" : 30,
	"height" : 1.1
}
> 
##Busque um pokemon a sua escolha, que acabou de se inserido, e armazene-o em uma variável chamada "poke" (passo 06)

> var query = {name:'mastermon'} 
> var poke =db.pokemons.findOne(query)
> poke
{
	"_id" : ObjectId("57701c7ce727775d5449d5cc"),
	"name" : "mastermon",
	"description" : "master",
	"type" : "supreme",
	"attack" : 99,
	"defence" : 30,
	"height" : 1.1
}
> 
##Atualização do pokemon (passo 07)

> poke.description
master
> poke.description = 'super master'
super master
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.findOne(query)
{
	"_id" : ObjectId("57701c7ce727775d5449d5cc"),
	"name" : "mastermon",
	"description" : "super master",
	"type" : "supreme",
	"attack" : 99,
	"defence" : 30,
	"height" : 1.1
}
>