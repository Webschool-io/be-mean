# MongoDB - Aula 02 - Exercício
autor: Evellyn Montalvão

## Criar DB be-mean-pokemons, listar databases e listar collections

    ```
    use be-mean-pokemons
    switched to db be-mean-pokemons

    show dbs
    be-mean           → 0.078GB
    be-mean-instagram → 0.078GB
    local             → 0.078GB
    mongoaula         → 0.078GB
    pokemon           → 0.078GB

    show collections


    ```

## Inserir pelo menos 5 pokémons

    ```
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons> db.pokemons.insert({nome: 'dragonair', description: 'Dragonair stores an enormous amount of energy inside its body', attack: 40, defense: 30, height: 4})
    Inserted 1 record(s) in 444ms
    WriteResult({
      "nInserted": 1
    })
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons> db.pokemons.insert({nome: 'aurorus', description: 'The diamond-shaped crystals body', attack: 40, defense: 30, height: 2.4})
    Inserted 1 record(s) in 2ms
    WriteResult({
      "nInserted": 1
    })
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons> db.pokemons.insert({nome: 'reshiram', description:'This legendary Pokémon can scorch the world with fire', attack: 60, defense: 40, height: 3.2})
    Inserted 1 record(s) in 4ms
    WriteResult({
      "nInserted": 1
    })
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons> db.pokemons.insert({nome: 'archeops', description:'They are intelligent and will cooperate to catch prey', attack: 70, defense: 30, height: 1.4})
    Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons>  db.pokemons.insert({nome: 'liepard',description:'They run silently in the night.', attack: 50, defense: 20, height: 1.1})
    Inserted 1 record(s) in 2ms
    WriteResult({
      "nInserted": 1
    })
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons>  db.pokemons.insert({nome: 'emboar', description:'It cares deeply about its friends.', attack: 60, defense: 30, height: 1.6})
    Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons>  db.pokemons.insert({nome: 'tangrowth', description:'It ensnares prey by extending arms made of vines. ', attack: 50, defense: 50, height: 2})
    Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons>  db.pokemons.insert({nome: 'margmortar', description:'It blasts fireballs of over 3,600 degrees Fahrenheit ', attack: 50, defense: 30, height: 1.6})
    Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons>  db.pokemons.insert({nome: 'weavile', description:'It lives in snowy regions', attack: 60, defense: 30, height: 1.1})
    Inserted 1 record(s) in 5ms
    WriteResult({
      "nInserted": 1
    })
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons>  db.pokemons.insert({nome: 'eevee', description:'Eevee has an unstable genetic makeup', attack: 30, defense: 20, height: 0.3})
    Inserted 1 record(s) in 2ms
    WriteResult({
      "nInserted": 1
    })

    ```

## Exibir pokémons existentes

    ```
    db.pokemons.find()
    {
      "_id": ObjectId("57afe503ef96c0ea464330d5"),
      "nome": "dragonair",
      "description": "Dragonair stores an enormous amount of energy inside its body",
      "attack": 40,
      "defense": 30,
      "height": 4
    }
    {
      "_id": ObjectId("57afe680ef96c0ea464330d6"),
      "nome": "aurorus",
      "description": "The diamond-shaped crystals body",
      "attack": 40,
      "defense": 30,
      "height": 2.4
    }
    {
      "_id": ObjectId("57afe737ef96c0ea464330d7"),
      "nome": "reshiram",
      "description": "This legendary Pokémon can scorch the world with fire",
      "attack": 60,
      "defense": 40,
      "height": 3.2
    }
    {
      "_id": ObjectId("57afe73eef96c0ea464330d8"),
      "nome": "archeops",
      "description": "They are intelligent and will cooperate to catch prey",
      "attack": 70,
      "defense": 30,
      "height": 1.4
    }
    {
      "_id": ObjectId("57afe745ef96c0ea464330d9"),
      "nome": "liepard",
      "description": "They run silently in the night.",
      "attack": 50,
      "defense": 20,
      "height": 1.1
    }
    {
      "_id": ObjectId("57afe74eef96c0ea464330da"),
      "nome": "emboar",
      "description": "It cares deeply about its friends.",
      "attack": 60,
      "defense": 30,
      "height": 1.6
    }
    {
      "_id": ObjectId("57afe75cef96c0ea464330db"),
      "nome": "tangrowth",
      "description": "It ensnares prey by extending arms made of vines. ",
      "attack": 50,
      "defense": 50,
      "height": 2
    }
    {
      "_id": ObjectId("57afe7edef96c0ea464330dc"),
      "nome": "margmortar",
      "description": "It blasts fireballs of over 3,600 degrees Fahrenheit ",
      "attack": 50,
      "defense": 30,
      "height": 1.6
    }
    {
      "_id": ObjectId("57afe7f6ef96c0ea464330dd"),
      "nome": "weavile",
      "description": "It lives in snowy regions",
      "attack": 60,
      "defense": 30,
      "height": 1.1
    }
    {
      "_id": ObjectId("57afe7fdef96c0ea464330de"),
      "nome": "eevee",
      "description": "Eevee has an unstable genetic makeup",
      "attack": 30,
      "defense": 20,
      "height": 0.3
    }
    
    ```

## Buscar pokémon pelo nome e armazenar numa variável chamada 'poke'

    ```
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons> var poke = db.pokemons.findOne({nome: 'eevee'})
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons> poke
    {
      "_id": ObjectId("57afe7fdef96c0ea464330de"),
      "nome": "eevee",
      "description": "Eevee has an unstable genetic makeup",
      "attack": 30,
      "defense": 20,
      "height": 0.3
    }

    ```

## Modificar description e salvar

    ```
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons> poke.description = 'The pokemon that has my name'
    The pokemon that has my name
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons> poke
    {
      "_id": ObjectId("57afe7fdef96c0ea464330de"),
      "nome": "eevee",
      "description": "The pokemon that has my name",
      "attack": 30,
      "defense": 20,
      "height": 0.3
    }
    eve-Aspire-E5-571(mongod-3.0.12) be-mean-pokemons> db.pokemons.save(poke)
    Updated 1 existing record(s) in 3ms
    WriteResult({
      "nMatched": 1,
      "nUpserted": 0,
      "nModified": 1
    })

