# MongoDB - Aula 03 - Exercício
autor: Rodrigo Alves Guerra

## Liste todos Pokemons com a altura menor que 0.5 (passo 1)

	ogid-S430(mongod-2.4.9) be-mean-pokemons> var query = {height : {$lt : 0.5}}
	ogid-S430(mongod-2.4.9) be-mean-pokemons> db.pokemons.find(query)
	{
	  "_id": ObjectId("5642cb668068785ae3aecb5b"),
	  "name": "Rattata",
	  "description": "Deixa a galera loka",
	  "type": "normal",
	  "attack": 30,
	  "defense": "56",
	  "height": 0.4
	}
	Fetched 1 record(s) in 2ms

## Liste todos Pokemons com a altura maior ou igual que 0.5 (passo 2)

	ogid-S430(mongod-2.4.9) be-mean-pokemons> var query = {height : {$gte : 0.5}}
	ogid-S430(mongod-2.4.9) be-mean-pokemons> db.pokemons.find(query)
	{
	  "_id": ObjectId("5642c9018068785ae3aecb57"),
	  "name": "Kadabra",
	  "description": "Muito Misterioso",
	  "type": "psychic",
	  "attack": 35,
	  "defense": "30",
	  "height": 0.6
	}
	{
	  "_id": ObjectId("5642c9cb8068785ae3aecb58"),
	  "name": "Raichu",
	  "description": "Pokemon maloqueiro",
	  "type": "electric",
	  "attack": 90,
	  "defense": "55",
	  "height": 0.9
	}
	{
	  "_id": ObjectId("5642ca298068785ae3aecb59"),
	  "name": "Blastoise",
	  "description": "Um dos mais top da galaxia",
	  "type": "water",
	  "attack": 83,
	  "defense": "100",
	  "height": 0.9
	}
	{
	  "_id": ObjectId("5642ca838068785ae3aecb5a"),
	  "name": "Abra",
	  "description": "Muito loko chapadao",
	  "type": "psychic",
	  "attack": 20,
	  "defense": "15",
	  "height": 0.5
	}
	Fetched 4 record(s) in 7ms



##  Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama (passo 3)
	ogid-S430(mongod-2.4.9) be-mean-pokemons> var query = {$and:[{height : {$gte : 0.5}}, {type : 'grass'}]}
	ogid-S430(mongod-2.4.9) be-mean-pokemons> db.pokemons.find(query)
	Fetched 0 record(s) in 1ms



