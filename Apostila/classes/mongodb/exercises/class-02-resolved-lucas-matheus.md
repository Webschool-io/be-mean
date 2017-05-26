# MongoDB - Aula 02 - Exercício
autor: LUCAS MATHEUS DE ALMEIDA VIEIRA

##Listagem das databases (passo 2)

```
lucas(mongod-3.2.5) test> use be-mean-pokemons
switched to db be-mean-pokemons

lucas(mongod-3.2.5) be-mean-pokemons> show dbs
be-mean            → 0.005GB
be-mean-instragram → 0.000GB
be-mean-pokemons   → 0.000GB
local              → 0.000GB
             → 0.000GB

```

## Listagem das coleções (passo 3)

```
lucas(mongod-3.2.5) be-mean-pokemons> show collections
pokemons → 0.001MB / 0.035MB
```


## Cadastro dos pokemons (passo 4)

```

var pokemons = [{
  "name": "Charizard",
  "description": "Taca fogo",
  "type": "fogo",
  "attack": 90,
  "height": 1
},
{
  "name": "Chicorita",
  "description": "Planta muito loucona",
  "type": "fogo",
  "attack": 40,
  "height": 0.4
},
{
  "name": "Totodaile",
  "description": "Nem sei, mas é bacana",
  "type": "fogo",
  "attack": 47,
  "height": 0.4
},
{
  "name": "Kadabra",
  "description": "Hipnotiza os parceiros",
  "type": "fogo",
  "attack": 55,
  "height": 0.8
},
{
  "name": "Mew",
  "description": "O pika das galaxias fodastico supremo",
  "type": "fogo",
  "attack": 99,
  "height": 0.9
}]

lucas(mongod-3.2.5) be-mean-pokemons> db.pokemons.insert(pokemons)
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

## Lista dos pokemons (passo 5)

```
lucas(mongod-3.2.5) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5714198a28a8dad83ba7262c"),
  "name": "Charizard",
  "description": "Taca fogo",
  "type": "fogo",
  "attack": 90,
  "height": 1
}
{
  "_id": ObjectId("571419a728a8dad83ba7262d"),
  "name": "Chicorita",
  "description": "Planta muito loucona",
  "type": "fogo",
  "attack": 40,
  "height": 0.4
}
{
  "_id": ObjectId("571419be28a8dad83ba7262e"),
  "name": "Totodaile",
  "description": "Nem sei, mas é bacana",
  "type": "fogo",
  "attack": 47,
  "height": 0.4
}
{
  "_id": ObjectId("571419d528a8dad83ba7262f"),
  "name": "Kadabra",
  "description": "Hipnotiza os parceiros",
  "type": "fogo",
  "attack": 55,
  "height": 0.8
}
{
  "_id": ObjectId("571419f128a8dad83ba72630"),
  "name": "Mew",
  "description": "O pika das galaxias fodastico supremo",
  "type": "fogo",
  "attack": 99,
  "height": 0.9
}
Fetched 5 record(s) in 7ms
```

## Pokemon (passo 6)

```
lucas(mongod-3.2.5) be-mean-pokemons> var poke = db.pokemons.findOne({name:"Charizard"})
lucas(mongod-3.2.5) be-mean-pokemons> poke
{
  "_id": ObjectId("5714198a28a8dad83ba7262c"),
  "name": "Charizard",
  "description": "Taca fogo",
  "type": "fogo",
  "attack": 90,
  "height": 1
}

```

## Atualização do Pokemon (passo 7)

```
lucas(mongod-3.2.5) be-mean-pokemons> poke.description = 'É foda pra caralho msm'
É foda pra caralho msm
lucas(mongod-3.2.5) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 3ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```