# MongoDB - Aula 02 - Exercício
autor: Adams Alves

## Crie uma database chamada be-mean-pokemons

    ```
    > use be-mean-pokemons

    ```

## Liste quais databases você possui nesse servidor

    ```
    > show dbs
    test              → 0.078GB
    local             → 0.078GB
    be-mean-instagram → 0.078GB
    be-mean           → 0.078GB
    be-mean-pokemons  → 0.078GB

    ```
## Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height

    ```
    {'name':'Blastoise','description': 'Blastoise has water spouts that protrude from its shell','type': 'water', 'attack': 85, height: 16 }
    {'name':'Charizard','description': 'Charizard flies around the sky in search of powerful opponents','type': 'fire', 'attack': 109, height: 17 }
    {'name':'Beedrill','description': 'Beedrill is extremely territorial','type': 'flying', 'attack': 45, height: 10 }
    {'name':'Pidgeotto','description': 'This Pokémon has a dazzling plumage of beautifully glossy feathers','type': 'flying', 'attack': 50, height: 11 }
    {'name':'Raticate','description': 'Raticates sturdy fangs grow steadily','type': 'normal', 'attack': 50, height: 7 }

    ```    
## Liste os pokemons existentes na sua coleção

    ```
      be-mean-pokemons> db.pokemons.find()
        {
          "_id": ObjectId("564399a0f69aaeb3590712d2"),
          "name": "Raticate",
          "description": "Raticates sturdy fangs grow steadily",
          "type": "normal",
          "attack": 50,
          "height": 7
        }
        {
          "_id": ObjectId("564399dcf69aaeb3590712d3"),
          "name": "Pidgeotto",
          "description": "This Pokémon has a dazzling plumage of beautifully glossy feathers",
          "type": "flying",
          "attack": 50,
          "height": 11
        }
        {
          "_id": ObjectId("564399f2f69aaeb3590712d4"),
          "name": "Beedrill",
          "description": "Beedrill is extremely territorial",
          "type": "flying",
          "attack": 45,
          "height": 10
        }
        {
          "_id": ObjectId("56439a05f69aaeb3590712d5"),
          "name": "Charizard",
          "description": "Charizard flies around the sky in search of powerful opponents",
          "type": "fire",
          "attack": 109,
          "height": 17
        }
        {
          "_id": ObjectId("56439a19f69aaeb3590712d6"),
          "name": "Blastoise",
          "description": "Blastoise has water spouts that protrude from its shell",
          "type": "water",
          "attack": 85,
          "height": 16
        }
        Fetched 5 record(s) in 4ms

    ```   
## Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`

    ```
      var query = { name: 'Pidgeotto' };
      var poke = db.pokemons.findOne( query )
      be-mean-pokemons> poke
      {
      "_id": ObjectId("564399dcf69aaeb3590712d3"),
      "name": "Pidgeotto",
      "description": "This Pokémon has a dazzling plumage of beautifully glossy feathers",
      "type": "flying",
      "attack": 50,
      "height": 11
      }

    ```    
## Modifique sua `description` e salvê-o

    ```
    be-mean-pokemons> poke.description = 'This Pokémon flies around, patrolling its living space'
    be-mean-pokemons> db.pokemons.save(poke)
    Updated 1 existing record(s) in 15ms
    WriteResult({
      "nMatched": 1,
      "nUpserted": 0,
      "nModified": 1
    })


    ```   
