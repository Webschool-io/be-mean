# MongoDB - Aula 02 - Exercício
autor: Jonas Andre Scheguschevski

## Listagem das databases (passo 2)
```
show databases
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB
be-mean-pokemons   0.078GB
```

## Listagem das coleções (passo 3)
```
show collections
pokemons        0.001MB / 0.008MB
system.indexes  0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)
```
var listaPokemons = [{
        name: 'Metapod',
        description: 'The shell covering this Pokémon\'s body is as hard as an iron slab.',
        attack: 50,
        defense: 'Shed Skin',
        height: 0.7
    },
    {
        name: 'Kakuna',
        description: 'Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution.',
        attack: 48,
        defense: 'Shed Skin',
        height: 0.6
    },
    {
        name: 'Beedrill',
        description: 'Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety.',
        attack: 100,
        defense: 'Swarm',
        height: 1.0
    },
    {
        name: 'Pidgey',
        description: 'Pidgey has an extremely sharp sense of direction.',
        attack: 90,
        defense: 'Keen Eye',
        height: 0.3
    },
    {
        name: 'Pidgeot',
        description: 'This Pokémon has a dazzling plumage of beautifully glossy feathers.',
        attack: 60,
        defense: 'Tangled Feet',
        height: 1.5
    }
];
db.pokemons.save(listaPokemons)
Inserted 1 record(s) in 65ms
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
db.pokemons.find()
{
  "_id": ObjectId("56428655a51fa6c89396b340"),
  "name": "Metapod",
  "description": "The shell covering this Pokémon's body is as hard as an iron slab.",
  "attack": 50,
  "defense": "Shed Skin",
  "height": 0.7
}
{
  "_id": ObjectId("56428655a51fa6c89396b341"),
  "name": "Kakuna",
  "description": "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution.",
  "attack": 48,
  "defense": "Shed Skin",
  "height": 0.6
}
{
  "_id": ObjectId("56428655a51fa6c89396b342"),
  "name": "Beedrill",
  "description": "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety.",
  "attack": 100,
  "defense": "Swarm",
  "height": 1
}
{
  "_id": ObjectId("56428655a51fa6c89396b343"),
  "name": "Pidgey",
  "description": "Pidgey has an extremely sharp sense of direction.",
  "attack": 90,
  "defense": "Keen Eye",
  "height": 0.3
}
{
  "_id": ObjectId("56428655a51fa6c89396b344"),
  "name": "Pidgeot",
  "description": "This Pokémon has a dazzling plumage of beautifully glossy feathers.",
  "attack": 60,
  "defense": "Tangled Feet",
  "height": 1.5
}
Fetched 5 record(s) in 5ms
```

## Pikachu (passo 6)
```
var query = {name: 'Pidgeot'}
var poke = db.pokemons.findOne(query)
```

## Atualização do Pikachu (passo 6)
```
poke.description = 'Nova Descrição'
db.pokemons.save(poke)
Updated 1 existing record(s) in 10ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

```