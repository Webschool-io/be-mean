# MongoDB - Aula 02 - Exercício
autor: Mateus Cerezini Gomes

## Listagem das databases (passo 2)

```
be-mean-pokemons> show dbs
be-mean-pokemons  → 0.078GB
be-mean-instagram → 0.078GB
local             → 0.078GB
```

## Listagem das coleções (passo 3)

```
be-mean-pokemons> show collections
pokemons       → 0.001MB / 0.008MB
system.indexes → 0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)

```
be-mean-pokemons> var pokemon = {'name':'Charizard','description':'Um dragão boladão','type': 'fogo', 'attack': 70, 'defense': 60, 'height': 5.07 }
be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 379ms
WriteResult({
  "nInserted": 1
})
be-mean-pokemons> var pokemon = {'name':'Blastoise','description':'Cospe água na galera com calor','type': 'água', 'attack': 65, 'defense': 72, 'height': 5.03 }
be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
be-mean-pokemons> var pokemon = {'name':'Butterfree','description':'Borboleta que solta pó mágico','type': 'inseto', 'attack': 35, 'defense': 27, 'height': 3.07 }
matrix(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 7ms
WriteResult({
  "nInserted": 1
})
be-mean-pokemons> var pokemon = {'name':'Beedrill','description':'Vespa do MMA','type': 'inseto', 'attack': 40, 'defense': 35, 'height': 3.03 }
matrix(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
be-mean-pokemons> var pokemon = {'name':'Fearow','description':'Uma ave destemida','type': 'ave', 'attack': 50, 'defense': 42, 'height': 3.11 }
matrix(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})
```


## Lista dos pokemons (passo 5)

```
be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("564289689841443c143a8fea"),
  "name": "Charizard",
  "description": "Um dragão boladão",
  "type": "fogo",
  "attack": 70,
  "defense": 60,
  "height": 5.07
}
{
  "_id": ObjectId("5642898c9841443c143a8feb"),
  "name": "Blastoise",
  "description": "Cospe água na galera com calor",
  "type": "água",
  "attack": 65,
  "defense": 72,
  "height": 5.03
}
{
  "_id": ObjectId("56428a1f4fa82c32f180ce92"),
  "name": "Butterfree",
  "description": "Borboleta que solta pó mágico",
  "type": "inseto",
  "attack": 35,
  "defense": 27,
  "height": 3.07
}
{
  "_id": ObjectId("56428a3a4fa82c32f180ce93"),
  "name": "Beedrill",
  "description": "Vespa do MMA",
  "type": "inseto",
  "attack": 40,
  "defense": 35,
  "height": 3.03
}
{
  "_id": ObjectId("56428a524fa82c32f180ce94"),
  "name": "Fearow",
  "description": "Uma ave destemida",
  "type": "ave",
  "attack": 50,
  "defense": 42,
  "height": 3.11
}
Fetched 5 record(s) in 9ms
```

## Charizard (passo 6)

```
var poke = db.pokemons.findOne({'name':'Charizard'})
matrix(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("564289689841443c143a8fea"),
  "name": "Charizard",
  "description": "Um dragão boladão",
  "type": "fogo",
  "attack": 70,
  "defense": 60,
  "height": 5.07
}
```

## Atualização do Charizard (passo 7)

```
be-mean-pokemons> poke.description = "Cospe fogo para caraleo e ainda voa"
Cospe fogo para caraleo e ainda voa
matrix(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 13ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
