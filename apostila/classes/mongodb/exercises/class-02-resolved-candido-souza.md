# MongoDB - Aula 02 - Exercício
autor: Candido Souza

## Listagem das databases

```

dev(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean           → 0.078GB
local             → 0.078GB
be-mean-instagram → 0.078GB


```

## Listagem das collections

```
dev(mongod-3.0.7) be-mean-pokemons> show collections

```

## Cadastro dos pokemons

```
dev(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Pikachu','description':'Rato elétrico','type':'eletric','attack':100,'height':0.4}
dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 377ms
WriteResult({
  "nInserted": 1
})
dev(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Bulbassauro','description':'Chocote de trepadeira','type':'grama','attack':49,'height':0.4}
dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
dev(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Charmander','description':'Esse é o cão chupando manga','type':'fogo','attack':52,'height':0.6}
dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 19ms
WriteResult({
  "nInserted": 1
})
dev(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Squirtle','description':'Ejeta água que passarinho não bebe','type':'água','attack':48,'height':0.5}
dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})
dev(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Caterpie','description':'Larva lutadora','type': 'inseto', attack: 30, height: 0.3 }
dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

```

## Listagem de pokemons

```
dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56429979766f48560d54c43b"),
  "name": "Pikachu",
  "description": "Rato elétrico",
  "type": "eletric",
  "attack": 100,
  "height": 0.4
}
{
  "_id": ObjectId("56429994766f48560d54c43c"),
  "name": "Bulbassauro",
  "description": "Chocote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564299a1766f48560d54c43d"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("564299b2766f48560d54c43e"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
{
  "_id": ObjectId("564299c2766f48560d54c43f"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3
}
Fetched 5 record(s) in 2ms

```

## Busca de pokemon

```
dev(mongod-3.0.7) be-mean-pokemons> var query = {name: 'Squirtle'}

dev(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)

```

## Alteração de pokemon

```

dev(mongod-3.0.7) be-mean-pokemons> var query = {name: 'Squirtle'}

dev(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)

dev(mongod-3.0.7) be-mean-pokemons> poke.description = 'Bebedor de água ardente'
Bebedor de água ardente

dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 1ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})


dev(mongod-3.0.7) be-mean-pokemons> db.pokemons.findOne(query)
{
  "_id": ObjectId("564299b2766f48560d54c43e"),
  "name": "Squirtle",
  "description": "Bebedor de água ardente",
  "type": "água",
  "attack": 48,
  "height": 0.5
}

```