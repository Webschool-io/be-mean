# MongoDB - Aula 02 - Exercício
autor: Dayvson Sales

## Listagem das databases (passo 2)
show dbs

be-mean	0.203125GB  
be-mean-pokemons	0.203125GB  
local	0.078125GB  

## Listagem das coleções (passo 3)
show collections  
pokemons  
system.indexes  
## Cadastro dos pokemons (passo 4)
```
var arr_poke = [
	{
		"name" : "Voltorb",
		"description" : "It was discovered when POK BALLS were introduced. It is said that there is some connection.",
		"type" : "electric",
		"attack" : 30,
		"height" : 5
	},
	{
		"name" : "Bulbasaur",
		"description" : "joga aguinha, eu acho",
		"type" : "water",
		"attack" : 65,
		"height" : 0.4
	},
	{
		"name" : "Charmeleon",
		"description" : "não achei",
		"type" : "fire",
		"attack" : 80,
		"height" : 0.4
	},
	{
		"name" : "Charizard",
		"description" : "não achei",
		"type" : "fire",
		"attack" : 109,
		"height" : 0.4
	},
	{
		"name" : "Wartortle",
		"description" : "não achei",
		"type" : "terra",
		"attack" : 65,
		"height" : 0.4
	}
]
```
db.pokemons.insert(arr_poke)  

## Lista dos pokemons (passo 5)
db.pokemons.find({})  
{ "_id" : ObjectId("564287cdbc66beda1d9c4146"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }  
{ "_id" : ObjectId("564287e1bc66beda1d9c4147"), "name" : "Charmander", "description" : "Esse é o cão chupando manga de fofinho", "type" : "fogo", "attack" : 52, "height" : 0.6 }  
{ "_id" : ObjectId("564287fbbc66beda1d9c4148"), "name" : "Charmander", "description" : "Esse é o cão chupando manga de fofinho", "type" : "fogo", "attack" : 52, "height" : 0.6 }  
{ "_id" : ObjectId("564286febc66beda1d9c4145"), "name" : "Pikachu", "description" : "Rato elétrico", "type" : "eletric", "attack" : 55, "height" : 0.4, "defense" : 35 } 
{ "_id" : ObjectId("5642a86ebc66beda1d9c4149"), "name" : "Voltorb", "description" : "It was discovered when POK BALLS were introduced. It is said that there is some connection.", "type" : "electric", "attack" : 30, "height" : 5 }   
{ "_id" : ObjectId("5642a86ebc66beda1d9c414a"), "name" : "Bulbasaur", "description" : "joga aguinha, eu acho", "type" : "water", "attack" : 65, "height" : 0.4 }  
{ "_id" : ObjectId("5642a86ebc66beda1d9c414b"), "name" : "Charmeleon", "description" : "não achei", "type" : "fire", "attack" : 80, "height" : 0.4 }  
{ "_id" : ObjectId("5642a86ebc66beda1d9c414c"), "name" : "Charizard", "description" : "não achei", "type" : "fire", "attack" : 109, "height" : 0.4 }  
{ "_id" : ObjectId("5642a86ebc66beda1d9c414d"), "name" : "Wartortle", "description" : "não achei", "type" : "terra", "attack" : 65, "height" : 0.4 }  


## Charizard (passo 6)
(eu nao procurei pikachu)  
db.pokemons.find({name: "Charizard"})  
{ "_id" : ObjectId("5642a86ebc66beda1d9c414c"), "name" : "Charizard", "description" : "não achei", "type" : "fire", "attack" : 109, "height" : 0.4 }

## Atualização do Charizard (passo 7)  
var poke = db.pokemons.findOne({name: "Charizard"})  
poke['description'] = "solta fogo"  
db.pokemons.save(poke)  
