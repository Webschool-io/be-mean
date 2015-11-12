# MongoDB - Aula 03 - Exercício
autor: WILSON ALBINO JUNIOR

## 1 Listanto Pokemons com altura menor que 0.5

	junior-pc(mongod-2.6.3) be-mean-pokemons> var query = { height: {$lt: 0.5}}
	junior-pc(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query)
	Fetched 0 record(s) in 0ms


## 2 Listando Pokemons com altura maior ou igual que 0.5

	junior-pc(mongod-2.6.3) be-mean-pokemons> var query = { height: {$gte: 0.5}}
	junior-pc(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query)
	{
	  "_id": ObjectId("56433b05ece2228ff6988a28"),
	  "name": "Venusaur",
	  "description": "Ultima evolução do Bulbasar",
	  "type": "Grama",
	  "attack": 45,
	  "defense": 45,
	  "height": 0.9
	}
	{
	  "_id": ObjectId("56433c29ece2228ff6988a29"),
	  "name": "Charizard",
	  "description": "Ultima evolução do Charmander",
	  "type": "Fogo",
	  "attack": 45,
	  "defense": 30,
	  "height": 0.9
	}
	{
	  "_id": ObjectId("56433cafece2228ff6988a2a"),
	  "name": "Blastoise",
	  "description": "Ultima evolução do Squirtle",
	  "type": "Água",
	  "attack": 40,
	  "defense": 45,
	  "height": 0.8
	}
	{
	  "_id": ObjectId("56433dd0ece2228ff6988a2b"),
	  "name": "Articuno",
	  "description": "Pokemon lendário pika das galáxias fodastico I",
	  "type": "Gelo",
	  "attack": 60,
	  "defense": 45,
	  "height": 1
	}
	{
	  "_id": ObjectId("56433e1cece2228ff6988a2c"),
	  "name": "Zapdos",
	  "description": "Pokemon lendário pika das galáxias II",
	  "type": "Elétrico",
	  "attack": 55,
	  "defense": 45,
	  "height": 1
	}
	{
	  "_id": ObjectId("56433e54ece2228ff6988a2d"),
	  "name": "Moltres",
	  "description": "Pokemon lendário pika das galáxias III",
	  "type": "Fogo",
	  "attack": 58,
	  "defense": 45,
	  "height": 1
	}
	{
	  "_id": ObjectId("56433ed4ece2228ff6988a2e"),
	  "name": "Mewtwo",
	  "description": "Pokemon lendário pika das galáxias FODÁSTICO",
	  "type": "Psychic",
	  "attack": 65,
	  "defense": 50,
	  "height": 1
	}
	{
	  "_id": ObjectId("56433f1aece2228ff6988a2f"),
	  "name": "Mew",
	  "description": "Pokemon lendário pika das galáxias FODÁSTICO e fofo",
	  "type": "Psychic",
	  "attack": 60,
	  "defense": 45,
	  "height": 1
	}
	{
	  "_id": ObjectId("5643434f22350b4bb5c5c63b"),
	  "name": "Articuno",
	  "description": "Pokemon lendário mais foda pika das galáxias I",
	  "type": "Gelo",
	  "attack": 60,
	  "defense": 45,
	  "height": 1
	}
	Fetched 9 record(s) in 11ms

## 3 Listando Pokemons com altura menor ou igual a 0.5 E do tipo Grama

	junior-pc(mongod-2.6.3) be-mean-pokemons> var query = {$and: [{type: 'Grama'},{height:{$lte: 0.5}}]}
	junior-pc(mongod-2.6.3) be-mean-pokemons> query
	{
	  "$and": [
	    {
	      "type": "Grama"
	    },
	    {
	      "height": {
		"$lte": 0.5
	      }
	    }
	  ]
	}
	junior-pc(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query)
	Fetched 0 record(s) in 1ms


## 4 Listando Pokemons com name 'Pikachu' ou com attack menor ou igual a 0.5

	junior-pc(mongod-2.6.3) be-mean-pokemons> var query = {$or: [{name: 'Pikachu'},{attack:{$lte: 0.5}}]}
	junior-pc(mongod-2.6.3) be-mean-pokemons> query
	{
	  "$or": [
	    {
	      "name": "Pikachu"
	    },
	    {
	      "attack": {
		"$lte": 0.5
	      }
	    }
	  ]
	}
	junior-pc(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query)
	Fetched 0 record(s) in 17ms


## 5 Listando Pokemons com attack MAIOR OU IGUAL QUE 48 E com altura MENOR OU IGUAL QUE 0.5

	junior-pc(mongod-2.6.3) be-mean-pokemons> var query = {$and: [{attack: 48},{height:{$lte: 0.5}}]}
	junior-pc(mongod-2.6.3) be-mean-pokemons> query
	{
	  "$and": [
	    {
	      "attack": 48
	    },
	    {
	      "height": {
		"$lte": 0.5
	      }
	    }
	  ]
	}
	junior-pc(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query)
	Fetched 0 record(s) in 2ms


	
