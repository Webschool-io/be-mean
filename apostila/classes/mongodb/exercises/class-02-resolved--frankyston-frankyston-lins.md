
# MongoDB - Aula 02 - Exercício
autor: Frankyston Lins

## Listagem das databases (passo 1)

    ```
    Para criar baste executar o comando:
    frankyston-pc(mongod-3.0.7) be-mean-instagram> use be-mean-pokemons;
    switched to db be-mean-pokemons

    ```

## Listagem das databases (passo 2)

    ```
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> show dbs;
    local             → 0.078GB
    be-mean-instagram → 0.078GB
    be-mean           → 0.078GB

    ```

## Listagem das coleções (passo 3)

    ```
    frankyston-pc(mongod-3.0.7) be-mean-instagram> show collections;
    pokemons       → 0.001MB / 0.008MB
    system.indexes → 0.000MB / 0.008MB
    teste          → 0.000MB / 0.008MB

    ```

## Cadastro dos pokemons (passo 4)

    ```
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Charmeleon', description: 'Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.', attack: 64, defense: 58, height: 11})
    Inserted 1 record(s) in 362ms
    WriteResult({
      "nInserted": 1
    })
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Pidgeot', description: 'This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.', attack: 80, defense: 75, height: 15})
    Inserted 1 record(s) in 2ms
    WriteResult({
      "nInserted": 1
    })
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Aggron', description: 'Aggron claims an entire mountain as its own territory. It mercilessly beats up anything that violates its environment. This Pokémon vigilantly patrols its territory at all times.', attack: 110, defense: 180, height: 21})
    Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Pikachu', description: 'Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, its evidence that this Pokémon mistook the intensity of its charge.', attack: 55, defense: 40, height: 4})
    Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Butterfree', description: 'Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.', attack: 45, defense: 50, height: 11})
    Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Raichu', description: 'If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémons nest.', attack: 90, defense: 55, height: 8})
    Inserted 1 record(s) in 2ms
    WriteResult({
      "nInserted": 1
    })
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Charizard', description: 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.', attack: 84, defense: 78, height: 17})
    Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })


    ```

## Lista dos pokemons (passo 5)

    ```
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
    {
      "_id": ObjectId("564282dd2eed909a054ed443"),
      "name": "Charmeleon",
      "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
      "attack": 64,
      "defense": 58,
      "height": 11
    }
    {
      "_id": ObjectId("5642835c2eed909a054ed444"),
      "name": "Pidgeot",
      "description": "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
      "attack": 80,
      "defense": 75,
      "height": 15
    }
    {
      "_id": ObjectId("564283ab2eed909a054ed445"),
      "name": "Aggron",
      "description": "Aggron claims an entire mountain as its own territory. It mercilessly beats up anything that violates its environment. This Pokémon vigilantly patrols its territory at all times.",
      "attack": 110,
      "defense": 180,
      "height": 21
    }
    {
      "_id": ObjectId("5642842e2eed909a054ed446"),
      "name": "Pikachu",
      "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, its evidence that this Pokémon mistook the intensity of its charge.",
      "attack": 55,
      "defense": 40,
      "height": 4
    }
    {
      "_id": ObjectId("564284662eed909a054ed447"),
      "name": "Butterfree",
      "description": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
      "attack": 45,
      "defense": 50,
      "height": 11
    }
    {
      "_id": ObjectId("564284e42eed909a054ed448"),
      "name": "Raichu",
      "description": "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémons nest.",
      "attack": 90,
      "defense": 55,
      "height": 8
    }
    {
      "_id": ObjectId("5642853b2eed909a054ed449"),
      "name": "Charizard",
      "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
      "attack": 84,
      "defense": 78,
      "height": 17
    }
    Fetched 7 record(s) in 4ms

    ```


## Pikachu (passo 6)

    ```
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> var query = {name: 'Pikachu'}
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> poke
    {
      "_id": ObjectId("5642842e2eed909a054ed446"),
      "name": "Pikachu",
      "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, its evidence that this Pokémon mistook the intensity of its charge.",
      "attack": 55,
      "defense": 40,
      "height": 4
    }

    ```

## Atualização do Pikachu (passo 7)

    ```
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> poke.description = "Sua descrição foi alterada... Esse é o passo 6 do segundo exercício de MongoDB da WebSchool"
    Sua descrição foi alterada... Esse é o passo 6 do segundo exercício de MongoDB da WebSchool
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
    Updated 1 existing record(s) in 2ms
    WriteResult({
      "nMatched": 1,
      "nUpserted": 0,
      "nModified": 1
    })

    ```
