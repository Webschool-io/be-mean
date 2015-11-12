# MongoDB - Aula 02 - Exercício
autor: Salvador Torres

## Listagem das databases (passo 2)
```
show dbs
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
local              0.078GB
```

## Listagem das coleções (passo 3)
```
show collections
pokemons        0.001MB / 0.008MB
system.indexes  0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)
```
db.pokemons.insert({'name':'Zubat','description':'Morcego troll','type': 'flying', 'attack': 45, height: 8, 'defense': 35});
Inserted 1 record(s) in 875ms
WriteResult({
  "nInserted": 1
})
db.pokemons.insert({'name':'Nidoqueen','description':'Cantor de banda famosa','type': 'poison', 'attack': 92, height: 13, 'defense': 87});
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
db.pokemons.insert({'name':'Bulbassauro','description':'Chicote de trepadeira','type': 'grama', 'attack': 49, height: 0.4, 'defense': 49});
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
db.pokemons.insert({'name':'Charmander','description':'Esse é o cão chupando manga de fofinho','type': 'fogo', 'attack': 52, height: 0.6, 'defense': 43 });
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
db.pokemons.insert({'name':'Squirtle','description':'Ejeta água que passarinho não bebe','type': 'água', 'attack': 48, height: 0.5, 'defense': 65 });
Inserted 1 record(s) in 9ms
WriteResult({
  "nInserted": 1
})

```

## Lista dos pokemons (passo 5)
```
db.pokemons.find()
{
  "_id": ObjectId("56428768ee374d5a126ae421"),
  "name": "Zubat",
  "description": "Morcego troll",
  "type": "flying",
  "attack": 45,
  "height": 8,
  "defense": 35
}
{
  "_id": ObjectId("56428786ee374d5a126ae422"),
  "name": "Nidoqueen",
  "description": "Cantor de banda famosa",
  "type": "poison",
  "attack": 92,
  "height": 13,
  "defense": 87
}
{
  "_id": ObjectId("5642879eee374d5a126ae423"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4,
  "defense": 49
}
{
  "_id": ObjectId("564287a4ee374d5a126ae424"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6,
  "defense": 43
}
{
  "_id": ObjectId("564287c3ee374d5a126ae425"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5,
  "defense": 65
}
Fetched 5 record(s) in 25ms
```

## Squirtle (passo 6)
```
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> var query = {name:'Squirtle'}
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query);
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("564287c3ee374d5a126ae425"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5,
  "defense": 65
}
```

## Atualização do Squirtle (passo 6)
```
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> poke.description = 'Ejeta água destilada'
Ejeta água destilada
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("564287c3ee374d5a126ae425"),
  "name": "Squirtle",
  "description": "Ejeta água destilada",
  "type": "água",
  "attack": 48,
  "height": 0.5,
  "defense": 65
}
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke);
Updated 1 existing record(s) in 14ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
Air-de-SSA(mongod-3.0.7) be-mean-pokemons>
```