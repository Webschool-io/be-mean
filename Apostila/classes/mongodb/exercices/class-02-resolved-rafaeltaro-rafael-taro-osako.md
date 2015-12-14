# MongoDB - Aula 02 - Exercício
autor: Rafael Taro Osako

## Listagem das databases (passo 2)
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
be-mean           → 0.078GB
local             → 0.078GB

## Listagem das coleções (passo 3)
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> show collections

## Cadastro dos pokemons (passo 4)
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Blastoise', 'description':'tartaruga tanque', 'attack': 40, 'defense':40, 'height':1.6}
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 301ms
WriteResult({"nInserted": 1})

Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Butterfree', 'description':'Borboletinha', 'attack': 20, 'defense':20, 'height':1.1}
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 3ms
WriteResult({"nInserted": 1})

Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Pidgey', 'description':'Pássaro com super senso de direção', 'attack': 20, 'defense':20, 'height':0.3}
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 6ms
WriteResult({"nInserted": 1})

Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Zubat', 'description':'Morcego, se queima no sol', 'attack': 20, 'defense':20, 'height':0.8}
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({"nInserted": 1})

Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Bellsprout', 'description':'Plants vs zombies', 'attack': 40, 'defense':20, 'height':0.7}
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({"nInserted": 1})

Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Pikachu', 'description':'Rato chocante', 'attack': 30, 'defense':20, 'height':0.4}
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({"nInserted": 1})

## Lista dos pokemons (passo 5)
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5668b7d5d9bf505f036304ce"),
  "name": "Blastoise",
  "description": "tartaruga tanque",
  "attack": 40,
  "defense": 40,
  "height": 1.6
}
{
  "_id": ObjectId("5668b82dd9bf505f036304cf"),
  "name": "Butterfree",
  "description": "Borboletinha",
  "attack": 20,
  "defense": 20,
  "height": 1.1
}
{
  "_id": ObjectId("5668b84cd9bf505f036304d0"),
  "name": "Pidgey",
  "description": "Pássaro com super senso de direção",
  "attack": 20,
  "defense": 20,
  "height": 0.3
}
{
  "_id": ObjectId("5668b856d9bf505f036304d1"),
  "name": "Zubat",
  "description": "Morcego, se queima no sol",
  "attack": 20,
  "defense": 20,
  "height": 0.8
}
{
  "_id": ObjectId("5668b85dd9bf505f036304d2"),
  "name": "Bellsprout",
  "description": "Plants vs zombies",
  "attack": 40,
  "defense": 20,
  "height": 0.7
}
{
  "_id": ObjectId("5668ba12d9bf505f036304d3"),
  "name": "Pikachu",
  "description": "Rato chocante",
  "attack": 30,
  "defense": 20,
  "height": 0.4
}


## Pikachu (passo 6)
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> var query = {name:"Pikachu"}
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5668ba12d9bf505f036304d3"),
  "name": "Pikachu",
  "description": "Rato chocante",
  "attack": 30,
  "defense": 20,
  "height": 0.4
}

## Atualização do Pikachu (passo 6)
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> poke.description = "Rato elétrico";
Rato elétrico
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 8ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})