# MongoDB - Aula 02 - Exercício
autor: Gilmar Palega

## Listagem das databases (passo 2)
```
Gil(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
be-mean           → 0.078GB
local             → 0.078GB

```

## Listagem das coleções (passo 3)
```
Gil(mongod-3.0.7) be-mean-pokemons> show collections
```

## Cadastro dos pokemons (passo 4)
```
Gil(mongod-3.0.7) be-mean-pokemons> var poke11 = {name:'Metapod', description:'Inseto', attack:20, defense:55, height:7}
Gil(mongod-3.0.7) be-mean-pokemons> var poke12 = {name:'Butterfree', description:'Borboleta do Mal', attack:45, defense:50, height:11}
Gil(mongod-3.0.7) be-mean-pokemons> var poke14 = {name:'Kakuna', description:'Larva alienígena', attack:25, defense:50, height:6}
Gil(mongod-3.0.7) be-mean-pokemons> var poke43 = {name:'EduJorge', description:'Não tem nada a ver com isso', attack:43, defense:60, height:10}
Gil(mongod-3.0.7) be-mean-pokemons> var poke28 = {name:'Fide', description:'Não é reprodutor', attack:12, defense:20, height:2}
Gil(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke11)
Inserted 1 record(s) in 232ms
WriteResult({
  "nInserted": 1
})
Gil(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke12)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
Gil(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke14)
Inserted 1 record(s) in 11ms
WriteResult({
  "nInserted": 1
})
Gil(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke43)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
Gil(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(poke28)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})

```

## Lista dos pokemons (passo 5)
```
Gil(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56433fa2607f6c55217deb1c"),
  "name": "Metapod",
  "description": "Inseto",
  "attack": 20,
  "defense": 55,
  "height": 7
}
{
  "_id": ObjectId("56433fa6607f6c55217deb1d"),
  "name": "Butterfree",
  "description": "Borboleta do Mal",
  "attack": 45,
  "defense": 50,
  "height": 11
}
{
  "_id": ObjectId("56433fac607f6c55217deb1e"),
  "name": "Kakuna",
  "description": "Larva alienígena",
  "attack": 25,
  "defense": 50,
  "height": 6
}
{
  "_id": ObjectId("56433fb1607f6c55217deb1f"),
  "name": "EduJorge",
  "description": "Não tem nada a ver com isso",
  "attack": 43,
  "defense": 60,
  "height": 10
}
{
  "_id": ObjectId("56433fba607f6c55217deb20"),
  "name": "Fide",
  "description": "Não é reprodutor",
  "attack": 12,
  "defense": 20,
  "height": 2
}
Fetched 5 record(s) in 11ms

```

## Pikachu (passo 6)
```
Gil(mongod-3.0.7) be-mean-pokemons> var poke=db.pokemons.findOne({name:'Kakuna'})
Gil(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("56433fac607f6c55217deb1e"),
  "name": "Kakuna",
  "description": "Larva alienígena",
  "attack": 25,
  "defense": 50,
  "height": 6
}

```

## Atualização do Pikachu (passo 6)
```
Gil(mongod-3.0.7) be-mean-pokemons> poke.description = "Larva alienígena furiosa"
Larva alienígena furiosa
Gil(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 9ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

```
