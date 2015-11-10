# MongoDB - Aula 02 - Exercício
autor: Douglas Hennrich

## Crie uma databate chamada be-mean-pokemons

```
use be-mean-pokemons
switched to db be-mean-pokemons
```

## Liste quais databases você possui nesse servidor
```
MacBook-Pro-de-Douglas(mongod-3.0.6) be-mean-pokemons> show dbs
be-mean-instagram  0.078GB
be-mean            0.078GB
local              0.078GB
```

## Insira pelo menos 5 pokemons **A SUA ESCOLHA** utilizando o mesmo padrão de campos utilizados: name, description, attack, defense e height
```javascript
var pokemons = [{ name: "Mew", description: "Because its battle abilities were raised to the ultimate level, it thinks only of de feating its foes.", attack: 100, defense: 100, height: 4}, { name: "Rhyhorn", description: "Strong, but not too bright, this Pokmon can shatter even a skyscraper with its charging Tackles.", attack: 85, defense: 95, height: 10}, { name: "Staryu", description: "As long as the center section is unharmed, it can grow back fully even if it is chopped to bits.", attack: 45, defense: 55, height: 8}, { name: "Gyarados", description: "It has an extremely aggressive nature. The HYPER BEAM it shoots from its mouth totally incinerates all targets.", attack: 125, defense: 79, height: 65}, { name: "Kabuto", description: "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.", attack: 80, defense: 90, height: 5}]

db.pokedex.insert(pokemons)

db.pokedex.insert(pokemons)
Inserted 1 record(s) in 426ms
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

## Liste os pokemons existentes na sua coleção
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

## Busque o pokemon a sua escolha, pelo nome, e armazene-o em uma variável chamada "poke"
```
var q = { name: "Mew" }

var poke = db.pokedex.findOne(q)
```

## Modifique sua "description" e salvê-o
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
