# MongoDB - Aula 02 - Exercício
autor: Leandro Matos

## Crie uma database chamada be-mean-pokemons;

    ```
    leandromatos-imac(mongod-3.0.7) be-mean-instagram> use be-mean-pokemons
    switched to db be-mean-pokemons
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons>
    ```

## Liste quais databases você possui nesse servidor;

    ```
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons> show dbs
    be-mean-instagram  0.078GB
    be-mean            0.078GB
    local              0.078GB
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons>
    ```

## Liste quais coleções você possui nessa database;

    ```
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons> show collections
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons>
    ```

## Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;

    ```
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons> var pokemons = [{name:"Kingler",description:"Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",attack:130,defense:115,height:13},{name:"Arbok",description:"This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",attack:85,defense:69,height:35},{name:"Staryu",description:"Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pokémon look like the stars in the sky.",attack:45,defense:55,height:8},{name:"Pidgeotto",description:"Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",attack:60,defense:55,height:11},{name:"Heracross",description:"Heracross charges in a straight line at its foe, slips beneath the foe's grasp, and then scoops up and hurls the opponent with its mighty horn. This Pokémon even has enough power to topple a massive tree.",attack:125,defense:75,height:15}]
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemons)
    Inserted 1 record(s) in 976ms
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

## Liste os pokemons existentes na sua coleção;

    ```
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
    {
      "_id": ObjectId("5642a6e34a55ae7754ef4d1a"),
      "name": "Kingler",
      "description": "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
      "attack": 130,
      "defense": 115,
      "height": 13
    }
    {
      "_id": ObjectId("5642a6e34a55ae7754ef4d1b"),
      "name": "Arbok",
      "description": "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
      "attack": 85,
      "defense": 69,
      "height": 35
    }
    {
      "_id": ObjectId("5642a6e34a55ae7754ef4d1c"),
      "name": "Staryu",
      "description": "Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pokémon look like the stars in the sky.",
      "attack": 45,
      "defense": 55,
      "height": 8
    }
    {
      "_id": ObjectId("5642a6e34a55ae7754ef4d1d"),
      "name": "Pidgeotto",
      "description": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
      "attack": 60,
      "defense": 55,
      "height": 11
    }
    {
      "_id": ObjectId("5642a6e34a55ae7754ef4d1e"),
      "name": "Heracross",
      "description": "Heracross charges in a straight line at its foe, slips beneath the foe's grasp, and then scoops up and hurls the opponent with its mighty horn. This Pokémon even has enough power to topple a massive tree.",
      "attack": 125,
      "defense": 75,
      "height": 15
    }
    Fetched 5 record(s) in 2ms
    ```

## Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada 'poke';

    ```
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name:"Pidgeotto"})
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons> poke
    {
      "_id": ObjectId("5642a6e34a55ae7754ef4d1d"),
      "name": "Pidgeotto",
      "description": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
      "attack": 60,
      "defense": 55,
      "height": 11
    }
    ```

## Modifique sua 'description' e salvê-o

    ```
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons> poke.description = "Pidgeotto é um passarinho com topete de playboy."
    Pidgeotto é um passarinho com topete de playboy.
    leandromatos-imac(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
    Updated 1 existing record(s) in 43ms
    WriteResult({
      "nMatched": 1,
      "nUpserted": 0,
      "nModified": 1
    })
    ```
