# MongoDB - Aula 02 - Exercício
autor: DIEGO FERREIRA

## Listagem das databases (passo 2)

```
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
local             → 0.078GB
```

## Listagem das coleções (passo 3)

```
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> show collections
pokemons       → 0.000MB / 0.008MB
system.indexes → 0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)

```
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Charmeleon', description: 'Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns agressive.', attack: 64, defense: 58, height: 11})
Inserted 1 record(s) in 315ms
WriteResult({
  "nInserted": 1
})
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Pikachu', description: 'Pikachu comes across something new, it blasts it with a jolt of electricity', attack: 55, defense: 40, height: 0.4})
Inserted 1 record(s) in 16ms
WriteResult({
  "nInserted": 1
})
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Gurdurr', description: 'With strengthened bodies, they skillfully wield steel beams to take down buildings. ', attack: 105, defense: 85, height: 12})
Inserted 1 record(s) in 10ms
WriteResult({
  "nInserted": 1
})
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Charizard', description: 'Charizard flies around the sky in search of powerful opponents.', attack: 84, defense: 78, height: 17})
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: 'Sawk', description: 'Desiring the strongest karate chop, they seclude themselves in mountains and train without sleeping.', attack: 125, defense: 75, height: 14})
Inserted 1 record(s) in 6ms
WriteResult({
  "nInserted": 1
})
```

## Lista dos pokemons (passo 5)

```
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5643b9421ab2c09858ea975c"),
  "name": "Charmeleon",
  "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns agressive.",
  "attack": 64,
  "defense": 58,
  "height": 11
}
{
  "_id": ObjectId("5643bc001ab2c09858ea975d"),
  "name": "Pikachu",
  "description": "Pikachu comes across something new, it blasts it with a jolt of electricity",
  "attack": 55,
  "defense": 40,
  "height": 0.4
}
{
  "_id": ObjectId("5643bc5e1ab2c09858ea975e"),
  "name": "Gurdurr",
  "description": "With strengthened bodies, they skillfully wield steel beams to take down buildings. ",
  "attack": 105,
  "defense": 85,
  "height": 12
}
{
  "_id": ObjectId("5643bce81ab2c09858ea975f"),
  "name": "Charizard",
  "description": "Charizard flies around the sky in search of powerful opponents.",
  "attack": 84,
  "defense": 78,
  "height": 17
}
{
  "_id": ObjectId("5643bd581ab2c09858ea9760"),
  "name": "Sawk",
  "description": "Desiring the strongest karate chop, they seclude themselves in mountains and train without sleeping.",
  "attack": 125,
  "defense": 75,
  "height": 14
}
Fetched 5 record(s) in 15ms
```

## Pikachu (passo 6)

```
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> var query = {'name':'Pikachu'}
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5643bc001ab2c09858ea975d"),
  "name": "Pikachu",
  "description": "Pikachu comes across something new, it blasts it with a jolt of electricity",
  "attack": 55,
  "defense": 40,
  "height": 0.4
}
Fetched 1 record(s) in 1ms
```

## Atualização do Pikachu (passo 6)

```
Air-de-Diego(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 35ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
