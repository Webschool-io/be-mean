# MongoDb - Aula 03 - Exercício
Autor: Rodrigo Mogueira

## 1. Liste todos os Pokemons com a altura menor que 0.5

> query = {height: { $lt: 0.5}}
{ "height" : { "$lt" : 0.5 } }
> query
{ "height" : { "$lt" : 0.5 } }

db.pokemons.find(query)
{ "_id" : ObjectId("57703ac572b18e3861434842"), "name" : "Pikachu", "description" : "Rato eletrico", "type" : "eletrico", "attack" : 100, "height" : 0.4 }
{ "_id" : ObjectId("57703ac572b18e3861434843"), "name" : "Bulbassauro", "description" : "Chicote", "type" : "grama", "attack" : 49, "height" : 0.4 }
> db.pokemons.find(query).pretty()
{
	"_id" : ObjectId("57703ac572b18e3861434842"),
	"name" : "Pikachu",
	"description" : "Rato eletrico",
	"type" : "eletrico",
	"attack" : 100,
	"height" : 0.4
}
{
	"_id" : ObjectId("57703ac572b18e3861434843"),
	"name" : "Bulbassauro",
	"description" : "Chicote",
	"type" : "grama",
	"attack" : 49,
	"height" : 0.4
}

## 2. Liste todos os Pokemons com a altura maior que 0.5

> query = {height: { $gte: 0.5}}
{ "height" : { "$gte" : 0.5 } }
> db.pokemons.find(query).pretty()
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
	"description" : "super master",
	"type" : "supreme",
	"attack" : 99,
	"defence" : 30,
	"height" : 1.1
}
> 


## 3. Liste todos os Pokemons com a altura menor ou igual que 0.5 e do tipo grama

> query = {$and: [{height: {$lte: 0.5}}, {type:'grama'}]}
{
	"$and" : [
		{
			"height" : {
				"$lte" : 0.5
			}
		},
		{
			"type" : "grama"
		}
	]
}
> query
{
	"$and" : [
		{
			"height" : {
				"$lte" : 0.5
			}
		},
		{
			"type" : "grama"
		}
	]
}
> db.pokemons.find(query).pretty()
{
	"_id" : ObjectId("57703ac572b18e3861434843"),
	"name" : "Bulbassauro",
	"description" : "Chicote",
	"type" : "grama",
	"attack" : 49,
	"height" : 0.4
}
> 

## 4. Liste todos os Pokemons com o nome "Pikachu" ou com attack menor ou igual que 0.5

> var query = {$or: [{attack: {$lte: 0.5}}, {name:'Pikachu'}]}
> query
{
	"$or" : [
		{
			"attack" : {
				"$lte" : 0.5
			}
		},
		{
			"name" : "Pikachu"
		}
	]
}
> db.pokemons.find(query).pretty()
{
	"_id" : ObjectId("57703ac572b18e3861434842"),
	"name" : "Pikachu",
	"description" : "Rato eletrico",
	"type" : "eletrico",
	"attack" : 100,
	"height" : 0.4
}
> 



## 5. Liste todos os Pokemons com attack maior ou igual que 48 e com height menor ou igual que 0.5

> var query = {$and: [{attack: {$gte: 4.8}}, {height:{$lte: 0.5}}]}
> query
{
	"$and" : [
		{
			"attack" : {
				"$gte" : 4.8
			}
		},
		{
			"height" : {
				"$lte" : 0.5
			}
		}
	]
}
> db.pokemons.find(query).pretty()
{
	"_id" : ObjectId("57703ac572b18e3861434842"),
	"name" : "Pikachu",
	"description" : "Rato eletrico",
	"type" : "eletrico",
	"attack" : 100,
	"height" : 0.4
}
{
	"_id" : ObjectId("57703ac572b18e3861434843"),
	"name" : "Bulbassauro",
	"description" : "Chicote",
	"type" : "grama",
	"attack" : 49,
	"height" : 0.4
}
> 


