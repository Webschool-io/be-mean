# MongoDB - Aula 02 - Exercício
autor: Romulo de Araújo Mourão

## Listagem das databases (passo 2)
```
rmourao(mongod-3.0.7) be-mean-pokemons> show dbs
local         → 0.078GB
be-mean       → 0.078GB
be-mean-teste → 0.078GB
```

## Listagem das coleções (passo 3)

```
db.createCollection('pokemons')
{
  "ok": 1
}
rmourao(mongod-3.0.7) be-mean-pokemons> show collections
pokemons       → 0.000MB / 0.008MB
system.indexes → 0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)
```
var pokemon =   
[
  {
  'name':'zapdos',
  description:'Passaro elétrico',
  atack:60,
  defense:50,
  height:5.3
  },

  {
  'name':'articuno',
  description:'Passaro de gelo',
  atack:50,
  defense:50,
  height:4.1
  },

  {
  'name':'aerodactyl',
  description:'dragão voador',
  atack:47,
  defense:49,
  height:7.3
  },

  {
  'name':'porygon',
  description:'bicho estranho',
  atack:30,
  defense:35,
  height:1.3
  },

  {
  'name':'umbreon',
  description:'raposa preta',
  atack:56,
  defense:40,
  height:2.4
  }
]

rmourao(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 13ms
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
rmourao(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56439264ec4acad482954438"),
  "name": "zapdos",
  "description": "Passaro elétrico",
  "atack": 60,
  "defense": 50,
  "height": 5.3
}
{
  "_id": ObjectId("56439264ec4acad482954439"),
  "name": "articuno",
  "description": "Passaro de gelo",
  "atack": 50,
  "defense": 50,
  "height": 4.1
}
{
  "_id": ObjectId("56439264ec4acad48295443a"),
  "name": "aerodactyl",
  "description": "dragão voador",
  "atack": 47,
  "defense": 49,
  "height": 7.3
}
{
  "_id": ObjectId("56439264ec4acad48295443b"),
  "name": "porygon",
  "description": "bicho estranho",
  "atack": 30,
  "defense": 35,
  "height": 1.3
}
{
  "_id": ObjectId("56439264ec4acad48295443c"),
  "name": "umbreon",
  "description": "raposa preta",
  "atack": 56,
  "defense": 40,
  "height": 2.4
}

```

## Escolher um pokemon (passo 6)
```
rmourao(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name:'articuno'})
```

## Atualização pokemon escolhido(passo 6)
```
rmourao(mongod-3.0.7) be-mean-pokemons> poke.description = "Pavão azul de gelo"
rmourao(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 14ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})


```
