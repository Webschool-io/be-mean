# MongoDB - Aula 02 - Exercício
autor: Jose Otavio Quaglio

## Criacao do database (passo 1)
> use be-mean-pokemons
switched to db be-mean-pokemons

## Listagem das databases (passo 2)
> show dbs
be-mean → 0.078GB
local   → 0.078GB

## Listagem das coleções (passo 3)
> show collections
(sem colecoes)

## Cadastro dos pokemons (passo 4)
> var pokemons = [ { name: 'Pikachu', description: 'Pokemon eletrico', defense: 33, attack: 55, height: 0.4 }, { name: 'Bulbassauro', description: 'Chicote de trepadeira', defense: 34, attack: 49, height: 0.4 }, { name: 'Charmander', description: 'Elite de fogo', defense: 32, attack: 52, height: 0.6 }, { name: 'Squirtle', description: 'Joga agua na galera', defense: 33, attack: 48, height: 0.5 }, { name: 'Caterpie', description: 'Topzinho', defense: 30, attack: 30, height: 0.3 } ]
> db.pokemons.save(pokemons)
Inserted 1 record(s) in 481ms
BulkWriteResult({
  "writeErrors": [ ],
  "writeConcernErrors": [ ],
  "nInserted": 5,
  "nUpserted": 0,
  "nMatched": 0,
  "nModified": 0,
  "nRemoved": 0,
  "upserted": [ ]
})

## Lista dos pokemons (passo 5)
> db.pokemons.find()
{
  "_id": ObjectId("5643ddeb517828e293a3e1a8"),
  "name": "Pikachu",
  "description": "Pokemon eletrico",
  "defense": 33,
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("5643ddeb517828e293a3e1a9"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "defense": 34,
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("5643ddeb517828e293a3e1aa"),
  "name": "Charmander",
  "description": "Elite de fogo",
  "defense": 32,
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("5643ddeb517828e293a3e1ab"),
  "name": "Squirtle",
  "description": "Joga agua na galera",
  "defense": 33,
  "attack": 48,
  "height": 0.5
}
{
  "_id": ObjectId("5643ddeb517828e293a3e1ac"),
  "name": "Caterpie",
  "description": "Topzinho",
  "defense": 30,
  "attack": 30,
  "height": 0.3
}
Fetched 5 record(s) in 4ms

## Pikachu (passo 6)
> var poke = db.pokemons.findOne({ name: 'Pikachu' })
> poke
{
  "_id": ObjectId("5643ddeb517828e293a3e1a8"),
  "name": "Pikachu",
  "description": "Pokemon eletrico",
  "defense": 33,
  "attack": 55,
  "height": 0.4
}

## Atualização do Pikachu (passo 7)
> poke.description = 'pokemon porreta'
pokemon porreta
> db.pokemons.save(poke)
Updated 1 existing record(s) in 5ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
> poke
{
  "_id": ObjectId("5643ddeb517828e293a3e1a8"),
  "name": "Pikachu",
  "description": "pokemon porreta",
  "defense": 33,
  "attack": 55,
  "height": 0.4
}