# MongoDB - Aula 03 - Exercício
autor: JOHAN PEDRO INÊS

## Liste todos Pokemons com a altura **menor que** 0.5;
```
	> var query = {height:{$lt:0.5}}
	> db.pokemons.find(query)
	>
```
## Liste todos Pokemons com a altura **maior ou igual que** 0.5
```
	> var query = {height:{$gte:0.5}}
	> db.pokemons.find(query)
	{ "_id" : ObjectId("5643fe41916e298aebb522bb"), "name" : "charmander", "description" : "dragão de fogo", "type" : "fogo", "attack" : 600, "defense" : 500, "height" : 0.5 }
	{ "_id" : ObjectId("5643fe41916e298aebb522bc"), "name" : "charmeleon", "description" : "dragãozinho maior", "type" : "fogo", "attack" : 1000, "defense" : 900, "height" : 0.8 }
	{ "_id" : ObjectId("5643fe41916e298aebb522bd"), "name" : "charlizard", "description" : "upgrade do upgrade do dragão de fogo", "type" : "fogo", "attack" : 1500, "defense" : 1300, "height" : 2.1 }
	{ "_id" : ObjectId("5643fe41916e298aebb522be"), "name" : "charliemon brown", "description" : "aspirador de pó", "type" : "skate", "attack" : 3, "defense" : 0, "height" : 1.9 }
	{ "_id" : ObjectId("5643fe41916e298aebb522bf"), "name" : "mc brinquedomon", "description" : "Roça o pokemon nela que ela gosta", "type" : "carai", "attack" : 1, "defense" : 0, "height" : 1.6 }
```
## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama
```
	> var query = {$and:[{height:{$lte:0.5}},{type:'grama'}]}
	> db.pokemons.find(query)
	>
```


## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5
```
	> var query = {$or:[{attack:{$lte:0.5}},{name:'Pikachu'}]}
	> db.pokemons.find(query)
	>
```

## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5
```
	> var query = {$and:[{attack:{$gte:48}},{height:{$lte:0.5}}]}
	> db.pokemons.find(query)
	{ "_id" : ObjectId("5643fe41916e298aebb522bb"), "name" : "charmander", "description" : "dragão de fogo", "type" : "fogo", "attack" : 600, "defense" : 500, "height" : 0.5 }
	>
```