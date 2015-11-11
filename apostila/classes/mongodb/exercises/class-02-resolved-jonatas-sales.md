# MongoDB - Aula 02 - Exercício
autor: Jonatas Sales

## Criação do database (passo 1)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-instagram> use be-mean-pokemons
switched to db be-mean-pokemons
```
## Listagem das databases (passo 2)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram  0.078GB
be-mean            0.078GB
local              0.078GB
```

## Listagem das coleções (passo 3)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> show collections
```

## Cadastro dos pokemons (passo 4)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'malafaia', description: 'viado', attack: 24, defense: 24, height: 1.90})
```

## Lista dos pokemons (passo 5)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5642bd913e7b13c695792c3c"),
  "name": "Pikachu",
  "description": "solta raio",
  "attack": 24,
  "defense": 24,
  "height": 0.5
}
{
  "_id": ObjectId("5642bd913e7b13c695792c3d"),
  "name": "exnamorada",
  "description": "vagabunda",
  "attack": 100,
  "defense": 100,
  "height": 1.6
}
{
  "_id": ObjectId("5642bebb3e7b13c695792c3e"),
  "name": "bolsonaro",
  "description": "burro pra caralho",
  "attack": 0,
  "defense": 0,
  "height": 0
}
{
  "_id": ObjectId("5642bede3e7b13c695792c3f"),
  "name": "sherazzadi",
  "description": "Solta fogo e merda pela boca, mal comida",
  "attack": 0,
  "defense": 0,
  "height": 1.6
}
{
  "_id": ObjectId("5642bf373e7b13c695792c40"),
  "name": "malafaia",
  "description": "viado",
  "attack": 24,
  "defense": 24,
  "height": 1.9
}

```

## Pikachu (passo 6)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var query = {name:'Pikachu'}
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.find(query)
```

## Atualização do Pikachu (passo 6)

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> poke.description = 'rato amarelo'
rato amarelo
Jonatass-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 8ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
