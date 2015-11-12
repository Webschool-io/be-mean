# MongoDB - Aula 02 - Exercício
autor: Fellipe Pinheiro

## Listagem das databases (passo 2)

```
5e14de9d5d4e(mongod-3.0.7) test> show dbs
be-mean          → 0.063GB
be-mean-pokemons → 0.031GB
local            → 0.031GB
```

## Listagem das coleções (passo 3)

```
5e14de9d5d4e(mongod-3.0.7) test> use be-mean-pokemons
switched to db be-mean-pokemons
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> show collections
pokemons       → 0.001MB / 0.008MB
system.indexes → 0.000MB / 0.008MB


```


## Cadastro dos pokemons (passo 4)

```
> var pokemons = [
	{
		'name': 'Eevee', 'description': '', 
		'attack': 55, 'defense': 50, 'height': 3, 'type': 'normal'
	},
	{
		'name': 'Jolteon', 'description': 'Electric's evolution', 
		'attack': 65, 'defense': 60, 'height': 8, 'type': 'electric'
	},
	{
		'name': 'Flareon', 'description': 'Fire's evolution', 
		'attack': 130, 'defense': 60, 'height': 9, 'type': 'fire'
	},
	{
		'name': 'Vaporeon', 'description': 'Water's evolution', 
		'attack': 65, 'defense': 60, 'height': 10, 'type': 'water'
	},
	{
		'name': 'Leafeon', 'description': 'Graas's evolution', 
		'attack': 110, 'defense': 130, 'height': 10, 'type': 'grass'
	},
]

5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemons)

Inserted 1 record(s) in 5ms
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
```

## Lista dos pokemons (passo 5)

```
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("564355fa17c6388471074b2d"),
  "name": "Eevee",
  "description": "",
  "attack": 55,
  "defense": 50,
  "height": 3,
  "type": "normal"
}
{
  "_id": ObjectId("56435a5ba43104534c4cf01d"),
  "name": "Jolteon",
  "description": "Electric evolution",
  "attack": 65,
  "defense": 60,
  "height": 8,
  "type": "electric"
}
{
  "_id": ObjectId("56435a5ba43104534c4cf01e"),
  "name": "Flareon",
  "description": "Fire evolution",
  "attack": 130,
  "defense": 60,
  "height": 9,
  "type": "fire"
}
{
  "_id": ObjectId("56435a5ba43104534c4cf01f"),
  "name": "Vaporeon",
  "description": "Water evolution",
  "attack": 65,
  "defense": 60,
  "height": 10,
  "type": "water"
}
{
  "_id": ObjectId("56435a5ba43104534c4cf020"),
  "name": "Leafeon",
  "description": "Graas evolution",
  "attack": 110,
  "defense": 130,
  "height": 10,
  "type": "grass"
}
Fetched 5 record(s) in 1ms
```

## Buscar Pokemon (passo 6)

```
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> var query = {'name': 'Eevee'}
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> var poke db.pokemons.findOne(query)
{
  "_id": ObjectId("564355fa17c6388471074b2d"),
  "name": "Eevee",
  "description": "",
  "attack": 55,
  "defense": 50,
  "height": 3,
  "type": "normal"
}

```

## Atualização do Pokemon (passo 6)

```
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> poke.description = "There are a lot of evolutions"
There are a lot of evolutions
5e14de9d5d4e(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 36ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

```