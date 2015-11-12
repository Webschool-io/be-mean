# MongoDB - Aula 02 - Exercício
autor: GUILHERME BORGES VIANA

## Acessar / Criar DB

➜  ~  mongo
MongoDB shell version: 2.6.7
connecting to: test
Mongo-Hacker 0.0.8
Guilhermes-MacBook-Pro(mongod-2.6.7) test> use be-mean-pokemons
switched to db be-mean-pokemons

## Mostrar Colecoes

Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> show collections
pokemons       → 0.000MB / 0.008MB
system.indexes → 0.000MB / 0.008MB

## Mostrar Databases
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> show dbs
admin            → 0.078GB
be-mean-pokemons → 0.078GB
be-mean          → 0.078GB
gerenciador      → 0.203GB
local            → 0.078GB

## CRIANDO PIKACHUS EM VARIÁVEL E SALVANDO

Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> var pokemon = {'name':'Pikachu','description':'Rato elétrico bem fofinho','type': 'electric', attack: 55, height: 0.4 }
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 37ms
WriteResult({
  "nInserted": 1
})

Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> pokemon.name = 'Bulbasaur'
Bulbasaur
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> pokemon
{
  "name": "Bulbasaur",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> pokemon.name = 'Charmander'
Charmander
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> pokemon.name = 'Squirtle'
Squirtle
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})

## listando

Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56449ba08c78bf83fae9f35e"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56449c038c78bf83fae9f35f"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56449c438c78bf83fae9f360"),
  "name": "Bulbasaur",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56449c618c78bf83fae9f361"),
  "name": "Charmander",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56449c788c78bf83fae9f362"),
  "name": "Squirtle",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
Fetched 5 record(s) in 5ms

## PROCURANDO

Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> var poke = db.pokemons.find({name:'Squirtle'})
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> poke
{
  "_id": ObjectId("56449c788c78bf83fae9f362"),
  "name": "Squirtle",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}


## alterando e tentando salvar.

Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> poke.description = 'Eu gosto muito desse pokemon embora nunca tenha visto desenho algum'
Eu gosto muito desse pokemon embora nunca tenha visto desenho algum
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> db.pokemons.save(poke)
2015-11-12T12:07:20.665-0200 can't save a DBQuery object at src/mongo/shell/collection.js:143
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> poke
Fetched 0 record(s) in 0ms
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> poke
Fetched 0 record(s) in 0ms
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> var poke = db.pokemons.find({name:'Squirtle'})
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> poke
{
  "_id": ObjectId("56449c788c78bf83fae9f362"),
  "name": "Squirtle",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 1ms
Guilhermes-MacBook-Pro(mongod-2.6.7) be-mean-pokemons> poke.