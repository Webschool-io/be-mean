# MongoDB - Aula 02 - Exercício
autor: Diego Costa

## Crie uma database chamada be-mean-pokemons

```
DIEGO-LAPTOP(mongod-3.0.7) test> use be-mean-pokemons
switched to db be-mean-pokemons
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons>
```
## Liste quais databases você possui nesse servidor

```
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean   0.078GB
database  0.078GB
local     0.078GB
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons>
```

## Liste quais coleções você possui nessa database

```
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons> show collections
pokemons        0.001MB / 0.008MB
system.indexes  0.000MB / 0.008MB
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons>
```

## Insira pelo menos 5 pokémons a sua escolha utilizando o mesmo padrão de campos utilizados: name, description, attack, defense e height

```
var pokemons = [
{
	'name' : 'Bulbasaur',
	'description' : 'Bulbasaur is a dual-type Grass/Poison Pokémon.',
	'attack' : '49',
	'defense' : '49',
	'height' : '0.7m'
},
{
	'name' : 'Charmander',
	'description' : 'Charmander is a Fire-type Pokémon.',
	'attack' : '52',
	'defense' : '43',
	'height' : '0.6m'
},
{
	'name' : 'Squirtle',
	'description' : 'Squirtle is a Water-type Pokémon.',
	'attack' : '48',
	'defense' : '65',
	'height' : '0.5m'
},
{
	'name' : 'Pikachu',
	'description' : 'Pikachu is an Eletric-type Pokémon.',
	'attack' : '55',
	'defense' : '30',
	'height' : '0.4m'
},
{
	'name' : 'Meowth',
	'description' : 'Meowth is a Normal-type Pokémon',
	'attack' : '45',
	'defense' : '35',
	'height' : '0.4'
}];

DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemons)
Inserted 1 record(s) in 230ms
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
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons>

```

## Liste os pokémons existentes na sua coleção

```
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5643ea5074d288f816215406"),
  "name": "Bulbasaur",
  "description": "Bulbasaur is a dual-type Grass/Poison Pokémon.",
  "attack": "49",
  "defense": "49",
  "height": "0.7m"
}
{
  "_id": ObjectId("5643ea5074d288f816215407"),
  "name": "Charmander",
  "description": "Charmander is a Fire-type Pokémon.",
  "attack": "52",
  "defense": "43",
  "height": "0.6m"
}
{
  "_id": ObjectId("5643ea5074d288f816215408"),
  "name": "Squirtle",
  "description": "Squirtle is a Water-type Pokémon.",
  "attack": "48",
  "defense": "65",
  "height": "0.5m"
}
{
  "_id": ObjectId("5643ea5074d288f816215409"),
  "name": "Pikachu",
  "description": "Pikachu is an Eletric-type Pokémon.",
  "attack": "55",
  "defense": "30",
  "height": "0.4m"
}
{
  "_id": ObjectId("5643ea5074d288f81621540a"),
  "name": "Meowth",
  "description": "Meowth is a Normal-type Pokémon",
  "attack": "45",
  "defense": "35",
  "height": "0.4"
}
Fetched 5 record(s) in 39ms
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons>
```

## Busque o pokémon a sua escolha pelo nome e armazene-o em uma variável chamada poke

```
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({ name: 'Meowth' })
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5643ea5074d288f81621540a"),
  "name": "Meowth",
  "description": "Meowth is a Normal-type Pokémon",
  "attack": "45",
  "defense": "35",
  "height": "0.4"
}
Fetched 1 record(s) in 19ms
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons>
```

## Modifique sua description e salve-o

```
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons> poke.description = poke.description + " and he speaks"
Meowth is a Normal-type Pokémon and he speaks
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 7ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
DIEGO-LAPTOP(mongod-3.0.7) be-mean-pokemons>

```