# MongoDB - Aula 03 - Exercício
autor: Lucas Bento da Silva

## Liste todos Pokemons com a altura **menor que** 0.5;

```
> var query = {height: {$lt: 0.5}};
> db.pokemons.find(query)
	{
		"_id" : ObjectId("5644860450339ebb379c812e"),
		"name" : "Charizard", 
		"description" : "Dragão com fogo no rabo",
		"type" : "fogo",
		"attack" : 84,
		"defense" : 78,
		"height" : 0.1
	}
```


## Liste todos Pokemons com a altura **maior ou igual que** 0.5

```
> var query = {height: {$gte: 0.5}};
> db.pokemons.find();
	{
		"_id" : ObjectId("5644860450339ebb379c812e"), 
		"name" : "Charizard", 
		"description" : "Dragão com fogo no rabo", 
		"type" : "fogo", 
		"attack" : 84, 
		"defense" : 78,
		"height" : 0.1
	}
	{ 
		"_id" : ObjectId("5644860450339ebb379c812f"), 
		"name" : "Bulbasaur", 
		"description" : "Parece um sapo fofinho", 
		"type" : "planta", 
		"attack" : 63, 
		"defense" : 80, 
		"height" : 10
	}
	{ 
		"_id" : ObjectId("5644860450339ebb379c8130"), 
		"name" : "Blastoise", 
		"description" : "Tartaruga com armas", 
		"type" : "água", 
		"attack" : 83, 
		"defense" : 100, 
		"height" : 16
	}
	{ 
		"_id" : ObjectId("5644860450339ebb379c8131"), 
		"name" : "Butterfree", 
		"description" : "Borboletinha", 
		"type" : "inseto", 
		"attack" : 45, 
		"defense" : 50, 
		"height" : 11
	}
	{ 
		"_id" : ObjectId("5644860450339ebb379c8132"), 
		"name" : "Pidgey", 
		"description": "Cabelo bonitão", 
		 "type" : "ave", 
		 "attack" : 45, 
		 "defense" : 40, 
		 "height" : 3
	}
	{ 
		"_id" : ObjectId("5644881a50339ebb379c8133"), 
		"name" : "Pikachu", 
		"description" : "Rato zica", 
		"type" : "elétrico", 
		"attack" : 55, 
		"defense" : 40,
		"height" : 4
	}
```


## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama

```
> var query = {height: {$lte: 0.5}, type: 'grama'};
> db.pokemons.find(query);
	{
		"_id" : ObjectId("5644881a50339ebb379c8133"),
		"name" : "Pikachu",
		"description" : "Rato zica",
		"type" : "grama",
		"attack" : 55,
		"defense" : 40,
		"height" : 0.5
	}
```


## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5

```
> var query = {$or: [{name: 'Pikachu'}, {height: {$lte: 0.5}}]};
> db.pokemons.find(query);
	{
		"_id" : ObjectId("5644860450339ebb379c812e"),
		"name" : "Charizard",
		"description" : "Dragão comfogo no rabo",
		"type" : "fogo",
		"attack" : 84,
		"defense" : 78,
		 "height" : 0.1 
	}
	{
		"_id" : ObjectId("5644881a50339ebb379c8133"),
		"name" : "Pikachu",
		"description" : "Rato zica",
		"type" : "grama",
		"attack" : 55,
		"defense" : 40,
		"height" : 0.5
	}
```


## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5

```
> var query = {attack: {$gte: 48}, height: {$lte: 0.5}};
> db.pokemons.find(query);
	{
		"_id" : ObjectId("5644860450339ebb379c812e"),
		"name" : "Charizard",
		"description" : "Dragão comfogo no rabo",
		"type" : "fogo",
		"attack" : 84,
		"defense" : 78,
		 "height" : 0.1 
	}
	{
		"_id" : ObjectId("5644881a50339ebb379c8133"),
		"name" : "Pikachu",
		"description" : "Rato zica",
		"type" : "grama",
		"attack" : 55,
		"defense" : 40,
		"height" : 0.5
	}
```