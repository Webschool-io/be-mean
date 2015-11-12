# MongoDB - Aula 03 - Exercício
autor: Edison Bosnyak

## Listagem dos pokemons com altura menor que 5 (passo 1)
	> var query = {height:{$lt:5}}
	> db.pokemons.find(query)
	>
	
## Listagem dos pokemons com altura maior ou igual que 5 (passo 2)
	> var query = {height:{$gte:5}}
	> db.pokemons.find(query)
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca670"),
	        "name" : "Abra",
	        "description" : "Abra sleeps for eighteen hours a day.",
	        "attack" : 20,
	        "defense" : 15,
	        "height" : 9
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca671"),
	        "name" : "Kadabra",
	        "description" : "Kadabra emite uma onda peculiar.",
	        "attack" : 35,
	        "defense" : 30,
	        "height" : 13
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca672"),
	        "name" : "Alakazam",
	        "description" : "Alakazam's brain continually grows, making its head far too heavy to support with its neck.",
	        "attack" : 50,
	        "defense" : 45,
	        "height" : 15
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca673"),
	        "name" : "Voltorb",
	        "description" : "Voltorb was first sighted at a company that manufactures Poké Balls. ",
	        "attack" : 30,
	        "defense" : 50,
	        "height" : 5
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca674"),
	        "name" : "Electrode",
	        "description" : "Electrode eats electricity in the atmosphere.",
	        "attack" : 50,
	        "defense" : 70,
	        "height" : 12
	}

## Listagem dos pokemons com altura menor ou igual que 5 e do defesa maior que 50  (passo 3)
	> var query = {$and:[{height:{$lte:5}},{defense:{$gt:50}}]}
	> db.pokemons.find(query)
	>


## Listagem dos pokemons com name 'Pikachu' ou com attack menor ou igual que 50 (passo 4)
	> var query = {$or:[{name:"Pikachu"},{attack:{$lte:50}}]}
	> db.pokemons.find(query)
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca670"),
	        "name" : "Abra",
	        "description" : "Abra sleeps for eighteen hours a day.",
	        "attack" : 20,
	        "defense" : 15,
	        "height" : 9
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca671"),
	        "name" : "Kadabra",
	        "description" : "Kadabra emite uma onda peculiar.",
	        "attack" : 35,
	        "defense" : 30,
	        "height" : 13
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca672"),
	        "name" : "Alakazam",
	        "description" : "Alakazam's brain continually grows, making its head far too heavy to support with its neck.",
	        "attack" : 50,
	        "defense" : 45,
	        "height" : 15
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca673"),
	        "name" : "Voltorb",
	        "description" : "Voltorb was first sighted at a company that manufactures Poké Balls. ",
	        "attack" : 30,
	        "defense" : 50,
	        "height" : 5
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca674"),
	        "name" : "Electrode",
	        "description" : "Electrode eats electricity in the atmosphere.",
	        "attack" : 50,
	        "defense" : 70,
	        "height" : 12
	}

## Listagem dos pokemons com attack maior ou igual que 48 e height menor ou igual que 5 (passo 5)
	> var query = {$and:[{attack:{$gte:48}},{height:{$lte:5}}]}
	> db.pokemons.find(query)
	> 

