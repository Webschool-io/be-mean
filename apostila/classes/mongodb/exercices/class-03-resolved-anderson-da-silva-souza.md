# MongoDB - Aula 03 - Exercício
autor: Anderson da Silva Souza

## Liste todos Pokemons com a altura **menor que** 0.5;

		var query = {height:{$lt:0.5}}
		db.pokemons.find(query)


## Liste todos Pokemons com a altura **maior ou igual que** 0.5

		var query = {height:{$lte:0.5}}
	    db.pokemons.find(query)


## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama

	var query1 = {height:{$lte:0.5}}
	var query2 = {type:'grama'}
	db.pokemons.find({$and:[query1,query2]})


## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5

	var query1 = {name:'pikachu'}
	var query2 = {attack:{$lte:0.5}}
	db.pokemons.find({$or:[query1,query2]}) 


## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5
	var query1 = {attack:{$gte:48}}
	var query2 = {height:{$lte:0.5}}
	db.pokemons.find({$and:[query1,query2]})


