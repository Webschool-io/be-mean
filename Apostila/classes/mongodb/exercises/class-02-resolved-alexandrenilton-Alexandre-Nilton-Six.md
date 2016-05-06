# MongoDB - Aula 02 - Exercício
autor: Alexandre Nilton Six Matos Belem

## 1. Crie uma database chamada be-mean-pokemons
$ mongo
2016-05-05T21:27:16.108-0300 I CONTROL  [main] Hotfix KB2731284 or later update is not installed, will zero-out data files
MongoDB shell version: 3.2.4
connecting to: test
Mongo-Hacker 0.0.13
use be-mean-pokemons
switched to db be-mean-pokemons

## 2. Liste quais databases você possui nesse servidor
show dbs
be-mean           → 0.005GB
be-mean-instagram → 0.000GB
local             → 0.000GB
mean              → 0.000GB

## 3. Liste quais coleções você possui nessa database
show collections

Depois de criar os pokemons:
show collections
pokemons → 0.001MB / 0.031MB

## 4. Insira pelo menos 5 polemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height
var poke = {'name':'Nidorina','description':'Fica nervosinho se for separado dos outros','type': 'Poison Pin', 'attack': 48, height: 0.8, defense: 35 }
db.pokemons.insert(poke);
Inserted 1 record(s) in 392ms
WriteResult({
  "nInserted": 1
})
var poke = {'name':'Venusaur','description':'O aroma de flores acalma as emoções das pessoas','type': 'Grass', 'attack': 40, height: 2.0, defense: 37 }
db.pokemons.insert(poke);
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
var poke = {'name':'Charmander','description':'A chama que queima para em seu rabo é um indicativo de sua emoção','type': 'Lizard', 'attack': 30, height: 0.6, defense: 48 }
db.pokemons.insert(poke);
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
var poke = {'name':'Machoke','description':'Muito forte','type': 'Superpower', 'attack': 50, height: 1.5, defense: 60 }
db.pokemons.insert(poke)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})

var poke = {'name':'Rattata','description':'É cauteloso ao extremo','type': 'Mouse', 'attack': 30, height: 0.3, defense: 15 }
db.pokemons.insert(poke)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

## 5. Liste os pokemons existentes na sua coleção
db.pokemons.find()
{
  "_id": ObjectId("572be8c653c52c07946675ff"),
  "name": "Nidorina",
  "description": "Fica nervosinho se for separado dos outros",
  "type": "Poison Pin",
  "attack": 48,
  "height": 0.8,
  "defense": 35
}
{
  "_id": ObjectId("572be8d953c52c0794667600"),
  "name": "Venusaur",
  "description": "O aroma de flores acalma as emoções das pessoas",
  "type": "Grass",
  "attack": 40,
  "height": 2,
  "defense": 37
}
{
  "_id": ObjectId("572be8e753c52c0794667601"),
  "name": "Charmander",
  "description": "A chama que queima para em seu rabo é um indicativo de sua emoção",
  "type": "Lizard",
  "attack": 30,
  "height": 0.6,
  "defense": 48
}
{
  "_id": ObjectId("572be8f653c52c0794667602"),
  "name": "Machoke",
  "description": "Muito forte",
  "type": "Superpower",
  "attack": 50,
  "height": 1.5,
  "defense": 60
}
{
  "_id": ObjectId("572be91653c52c0794667603"),
  "name": "Rattata",
  "description": "É cauteloso ao extremo",
  "type": "Mouse",
  "attack": 30,
  "height": 0.3,
  "defense": 15
}
Fetched 5 record(s) in 6ms

## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;

var query = {name:'Rattata'}
var poke = db.pokemons.findOne(query)
poke
{
  "_id": ObjectId("572be91653c52c0794667603"),
  "name": "Rattata",
  "description": "É cauteloso ao extremo",
  "type": "Mouse",
  "attack": 30,
  "height": 0.3,
  "defense": 15
}

## 7. Modifique sua `description` e salvê-o

var query = {name:'Rattata'}
var poke = db.pokemons.findOne(query)
poke
{
  "_id": ObjectId("572be91653c52c0794667603"),
  "name": "Rattata",
  "description": "É cauteloso ao extremo",
  "type": "Mouse",
  "attack": 30,
  "height": 0.3,
  "defense": 15
}
poke.description = 'É muito é preguiçoso esse pokemon'
É muito é preguiçoso esse pokemon
db.pokemons.save(poke)
Updated 1 existing record(s) in 1ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

