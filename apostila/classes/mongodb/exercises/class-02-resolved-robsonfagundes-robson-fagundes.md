# MongoDB - Aula 02 - Exercício
autor: Robson Fagundes

## 1. Crie uma database chamada be-mean-pokemons;

    ```
    Dell-3500(mongod-3.0.7) test> use be-mean-pokemons
    switched to db be-mean-pokemons
    
    ```

## 2. Liste quais databases você possui nesse servidor;

    ```
    Dell-3500(mongod-3.0.7) be-mean-pokemons> show dbs
    be-mean-instagram → 0.078GB
    test              → 0.078GB
    local             → 0.078GB

    ```

## 3. Liste quais coleções você possui nessa database;

    ```
    Dell-3500(mongod-3.0.7) be-mean-pokemons> show collections
    Dell-3500(mongod-3.0.7) be-mean-pokemons> 

    ```

## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;

    ```
    Dell-3500(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Charizard','description':'Charizard flies around the sky in search of powerful opponents.','type': 'Fire', attack: 65, height: 0.6 }
    Dell-3500(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
    Inserted 1 record(s) in 4ms
    WriteResult({
      "nInserted": 1
    })
    
    ```

## 5. Liste os pokemons existentes na sua coleção;

    ```
    Dell-3500(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
    {
      "_id": ObjectId("56427fedb892b212ddd6ec90"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    {
      "_id": ObjectId("5642801eb892b212ddd6ec91"),
      "name": "Charizard",
      "description": "Charizard flies around the sky in search of powerful opponents.",
      "type": "Fire",
      "attack": 65,
      "height": 0.6
    }
    {
      "_id": ObjectId("5642852e576657b5d00592c6"),
      "name": "Charmeleon",
      "description": "Charmeleon mercilessly destroys its foes using its sharp claws.",
      "type": "Fire",
      "attack": 70,
      "height": 0.3
    }
    {
      "_id": ObjectId("56428597576657b5d00592c7"),
      "name": "Blastoise",
      "description": "Blastoise has water spouts that protrude from its shell.",
      "type": "Water",
      "attack": 50,
      "height": 0.7
    }
    {
      "_id": ObjectId("564285dd576657b5d00592c8"),
      "name": "Charmander",
      "description": "The flame that burns at the tip of its tail is an indication of its emotions.",
      "type": "Fire",
      "attack": 60,
      "height": 0.2
    }
    {
      "_id": ObjectId("564286db576657b5d00592c9"),
      "name": "Bulbasaur",
      "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back.",
      "type": "Glass, Poison",
      "attack": 35,
      "height": 0.1
    }
    Fetched 6 record(s) in 12ms


    ```

## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;

    ```
    Dell-3500(mongod-3.0.7) be-mean-pokemons> var query = {name: 'Charizard'}
    Dell-3500(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
    Dell-3500(mongod-3.0.7) be-mean-pokemons> poke
    {
      "_id": ObjectId("5642801eb892b212ddd6ec91"),
      "name": "Charizard",
      "description": "Charizard flies around the sky in search of powerful opponents.",
      "type": "Fire",
      "attack": 65,
      "height": 0.6
    }

    ```

## 7. Modifique sua `description` e salvê-o

    ```
    Dell-3500(mongod-3.0.7) be-mean-pokemons> poke.description = 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.'
    Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.
    
    Dell-3500(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
    Updated 1 existing record(s) in 17ms
    WriteResult({
      "nMatched": 1,
      "nUpserted": 0,
      "nModified": 1
    })

    Dell-3500(mongod-3.0.7) be-mean-pokemons> var query = {name: 'Charizard'}
    Dell-3500(mongod-3.0.7) be-mean-pokemons> db.pokemons.findOne(query)
    {
      "_id": ObjectId("5642801eb892b212ddd6ec91"),
      "name": "Charizard",
      "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
      "type": "Fire",
      "attack": 65,
      "height": 0.6
    }

    ```
