# MongoDB - Aula 02 - Exercício
autor: Paulo Tosi

## Liste todos Pokemons com a altura **menor que** 0.5;

```
var query = {height: {$lt: 0.5}}

db.pokemons.find(query)

```

## Liste todos Pokemons com a altura **maior ou igual que** 0.5

```
var query = {height: {$gte: 0.5}}

db.pokemons.find(query)

{ "_id" : ObjectId("5643fb9ee267de8e396719b3"), "name" : "Fearow", "description" : "passaro locao", "type" : "passaro", "attack" : 50, "defense" : 30, "height" : 1.2 }
{ "_id" : ObjectId("5643fb9ee267de8e396719b4"), "name" : "Arbok", "description" : "Um cobra na ver", "type" : "cobra", "attack" : 40, "defense" : 100, "height" : 3.5 }
{ "_id" : ObjectId("5643fb9ee267de8e396719b5"), "name" : "Raticate", "description" : "Rato estranho", "type" : "rato", "attack" : 40, "defense" : 100, "height" : 0.7 }
{ "_id" : ObjectId("5643fb9ee267de8e396719b6"), "name" : "Dima", "description" : "Filha da puta", "type" : "Ladrao", "attack" : 13, "defense" : 100, "height" : 1.3 }
{ "_id" : ObjectId("5643fb9ee267de8e396719b7"), "name" : "PT", "description" : "banco de filha da puta, cuzão do caralho", "type" : "Ladrao", "attack" : 13, "defense" : 100, "height" : 1.3 }


```


## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama

```
var query = {$and: [{height:{$lte:0.5}},{type:"grama"}]}

db.pokemons.find(query)

```

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5

```
var query = {$or: [{name:"Pikachu"},{attack:{$lte:0.5}}]}

db.pokemons.find(query)

```

## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5

```
var query = {$and: [{attack:{$gte:0.5}},{height:{$lte:0.5}}]}

db.pokemons.find(query)

```