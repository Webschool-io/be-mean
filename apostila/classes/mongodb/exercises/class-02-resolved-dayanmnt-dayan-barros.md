# MongoDB - Aula 02 - Exercício
autor: Dayan Barros

## Listagem das databases (passo 2)
```
show dbs
be-mean-instagram  0.078GB
be-mean            0.078GB
local              0.078GB
test               0.078GB
```

## Listagem das coleções (passo 3)
```
show collections
```

## Cadastro dos pokemons (passo 4)
```
var pokemons = [{
...   "name": "Steelix",
...   "description": "Steelix lives even further underground than Onix.",
...   "type": "steel",
...   "attack": 20,
...   "height": 9.2
... },
...
... {
...   "name": "Articuno",
...   "description": "Articuno is a legendary bird Pokémon that can control ice.",
...   "type": "ice",
...   "attack": 20,
...   "height": 1.7
... },
...
... {
...   "name": "Poliwhirl",
...   "description": "The surface of Poliwhirl's body is always wet and slick with a slimy fluid.",
...   "type": "water",
...   "attack": 15,
...   "height": 1
... },
...
... {
...   "name": "Gourgeist",
...   "description": "Singing in eerie voices, they wander town streets on the night of the new moon.",
...   "type": "ghost",
...   "attack": 25,
...   "height": 0.9
... },
...
... {
...   "name": "Rhydon",
...   "description": "Rhydon's horn can crush even uncut diamonds.",
...   "type": "rock",
...   "attack": 35,
...   "height": 0.9
... }]
db.pokemons.insert(pokemons)
Inserted 1 record(s) in 219ms
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
db.pokemons.find()
{
  "_id": ObjectId("5642afd33190eff8fe754d1d"),
  "name": "Steelix",
  "description": "Steelix lives even further underground than Onix.",
  "type": "steel",
  "attack": 20,
  "height": 9.2
}
{
  "_id": ObjectId("5642afd33190eff8fe754d1e"),
  "name": "Articuno",
  "description": "Articuno is a legendary bird Pokémon that can control ice.",
  "type": "ice",
  "attack": 20,
  "height": 1.7
}
{
  "_id": ObjectId("5642afd33190eff8fe754d1f"),
  "name": "Poliwhirl",
  "description": "The surface of Poliwhirl's body is always wet and slick with a slimy fluid.",
  "type": "water",
  "attack": 15,
  "height": 1
}
{
  "_id": ObjectId("5642afd33190eff8fe754d20"),
  "name": "Gourgeist",
  "description": "Singing in eerie voices, they wander town streets on the night of the new moon.",
  "type": "ghost",
  "attack": 25,
  "height": 0.9
}
{
  "_id": ObjectId("5642afd33190eff8fe754d21"),
  "name": "Rhydon",
  "description": "Rhydon's horn can crush even uncut diamonds.",
  "type": "rock",
  "attack": 35,
  "height": 0.9
}
Fetched 5 record(s) in 3ms
```

## Rhydon (passo 6)
```
var query = { name: 'Rhydon' }
var poke = db.pokemons.findOne(query)
poke
{
  "_id": ObjectId("5642afd33190eff8fe754d21"),
  "name": "Rhydon",
  "description": "Rhydon's horn can crush even uncut diamonds.",
  "type": "rock",
  "attack": 35,
  "height": 0.9
}
```

## Atualização do Rhydon (passo 7)
```
poke.description = "Outra descrição"
Outra descrição
db.pokemons.save(poke)
Updated 1 existing record(s) in 4ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```