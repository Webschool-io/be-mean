# MongoDB - Aula 02 - Exercício
autor: Tiago Nunes

## Criando database (passo 1)

```
➜  ~  mongo be-mean-pokemons
MongoDB shell version: 2.6.3
connecting to: be-mean-pokemons
Mongo-Hacker 0.0.8
SkyWine(mongod-2.6.3) be-mean-pokemons>

```

## Listando databases (passo 2)

```
SkyWine(mongod-2.6.3) be-mean-pokemons> show dbs
local             → 0.078GB
be-mean           → 0.078GB
arduino           → 0.078GB
admin             → 0.078GB
be-mean-instagram → 0.078GB
be-mean-pokemons  → 0.078GB
be-mean-aulas     → 0.078GB
```

## Listando collections da database be-mean-pokemons (passo 3)

```
SkyWine(mongod-2.6.3) be-mean-pokemons> show collections
SkyWine(mongod-2.6.3) be-mean-pokemons>

```

## Cadastro dos pokemons (passo 4)

```
SkyWine(mongod-2.6.3) be-mean-pokemons> var _pokemons = [{"name":"Meganium", "description":"Pokémon que se destaca não pelo seu ataque, mas sim pela sua defesa", "attack":100, "defense":105, "height": 1.8}, {'name':'Zapdos','description':'Pássaro com fogo no rabo','type': 'eletric', attack: 90, defense: 80, height: 21 },{'name':'Entei','description':'Cachorro esquentadinho','type': 'fire', attack: 115, defense: 85, height: 21 }, {'name':'Moltres','description':'Pássaro com fogo no rabo','type': 'fire', attack: 110, defense: 65, height: 21 },{'name':'Mewtwo','description':'Canguru revoltado','type': 'psychic', attack: 110, defense: 90, height: 20 }]

SkyWine(mongod-2.6.3) be-mean-pokemons> db.pokemons.insert(_pokemons)
Inserted 1 record(s) in 3ms
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

## Lista de todos os pokemons da collections pokemons (passo 5)

```
SkyWine(mongod-2.6.3) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56438f9288d7b7eb41354e30"),
  "name": "Meganium",
  "description": "Pokémon que se destaca não pelo seu ataque, mas sim pela sua defesa",
  "attack": 100,
  "defense": 105,
  "height": 1.8
}
{
  "_id": ObjectId("56438fad88d7b7eb41354e31"),
  "name": "Meganium",
  "description": "Pokémon que se destaca não pelo seu ataque, mas sim pela sua defesa",
  "attack": 100,
  "defense": 105,
  "height": 1.8
}
{
  "_id": ObjectId("56438fad88d7b7eb41354e32"),
  "name": "Zapdos",
  "description": "Pássaro com fogo no rabo",
  "type": "eletric",
  "attack": 90,
  "defense": 80,
  "height": 21
}
{
  "_id": ObjectId("56438fad88d7b7eb41354e33"),
  "name": "Entei",
  "description": "Cachorro esquentadinho",
  "type": "fire",
  "attack": 115,
  "defense": 85,
  "height": 21
}
{
  "_id": ObjectId("56438fad88d7b7eb41354e34"),
  "name": "Moltres",
  "description": "Pássaro com fogo no rabo",
  "type": "fire",
  "attack": 110,
  "defense": 65,
  "height": 21
}
{
  "_id": ObjectId("56438fad88d7b7eb41354e35"),
  "name": "Mewtwo",
  "description": "Canguru revoltado",
  "type": "psychic",
  "attack": 110,
  "defense": 90,
  "height": 20
}
Fetched 6 record(s) in 6ms

```

## Query para buscar um pokemon (passo 6)

```
SkyWine(mongod-2.6.3) be-mean-pokemons> var _q = {name:"Moltres"}

SkyWine(mongod-2.6.3) be-mean-pokemons> var poke = db.pokemons.findOne(_q)

SkyWine(mongod-2.6.3) be-mean-pokemons> poke
{
  "_id": ObjectId("56438fad88d7b7eb41354e34"),
  "name": "Moltres",
  "description": "Pássaro com fogo no rabo",
  "type": "fire",
  "attack": 110,
  "defense": 65,
  "height": 21
}

```

## Atualização do Pokemon selecionado (passo 7)

```
SkyWine(mongod-2.6.3) be-mean-pokemons> poke.description = "Pokemon Muito Forte com poderes mágicos";
Pokemon Muito Forte com poderes mágicos

SkyWine(mongod-2.6.3) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 69ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

SkyWine(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(_q)
{
  "_id": ObjectId("56438fad88d7b7eb41354e34"),
  "name": "Moltres",
  "description": "Pokemon Muito Forte com poderes mágicos",
  "type": "fire",
  "attack": 110,
  "defense": 65,
  "height": 21
}
Fetched 1 record(s) in 1ms

```
