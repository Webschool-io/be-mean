# MongoDB - Aula 02 - Exercício
autor: FELIPE ANDRADA

## Listagem das databases (passo 2)
felipea(mongod-3.0.6) be-mean-instagram> use be-mean-pokemons
switched to db be-mean-pokemons

felipea(mongod-3.0.6) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
bemean            → 0.078GB
local             → 0.078GB

## Listagem das coleções (passo 3)
felipea(mongod-3.0.6) be-mean-pokemons> show collections

## Cadastro dos pokemons (passo 4)
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert({name: 'Jigglypuff', description: 'just pink, small and happy', attack: 45, defense: 20, height: 5})
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert({name: 'Gloom', description: 'gloooom :D~', attack: 65, defense: 70, height: 8})
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert({name: 'Psyduck', description: 'A psycho sick and sad duckbill', attack: 52, defense: 48, height: 8})
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert({name: 'Bulbasaur', description: 'Our green dino flower', attack: 49, defense: 49, height: 7})
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert({name: 'Meowth', description: 'The pokecat', attack: 45, defense: 35, height: 4})
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert({name: 'Pikachu', description: 'Pikapika', attack: 55, defense: 40, height: 4})

## Lista dos pokemons (passo 5)
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5643643bdfeeaa75c58bd793"),
  "name": "Jigglypuff",
  "description": "just pink, small and happy",
  "attack": 45,
  "defense": 20,
  "height": 5
}
{
  "_id": ObjectId("564364bedfeeaa75c58bd794"),
  "name": "Gloom",
  "description": "gloooom :D~",
  "attack": 65,
  "defense": 70,
  "height": 8
}
{
  "_id": ObjectId("5643656cdfeeaa75c58bd795"),
  "name": "Psyduck",
  "description": "A psycho sick and sad duckbill",
  "attack": 52,
  "defense": 48,
  "height": 8
}
{
  "_id": ObjectId("5643665adfeeaa75c58bd796"),
  "name": "Bulbasaur",
  "description": "Our green dino flower",
  "attack": 49,
  "defense": 49,
  "height": 7
}
{
  "_id": ObjectId("56436724dfeeaa75c58bd797"),
  "name": "Meowth",
  "description": "The pokecat",
  "attack": 45,
  "defense": 35,
  "height": 4
}
{
  "_id": ObjectId("56436754dfeeaa75c58bd798"),
  "name": "Pikachu",
  "description": "Pikapika",
  "attack": 55,
  "defense": 40,
  "height": 4
}
Fetched 6 record(s) in 6ms


## Pikachu (passo 6)
felipea(mongod-3.0.6) be-mean-pokemons> query = {name: 'Pikachu'}
{
  "name": "Pikachu"
}
felipea(mongod-3.0.6) be-mean-pokemons> var poke = db.pokemons.findOne(query)
felipea(mongod-3.0.6) be-mean-pokemons> poke
{
  "_id": ObjectId("56436754dfeeaa75c58bd798"),
  "name": "Pikachu",
  "description": "Pikapika",
  "attack": 55,
  "defense": 40,
  "height": 4
}

## Atualização do Pikachu (passo 6)
felipea(mongod-3.0.6) be-mean-pokemons> poke.description = 'Pikachu we dont like you'
Pikachu we dont like you

felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 10ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56436754dfeeaa75c58bd798"),
  "name": "Pikachu",
  "description": "Pikachu we dont like you",
  "attack": 55,
  "defense": 40,
  "height": 4
}
Fetched 1 record(s) in 4ms