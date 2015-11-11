# MongoDB - Aula 02 - Exercício
autor: Douglas Hennrich

## Listagem das databases (passo 2)
```
MacBook-Pro-de-Douglas(mongod-3.0.6) be-mean-pokemons> show dbs
be-mean-instagram  0.078GB
be-mean            0.078GB
local              0.078GB
```

## Listagem das coleções (passo 3)
```
MacBook-Pro-de-Douglas(mongod-3.0.6) be-mean-pokemons> show collections
system.indexes  0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)
```
MacBook-Pro-de-Douglas(mongod-3.0.6) be-mean-pokemons> var pokemons = [{ name: "Mew", description: "Because its battle abilities were raised to the ultimate level, it thinks only of de feating its foes.", attack: 100, defense: 100, height: 4}, { name: "Rhyhorn", description: "Strong, but not too bright, this Pokmon can shatter even a skyscraper with its charging Tackles.", attack: 85, defense: 95, height: 10}, { name: "Staryu", description: "As long as the center section is unharmed, it can grow back fully even if it is chopped to bits.", attack: 45, defense: 55, height: 8}, { name: "Gyarados", description: "It has an extremely aggressive nature. The HYPER BEAM it shoots from its mouth totally incinerates all targets.", attack: 125, defense: 79, height: 65}, { name: "Kabuto", description: "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.", attack: 80, defense: 90, height: 5}]

MacBook-Pro-de-Douglas(mongod-3.0.6) be-mean-pokemons> db.pokedex.insert(pokemons)
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
db.pokedex.find()
{
  "_id": ObjectId("56427b6b8c701b87518b7cef"),
  "name": "Mew",
  "description": "Because its battle abilities were raised to the ultimate level, it thinks only of de feating its foes.",
  "attack": 100,
  "defense": 100,
  "height": 4
}
{
  "_id": ObjectId("56427b6b8c701b87518b7cf0"),
  "name": "Rhyhorn",
  "description": "Strong, but not too bright, this Pokmon can shatter even a skyscraper with its charging Tackles.",
  "attack": 85,
  "defense": 95,
  "height": 10
}
{
  "_id": ObjectId("56427b6b8c701b87518b7cf1"),
  "name": "Staryu",
  "description": "As long as the center section is unharmed, it can grow back fully even if it is chopped to bits.",
  "attack": 45,
  "defense": 55,
  "height": 8
}
{
  "_id": ObjectId("56427b6b8c701b87518b7cf2"),
  "name": "Gyarados",
  "description": "It has an extremely aggressive nature. The HYPER BEAM it shoots from its mouth totally incinerates all targets.",
  "attack": 125,
  "defense": 79,
  "height": 65
}
{
  "_id": ObjectId("56427b6b8c701b87518b7cf3"),
  "name": "Kabuto",
  "description": "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.",
  "attack": 80,
  "defense": 90,
  "height": 5
}
Fetched 5 record(s) in 23ms
```

## Mew (passo 6)
```
var q = { name: "Mew" }

var poke = db.pokedex.findOne(q)

MacBook-Pro-de-Douglas(mongod-3.0.6) be-mean-pokemons> poke
{
  "_id": ObjectId("56427e4e8c701b87518b7cf4"),
  "name": "Mew",
  "description": "Because its battle abilities were raised to the ultimate level, it thinks only of de feating its foes.",
  "attack": 100,
  "defense": 100,
  "height": 4
}
```

## Atualização do Mew (passo 6)
```
poke.description = "The Real pokemons only goes to 151!"

db.pokedex.save(poke)
Updated 1 existing record(s) in 1ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
