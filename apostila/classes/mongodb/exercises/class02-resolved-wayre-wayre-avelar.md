# MongoDB - Aula 02 - Exercício
autor: Wayre Avelar

## Listagem das databases (passo 2)

```
mac-wayre(mongod-3.0.7) be-mean-instagram> show dbs
be-mean       0.078GB
local         0.078GB
myCollection  0.078GB
```

## Listagem das coleções (passo 3)

```
mac-wayre(mongod-3.0.7) be-mean-instagram> show collections
system.indexes  0.000MB / 0.008MB
teste           0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)

```
mac-wayre(mongod-3.0.7) pokemons> var pokemon = {'name':'Bulbassauro','description':'Chicote de trepadeira','type': 'grama', 'attack': 49, height: 0.4 }
mac-wayre(mongod-3.0.7) pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 5ms
WriteResult({
 "nInserted": 1
})
mac-wayre(mongod-3.0.7) pokemons> var pokemon = {'name':'Charmander','description':'Esse é o cão chupando manga de fofinho','type': 'fogo', 'attack': 52, height: 0.6 }
mac-wayre(mongod-3.0.7) pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
 "nInserted": 1
})
mac-wayre(mongod-3.0.7) pokemons> var pokemon = {'name':'Squirtle','description':'Ejeta água que passarinho não bebe','type': 'água', 'attack': 48, height: 0.5 }
mac-wayre(mongod-3.0.7) pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
 "nInserted": 1
})
mac-wayre(mongod-3.0.7) pokemons> var pokemon = {'name':'Caterpie','description':'Larva lutadora','type': 'inseto', attack: 30, height: 0.3 }
mac-wayre(mongod-3.0.7) pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
 "nInserted": 1
})
```

## Lista dos pokemons (passo 5)
	
```
mac-wayre(mongod-3.0.7) pokemons> db.pokemons.find()
{
  "_id": ObjectId("56435cfc27721dc722be722f"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56435d2a27721dc722be7230"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56435d3827721dc722be7231"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("56435d4527721dc722be7232"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
{
  "_id": ObjectId("56435d5427721dc722be7233"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3
}
Fetched 5 record(s) in 2ms
```

## Pikachu (passo 6)

```
mac-wayre(mongod-3.0.7) pokemons> var query = {name:'Pikachu'}
mac-wayre(mongod-3.0.7) pokemons> var poke = db.pokemons.findOne(query)
mac-wayre(mongod-3.0.7) pokemons> poke
{
  "_id": ObjectId("56435cfc27721dc722be722f"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
```

## Atualização do Pikachu (passo 6)

```
mac-wayre(mongod-3.0.7) pokemons> poke.description
Rato elétrico bem fofinho
mac-wayre(mongod-3.0.7) pokemons> poke.description = 'Rato elétrico'
Rato elétrico
mac-wayre(mongod-3.0.7) pokemons> poke
{
  "_id": ObjectId("56435cfc27721dc722be722f"),
  "name": "Pikachu",
  "description": "Rato elétrico",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
mac-wayre(mongod-3.0.7) pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 79ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```

