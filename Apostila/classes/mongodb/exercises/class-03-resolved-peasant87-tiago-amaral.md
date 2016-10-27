# MongoDB - Aula 02 - Exercício
autor: Tiago Amaral

## Altura < 0.5

    ```
	db.pokemons.find({height: {$lt: 0.5}})
	{
	  "_id": ObjectId("580961423ec41a29daaf3195"),
	  "name": "Pikachu",
	  "description": "Rato elétrico bem fofinho",
	  "type": "electric",
	  "attack": 55,
	  "height": 0.4
	}
	{
	  "_id": ObjectId("580961923ec41a29daaf3196"),
	  "name": "Bulbassauro",
	  "description": "Chicote de trepadeira",
	  "type": "grama",
	  "attack": 49,
	  "height": 0.4
	}
	{
	  "_id": ObjectId("580965e23ec41a29daaf3199"),
	  "name": "Caterpie",
	  "description": "Larva lutadora",
	  "type": "inseto",
	  "attack": 30,
	  "height": 0.3,
	  "defense": 35
	}
	{
	  "_id": ObjectId("580965fc3ec41a29daaf319a"),
	  "name": "Caterpie",
	  "description": "Larva lutadora",
	  "type": "inseto",
	  "attack": 30,
	  "height": 0.3
	}
	Fetched 4 record(s) in 7ms

    ```

## Altura >= 0.5

    ```
    db.pokemons.find({height: {$gte: 0.5}})
	{
	  "_id": ObjectId("580961a73ec41a29daaf3197"),
	  "name": "Charmander",
	  "description": "Esse é o cão chupando manga de fofinho",
	  "type": "fogo",
	  "attack": 52,
	  "height": 0.6
	}
	{
	  "_id": ObjectId("580961ba3ec41a29daaf3198"),
	  "name": "Charmander",
	  "description": "Esse é o cão chupando manga de fofinho",
	  "type": "fogo",
	  "attack": 52,
	  "height": 0.6
	}
	Fetched 2 record(s) in 2ms

    ```

## Altura <= 0.5 E tipo = grama

	```
	var query1 = {type:"grama"}
	var query2 = {height: {$lte: 0.5}}
	db.pokemons.find({$and: [query1, query2]})
	{
	  "_id": ObjectId("580961923ec41a29daaf3196"),
	  "name": "Bulbassauro",
	  "description": "Chicote de trepadeira",
	  "type": "grama",
	  "attack": 49,
	  "height": 0.4
	}
	Fetched 1 record(s) in 2ms

	```

## Nome = "pikachu" OU ataque <= 0.5

    ```
    var query1 = {name:"Pikachu"}
    var query2 = {attack: {$lte: 0.5}}
    db.pokemons.find({$or: [query1, query2]})
	{
	  "_id": ObjectId("580961423ec41a29daaf3195"),
	  "name": "Pikachu",
	  "description": "Rato elétrico bem fofinho",
	  "type": "electric",
	  "attack": 55,
	  "height": 0.4
	}
	Fetched 1 record(s) in 2ms

	```

## Ataque >= 48 E Altura <= 0.5

    ```
	var query1 = {attack:{$gte: 48}}
	var query2 = {height: {$lte: 0.5}}
	db.pokemons.find({$and: [query1, query2]})
	{
	  "_id": ObjectId("580961423ec41a29daaf3195"),
	  "name": "Pikachu",
	  "description": "Rato elétrico bem fofinho",
	  "type": "electric",
	  "attack": 55,
	  "height": 0.4
	}
	{
	  "_id": ObjectId("580961923ec41a29daaf3196"),
	  "name": "Bulbassauro",
	  "description": "Chicote de trepadeira",
	  "type": "grama",
	  "attack": 49,
	  "height": 0.4
	}
	Fetched 2 record(s) in 3ms

	```