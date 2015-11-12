# MongoDB - Aula 02 - Exercício
autor: Vinícius Galvão

## Listagem das databases (passo 2)
```
MBP-de-Vinicius(mongod-3.0.6) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
be-mean           → 0.078GB
local             → 0.078GB
```

## Listagem das coleções (passo 3)
```
MBP-de-Vinicius(mongod-3.0.6) be-mean-pokemons> show collections
system.indexes → 0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)

```
MBP-de-Vinicius(mongod-3.0.6) be-mean-pokemons>
var pokemons = [
  {
    "name": "Kabuto",
    "description": "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.",
    "attack": 80,
    "defense": 90,
    "height": 5
  },
  {
    "name": "Rhyhorn",
    "description": "Strong, but not too bright, this Pokmon can shatter even a skyscraper with its charging Tackles.",
    "attack": 85,
    "defense": 95,
    "height": 10
  },
  {
    "name": "Mew",
    "description": "Because its battle abilities were raised to the ultimate level, it thinks only of de feating its foes.",
    "attack": 100,
    "defense": 100,
    "height": 4
  },
  {
    "name": "Kabuto",
    "description": "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.",
    "attack": 80,
    "defense": 90,
    "height": 5
  },
  {
    "name": "Staryu",
    "description": "As long as the center section is unharmed, it can grow back fully even if it is chopped to bits.",
    "attack": 45,
    "defense": 55,
    "height": 8
  }
]

MBP-de-Vinicius(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert(pokemons)
Inserted 1 record(s) in 6ms
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

## Lista de pokemons (passo 5)
```
MBP-de-Vinicius(mongod-3.0.6) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5643c99c5d161e0aea59a9aa"),
  "name": "Kabuto",
  "description": "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.",
  "attack": 80,
  "defense": 90,
  "height": 5
}
{
  "_id": ObjectId("5643c99c5d161e0aea59a9ab"),
  "name": "Rhyhorn",
  "description": "Strong, but not too bright, this Pokmon can shatter even a skyscraper with its charging Tackles.",
  "attack": 85,
  "defense": 95,
  "height": 10
}
{
  "_id": ObjectId("5643c99c5d161e0aea59a9ac"),
  "name": "Mew",
  "description": "Because its battle abilities were raised to the ultimate level, it thinks only of de feating its foes.",
  "attack": 100,
  "defense": 100,
  "height": 4
}
{
  "_id": ObjectId("5643c99c5d161e0aea59a9ad"),
  "name": "Kabuto",
  "description": "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.",
  "attack": 80,
  "defense": 90,
  "height": 5
}
{
  "_id": ObjectId("5643c99c5d161e0aea59a9ae"),
  "name": "Staryu",
  "description": "As long as the center section is unharmed, it can grow back fully even if it is chopped to bits.",
  "attack": 45,
  "defense": 55,
  "height": 8
}
Fetched 5 record(s) in 4ms
```

## Kabuto (passo 6)
```
MBP-de-Vinicius(mongod-3.0.6) be-mean-pokemons> var q = {name: "Kabuto"}
MBP-de-Vinicius(mongod-3.0.6) be-mean-pokemons> var pokemon = db.pokemons.findOne(q)
MBP-de-Vinicius(mongod-3.0.6) be-mean-pokemons> pokemon
{
  "_id": ObjectId("5643c99c5d161e0aea59a9aa"),
  "name": "Kabuto",
  "description": "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.",
  "attack": 80,
  "defense": 90,
  "height": 5
}
```
## Atualização de Kabuto (passo 7)
```
MBP-de-Vinicius(mongod-3.0.6) be-mean-pokemons> pokemon.description = "The Real pokemons are awesome!!"
MBP-de-Vinicius(mongod-3.0.6) be-mean-pokemons> db.pokemons.save(pokemon)
Updated 1 existing record(s) in 1ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

```
