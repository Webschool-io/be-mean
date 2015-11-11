# MongoDB - Aula 02 - Exercício
autor: Marcelo H M Dias

## 1. Crie uma database chamada be-mean-pokemons;

```
MH-Note(mongod-3.0.7) test> use be-mean-pokemons
	switched to db be-mean-pokemons
MH-Note(mongod-3.0.7) be-mean-pokemons>
```

## 2. Liste quais databases você possui nesse servidor;


```
MH-Note(mongod-3.0.7) be-mean-pokemons> show dbs
	pokemons → 0.078GB
	be-mean  → 0.078GB
	test     → 0.078GB
	local    → 0.078GB
MH-Note(mongod-3.0.7) be-mean-pokemons>

```

## 3. Liste quais coleções você possui nessa database;

```
MH-Note(mongod-3.0.7) be-mean-pokemons> db.createCollection('pokemons')
    {
      "ok": 1
    }
MH-Note(mongod-3.0.7) be-mean-pokemons> show collections
	pokemons       → 0.000MB / 0.008MB
	system.indexes → 0.000MB / 0.008MB
MH-Note(mongod-3.0.7) be-mean-pokemons>
```

## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;

```
MH-Note(mongod-3.0.7) be-mean-pokemons> var poke1 = {"pkdx_id":1,"name":"Bulbasaur","attack":49,"defense":49,"species":"Seed","height":"7","weight":"69","speed":45,"types":[{"name":"poison"},{"name":"grass"}],"evolutions":[{"level":16,"to":"Ivysaur"}]}
MH-Note(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke1)
	Inserted 1 record(s) in 3ms
    WriteResult({
      "nInserted": 1
    })
MH-Note(mongod-3.0.7) be-mean-pokemons> var poke2 = {"pkdx_id":2,"name":"Ivysaur","attack":62,"defense":63,"species":"Seed","height":"10","weight":"69","speed":60,"types":[{"name":"poison"},{"name":"grass"}],"evolutions":[{"level":32,"to":"Venusaur"}]}
MH-Note(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke2)
	Inserted 1 record(s) in 0ms
    WriteResult({
      "nInserted": 1
    })
MH-Note(mongod-3.0.7) be-mean-pokemons> var poke3 = {"pkdx_id":3,"name":"Venusaur","attack":82,"defense":83,"species":"","height":"20","weight":"1000","speed":80,"types":[{"name":"poison"},{"name":"grass"}],"evolutions":[{"detail":"mega","to":"Venusaur-Mega"}]}
MH-Note(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke3)
	Inserted 1 record(s) in 0ms
    WriteResult({
      "nInserted": 1
    })
MH-Note(mongod-3.0.7) be-mean-pokemons> var poke4 = {"pkdx_id":4,"name":"Charmander","attack":52,"defense":43,"species":"","height":"6","weight":"85","speed":65,"types":[{"name":"fire"}],"evolutions":[{"level":16,"to":"Charmeleon"}]}
MH-Note(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke4)
	Inserted 1 record(s) in 0ms
    WriteResult({
      "nInserted": 1
    })
MH-Note(mongod-3.0.7) be-mean-pokemons> var poke5 = {"pkdx_id":5,"name":"Charmeleon","attack":64,"defense":58,"species":"","height":"11","weight":"190","speed":80,"types":[{"name":"fire"}],"evolutions":[{"level":36,"to":"Charizard"}]}
MH-Note(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke5)
	Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })
MH-Note(mongod-3.0.7) be-mean-pokemons> var poke6 = {"pkdx_id":6,"name":"Charizard","attack":84,"defense":78,"species":"","height":"17","weight":"905","speed":100,"types":[{"name":"fire"}],"evolutions":[{"detail":"mega","to":"Charizard-mega-y"},{"detail":"mega","to":"Charizard-mega-x"}]}
MH-Note(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke6)
	Inserted 1 record(s) in 0ms
    WriteResult({
      "nInserted": 1
    })
MH-Note(mongod-3.0.7) be-mean-pokemons> var poke7 = {"pkdx_id":7,"name":"Squirtle","attack":48,"defense":65,"species":"","height":"5","weight":"90","speed":64,"types":[{"name":"water"}],"evolutions":[{"level":16,"to":"Wartortle"}]}
MH-Note(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke7)
	Inserted 1 record(s) in 0ms
    WriteResult({
      "nInserted": 1
    })
MH-Note(mongod-3.0.7) be-mean-pokemons> var poke8 = {"pkdx_id":8,"name":"Wartortle","attack":63,"defense":80,"species":"","height":"10","weight":"225","speed":58,"types":[{"name":"water"}],"evolutions":[{"level":36,"to":"Blastoise"}]}
MH-Note(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke8)
	Inserted 1 record(s) in 2ms
    WriteResult({
      "nInserted": 1
    })
MH-Note(mongod-3.0.7) be-mean-pokemons> var poke9 = {"pkdx_id":9,"name":"Blastoise","attack":83,"defense":100,"species":"","height":"16","weight":"885","speed":78,"types":[{"name":"water"}],"evolutions":[{"detail":"mega","to":"Blastoise-mega"}]}
MH-Note(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke9)
	Inserted 1 record(s) in 2ms
    WriteResult({
      "nInserted": 1
    })
```

## 5. Liste os pokemons existentes na sua coleção;

```
MH-Note(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
    {
      "_id": ObjectId("56429daa1d39d3a4a2de6435"),
      "pkdx_id": 1,
      "name": "Bulbasaur",
      "attack": 49,
      "defense": 49,
      "species": "Seed",
      "height": "7",
      "weight": "69",
      "speed": 45,
      "types": [
        {
          "name": "poison"
        },
        {
          "name": "grass"
        }
      ],
      "evolutions": [
        {
          "level": 16,
          "to": "Ivysaur"
        }
      ]
    }
    {
      "_id": ObjectId("56429daa1d39d3a4a2de6436"),
      "pkdx_id": 2,
      "name": "Ivysaur",
      "attack": 62,
      "defense": 63,
      "species": "Seed",
      "height": "10",
      "weight": "69",
      "speed": 60,
      "types": [
        {
          "name": "poison"
        },
        {
          "name": "grass"
        }
      ],
      "evolutions": [
        {
          "level": 32,
          "to": "Venusaur"
        }
      ]
    }
    {
      "_id": ObjectId("56429daa1d39d3a4a2de6437"),
      "pkdx_id": 3,
      "name": "Venusaur",
      "attack": 82,
      "defense": 83,
      "species": "",
      "height": "20",
      "weight": "1000",
      "speed": 80,
      "types": [
        {
          "name": "poison"
        },
        {
          "name": "grass"
        }
      ],
      "evolutions": [
        {
          "detail": "mega",
          "to": "Venusaur-Mega"
        }
      ]
    }
    {
      "_id": ObjectId("56429daa1d39d3a4a2de6438"),
      "pkdx_id": 4,
      "name": "Charmander",
      "attack": 52,
      "defense": 43,
      "species": "",
      "height": "6",
      "weight": "85",
      "speed": 65,
      "types": [
        {
          "name": "fire"
        }
      ],
      "evolutions": [
        {
          "level": 16,
          "to": "Charmeleon"
        }
      ]
    }
    {
      "_id": ObjectId("56429daa1d39d3a4a2de6439"),
      "pkdx_id": 4,
      "name": "Charmeleon",
      "attack": 64,
      "defense": 58,
      "species": "",
      "height": "11",
      "weight": "190",
      "speed": 80,
      "types": [
        {
          "name": "fire"
        }
      ],
      "evolutions": [
        {
          "level": 36,
          "to": "Charizard"
        }
      ]
    }
    {
      "_id": ObjectId("56429daa1d39d3a4a2de643a"),
      "pkdx_id": 6,
      "name": "Charizard",
      "attack": 84,
      "defense": 78,
      "species": "",
      "height": "17",
      "weight": "905",
      "speed": 100,
      "types": [
        {
          "name": "fire"
        }
      ],
      "evolutions": [
        {
          "detail": "mega",
          "to": "Charizard-mega-y"
        },
        {
          "detail": "mega",
          "to": "Charizard-mega-x"
        }
      ]
    }
    {
      "_id": ObjectId("56429daa1d39d3a4a2de643b"),
      "pkdx_id": 7,
      "name": "Squirtle",
      "attack": 48,
      "defense": 65,
      "species": "",
      "height": "5",
      "weight": "90",
      "speed": 64,
      "types": [
        {
          "name": "water"
        }
      ],
      "evolutions": [
        {
          "level": 16,
          "to": "Wartortle"
        }
      ]
    }
    {
      "_id": ObjectId("56429daa1d39d3a4a2de643c"),
      "pkdx_id": 8,
      "name": "Wartortle",
      "attack": 63,
      "defense": 80,
      "species": "",
      "height": "10",
      "weight": "225",
      "speed": 58,
      "types": [
        {
          "name": "water"
        }
      ],
      "evolutions": [
        {
          "level": 36,
          "to": "Blastoise"
        }
      ]
    }
    {
      "_id": ObjectId("56429db01d39d3a4a2de643d"),
      "pkdx_id": 9,
      "name": "Blastoise",
      "attack": 83,
      "defense": 100,
      "species": "",
      "height": "16",
      "weight": "885",
      "speed": 78,
      "types": [
        {
          "name": "water"
        }
      ],
      "evolutions": [
        {
          "detail": "mega",
          "to": "Blastoise-mega"
        }
      ]
    }
    Fetched 9 record(s) in 2ms
MH-Note(mongod-3.0.7) be-mean-pokemons>
```

## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;

```
MH-Note(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name:'Ivysaur'})
MH-Note(mongod-3.0.7) be-mean-pokemons> poke
    {
      "_id": ObjectId("56429daa1d39d3a4a2de6436"),
      "pkdx_id": 2,
      "name": "Ivysaur",
      "attack": 62,
      "defense": 63,
      "species": "Seed",
      "height": "10",
      "weight": "69",
      "speed": 60,
      "types": [
        {
          "name": "poison"
        },
        {
          "name": "grass"
        }
      ],
      "evolutions": [
        {
          "level": 32,
          "to": "Venusaur"
        }
      ]
    }
MH-Note(mongod-3.0.7) be-mean-pokemons>

```

## 7. Modifique sua `description` e salvê-o

```
MH-Note(mongod-3.0.7) be-mean-pokemons> poke.description = 'Ivysaur digivolve para...Não pera!?!?!?! #404.'
	Ivysaur digivolve para...Não pera!?!?!?! #404.
MH-Note(mongod-3.0.7) be-mean-pokemons>
MH-Note(mongod-3.0.7) be-mean-pokemons> poke
    {
      "_id": ObjectId("56429daa1d39d3a4a2de6436"),
      "pkdx_id": 2,
      "name": "Ivysaur",
      "attack": 62,
      "defense": 63,
      "species": "Seed",
      "height": "10",
      "weight": "69",
      "speed": 60,
      "types": [
        {
          "name": "poison"
        },
        {
          "name": "grass"
        }
      ],
      "evolutions": [
        {
          "level": 32,
          "to": "Venusaur"
        }
      ],
      "description": "Ivysaur digivolve para...Não pera!?!?!?! #404."
    }
MH-Note(mongod-3.0.7) be-mean-pokemons>
```