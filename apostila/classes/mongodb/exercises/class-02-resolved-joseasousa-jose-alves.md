
# MongoDB - Aula 02 - Exercício
autor: JOSE ALVES DE SOUSA NETO

## Listagem das databases (passo 2)
    show dbs
    be-mean-instagram → 0.078GB
    be-mean-teste     → 0.078GB
    be-mean           → 0.078GB
    local             → 0.078GB
    mean              → 0.078GB
    meandb            → 0.078GB


## Listagem das coleções (passo 3)
    show collections
    pokemons       → 0.001MB / 0.008MB
    system.indexes → 0.000MB / 0.008MB


## Cadastro dos pokemons (passo 4)

    var pokemons=[{  "name": "Nidoran",  "description": "É um roedor maroto",  "attack": 3,  "defense": 2, "height": 0.4},{  "name": "Meowth",  "description": "É um gatinho maroto",  "attack": 2,  "defense": 2,  "height": 0.4},
    {  "name": "Psyduck",  "description": "Um pato meio adoidado",  "attack": 3,  "defense": 2,  "height": 0.8},
    {  "name": "Machop",  "description": "Pokemn maromba",  "attack": 4,  "defense": 2,  "height": 0.8},
    {  "name": "Krabby",  "description": "Parente do Sirigueijo",  "attack": 5,  "defense": 4,  "height": 0.4},
    {  "name" : "Yveltal", "description" : "When this legendary Pokemon wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures", "attack" : 7, "defense" : 4, "height" : 5.8 }]
    
    db.pokemons.insert(pokemons)
    Inserted 1 record(s) in 54ms
    BulkWriteResult({
    "writeErrors": [ ],
    "writeConcernErrors": [ ],
    "nInserted": 6,
    "nUpserted": 0,
    "nMatched": 0,
    "nModified": 0,
    "nRemoved": 0,
    "upserted": [ ]
    })


## Lista dos pokemons (passo 5)
    db.pokemons.find()
    {
      "_id": ObjectId("564410bca83e5026a18ae3b6"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    {
      "_id": ObjectId("564410bca83e5026a18ae3b7"),
      "name": "Bulbassauro",
      "description": "Chicote de trepadeira",
      "type": "grama",
      "attack": 49,
      "height": 0.4
    }
    {
      "_id": ObjectId("564410bca83e5026a18ae3b8"),
      "name": "Charmander",
      "description": "Esse é o cão chupando manga de fofinho",
      "type": "fogo",
      "attack": 52,
      "height": 0.6
    }
    {
      "_id": ObjectId("564410bca83e5026a18ae3b9"),
      "name": "Squirtle",
      "description": "Ejeta água que passarinho não bebe",
      "type": "água",
      "attack": 48,
      "height": 0.5
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3ba"),
      "name": "Nidoran",
      "description": "É um roedor maroto",
      "attack": 3,
      "defense": 2,
      "height": 0.4
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3bb"),
      "name": "Meowth",
      "description": "É um gatinho maroto",
      "attack": 2,
      "defense": 2,
      "height": 0.4
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3bc"),
      "name": "Psyduck",
      "description": "Um pato meio adoidado",
      "attack": 3,
      "defense": 2,
      "height": 0.8
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3bd"),
      "name": "Machop",
      "description": "Pokemn maromba",
      "attack": 4,
      "defense": 2,
      "height": 0.8
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3be"),
      "name": "Krabby",
      "description": "Parente do Sirigueijo",
      "attack": 5,
      "defense": 4,
      "height": 0.4
    }
    {
      "_id": ObjectId("5644118ea83e5026a18ae3bf"),
      "name": "Yveltal",
      "description": "When this legendary Pokemon wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures",
      "attack": 7,
      "defense": 4,
      "height": 5.8
    }
    Fetched 10 record(s) in 52ms

## Pikachu (passo 6)
    var query = {'name':'Psyduck'}
    var pokemon =db.pokemons.findOne(query)

## Atualização do Pikachu (passo 6)
    pokemon.description = "Pato doido feito o batiman"
    Pato doido feito o batiman

    db.pokemons.save(pokemon)
    Updated 1 existing record(s) in 84ms
    WriteResult({
      "nMatched": 1,
      "nUpserted": 0,
      "nModified": 1
    })

