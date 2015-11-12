# MongoDB - Aula 02 - Exercício
autor: Otavio Barbosa

## Listagem das databases (passo 2)

```
Otavios-MacBook-Pro(mongod-3.0.7) be-mean> use be-mean-pokemons
switched to db be-mean-pokemons

Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
be-mean           → 0.078GB
local             → 0.078GB

```


## Listagem das coleções (passo 3)

```
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> show collections
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> 

```

## Cadastro dos pokemons (passo 4)

```
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> var pokemons = [{name:'Didimon', description:'Pokemon do Ceará', type:'cabeçudo', attack:45, defense:30, height:1.6},{name:'Dedemon', description:'Melhor amigo do cearense, será?', type:'lesado', attack:41, defense:32, height:1.7},{name:'Mussumon', description:'Movido a mé!', type:'pinguço', attack:48, defense:25, height:1.8},{name:'Zacamon', description:'O pokemon de peruca', type:'menino', attack:39, defense:39, height:1.5}]
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> pokemons
[
  {
    "name": "Didimon",
    "description": "Pokemon do Ceará",
    "type": "cabeçudo",
    "attack": 45,
    "defense": 30,
    "height": 1.6
  },
  {
    "name": "Dedemon",
    "description": "Melhor amigo do cearense, será?",
    "type": "lesado",
    "attack": 41,
    "defense": 32,
    "height": 1.7
  },
  {
    "name": "Mussumon",
    "description": "Movido a mé!",
    "type": "pinguço",
    "attack": 48,
    "defense": 25,
    "height": 1.8
  },
  {
    "name": "Zacamon",
    "description": "O pokemon de peruca",
    "type": "menino",
    "attack": 39,
    "defense": 39,
    "height": 1.5
  }
]
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemons)
Inserted 1 record(s) in 549ms
BulkWriteResult({
  "writeErrors": [ ],
  "writeConcernErrors": [ ],
  "nInserted": 4,
  "nUpserted": 0,
  "nMatched": 0,
  "nModified": 0,
  "nRemoved": 0,
  "upserted": [ ]
})

```

## Lista dos pokemons (passo 5)

```
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56440c7c7863c39b52d77127"),
  "name": "Didimon",
  "description": "Pokemon do Ceará",
  "type": "cabeçudo",
  "attack": 45,
  "defense": 30,
  "height": 1.6
}
{
  "_id": ObjectId("56440c7c7863c39b52d77128"),
  "name": "Dedemon",
  "description": "Melhor amigo do cearense, será?",
  "type": "lesado",
  "attack": 41,
  "defense": 32,
  "height": 1.7
}
{
  "_id": ObjectId("56440c7c7863c39b52d77129"),
  "name": "Mussumon",
  "description": "Movido a mé!",
  "type": "pinguço",
  "attack": 48,
  "defense": 25,
  "height": 1.8
}
{
  "_id": ObjectId("56440c7c7863c39b52d7712a"),
  "name": "Zacamon",
  "description": "O pokemon de peruca",
  "type": "menino",
  "attack": 39,
  "defense": 39,
  "height": 1.5
}
Fetched 4 record(s) in 8ms
```

## Pokemon (passo 6)
```
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name:'Didimon'})
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("56440c7c7863c39b52d77127"),
  "name": "Didimon",
  "description": "Pokemon do Ceará",
  "type": "cabeçudo",
  "attack": 45,
  "defense": 30,
  "height": 1.6
}
```


## Atualização do Pokemon (passo 7)
```
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> poke.description
Pokemon do Ceará
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> poke.description = 'Pokemon cabeça chata do Ceará'
Pokemon cabeça chata do Ceará
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 17ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
Otavios-MacBook-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.findOne({name:'Didimon'})
{
  "_id": ObjectId("56440c7c7863c39b52d77127"),
  "name": "Didimon",
  "description": "Pokemon cabeça chata do Ceará",
  "type": "cabeçudo",
  "attack": 45,
  "defense": 30,
  "height": 1.6
}
