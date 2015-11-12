# MongoDB - Aula 03 - Exercício
autor: Robson Fagundes

## 1. Liste todos Pokemons com a altura menor que 0.5;

    ```
	R1(mongod-3.0.7) be-mean-pokemons> var query = {height : {$lt : 0.5}}
	R1(mongod-3.0.7) be-mean-pokemons> query
	{
	  "height": {
	    "$lt": 0.5
	  }
	}
	R1(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
	{
	  "_id": ObjectId("56427fedb892b212ddd6ec90"),
	  "name": "Pikachu",
	  "description": "Rato elétrico bem fofinho",
	  "type": "electric",
	  "attack": 55,
	  "height": 0.4
	}
	{
	  "_id": ObjectId("5642852e576657b5d00592c6"),
	  "name": "Charmeleon",
	  "description": "Charmeleon mercilessly destroys its foes using its sharp claws.",
	  "type": "Fire",
	  "attack": 70,
	  "height": 0.3
	}
	{
	  "_id": ObjectId("564285dd576657b5d00592c8"),
	  "name": "Charmander",
	  "description": "The flame that burns at the tip of its tail is an indication of its emotions.",
	  "type": "Fire",
	  "attack": 60,
	  "height": 0.2
	}
	{
	  "_id": ObjectId("564286db576657b5d00592c9"),
	  "name": "Bulbasaur",
	  "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back.",
	  "type": "Glass, Poison",
	  "attack": 35,
	  "height": 0.1
	}
	Fetched 4 record(s) in 10ms
    
    ```

## 2. Liste todos Pokemons com a altura maior ou igual que 0.5;

    ```
 	R1(mongod-3.0.7) be-mean-pokemons> var query = {height : {$gte : 0.5 }}
	R1(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
	{
	  "_id": ObjectId("5642801eb892b212ddd6ec91"),
	  "name": "Charizard",
	  "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
	  "type": "Fire",
	  "attack": 65,
	  "height": 0.6
	}
	{
	  "_id": ObjectId("56428597576657b5d00592c7"),
	  "name": "Blastoise",
	  "description": "Blastoise has water spouts that protrude from its shell.",
	  "type": "Water",
	  "attack": 50,
	  "height": 0.7
	}
	Fetched 2 record(s) in 2ms


    ```

## 3. Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama;

    ```
    R1(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{height : {$lte : 0.5 }}, {type : 'grama'}] }
    R1(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
    Fetched 0 record(s) in 0ms

    R1(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{height : {$lte : 0.5 }}, {type : 'Fire, grama'}] }
    R1(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("5642852e576657b5d00592c6"),
      "name": "Charmeleon",
      "description": "Charmeleon mercilessly destroys its foes using its sharp claws.",
      "type": "Fire, grama",
      "attack": 70,
      "height": 0.3
    }
    Fetched 1 record(s) in 0ms

    ```

## 4. Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5;

    ```
 	R1(mongod-3.0.7) be-mean-pokemons> var query = {$or: [{name : 'Pikachu'}, {height : {$lte : 0.5 }}] }
	R1(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
	{
	  "_id": ObjectId("56427fedb892b212ddd6ec90"),
	  "name": "Pikachu",
	  "description": "Rato elétrico bem fofinho",
	  "type": "electric",
	  "attack": 55,
	  "height": 0.4
	}
	{
	  "_id": ObjectId("5642852e576657b5d00592c6"),
	  "name": "Charmeleon",
	  "description": "Charmeleon mercilessly destroys its foes using its sharp claws.",
	  "type": "Fire, grama",
	  "attack": 70,
	  "height": 0.3
	}
	{
	  "_id": ObjectId("564285dd576657b5d00592c8"),
	  "name": "Charmander",
	  "description": "The flame that burns at the tip of its tail is an indication of its emotions.",
	  "type": "Fire",
	  "attack": 60,
	  "height": 0.2
	}
	{
	  "_id": ObjectId("564286db576657b5d00592c9"),
	  "name": "Bulbasaur",
	  "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back.",
	  "type": "Glass, Poison",
	  "attack": 35,
	  "height": 0.1
	}
	Fetched 4 record(s) in 1ms

    
    ```

## 5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5;

    ```
    R1(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{ attack : {$gte : 48 }}, { height: {$lte : 0.5} }] }
    R1(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("56427fedb892b212ddd6ec90"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    {
      "_id": ObjectId("5642852e576657b5d00592c6"),
      "name": "Charmeleon",
      "description": "Charmeleon mercilessly destroys its foes using its sharp claws.",
      "type": "Fire, grama",
      "attack": 70,
      "height": 0.3
    }
    {
      "_id": ObjectId("564285dd576657b5d00592c8"),
      "name": "Charmander",
      "description": "The flame that burns at the tip of its tail is an indication of its emotions.",
      "type": "Fire",
      "attack": 60,
      "height": 0.2
    }
    Fetched 3 record(s) in 1ms


    ```
