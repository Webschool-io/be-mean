# MongoDB - Aula 03 - Exercício
autor: Felipe Cabianchi de Oliveira

## Liste todos Pokemons com a altura **menor que** 0.5;

var query = {height : {$lt : 0.5}}

db.pokemons.find(query)


## Liste todos Pokemons com a altura **maior ou igual que** 0.5

var query = {height : {$gte : 0.5}}

db.pokemons.find(query)


## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama

var query = {$and : [{height : {$lte : 0.5}}, {type : 'grama'}]}

db.pokemons.find(query)

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5

var query = {$or : [{name : 'Pikachu'}, {attack : {$lte : 0.5}}]}

db.pokemons.find(query)

## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5

var query = {$and : [{attack : {$gte : 48}}, {height : {$lte : 0.5}}]}

db.pokemons.find(query)