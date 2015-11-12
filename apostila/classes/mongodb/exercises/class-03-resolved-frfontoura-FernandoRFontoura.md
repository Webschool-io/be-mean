# MongoDB - Aula 03 - Exercício
autor: Fernando Rufino Fontoura

## 1. Liste todos Pokemons com a altura menor que 0.5

    ```
	fernando(mongod-3.0.7) be-mean-instagram> var query = {height: {$lt: 0.5}}
	fernando(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
	{
	  "_id": ObjectId("56429277829e5482343c5f7b"),
	  "name": "Pikachu",
	  "description": "Rato elétrico bem fofinho",
	  "type": "electric",
	  "attack": 55,
	  "height": 0.4
	}
	{
	  "_id": ObjectId("56429337829e5482343c5f7c"),
	  "name": "Bulbassauro",
	  "description": "Chicote de trepadeira",
	  "type": "grama",
	  "attack": 49,
	  "height": 0.4
	}
	{
	  "_id": ObjectId("5642943c829e5482343c5f7f"),
	  "name": "Caterpie",
	  "description": "Larva lutadora",
	  "type": "inseto",
	  "attack": 30,
	  "height": 0.3,
	  "defense": 35
	}
	Fetched 3 record(s) in 2ms
    ```

## 2. Liste todos Pokemons com a altura maior ou igual que 0.5

    ```
    fernando(mongod-3.0.7) be-mean-instagram> var query = {height: {$gte: 0.5}}
	fernando(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
	{
	  "_id": ObjectId("56429353829e5482343c5f7d"),
	  "name": "Charmander",
	  "description": "Esse é o cão chupando manga de fofinho",
	  "type": "fogo",
	  "attack": 52,
	  "height": 0.6
	}
	{
	  "_id": ObjectId("564293ae829e5482343c5f7e"),
	  "name": "Squirtle",
	  "description": "Ejeta água que passarinho não bebe",
	  "type": "água",
	  "attack": 48,
	  "height": 0.5
	}
	Fetched 2 record(s) in 5ms
    ```

## 3. Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama

    ```
	fernando(mongod-3.0.7) be-mean-instagram> var query1 = {height: {$lte: 0.5}}
	fernando(mongod-3.0.7) be-mean-instagram> var query2 = {type: "grama"}
	fernando(mongod-3.0.7) be-mean-instagram> db.pokemons.find({$and:[query1, query2]})
	{
	  "_id": ObjectId("56429337829e5482343c5f7c"),
	  "name": "Bulbassauro",
	  "description": "Chicote de trepadeira",
	  "type": "grama",
	  "attack": 49,
	  "height": 0.4
	}
	Fetched 1 record(s) in 1ms
    ```

## 4. Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5

    ```
	fernando(mongod-3.0.7) be-mean-instagram> var query = {$or: [{name: "Pikachu"}, {attack: {$lte: 0.5}}]}
	fernando(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
	{
	  "_id": ObjectId("56429277829e5482343c5f7b"),
	  "name": "Pikachu",
	  "description": "Rato elétrico bem fofinho",
	  "type": "electric",
	  "attack": 55,
	  "height": 0.4
	}
	Fetched 1 record(s) in 1ms

    ```

## 5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5

    ```
	fernando(mongod-3.0.7) be-mean-instagram> var query1 = {attack: {$gte: 48}}
	fernando(mongod-3.0.7) be-mean-instagram> var query2 = {height: {$lte: 0.5}}
	fernando(mongod-3.0.7) be-mean-instagram> db.pokemons.find({$and:[query1, query2]})
	{
	  "_id": ObjectId("56429277829e5482343c5f7b"),
	  "name": "Pikachu",
	  "description": "Rato elétrico bem fofinho",
	  "type": "electric",
	  "attack": 55,
	  "height": 0.4
	}
	{
	  "_id": ObjectId("56429337829e5482343c5f7c"),
	  "name": "Bulbassauro",
	  "description": "Chicote de trepadeira",
	  "type": "grama",
	  "attack": 49,
	  "height": 0.4
	}
	{
	  "_id": ObjectId("564293ae829e5482343c5f7e"),
	  "name": "Squirtle",
	  "description": "Ejeta água que passarinho não bebe",
	  "type": "água",
	  "attack": 48,
	  "height": 0.5
	}
	Fetched 3 record(s) in 1ms
    ```
