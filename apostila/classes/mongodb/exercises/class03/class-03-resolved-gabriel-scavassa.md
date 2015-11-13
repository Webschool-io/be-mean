# MongoDB - Aula 03 - Exercício
autor: Gabriel Scavassa

## Liste todos Pokemons com a altura **menor que** 0.5;

	> var query = {height : {$lt: 0.5 }}
	> db.pokemon.find(query)
	{ "_id" : ObjectId("5643954a47d3bcac08b578ee"), "name" : "Pikachu", "description" : "Rato elétrico", "type" : "eletric", "attack" : 100, "height" : 0.4 }
	{ "_id" : ObjectId("5643960a47d3bcac08b578ef"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
	{ "_id" : ObjectId("5643973a47d3bcac08b578f2"), "name" : "Caterpie", "description" : "Larva", "type" : "Grama", "attack" : 20, "height" : 0.3, "defense" : 35 }


## Liste todos Pokemons com a altura **maior ou igual que** 0.5

	> var query = {height : {$gte: 0.5 }}
	> db.pokemon.find(query)
	{ "_id" : ObjectId("5643964647d3bcac08b578f0"), "name" : "Charmander", "description" : "Cão chupando manga", "type" : "fogo", "attack" : 52, "height" : 0.6 }
	{ "_id" : ObjectId("5643967647d3bcac08b578f1"), "name" : "Squirtle", "description" : "Ejeta agua que passarinho nao bebe", "type" : "fogo", "attack" : 48, "height" : 0.5 }


## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama

	> var query = {$and :[ {type: 'grama'}, { height : {$lt: 0.5 }}]}
	> db.pokemon.find(query)
	{ "_id" : ObjectId("5643960a47d3bcac08b578ef"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }


## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5

	> var query = {$or: [ {name: 'Pikachu'}, { attack : {$lte: 50 }}]}
	> db.pokemon.find(query)
	{ "_id" : ObjectId("5643954a47d3bcac08b578ee"), "name" : "Pikachu", "description" : "Rato elétrico", "type" : "eletric", "attack" : 55, "height" : 0.4 }
	{ "_id" : ObjectId("5643960a47d3bcac08b578ef"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
	{ "_id" : ObjectId("5643967647d3bcac08b578f1"), "name" : "Squirtle", "description" : "Ejeta agua que passarinho nao bebe", "type" : "fogo", "attack" : 48, "height" : 0.5 }
	{ "_id" : ObjectId("5643973a47d3bcac08b578f2"), "name" : "Caterpie", "description" : "Larva", "type" : "Grama", "attack" : 20, "height" : 0.3, "defense" : 35 }


## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5

   	> var query = {$and: [ {height: {$lte : 0.5}}, { attack : {$gte: 48 }}]}
	> db.pokemon.find(query)
	{ "_id" : ObjectId("5643954a47d3bcac08b578ee"), "name" : "Pikachu", "description" : "Rato elétrico", "type" : "eletric", "attack" : 100, "height" : 0.4 }
	{ "_id" : ObjectId("5643960a47d3bcac08b578ef"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
	{ "_id" : ObjectId("5643967647d3bcac08b578f1"), "name" : "Squirtle", "description" : "Ejeta agua que passarinho nao bebe", "type" : "fogo", "attack" : 48, "height" : 0.5 }