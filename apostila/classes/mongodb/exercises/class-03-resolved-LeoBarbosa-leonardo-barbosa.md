# MongoDB - Aula 03 - Exercício
autor: Leonardo Barbosa de Oliveira

## Listagem de todos os pokemons com a altura MENOR QUE 0.5 (passo 1)

	var query = {height: {$lt: 0.5}}
	> db.pokemons.find(query)
	{ 
		"_id" : ObjectId("5643b8b7fc9650b6cfbc0e71"),
		"name" : "Pidgey",
		"description" : "Pássaro",
		"attack" : 2,
		"defense" : 6,
		"height" : 0.3
	}
	{ 
		"_id" : ObjectId("5643b954fc9650b6cfbc0e72"),
		"name" : "Rattata",
		"description" : "Rato",
		"attack" : 3,
		"defense" : 2,
		"height" : 0.3
	}
	{
		"_id" : ObjectId("5643ba46fc9650b6cfbc0e74"),
		"name" : "Meowth",
		"description" : "Scratch Cat",
		"attack" : 2,
		"defense" : 2,
		"height" : 0.4
	}

## Listagem de todos os pokemons com a altura MAIOR OU IGUAL QUE 0.5 (passo 2)
	
	var query = {height: {$gte: 0.5}}
	> db.pokemons.find(query)
	{ 
		"_id" : ObjectId("5643b9d3fc9650b6cfbc0e73"),
		"name" : "Jigglypuff ",
		"description" : "Balloon",
		"attack" : 2,
		"defense" : 1,
		"height" : 0.5
	}
	{
		"_id" : ObjectId("5643bac2fc9650b6cfbc0e75"),
		"name" : "Snorlax",
		"description" : "Sleeping",
		"attack" : 6,
		"defense" : 3,
		"height" : 2.1
	}

## Listagem de todos os pokemons com a altura MENOR OU IGUAL QUE 0.5 E do tipo grama (passo 3)
	
	> var query1 = {type:'grama'}
	> var query2 = {heigth:{$lte:0.5}}
	> db.pokemons.find({$and:[query1,query2]})
	>

## Listagem de todos os pokemons com o name 'Pikachu' OU com attack MENOR OU IGUAL QUE 0.5 (passo 4)
	
	> var query = {$or: [{name:'Pikachu'}, {attack:{$lte: 0.5}}]}
	> db.pokemons.find(query)
	>


## Listar todos os pokemons com attack MAIOR OU IGUAL QUE 8 E com height MENOR OU IGUAL QUE 0.5 (passo 5)
	
	> var query1 = {attack:{$gte:8}}
	> var query2 = {heigth:{$lte:0.5}}
	> db.pokemons.find( { $and: [query1, query2]   } )
	>
