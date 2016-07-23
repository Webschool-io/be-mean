# MongoDB - Aula 02 - Exercício
autor: Thiago Milani

## Cria a database (passo 1)

```
zito-desktop(mongod-3.2.8) be-mean> use be-mean-pokemons
switched to db be-mean-pokemons
```

## Listagem das databases (passo 2)

```
zito-desktop(mongod-3.2.8) be-mean-pokemons> show dbs
be-mean → 0.005GB
local   → 0.000GB
```

## Listagem das coleções (passo 3)

```
show collections
zito-desktop(mongod-3.2.8) be-mean-pokemons>
```

## Cadastro dos Pokemons (passo 4)

```
var pokemons = [{name: "Raichu", description: "Eletric", attack: 50, defense: 30, heigth: 0.8}, {name: "Sandshrew", description: "Ground", attack: 40, defense: 40, heigth: 0.6},{name: "Emboar", description: "Fire, Fighting", attack: 60, defense: 30, heigth: 1.60},{name: "Serperior", description: "Grass", attack: 40, defense: 40, heigth: 3.30},{name: "Arceus", description: "Normal", attack: 60, defense: 50, heigth: 3.20}]
zito-desktop(mongod-3.2.8) be-mean-pokemons> pokemons
[
  {
    "name": "Raichu",
    "description": "Eletric",
    "attack": 50,
    "defense": 30,
    "heigth": 0.8
  },
  {
    "name": "Sandshrew",
    "description": "Ground",
    "attack": 40,
    "defense": 40,
    "heigth": 0.6
  },
  {
    "name": "Emboar",
    "description": "Fire, Fighting",
    "attack": 60,
    "defense": 30,
    "heigth": 1.6
  },
  {
    "name": "Serperior",
    "description": "Grass",
    "attack": 40,
    "defense": 40,
    "heigth": 3.3
  },
  {
    "name": "Arceus",
    "description": "Normal",
    "attack": 60,
    "defense": 50,
    "heigth": 3.2
  }
]
zito-desktop(mongod-3.2.8) be-mean-pokemons> db.pokemons.insert(pokemons)
Inserted 1 record(s) in 208ms
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

## Lista dos Pokemons (passo 5)

```
db.pokemons.find()
{
  "_id": ObjectId("5793ab9d8d7ebd1b1f72a23e"),
  "name": "Raichu",
  "description": "Eletric",
  "attack": 50,
  "defense": 30,
  "heigth": 0.8
}
{
  "_id": ObjectId("5793ab9d8d7ebd1b1f72a23f"),
  "name": "Sandshrew",
  "description": "Ground",
  "attack": 40,
  "defense": 40,
  "heigth": 0.6
}
{
  "_id": ObjectId("5793ab9d8d7ebd1b1f72a240"),
  "name": "Emboar",
  "description": "Fire, Fighting",
  "attack": 60,
  "defense": 30,
  "heigth": 1.6
}
{
  "_id": ObjectId("5793ab9d8d7ebd1b1f72a241"),
  "name": "Serperior",
  "description": "Grass",
  "attack": 40,
  "defense": 40,
  "heigth": 3.3
}
{
  "_id": ObjectId("5793ab9d8d7ebd1b1f72a242"),
  "name": "Arceus",
  "description": "Normal",
  "attack": 60,
  "defense": 50,
  "heigth": 3.2
}
Fetched 5 record(s) in 4ms
```

## Pokemon (passo 6)

```
zito-desktop(mongod-3.2.8) be-mean-pokemons> var query = {name: 'Raichu'}
zito-desktop(mongod-3.2.8) be-mean-pokemons> var poke = db.pokemons.findOne(query)
zito-desktop(mongod-3.2.8) be-mean-pokemons> poke
{
  "_id": ObjectId("5793ab9d8d7ebd1b1f72a23e"),
  "name": "Raichu",
  "description": "Eletric",
  "attack": 50,
  "defense": 30,
  "heigth": 0.8
}
```

## Atualização de Pokemon (passo 7)

```
zito-desktop(mongod-3.2.8) be-mean-pokemons> poke.description
Eletric
zito-desktop(mongod-3.2.8) be-mean-pokemons> poke.description = 'Eletric modified'
Eletric modified
zito-desktop(mongod-3.2.8) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 1ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
zito-desktop(mongod-3.2.8) be-mean-pokemons> db.pokemons.findOne(query)
{
  "_id": ObjectId("5793ab9d8d7ebd1b1f72a23e"),
  "name": "Raichu",
  "description": "Eletric modified",
  "attack": 50,
  "defense": 30,
  "heigth": 0.8
}
```