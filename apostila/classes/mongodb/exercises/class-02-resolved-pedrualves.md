# MongoDB - Aula 02 - Exercício
autor: Pedro Alves

## Listagem das databases (passo 2)

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> use be-mean-pokemons
switched to db be-mean-pokemons
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
be-mean           → 0.078GB
local             → 0.078GB

## Listagem das coleções (passo 3)

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> show collections
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> 

## Cadastro dos pokemons (passo 4)

var pokemon = {name: 'Eevee', description: 'Lindinho', type: 'normal', attack: 55, defense: 50, height: 0.3}
var pokemon = {name: 'Vaporeon', description: 'Bonitao', type: 'agua', attack: 65, defense: 60, height: 1.0}
var pokemon = {name: 'Jolteon', description: 'Irado', type: 'eletrico', attack: 65, defense: 60, height: 0.8}
var pokemon = {name: 'Flareon', description: 'Maneiro', type: 'fogo', attack: 130,  defense: 60, height: 1.0}
var pokemon = {name: 'Umbreon', description: 'Sinistro', type: 'noturno', attack: 65, defense: 110, height: 0.8}
var pokemon = {name: 'Glaceon', description: 'Gelado', type: 'gelo', attack: 60, defense: 110, height: 1.0}
var pokemon = {name: 'Leafon', description: 'Calmo', type: 'grama', attack: 110,  defense: 130,height: 0.9}
var pokemon = {name: 'Espeon', description: 'Preguica', type: 'psiquico', attack: 65,  defense: 60,height: 1.0}
var pokemon = {name: 'Sylveon', description: 'Menininha', type: 'fada', attack: 65,  defense: 65,height: 0.3}

## Lista dos pokemons (passo 5)

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5642913df5fbb520a8ae5de7"),
  "name": "Eevee",
  "description": "Lindinho",
  "type": "normal",
  "attack": 55,
  "defense": 50,
  "height": 0.3
}
{
  "_id": ObjectId("5642914bf5fbb520a8ae5de8"),
  "name": "Vaporeon",
  "description": "Bonitao",
  "type": "agua",
  "attack": 65,
  "defense": 60,
  "height": 1
}
{
  "_id": ObjectId("56429153f5fbb520a8ae5de9"),
  "name": "Jolteon",
  "description": "Irado",
  "type": "eletrico",
  "attack": 65,
  "defense": 60,
  "height": 0.8
}
{
  "_id": ObjectId("56429159f5fbb520a8ae5dea"),
  "name": "Flareon",
  "description": "Maneiro",
  "type": "fogo",
  "attack": 130,
  "defense": 60,
  "height": 1
}
{
  "_id": ObjectId("56429160f5fbb520a8ae5deb"),
  "name": "Umbreon",
  "description": "Sinistro",
  "type": "noturno",
  "attack": 65,
  "defense": 110,
  "height": 0.8
}
{
  "_id": ObjectId("56429167f5fbb520a8ae5dec"),
  "name": "Glaceon",
  "description": "Gelado",
  "type": "gelo",
  "attack": 60,
  "defense": 110,
  "height": 1
}
{
  "_id": ObjectId("5642916cf5fbb520a8ae5ded"),
  "name": "Leafon",
  "description": "Calmo",
  "type": "grama",
  "attack": 110,
  "defense": 130,
  "height": 0.9
}
{
  "_id": ObjectId("56429175f5fbb520a8ae5dee"),
  "name": "Espeon",
  "description": "Preguica",
  "type": "psiquico",
  "attack": 65,
  "defense": 60,
  "height": 1
}
{
  "_id": ObjectId("5642917cf5fbb520a8ae5def"),
  "name": "Sylveon",
  "description": "Menininha",
  "type": "fada",
  "attack": 65,
  "defense": 65,
  "height": 0.3
}
Fetched 9 record(s) in 4ms
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> 

## Pokemon (passo 6)

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var query = {name: 'Jolteon'}
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var poke = db.pokemons.find(query)
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> poke
{
  "_id": ObjectId("56429153f5fbb520a8ae5de9"),
  "name": "Jolteon",
  "description": "Irado",
  "type": "eletrico",
  "attack": 65,
  "defense": 60,
  "height": 0.8
}
Fetched 1 record(s) in 1ms
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> 

## Atualização do Pokemon (passo 6)

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var query = {name: 'Jolteon'}
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var poke = db.pokemons.findOne(query)
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> poke.description = 'Espetado'
Espetado
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})


MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> db.pokemons.findOne(query)
{
  "_id": ObjectId("56429153f5fbb520a8ae5de9"),
  "name": "Jolteon",
  "description": "Espetado",
  "type": "eletrico",
  "attack": 65,
  "defense": 60,
  "height": 0.8
}
