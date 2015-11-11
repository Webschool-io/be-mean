# MongoDB - Aula 02 - Exercício
autor: Fabiano Cacin Pinel

## 1. Crie uma database chamada be-mean-pokemons;
```
$ mongo be-mean-pokemons

2015-11-11T00:10:13.422-0200 I CONTROL  Hotfix KB2731284 or later update is not installed, will zero-out data files
MongoDB shell version: 3.0.7
connecting to: be-mean-pokemons

db.pokemons.insert({name: "Bulbasaur", description: "Bichinho verdinho e feinho", attack: 12, defense: 55, height: 0.7 })
```
## 2. Liste quais databases você possui nesse servidor;
```
show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
be-mean-teste      0.078GB
local              0.078GB
teste      
```
## 3. Liste quais coleções você possui nessa database;
```
show collections
pokemons
system.indexes
```
## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;
```
db.pokemons.insert({name: "Ivysaur", description: "Mesmo bichinho verdinho e feinho mas tem asas", attack: 25, defense: 56, height: 4.0 })
db.pokemons.insert({name: "Venusaur", description: "Bichinho feinho com um abacaxi na cabeça", attack: 24, defense: 58, height: 2.0 })
db.pokemons.insert({name: "Charmander", description: "Tartaruga pokemon", attack: 32, defense: 10, height: 0.6 })
db.pokemons.insert({name: "Charmeleon", description: "Tartaruga pokemon do mal", attack: 50, defense: 60, height: 1.1 })
db.pokemons.insert({name: "Charizard", description: "Drãgão galã", attack: 34, defense: 16, height: 1.7 })
```
## 5. Liste os pokemons existentes na sua coleção;
```
db.pokemons.find()
{ "_id" : ObjectId("5642aae859e08c5d4f034060"), "name" : "Bulbasaur", "description" : "Bichinho verdinho e feinho", "attack" : 12, "defense" : 55, "height" : 0.7 }
{ "_id" : ObjectId("5642ab73b195b651ecf3cf7e"), "name" : "Ivysaur", "description" : "Mesmo bichinho verdinho e feinho mas tem asas", "attack" : 25, "defense" : 56, "height" : 4 }
{ "_id" : ObjectId("5642ab7bb195b651ecf3cf7f"), "name" : "Venusaur", "description" : "Bichinho feinho com um abacaxi na cabeça", "attack" : 24, "defense" : 58, "height" : 2 }
{ "_id" : ObjectId("5642ab85b195b651ecf3cf80"), "name" : "Charmander", "description" : "Tartaruga pokemon", "attack" : 32, "defense" : 10, "height" : 0.6 }
{ "_id" : ObjectId("5642ab8db195b651ecf3cf81"), "name" : "Charmeleon", "description" : "Tartaruga pokemon do mal", "attack" : 50, "defense" : 60, "height" : 1.1 }
{ "_id" : ObjectId("5642ab94b195b651ecf3cf82"), "name" : "Charizard", "description" : "Drãgão galã", "attack" : 34, "defense" : 16, "height" : 1.7 }
```
## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;
```
query = { name: "Charizard"}
var p = db.pokemons.findOne(query){ "name" : "Charizard" }
p
{
        "_id" : ObjectId("5642ab94b195b651ecf3cf82"),
        "name" : "Charizard",
        "description" : "Drãgão galã",
        "attack" : 34,
        "defense" : 16,
        "height" : 1.7
}
```
## 7. Modifique sua `description` e salvê-o
```
p.description = 'muito doido'
db.pokemons.save(p)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```