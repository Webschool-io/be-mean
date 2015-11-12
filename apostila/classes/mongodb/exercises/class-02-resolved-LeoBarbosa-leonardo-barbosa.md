# MongoDB - Aula 02 - Exercício
autor: Leonardo Barbosa de Oliveira

## Listagem das databases (passo 2)
	
	show dbs
	be-mean-instagram-mongodb  0.078GB
	be-mean-pokemons           0.078GB
	local                      0.078GB

## Listagem das coleções (passo 3)

	show collections
	pokemons
	system.indexes

## Cadastro dos pokemons (passo 4)
	
	//5 vezes os comando alterando os valores
	var pokemon = {'name':'Snorlax','description':'Sleeping','attack':6,'defense': 3,'height': 2.1}
	db.pokemons.insert(pokemon) 

## Lista dos pokemons (passo 5)

	db.pokemons.find()
	{ "_id" : ObjectId("5643b8b7fc9650b6cfbc0e71"), "name" : "Pidgey", "description" : "Pássaro", "attack" : 2, "defense" : 2, "height" : 0.3 }
	{ "_id" : ObjectId("5643b954fc9650b6cfbc0e72"), "name" : "Rattata", "description" : "Rato", "attack" : 3, "defense" : 2, "height" : 0.3 }
	{ "_id" : ObjectId("5643b9d3fc9650b6cfbc0e73"), "name" : "Jigglypuff ", "description" : "Balloon", "attack" : 2, "defense" : 1, "height" : 0.5 }
	{ "_id" : ObjectId("5643ba46fc9650b6cfbc0e74"), "name" : "Meowth", "description" : "Scratch Cat", "attack" : 2, "defense" : 2, "height" : 0.4 }
	{ "_id" : ObjectId("5643bac2fc9650b6cfbc0e75"), "name" : "Snorlax", "description" : "Sleeping", "attack" : 6, "defense" : 3, "height" : 2.1 }

## Pikachu (passo 6)

	var query =  {name: 'Pidgey'}
	> var p = db.pokemons.findOne(query)
	> p
	{
        "_id" : ObjectId("5643b8b7fc9650b6cfbc0e71"),
        "name" : "Pidgey",
        "description" : "Pássaro",
        "attack" : 2,
        "defense" : 2,
        "height" : 0.3
	}	

## Atualização do Pikachu (passo 6)

	poke = p
	poke
	{
	        "_id" : ObjectId("5643b8b7fc9650b6cfbc0e71"),
	        "name" : "Pidgey",
	        "description" : "Pássaro",
	        "attack" : 2,
	        "defense" : 2,
	        "height" : 0.3
	}


	poke.defense = 6
	db.pokemons.save(poke)