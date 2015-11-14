- Crie uma database chamada be-mean-pokemons;

  ```
  > use be-mean-pokemons
  switched to db be-mean-pokemons
  ```

- Liste quais databases você possui nesse servidor;

  ```
  show dbs
  be-mean-instagram → 0.078GB
  be-mean           → 0.078GB
  local             → 0.078GB
  ```

- Liste quais coleções você possui nessa database;

  ```
  show collections
  ```

- Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;

  ```
  be-mean-pokemons> var pokemons = [{name: "Nidoqueen",description: "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",attack: 92,defense: 87,height: 13},{name: "Parasect",description: "The bug host is drained of energy by the mushrooms on its back. They appear to do all the thinking.",attack: 95,defense: 80,height: 10},{name: "Beedrill",description: "It has 3 poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",attack: 90,defense: 40,height: 10},{name: "Pidgeot",description: "It immobilizes its prey using well- developed claws, then carries the prey more than 60 miles to its nest.",attack: 80,defense: 75,height: 15},{name: "Meowth",description: "It is fascinated by round objects. It cant stop playing with them until it tires and falls asleep.",attack: 45,defense: 35,height: 4},{name: "Machop",description: "MACHOPs muscles are special - they never get sore no matter how much they are used in exercise. This POKMON has sufficient power to hurl a hundred adult humans.",attack: 80,defense: 50,height: 8}]
  be-mean-pokemons> db.pokemons.insert(pokemons)
  Inserted 1 record(s) in 4ms
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

- Liste os pokemons existentes na sua coleção;

  ```
  be-mean-pokemons> db.pokemons.find()
  {
    "_id": ObjectId("56472f2acc2bd689f948f86c"),
    "name": "Nidoqueen",
    "description": "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
    "attack": 92,
    "defense": 87,
    "height": 13
  }
  {
    "_id": ObjectId("56472f46cc2bd689f948f86d"),
    "name": "Parasect",
    "description": "The bug host is drained of energy by the mushrooms on its back. They appear to do all the thinking.",
    "attack": 95,
    "defense": 80,
    "height": 10
  }
  {
    "_id": ObjectId("56472f62cc2bd689f948f86e"),
    "name": "Beedrill",
    "description": "It has 3 poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
    "attack": 90,
    "defense": 40,
    "height": 10
  }
  {
    "_id": ObjectId("56472f6dcc2bd689f948f86f"),
    "name": "Pidgeot",
    "description": "It immobilizes its prey using well- developed claws, then carries the prey more than 60 miles to its nest.",
    "attack": 80,
    "defense": 75,
    "height": 15
  }
  {
    "_id": ObjectId("56472f77cc2bd689f948f870"),
    "name": "Meowth",
    "description": "It is fascinated by round objects. It cant stop playing with them until it tires and falls asleep.",
    "attack": 45,
    "defense": 35,
    "height": 4
  }
  {
    "_id": ObjectId("56472f83cc2bd689f948f871"),
    "name": "Machop",
    "description": "MACHOPs muscles are special - they never get sore no matter how much they are used in exercise. This POKMON has sufficient power to hurl a hundred adult humans.",
    "attack": 80,
    "defense": 50,
    "height": 8
  }
  Fetched 6 record(s) in 4ms
  ```

- Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;

  ```
  be-mean-pokemons> var query = {name:"Machop"}
  be-mean-pokemons> var poke = db.pokemons.findOne(query)
  be-mean-pokemons> poke
  {
    "_id": ObjectId("56472f83cc2bd689f948f871"),
    "name": "Machop",
    "description": "MACHOPs muscles are special - they never get sore no matter how much they are used in exercise. This POKMON has sufficient power to hurl a hundred adult humans.",
    "attack": 80,
    "defense": 50,
    "height": 8
  }
  ```

- Modifique sua `description` e salvê-o

  ```
  be-mean-pokemons> poke.description = "Loves to build its muscles. It trains in all styles of martial arts to become even stronger."
  Loves to build its muscles. It trains in all styles of martial arts to become even stronger.
  be-mean-pokemons> db.pokemons.save(poke)
  Updated 1 existing record(s) in 18ms
  WriteResult({
    "nMatched": 1,
    "nUpserted": 0,
    "nModified": 1
  })
  be-mean-pokemons> db.pokemons.find(query)
  {
    "_id": ObjectId("56472f83cc2bd689f948f871"),
    "name": "Machop",
    "description": "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
    "attack": 80,
    "defense": 50,
    "height": 8
  }
  Fetched 1 record(s) in 1ms
  ```
