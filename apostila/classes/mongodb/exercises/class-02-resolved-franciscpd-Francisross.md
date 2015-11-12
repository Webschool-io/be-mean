# MongoDB - Aula 02 - Exercício
autor: Francisross Soares de Oliveira

## Criando base be-mean-pokemons

  ```
  mongo be-mean-pokemons
  MongoDB shell version: 3.0.7
  connecting to: be-mean-pokemons
  Mongo-Hacker 0.0.8
  FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> db.createCollection("pokemons")
  {
    "ok": 1
  }
  ```

## Lista as bases que possui no servidor
  ```
  FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> show dbs
  be-mean-instagram  0.078GB
  be-mean-pokemons   0.078GB
  local              0.078GB
  ```

## Lista as collections da base be-mean-pokemons
  ```
  FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> show collections
  pokemons        0.000MB / 0.008MB
  system.indexes  0.000MB / 0.008MB
  ```

## Insere 6 pokemons a minha escolha
    ```
    FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> var pokemons = [{name: "Arbok", description: "This Pokémon is terrifically strong in order to constrict things with its body.", attack: 85, defense: 69, height: 3.5},{name: "Sandshrew", description: "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert.", attack: 75, defense: 85, height: 0.61},{name: "Nidoran", description: "Nidoran? has barbs that secrete a powerful poison. ", attack: 47, defense: 52, height: 0.41},{name: "Nidoking", description: "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower.", attack: 102, defense: 77, height: 1.4},{name: "Vulpix", description: "At the time of its birth, Vulpix has one white tail. ", attack: 41, defense: 40, height: 0.6},{name: "Ninetales", description: "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind.", attack: 76, defense: 75, height: 1.09}]
    FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemons)
    Inserted 1 record(s) in 8ms
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
    ```
## Lista os pokemons existentes
    ```
    FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
    {
      "_id": ObjectId("564361bbdac2ae49ce8b8099"),
      "name": "Arbok",
      "description": "This Pokémon is terrifically strong in order to constrict things with its body.",
      "attack": 85,
      "defense": 69,
      "height": 3.5
    }
    {
      "_id": ObjectId("564361bbdac2ae49ce8b809a"),
      "name": "Sandshrew",
      "description": "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert.",
      "attack": 75,
      "defense": 85,
      "height": 0.61
    }
    {
      "_id": ObjectId("564361bbdac2ae49ce8b809b"),
      "name": "Nidoran",
      "description": "Nidoran? has barbs that secrete a powerful poison. ",
      "attack": 47,
      "defense": 52,
      "height": 0.41
    }
    {
      "_id": ObjectId("564361bbdac2ae49ce8b809c"),
      "name": "Nidoking",
      "description": "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower.",
      "attack": 102,
      "defense": 77,
      "height": 1.4
    }
    {
      "_id": ObjectId("564361bbdac2ae49ce8b809d"),
      "name": "Vulpix",
      "description": "At the time of its birth, Vulpix has one white tail. ",
      "attack": 41,
      "defense": 40,
      "height": 0.6
    }
    {
      "_id": ObjectId("564361bbdac2ae49ce8b809e"),
      "name": "Ninetales",
      "description": "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind.",
      "attack": 76,
      "defense": 75,
      "height": 1.09
    }
    Fetched 6 record(s) in 6ms
    ```

## Busca pokemon a minha escolha pelo nome e armazena da variavel 'poke'
    ```
    FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> poke = db.pokemons.findOne({name: 'Nidoking'})
    {
      "_id": ObjectId("564361bbdac2ae49ce8b809c"),
      "name": "Nidoking",
      "description": "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower.",
      "attack": 102,
      "defense": 77,
      "height": 1.4
    }
    ```

## Modifica a description e salva
    ```
    FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> poke.description = 'Fofinho =)'
    Fofinho =)
    FrancisCPD-Mac-Pro(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
    Updated 1 existing record(s) in 5ms
    WriteResult({
      "nMatched": 1,
      "nUpserted": 0,
      "nModified": 1
    })
    ```
