# MongoDB - Aula 02 - Exercício
autor: Dalianny Vieira

## Listagem das databases (passo 2)
```
> show dbs
be-mean-instagram   0.078GB
be-mean             0.078GB
local               0.078GB
```

## Listagem das coleções (passo 3)
```
show collections
system.indexes   0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)

```

> var pokemons = [
  {
    "name": "Bulbasaur",
    "description": "Fofinho e verde"
  },
  {
    "name": "Charizard",
    "description": "Dragaozinho"
  },
  {
    "name": "Pidgeot",
    "description": "O passaro fofinho"
  },
  {
    "name": "Electrode",
    "description": "Tem eletricidade"

  },
  {
    "name": "Squirtle",
    "description": "O da agua bem fofinho"
  }
]

> db.pokemons.insert(pokemons)
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

## Lista de pokemons (passo 5)
```
> db.pokemons.find()
{ "_id" : ObjectId("5643e58003e9a0de789fff9d"), "name" : "Pikachu", "description" : "Fofinho e eletrico", "type" : "elet
rico", "attack" : 55, "height" : 0.4 }
{ "_id" : ObjectId("5643ee0723a6b46f96bf0c56"), "name" : "Bulbasaur", "description" : "Fofinho e verde" }
{ "_id" : ObjectId("5643ee0723a6b46f96bf0c57"), "name" : "Charizard", "description" : "Dragaozinho" }
{ "_id" : ObjectId("5643ee0723a6b46f96bf0c58"), "name" : "Pidgeot", "description" : "O passaro fofinho" }
{ "_id" : ObjectId("5643ee0723a6b46f96bf0c59"), "name" : "Electrode", "description" : "Tem eletricidade" }
{ "_id" : ObjectId("5643ee0723a6b46f96bf0c5a"), "name" : "Squirtle", "description" : "O da agua bem fofinho" }

```

## Bulbassaur (passo 6)
```
> var query = {name: "Bulbassaur"}
> var poke = db.pokemons.findOne(query)
> poke
{
  		"_id": ObjectId("5643ee0723a6b46f96bf0c56"),
  		"name": "Bulbassaur",
  		"description": "Fofinho e verde"
}
```
## Atualização do Bulbassaur (passo 7)
```
> poke.description = "Fofinho apenas"
Fofinho apenas
> poke
{
  		"_id": ObjectId("5643ee0723a6b46f96bf0c56"),
  		"name": "Bulbassaur",
  		"description": "Fofinho apenas"
}
> db.pokemons.save(poke)

})

```