# MongoDB - Aula 02 - Exercício
autor: Ramon Lopes da Graça

## Listagem das databases (passo 2)

```
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
be-mean-pokemons  → 0.078GB
ramon-test-db     → 0.078GB
local             → 0.078GB
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons>
```

## Listagem das coleções (passo 3)

```
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> show collections
pokemons       → 0.001MB / 0.008MB
system.indexes → 0.000MB / 0.008MB
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons>
```

## Cadastro dos pokemons (passo 4)

```
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> var pkm = {name: "Snorlax",description: "Dorminhoco", type: "normal", attack: 110, defense: 65, height: 2.1 }
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pkm)
Inserted 1 record(s) in 9ms
WriteResult({
  "nInserted": 1
})

ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> var pkm = {name: "Scizor",description: "Insetão dumal", type: "bug/steel", attack: 130, defense: 100, height: 1.8 }
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pkm)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})

ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> var pkm = {name: "Tyranitar",description: "Esse bicho é treteiro", type: "rock/dark", attack: 134, defense: 110, height: 2.0 }
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pkm)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})

ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> var pkm = {name: "Metagross",description: "Aranha paranormal de ferro", type: "steel/psychic", attack: 135, defense: 130, height: 1.6 }
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pkm)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> var pkm = {name: "Infernape",description: "Simio cabeça quente", type: "fire/fighting", attack: 104, defense: 71, height: 1.19 }
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pkm)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})

ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> var pkm = {name: "Greninja",description: "Sapo cosplay de naruto", type: "water/dark", attack: 95, defense: 67, height: 1.5 }
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pkm)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> var pkm = {name: "Bisharp",description: "Sharp as a butterknife", type: "dark/steel", attack: 125, defense: 100, height: 1.6 }
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pkm)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons>
```

## Lista dos pokemons (passo 5)

```
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("564291cc24f7600b5c924cdc"),
  "name": "Pikachu",
  "description": "Rato elétrico revoltado",
  "type": "electric",
  "attack": 55,
  "defense": 40,
  "height": 0.4
}
{
  "_id": ObjectId("5642931724f7600b5c924cdd"),
  "name": "Bulbasaur",
  "description": "Bichinho do chicote de planta",
  "type": "grass/poison",
  "attack": 49,
  "defense": 49,
  "height": 0.7
}
{
  "_id": ObjectId("5642939524f7600b5c924cde"),
  "name": "Charmander",
  "description": "Lagartixa de fogo que vira dragão",
  "type": "fire",
  "attack": 52,
  "defense": 43,
  "height": 0.6
}
{
  "_id": ObjectId("564293da24f7600b5c924cdf"),
  "name": "Squirtle",
  "description": "Tartaruga que manja dos paranaue",
  "type": "water",
  "attack": 48,
  "defense": 65,
  "height": 0.5
}
{
  "_id": ObjectId("564298616cbea6c892edc5c6"),
  "name": "Snorlax",
  "description": "Dorminhoco",
  "type": "normal",
  "attack": 110,
  "defense": 65,
  "height": 2.1
}
{
  "_id": ObjectId("5642989d6cbea6c892edc5c7"),
  "name": "Scizor",
  "description": "Insetão dumal",
  "type": "bug/steel",
  "attack": 130,
  "defense": 100,
  "height": 1.8
}
{
  "_id": ObjectId("564298c16cbea6c892edc5c8"),
  "name": "Tyranitar",
  "description": "Esse bicho é treteiro",
  "type": "rock/dark",
  "attack": 134,
  "defense": 110,
  "height": 2
}
{
  "_id": ObjectId("564298d06cbea6c892edc5c9"),
  "name": "Metagross",
  "description": "Aranha paranormal de ferro",
  "type": "steel/psychic",
  "attack": 135,
  "defense": 130,
  "height": 1.6
}
{
  "_id": ObjectId("564298dd6cbea6c892edc5ca"),
  "name": "Infernape",
  "description": "Simio cabeça quente",
  "type": "fire/fighting",
  "attack": 104,
  "defense": 71,
  "height": 1.19
}
{
  "_id": ObjectId("564298ea6cbea6c892edc5cb"),
  "name": "Greninja",
  "description": "Sapo cosplay de naruto",
  "type": "water/dark",
  "attack": 95,
  "defense": 67,
  "height": 1.5
}
{
  "_id": ObjectId("564298f96cbea6c892edc5cc"),
  "name": "Bisharp",
  "description": "Sharp as a butterknife",
  "type": "dark/steel",
  "attack": 125,
  "defense": 100,
  "height": 1.6
}
Fetched 11 record(s) in 10ms
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons>
```

## Pikachu (passo 6)

```
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name: "Metagross"})
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("564298d06cbea6c892edc5c9"),
  "name": "Metagross",
  "description": "Aranha paranormal de ferro",
  "type": "steel/psychic",
  "attack": 135,
  "defense": 130,
  "height": 1.6
}
```

## Atualização do Pikachu (passo 6)

```
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name: "Metagross"})
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("564298d06cbea6c892edc5c9"),
  "name": "Metagross",
  "description": "Aranha paranormal de ferro",
  "type": "steel/psychic",
  "attack": 135,
  "defense": 130,
  "height": 1.6
}
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> poke.description
Aranha paranormal de ferro
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> poke.description = "Bichin apelão"
Bichin apelão
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 8ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name: "Metagross"})
ramon-S460-L-BG26P1(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("564298d06cbea6c892edc5c9"),
  "name": "Metagross",
  "description": "Bichin apelão",
  "type": "steel/psychic",
  "attack": 135,
  "defense": 130,
  "height": 1.6
}
```
