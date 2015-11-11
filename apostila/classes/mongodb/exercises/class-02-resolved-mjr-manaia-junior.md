# MongoDB - Aula 02 - Exercício
autor: Manaia Junior

## Listagem das databases (passo 2)
```
notebook-mjr(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean           → 0.078GB
mean              → 0.078GB
powerevent-test   → 0.078GB
contactapp        → 0.078GB
be-mean-instagram → 0.078GB
admin             → 0.078GB
cronus-db         → 0.078GB
local             → 0.078GB
```
## Listagem das coleções (passo 3)
```
notebook-mjr(mongod-3.0.7) be-mean-pokemons> show collections
pokemons       → 0.001MB / 0.008MB
system.indexes → 0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)
```
notebook-mjr(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Pikachu','description':'Rato elétrico bem fofinho','type': 'electric', attack: 55, height: 0.4 }
notebook-mjr(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 783ms
WriteResult({
  "nInserted": 1
})

notebook-mjr(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Bulbassauro','description':'Chicote de trepadeira','type': 'grama', 'attack': 49, height: 0.4 }
notebook-mjr(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 783ms
WriteResult({
  "nInserted": 1
})

notebook-mjr(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Charmander','description':'Esse é o cão chupando manga de fofinho','type': 'fogo', 'attack': 52, height: 0.6 }
notebook-mjr(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 783ms
WriteResult({
  "nInserted": 1
})

notebook-mjr(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Squirtle','description':'Ejeta água que passarinho não bebe','type': 'água', 'attack': 48, height: 0.5 }
notebook-mjr(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 783ms
WriteResult({
  "nInserted": 1
})

notebook-mjr(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Caterpie','description':'Larva lutadora','type': 'inseto', attack: 30, height: 0.3 }
notebook-mjr(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 783ms
WriteResult({
  "nInserted": 1
})
```

## Lista dos pokemons (passo 5)
```
notebook-mjr(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56433edb2c0d73a71dfb9759"),
  "name": "Pikachu",
  "description": "Rato elétrico",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56433f032c0d73a71dfb975a"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56433f192c0d73a71dfb975b"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("56433f422c0d73a71dfb975c"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
{
  "_id": ObjectId("56433f642c0d73a71dfb975d"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3
}
Fetched 5 record(s) in 3ms
```

## Pikachu (passo 6)
```
notebook-mjr(mongod-3.0.7) be-mean-pokemons> var query = {name:'Pikachu'}
notebook-mjr(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
notebook-mjr(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("56433edb2c0d73a71dfb9759"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
```

## Atualização do Pikachu (passo 6)
```
notebook-mjr(mongod-3.0.7) be-mean-pokemons> poke.description = 'Rato elétrico'
Rato elétrico
notebook-mjr(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("56433edb2c0d73a71dfb9759"),
  "name": "Pikachu",
  "description": "Rato elétrico",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
notebook-mjr(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 37ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
