# MongoDB - Aula 02 - Exercício
> Autor: Nil Késede

## Criar database
```
> use be-mean-pokemons
switched to db be-mean-pokemons
```

## Criar collection
```
> db.createCollection('pokemons')
{
  "ok": 1
}
```

## Listar databases
```
> show dbs
be-mean-pokemons  0.078GB
local             0.078GB
test              0.078GB
```

## Listar collections
```
> show collections
pokemons        0.000MB / 0.008MB
system.indexes  0.000MB / 0.008MB
```

## Iserir pokemons
```
> var pokemons = [
    {
        "name": "Bulbasaur",
        "description": "Pokemon fofinho que solta umas folha envenenada",
        "type": "Grama",
        "atack": 49,
        "defense": 49,
        "height": 7
    },
    {
        "name": "Charizard",
        "description": "Dragão boladão",
        "type": "Fogo",
        "attack": 84,
        "defense": 78,
        "height": 17
    },
    {
        "name": "Blastoise",
        "description": "Tem uns canhão de água nas costas foda pra carai",
        "type": "Água",
        "attack": 83,
        "defense": 100,
        "height": 16
    },
    {
        "name": "Pikachu",
        "description": "Rato elétrico bem fofinho",
        "type": "Elétrico",
        "attack": 55,
        "defense": 40,
        "height": 4
    },
    {
        "name": "Snorlax",
        "description": "Pokemon dorminhoco",
        "type": "Normal",
        "attack": 110,
        "defense": 65,
        "height": 21
    },
    {
        "name": "Psyduck",
        "description": "Pato loko de droga",
        "type": "Água",
        "attack": 52,
        "defense": 48,
        "height": 8
    },
    {
        "name": "Onix",
        "description": "Cobra de pedra do mal",
        "type": "Água",
        "attack": 45,
        "defense": 160,
        "height": 88
    }
]
> db.pokemons.insert(pokemons)
Inserted 1 record(s) in 6ms
BulkWriteResult({
  "writeErrors": [ ],
  "writeConcernErrors": [ ],
  "nInserted": 7,
  "nUpserted": 0,
  "nMatched": 0,
  "nModified": 0,
  "nRemoved": 0,
  "upserted": [ ]
})
```

## Listar pokemons
```
> db.pokemons.find()
{
  "_id": ObjectId("5644a660aa1c5cd7e56cce62"),
  "name": "Bulbasaur",
  "description": "Pokemon fofinho que solta umas folha envenenada",
  "type": "Grama",
  "atack": 49,
  "defense": 49,
  "height": 7
}
{
  "_id": ObjectId("5644a660aa1c5cd7e56cce63"),
  "name": "Charizard",
  "description": "Dragão boladão",
  "type": "Fogo",
  "attack": 84,
  "defense": 78,
  "height": 17
}
{
  "_id": ObjectId("5644a660aa1c5cd7e56cce64"),
  "name": "Blastoise",
  "description": "Tem uns canhão de água nas costas foda pra carai",
  "type": "Água",
  "attack": 83,
  "defense": 100,
  "height": 16
}
{
  "_id": ObjectId("5644a660aa1c5cd7e56cce65"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "Elétrico",
  "attack": 55,
  "defense": 40,
  "height": 4
}
{
  "_id": ObjectId("5644a660aa1c5cd7e56cce66"),
  "name": "Snorlax",
  "description": "Pokemon dorminhoco",
  "type": "Mágico",
  "attack": 110,
  "defense": 65,
  "height": 21
}
{
  "_id": ObjectId("5644a660aa1c5cd7e56cce67"),
  "name": "Psyduck",
  "description": "Pato loko de droga",
  "type": "Água",
  "attack": 52,
  "defense": 48,
  "height": 8
}
{
  "_id": ObjectId("5644a660aa1c5cd7e56cce68"),
  "name": "Onix",
  "description": "Cobra de pedra do mal",
  "type": "Pedra",
  "attack": 45,
  "defense": 160,
  "height": 88
}
Fetched 7 record(s) in 5ms
```

## Buscar pokemon pelo nome
```
> var poke = db.pokemons.findOne({name:"Onix"})
> poke
{
  "_id": ObjectId("5644a660aa1c5cd7e56cce68"),
  "name": "Onix",
  "description": "Cobra de pedra do mal",
  "type": "Pedra",
  "attack": 45,
  "defense": 160,
  "height": 88
}

```

## Editar e salvar
```
> poke.description = "Cobra de pedra gigante"
Cobra de pedra gigante
> db.pokemons.save(poke)
Updated 1 existing record(s) in 3ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
