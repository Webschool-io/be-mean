# MongoDB - Aula 02 - Exercício
autor: Giuseppe Antonelli Santos

## Listagem das databases (passo 2)
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-instagram-mongodb> use be-mean-pokemon
    switched to db be-mean-pokemon
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemon> show dbs
    local                     → 0.078GB
    be-mean-instagram-mongodb → 0.078GB
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemon>

## Listagem das coleções (passo 3)
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemon> show collections

## Cadastro dos pokemons (passo 4)
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Electrike','description':'Electrike stores electricity in its long body hair','type': 'Eletric', 'attack': 30, height: 0.6 }
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
    Inserted 1 record(s) in 339ms
    WriteResult({
      "nInserted": 1
    })
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Blastoise','description':'Blastoise has water spouts th at protrude from its shell','type': 'Water', 'attack': 40, height: 1.6 } 
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
    Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Charizard','description':'Charizard flies around the sk y in search of powerful opponents.','type': 'Fire', 'attack': 40, height: 1.7 }
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
    Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> var pokemon = {"name":"Marowak","description":"The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.","type":"ground","attack":80,"height":10} 
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
    Inserted 1 record(s) in 1ms
    WriteResult({
      "nInserted": 1
    })
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> var pokemon = {"name":"Exeggcute","description":"Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.","type":"grass","attack":40,"height":4} 
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
    Inserted 1 record(s) in 4ms
    WriteResult({
      "nInserted": 1
    })
  
## Lista dos pokemons (passo 5)
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> db.pokemons.find({})
    {
      "_id": ObjectId("5643d90b0067d019cef555de"),
      "name": "Electrike",
      "description": "Electrike stores electricity in its long body hair",
      "type": "Eletric",
      "attack": 30,
      "height": 0.6
    }
    {
      "_id": ObjectId("5643d97b0067d019cef555df"),
      "name": "Blastoise",
      "description": "Blastoise has water spouts th at protrude from its shell",
      "type": "Water",
      "attack": 40,
      "height": 1.6
    }
    {
      "_id": ObjectId("5643d9ab0067d019cef555e0"),
      "name": "Charizard",
      "description": "Charizard flies around the sk y in search of powerful opponents.",
      "type": "Fire",
      "attack": 40,
      "height": 1.7
    }
    {
      "_id": ObjectId("5643da330067d019cef555e1"),
      "name": "Marowak",
      "description": "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
      "type": "ground",
      "attack": 80,
      "height": 10
    }
    {
      "_id": ObjectId("5643db56e5566f002ac09b7b"),
      "name": "Exeggcute",
      "description": "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
      "type": "grass",
      "attack": 40,
      "height": 4arow
    }
    Fetched 5 record(s) in 2ms


## Marowak (passo 6)
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("5643da330067d019cef555e1"),
      "name": "Marowak",
      "description": "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
      "type": "ground",
      "attack": 80,
      "height": 10
    }
    Fetched 1 record(s) in 14ms

## Atualização do Marowak (passo 6)
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> var pokemon = db.pokemons.findOne(query)
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> pokemon
    {
      "_id": ObjectId("5643da330067d019cef555e1"),
      "name": "Marowak",
      "description": "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
      "type": "ground",
      "attack": 80,
      "height": 10
    }
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> pokemon.description = "MAROWAAAAAAAAAAAAAAAAAAAAAK"
    MAROWAAAAAAAAAAAAAAAAAAAAAK
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> pokemon
    {
      "_id": ObjectId("5643da330067d019cef555e1"),
      "name": "Marowak",
      "description": "MAROWAAAAAAAAAAAAAAAAAAAAAK",
      "type": "ground",
      "attack": 80,
      "height": 10
    }
    antonellisantos-GT60-0N-GT60-0NSR(mongod-3.0.7) be-mean-pokemons> db.pokemon.save(pokemon)
    Updated 1 new record(s) in 15ms
    WriteResult({
      "nMatched": 0,
      "nUpserted": 1,
      "nModified": 0,
      "_id": ObjectId("5643da330067d019cef555e1")
    })