# MongoDB - Aula 02 - Exercício
autor: Pedro Alves

## Listagem das databases (passo 2)

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> use be-mean-pokemons<br/>
switched to db be-mean-pokemons<br/>
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> show dbs<br/>
be-mean-instagram → 0.078GB<br/>
be-mean           → 0.078GB<br/>
local             → 0.078GB<br/>

## Listagem das coleções (passo 3)

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> show collections<br/>
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> <br/>

## Cadastro dos pokemons (passo 4)

var pokemon = {name: 'Eevee', description: 'Lindinho', type: 'normal', attack: 55, defense: 50, height: 0.3}<br/>
var pokemon = {name: 'Vaporeon', description: 'Bonitao', type: 'agua', attack: 65, defense: 60, height: 1.0}<br/>
var pokemon = {name: 'Jolteon', description: 'Irado', type: 'eletrico', attack: 65, defense: 60, height: 0.8}<br/>
var pokemon = {name: 'Flareon', description: 'Maneiro', type: 'fogo', attack: 130,  defense: 60, height: 1.0}<br/>
var pokemon = {name: 'Umbreon', description: 'Sinistro', type: 'noturno', attack: 65, defense: 110, height: 0.8}<br/>
var pokemon = {name: 'Glaceon', description: 'Gelado', type: 'gelo', attack: 60, defense: 110, height: 1.0}<br/>
var pokemon = {name: 'Leafon', description: 'Calmo', type: 'grama', attack: 110,  defense: 130,height: 0.9}<br/>
var pokemon = {name: 'Espeon', description: 'Preguica', type: 'psiquico', attack: 65,  defense: 60,height: 1.0}<br/>
var pokemon = {name: 'Sylveon', description: 'Menininha', type: 'fada', attack: 65,  defense: 65,height: 0.3}<br/>

## Lista dos pokemons (passo 5)

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> db.pokemons.find()<br/>
{<br/>
  "_id": ObjectId("5642913df5fbb520a8ae5de7"),<br/>
  "name": "Eevee",<br/>
  "description": "Lindinho",<br/>
  "type": "normal",<br/>
  "attack": 55,<br/>
  "defense": 50,<br/>
  "height": 0.3<br/>
}<br/>
{<br/>
  "_id": ObjectId("5642914bf5fbb520a8ae5de8"),<br/>
  "name": "Vaporeon",<br/>
  "description": "Bonitao",<br/>
  "type": "agua",<br/>
  "attack": 65,<br/>
  "defense": 60,<br/>
  "height": 1<br/>
}<br/>
{<br/>
  "_id": ObjectId("56429153f5fbb520a8ae5de9"),<br/>
  "name": "Jolteon",<br/>
  "description": "Irado",<br/>
  "type": "eletrico",<br/>
  "attack": 65,<br/>
  "defense": 60,<br/>
  "height": 0.8<br/>
}<br/>
{<br/>
  "_id": ObjectId("56429159f5fbb520a8ae5dea"),<br/>
  "name": "Flareon",<br/>
  "description": "Maneiro",<br/>
  "type": "fogo",<br/>
  "attack": 130,<br/>
  "defense": 60,<br/>
  "height": 1<br/>
}<br/>
{<br/>
  "_id": ObjectId("56429160f5fbb520a8ae5deb"),<br/>
  "name": "Umbreon",<br/>
  "description": "Sinistro",<br/>
  "type": "noturno",<br/>
  "attack": 65,<br/>
  "defense": 110,<br/>
  "height": 0.8<br/>
}<br/>
{<br/>
  "_id": ObjectId("56429167f5fbb520a8ae5dec"),<br/>
  "name": "Glaceon",<br/>
  "description": "Gelado",<br/>
  "type": "gelo",<br/>
  "attack": 60,<br/>
  "defense": 110,<br/>
  "height": 1<br/>
}<br/>
{<br/>
  "_id": ObjectId("5642916cf5fbb520a8ae5ded"),<br/>
  "name": "Leafon",<br/>
  "description": "Calmo",<br/>
  "type": "grama",<br/>
  "attack": 110,<br/>
  "defense": 130,<br/>
  "height": 0.9<br/>
}<br/>
{<br/>
  "_id": ObjectId("56429175f5fbb520a8ae5dee"),<br/>
  "name": "Espeon",<br/>
  "description": "Preguica",<br/>
  "type": "psiquico",<br/>
  "attack": 65,<br/>
  "defense": 60,<br/>
  "height": 1<br/>
}<br/>
{<br/>
  "_id": ObjectId("5642917cf5fbb520a8ae5def"),<br/>
  "name": "Sylveon",<br/>
  "description": "Menininha",<br/>
  "type": "fada",<br/>
  "attack": 65,<br/>
  "defense": 65,<br/>
  "height": 0.3<br/>
}<br/>
Fetched 9 record(s) in 4ms<br/>
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> <br/>

## Pokemon (passo 6)

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var query = {name: 'Jolteon'}<br/>
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var poke = db.pokemons.find(query)<br/>
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> poke<br/>
{<br/>
  "_id": ObjectId("56429153f5fbb520a8ae5de9"),<br/>
  "name": "Jolteon",<br/>
  "description": "Irado",<br/>
  "type": "eletrico",<br/>
  "attack": 65,<br/>
  "defense": 60,<br/>
  "height": 0.8<br/>
}<br/>
Fetched 1 record(s) in 1ms<br/>
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> <br/>

## Atualização do Pokemon (passo 6)

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var query = {name: 'Jolteon'}<br/>
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var poke = db.pokemons.findOne(query)<br/>
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> poke.description = 'Espetado'<br/>
Espetado<br/>
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> db.pokemons.save(poke)<br/>
Updated 1 existing record(s) in 2ms<br/>
WriteResult({<br/>
  "nMatched": 1,<br/>
  "nUpserted": 0,<br/>
  "nModified": 1<br/>
})<br/>


MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> db.pokemons.findOne(query)<br/>
{<br/>
  "_id": ObjectId("56429153f5fbb520a8ae5de9"),<br/>
  "name": "Jolteon",<br/>
  "description": "Espetado",<br/>
  "type": "eletrico",<br/>
  "attack": 65,<br/>
  "defense": 60,<br/>
  "height": 0.8<br/>
}<br/>
