# MongoDB - Aula 03 - Exercício
Autor: Yann Braga

## Listando Pokemons com altura **menor que** 0.5
```
Yann(C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe-3.0.7) be-mean-pokemon> var query = { height:{$lt:0.5}}
Yann(C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe-3.0.7) be-mean-pokemon> db.pokemons.find(query)
{
    "_id": ObjectId("56438967d0d00f41c686e0d8"),
    "name": "Eeve",
    "description": "Lamest version of Eeve",
    "type": "Normal",
    "attack": 39,
    "defense": 40,
    "height": 0.4
}
{
    "_id": ObjectId("56438967d0d00f41c686e0d9"),
    "name": "Vaporeon",
    "description": "Wet version of Eeve",
    "type": "Water",
    "attack": 39,
    "defense": 40,
    "height": 0.4
}
Fetched 2 record(s) in 25ms
```

## Listando Pokemons com altura **maior ou igual** que 0.5
```
Yann(C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe-3.0.7) be-mean-pokemon> var query = { height:{$gte:0.5}}
Yann(C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe-3.0.7) be-mean-pokemon> db.pokemons.find(query)
{
    "_id": ObjectId("56438967d0d00f41c686e0da"),
    "name": "Jolteon",
    "description": "Electric gypsy version of Eeve",
    "type": "Electric",
    "attack": 60,
    "defense": 60,
    "height": 0.6
}
{
    "_id": ObjectId("56438967d0d00f41c686e0db"),
    "name": "Flareon",
    "description": "Fire in the hole version of Eeve",
    "type": "Fire",
    "attack": 92,
    "defense": 40,
    "height": 0.6
}
{
    "_id": ObjectId("56438967d0d00f41c686e0dc"),
    "name": "Umbreon",
    "description": "Come to the dark side version of Eeve",
    "type": "Dark",
    "attack": 47,
    "defense": 80,
    "height": 0.9
}
{
    "_id": ObjectId("56438967d0d00f41c686e0dd"),
    "name": "Glaceon",
    "description": "Let it go version of Eeve",
    "type": "Ice",
    "attack": 73,
    "defense": 38,
    "height": 0.5
}
{
    "_id": ObjectId("56438967d0d00f41c686e0de"),
    "name": "Leafeon",
    "description": "Greenie version of Eeve",
    "type": "Grass",
    "attack": 52,
    "defense": 49,
    "height": 0.6
}
{
    "_id": ObjectId("56438967d0d00f41c686e0df"),
    "name": "Espeon",
    "description": "Intellectual version of Eeve",
    "type": "Psychic",
    "attack": 55,
    "defense": 50,
    "height": 0.6
}
{
    "_id": ObjectId("56438967d0d00f41c686e0e0"),
    "name": "Sylveon",
    "description": "Glamorous version of Eeve",
    "type": "Fairy",
    "attack": 85,
    "defense": 70,
    "height": 0.8
}
{
    "_id": ObjectId("564410ce56b25aeed5134a74"),
    "name": "Pikachu",
    "description": "Definitely not Eeve",
    "type": "Electric",
    "attack": 99,
    "defense": 80,
    "height": 0.6
}
Fetched 8 record(s) in 104ms
```

## Listando Pokemons com altura **menor ou igual** que 0.5 **E** do tipo grama
```
Yann(C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe-3.0.7) be-mean-pokemon> 
var query = {
    $and:[
        {height:{$lte:0.5}},
        {type:'Grass'}
    ]
}
Yann(C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe-3.0.7) be-mean-pokemon> db.pokemons.find(query)
Fetched 0 record(s) in 0ms
```

## Listando Pokemons com nome 'Pikachu' **OU** ataque **menor ou igual** que 50
```
Yann(C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe-3.0.7) be-mean-pokemon> 
var query = {
    $or:[
        {name:'Pikachu'},
        {attack:{$lte:50}}
    ]
}
Yann(C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe-3.0.7) be-mean-pokemon> db.pokemons.find(query)
{
    "_id": ObjectId("56438967d0d00f41c686e0d8"),
    "name": "Eeve",
    "description": "Lamest version of Eeve",
    "type": "Normal",
    "attack": 39,
    "defense": 40,
    "height": 0.4
}
{
    "_id": ObjectId("56438967d0d00f41c686e0d9"),
    "name": "Vaporeon",
    "description": "Wet version of Eeve",
    "type": "Water",
    "attack": 39,
    "defense": 40,
    "height": 0.4
}
{
    "_id": ObjectId("56438967d0d00f41c686e0dc"),
    "name": "Umbreon",
    "description": "Come to the dark side version of Eeve",
    "type": "Dark",
    "attack": 47,
    "defense": 80,
    "height": 0.9
}
{
    "_id": ObjectId("564410ce56b25aeed5134a74"),
    "name": "Pikachu",
    "description": "Definitely not Eeve",
    "type": "Electric",
    "attack": 99,
    "defense": 80,
    "height": 0.6
}
Fetched 4 record(s) in 18ms
```

## Listando Pokemons com ataque **maior ou igual** que 48 **E** com altura **menor ou igual que** 0.5
```
Yann(C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe-3.0.7) be-mean-pokemon> 
var query = {
    $and:[
        {attack:{$gte:48}},
        {height:{$lte:0.5}}
    ]
}
Yann(C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe-3.0.7) be-mean-pokemon> db.pokemons.find(query)
{
    "_id": ObjectId("56438967d0d00f41c686e0dd"),
    "name": "Glaceon",
    "description": "Let it Go version of Eeve",
    "type": "Ice",
    "attack": 73,
    "defense": 38,
    "height": 0.5
}
Fetched 1 record(s) in 3ms
```