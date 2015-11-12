# MongoDB - Aula 02 - Exercício
autor: Erni Augusto Fonseca Souza (Sistema_On)

## 1. Liste todos Pokemons com a altura menor que 0.5
connecting to: be-mean-pokemon
> var query = {heigth: {$lt: 0.5}}
> var field = {name: 1, heigth: 1, type: 1, _id: 0}
> db.pokemons.find(query, field)
{ "name" : "Meowth", "type" : "normal", "heigth" : 0.4 }

## 2. Liste todos Pokemons com a altura maior ou igual que 0.5
> var query = {heigth: {$gte: 0.5}}
> db.pokemons.find(query, field)
{ "name" : "Charizard", "type" : "fogo", "heigth" : 1.7 }
{ "name" : "Blastoise", "type" : "água", "heigth" : 1.6 }
{ "name" : "Raichu", "type" : "elétrico", "heigth" : 0.8 }
{ "name" : "Gengar", "type" : "fantasma", "heigth" : 1.5 }

##3. Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama
var query = {$and: [{type: "grama"}, {heigth: {$lte: 0.5}}]}
db.pokemons.find(query, field)
//Retornou nada, pois não possue no meu banco.

## 4. Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5
> var query = {$or: [{name: "Pikachu"}, {attack: {$lte: 0.5}}]}
> db.pokemons.find(query, field)
//Retornou nada, pois não possue no meu banco.

## 5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5
> db.pokemons.find(query, field)
{ "name" : "Raichu", "type" : "elétrico", "attack" : 50, "heigth" : 0.8 }
{ "name" : "Meowth", "type" : "normal", "attack" : 20, "heigth" : 0.4 }
