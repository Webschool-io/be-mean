
# MongoDB - Aula 02 - Exercício
autor: Jean Nascimento

## Listagem das databases (passo 2)

```
suissacorp(mongod-3.0.6) use be-mean-pokemons
switched to db be-mean-pokemons

suissacorp(mongod-3.0.6) be-mean-pokemons> show dbs
be-mean-instagram             0.078GB
be-mean-teste                 0.078GB
be-mean                       0.078GB
bemean-cascavel               0.078GB
local                         0.078GB
pos-unoesc                    0.078GB
workshop-online-janeiro-2015  0.078GB
```

## Listagem das coleções (passo 3)

```
show collections
suissacorp(mongod-3.0.6) be-mean-pokemons> 
```

## Cadastro dos pokemons (passo 4)

```
suissacorp(mongod-3.0.6) be-mean-pokemons> var pokemons = [{name: 'Suissamon', description: 'Pokemon Hacker', type: 'hacker', attack: 8001, defense: 8000, height: 1.69},{name: 'Dilmamon', description: 'Pokemon presidANTA', type: 'besta', attack: 1, defense: 1, height: 1.60},{name: 'Cunhamon', description: 'Filho da puta', type: 'besta', attack: 9990, defense: 9999, height: 1.80},{name: 'Calheirosmon', description: 'Irmão do filho da PUTA', type: 'besta', attack: 8500, defense: 9999, height: 1.79},{name: 'FeliciANUS', description: 'Pastor baitola', type: 'besta', attack: 666, defense: 666, height: 1.70}]
suissacorp(mongod-3.0.6) be-mean-pokemons> pokemons
[
  {
    "name": "Suissamon",
    "description": "Pokemon Hacker",
    "type": "hacker",
    "attack": 8001,
    "defense": 8000,
    "height": 1.69
  },
  {
    "name": "Dilmamon",
    "description": "Pokemon presidANTA",
    "type": "besta",
    "attack": 1,
    "defense": 1,
    "height": 1.6
  },
  {
    "name": "Cunhamon",
    "description": "Filho da puta",
    "type": "besta",
    "attack": 9990,
    "defense": 9999,
    "height": 1.8
  },
  {
    "name": "Calheirosmon",
    "description": "Irmão do filho da PUTA",
    "type": "besta",
    "attack": 8500,
    "defense": 9999,
    "height": 1.79
  },
  {
    "name": "FeliciANUS",
    "description": "Pastor baitola",
    "type": "besta",
    "attack": 666,
    "defense": 666,
    "height": 1.7
  }
]
suissacorp(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert(pokemons)
Inserted 1 record(s) in 2014ms
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

## Lista dos pokemons (passo 5)

```

suissacorp(mongod-3.0.6) be-mean-pokemons> db.pokemons.find()db.pokemons.find()
{
  "_id": ObjectId("56435378613f89ac53a7b5df"),
  "name": "Suissamon",
  "description": "Pokemon Hacker",
  "type": "hacker",
  "attack": 8001,
  "defense": 8000,
  "height": 1.69
}
{
  "_id": ObjectId("56435378613f89ac53a7b5e0"),
  "name": "Dilmamon",
  "description": "Pokemon presidANTA",
  "type": "besta",
  "attack": 1,
  "defense": 1,
  "height": 1.6
}
{
  "_id": ObjectId("56435378613f89ac53a7b5e1"),
  "name": "Cunhamon",
  "description": "Filho da puta",
  "type": "besta",
  "attack": 9990,
  "defense": 9999,
  "height": 1.8
}
{
  "_id": ObjectId("56435378613f89ac53a7b5e2"),
  "name": "Calheirosmon",
  "description": "Irmão do filho da PUTA",
  "type": "besta",
  "attack": 8500,
  "defense": 9999,
  "height": 1.79
}
{
  "_id": ObjectId("56435378613f89ac53a7b5e3"),
  "name": "FeliciANUS",
  "description": "Pastor baitola",
  "type": "besta",
  "attack": 666,
  "defense": 666,
  "height": 1.7
}
Fetched 5 record(s) in 2ms
```

## Pokemon (passo 6)

```
suissacorp(mongod-3.0.6) be-mean-pokemons> var query = {"name": "Suissamon"}
suissacorp(mongod-3.0.6) be-mean-pokemons> var poke = db.pokemons.findOne(query)
suissacorp(mongod-3.0.6) be-mean-pokemons> poke
{
  "_id": ObjectId("56435378613f89ac53a7b5df"),
  "name": "Suissamon",
  "description": "Pokemon Hacker",
  "type": "hacker",
  "attack": 8001,
  "defense": 8000,
  "height": 1.69
}

```

## Atualização do Pokemon (passo 7)

```
suissacorp(mongod-3.0.6) be-mean-pokemons> var query = {"name": "Suissamon"}
suissacorp(mongod-3.0.6) be-mean-pokemons> var poke = db.pokemons.findOne(query)
suissacorp(mongod-3.0.6) be-mean-pokemons> poke
{
  "_id": ObjectId("56435378613f89ac53a7b5df"),
  "name": "Suissamon",
  "description": "Pokemon Hacker",
  "type": "hacker",
  "attack": 8001,
  "defense": 8000,
  "height": 1.69
}
suissacorp(mongod-3.0.6) be-mean-pokemons> poke.description
Pokemon Hacker
suissacorp(mongod-3.0.6) be-mean-pokemons> poke.description = "Pokemon Hacker/Professor"
Pokemon Hacker/Professor
suissacorp(mongod-3.0.6) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 1ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
suissacorp(mongod-3.0.6) be-mean-pokemons> db.pokemons.findOne(query)
{
  "_id": ObjectId("56435378613f89ac53a7b5df"),
  "name": "Suissamon",
  "description": "Pokemon Hacker/Professor",
  "type": "hacker",
  "attack": 8001,
  "defense": 8000,
  "height": 1.69
}

```

