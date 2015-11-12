# MongoDB - Aula 02 - Exercício
autor: Franklin Dias

## Criando DataBase

```
use be-mean-pokemons
```

## Listando Databases

```
show dbs
local    → 0.078GB
test     → 0.078GB
be-mean  → 0.078GB
admin    → (empty)
```

## Inserindo Pokemons

```
var poks = [{'name':'Bulbassauro','description':'Chicote de trepadeira','type': 'grama', 'attack': 49, height: 0.4 }, {'name':'Charmander','description':'Esse é o cão chupando manga de fofinho','type': 'fogo', 'attack': 52, height: 0.6 },{'name':'Squirtle','description':'Ejeta água que passarinho não bebe','type': 'água', 'attack': 48, height: 0.5}, {'name':'Caterpie','description':'Larva lutadora','type': 'inseto', attack: 30, height: 0.3 }, {'name':'Pikachu','description':'Rato elétrico bem fofinho','type': 'electric', attack: 55, height: 0.4 }]

localhost(mongod-2.6.11) be-mean-pokemons> db.pokemons.insert(poks)
Inserted 1 record(s) in 2ms
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

## Listando Coleções

```
show collections
pokemons       → 0.001MB / 0.008MB
system.indexes → 0.000MB / 0.008MB
```

## Listando Pokemons

```
db.pokemons.find({})
{
  "_id": ObjectId("56435b69a887a8736a8f27d7"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56435cb7a887a8736a8f27d8"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56435cb7a887a8736a8f27d9"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("56435cb7a887a8736a8f27da"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
{
  "_id": ObjectId("56435cb7a887a8736a8f27db"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3
}
Fetched 5 record(s) in 1ms
```

## Buscando Pokemons

```
var poke = db.pokemons.findOne({name:'Squirtle'})
```

## Modificando Pokemon

```
poke.description = 'Ejeta água';

db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

```
