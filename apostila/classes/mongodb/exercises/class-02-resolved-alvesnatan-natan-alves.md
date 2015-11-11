# MongoDB - Aula 02 - Exercício
autor: Natan Alves

## Crie uma database chamada be-mean-pokemons (passo 1)
´´´
  stark(mongod-3.0.7) test> use be-mean-pokemons
  switched to db be-mean-pokemons
´´´

## Listagem das databases (passo 2)
´´´
  stark(mongod-3.0.7) be-mean-pokemons> show dbs
  local             → 0.078GB
  be-mean           → 0.078GB
  be-mean-instagram → 0.078GB
´´´

## Listagem das coleções (passo 3)
´´´
  stark(mongod-3.0.7) be-mean-pokemons> show collections
  stark(mongod-3.0.7) be-mean-pokemons> 

´´´

## Cadastro dos pokemons (passo 4)
´´´
  stark(mongod-3.0.7) be-mean-pokemons> var mewtwo = {'name':'Mewtwo','description':'Pokemon de laboratório foda pra caralho','type': 'psychic', attack: 110, height: 2.0 }
  stark(mongod-3.0.7) be-mean-pokemons> var charizard = {'name':'Charizard','description':'Dragão foda que cospe fogo','type': 'fire', attack: 84, height: 1.7 }
  stark(mongod-3.0.7) be-mean-pokemons> var zubat = {'name':'Zubat','description':'Morcego do batman','type': 'poison', attack: 45, height: 0.8 }
  stark(mongod-3.0.7) be-mean-pokemons> var alakazam = {'name':'Alakazam','description':'Pira sua cabeça','type': 'rock', attack: 50, height: 1.5 }
  stark(mongod-3.0.7) be-mean-pokemons> var onix = {'name':'Onix','description':'Snake de pedra','type': 'psychic', attack: 45, height: 8.8 }
  stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(mewtwo)
  Inserted 1 record(s) in 431ms
  WriteResult({
    "nInserted": 1
  })
  stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(charizard)
  Inserted 1 record(s) in 3ms
  WriteResult({
    "nInserted": 1
  })
  stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(zubat)
  Inserted 1 record(s) in 10ms
  WriteResult({
    "nInserted": 1
  })
  stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(alakazam)
  Inserted 1 record(s) in 3ms
  WriteResult({
    "nInserted": 1
  })
  stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(onix)
  Inserted 1 record(s) in 4ms
  WriteResult({
    "nInserted": 1
  })

´´´

## Lista dos pokemons (passo 5)
´´´
  stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
  {
    "_id": ObjectId("5642ad1c28bd7ce49be54023"),
    "name": "Mewtwo",
    "description": "Pokemon de laboratório foda pra caralho",
    "type": "psychic",
    "attack": 110,
    "height": 2
  }
  {
    "_id": ObjectId("5642ad2428bd7ce49be54024"),
    "name": "Charizard",
    "description": "Dragão foda que cospe fogo",
    "type": "fire",
    "attack": 84,
    "height": 1.7
  }
  {
    "_id": ObjectId("5642ad6438764857c30e219e"),
    "name": "Zubat",
    "description": "Morcego do batman",
    "type": "poison",
    "attack": 45,
    "height": 0.8
  }
  {
    "_id": ObjectId("5642ad7438764857c30e219f"),
    "name": "Alakazam",
    "description": "Pira sua cabeça",
    "type": "rock",
    "attack": 50,
    "height": 1.5
  }
  {
    "_id": ObjectId("5642ad7838764857c30e21a0"),
    "name": "Onix",
    "description": "Snake de pedra",
    "type": "psychic",
    "attack": 45,
    "height": 8.8
  }
  Fetched 5 record(s) in 4ms


´´´

## Pokemon a sua escolha (passo 6)
´´´
  stark(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({ 'name': 'Mewtwo' });

´´´

## Atualização do pokemon a sua escolha (passo 7)
´´´

  stark(mongod-3.0.7) be-mean-pokemons> poke.description = 'Pokemon zika feito em laboratório'
  Pokemon zika feito em laboratório
  stark(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
  Updated 1 existing record(s) in 4ms
  WriteResult({
    "nMatched": 1,
    "nUpserted": 0,
    "nModified": 1
  })

´´´
