# MongoDB - Aula 02 - Exercício
autor: Geriel Castro

## Listagem das databases (Passo 2)
```
Command: show dbs
be-mean-instagram  0.078GB
be-mean            0.078GB
local              0.078GB
```

## Listagem das coleções (Passo 3)
```
Command: show collections
system.indexes  0.000MB / 0.008MB
```

## Cadastro dos pokemons (Passo 4)
```
Command: var pokemons = var pokemons = [{
                            name: "Articuno",
                            description: "Cuida da primeira ilha - Whirl Islands",
                            attack: 1000,
                            defense: 1000,
                            height: 10
                        }, {
                            name: "Zapdos",
                            description: "Cuida da segunda ilha - Whirl Islands",
                            attack: 8500,
                            defense: 8500,
                            height: 11
                        }, {
                            name: "Moltres",
                            description: "Cuida da terceira ilha - Whirl Islands",
                            attack: 9000,
                            defense: 9000,
                            height: 12
                        }, {
                            name: "Mewtwo",
                            description: "Não exerce nenhuma função pois não foi criado por Arceus",
                            attack: 5000,
                            defense: 5000,
                            height: 13
                        }, {
                            name: "Raikou",
                            description: "Atingiu com um raio na torre de Lugia",
                            attack: 5300,
                            defense: 5300,
                            height: 14
                        }]

Command: db.pokemons.insert(pokemons)
Inserted 1 record(s) in 2067ms
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

## Lista dos pokemons (Passo 5)
```
Command: db.pokemons.find()
{
  "_id": ObjectId("564421629575350d3105c6b1"),
  "name": "Articuno",
  "description": "Cuida da primeira ilha - Whirl Islands",
  "attack": 1000,
  "defense": 1000,
  "height": 10
}
{
  "_id": ObjectId("564421629575350d3105c6b2"),
  "name": "Zapdos",
  "description": "Cuida da segunda ilha - Whirl Islands",
  "attack": 8500,
  "defense": 8500,
  "height": 11
}
{
  "_id": ObjectId("564421629575350d3105c6b3"),
  "name": "Moltres",
  "description": "Cuida da terceira ilha - Whirl Islands",
  "attack": 9000,
  "defense": 9000,
  "height": 12
}
{
  "_id": ObjectId("564421629575350d3105c6b4"),
  "name": "Mewtwo",
  "description": "Não exerce nenhuma função pois não foi criado por Arceus",
  "attack": 5000,
  "defense": 5000,
  "height": 13
}
{
  "_id": ObjectId("564421629575350d3105c6b5"),
  "name": "Raikou",
  "description": "Atingiu com um raio na torre de Lugia",
  "attack": 5300,
  "defense": 5300,
  "height": 14
}
Fetched 5 record(s) in 30ms
```

##  Moltres (Passo 6)
```
var rpokemon = { name: "Moltres" }

Command: rpokemon
{
  "name": "Moltres"
}


var res = db.pokemons.findOne(rpokemon)

Command: res
{
  "_id": ObjectId("564421629575350d3105c6b3"),
  "name": "Moltres",
  "description": "Cuida da terceira ilha - Whirl Islands",
  "attack": 9000,
  "defense": 9000,
  "height": 12
}
```

## Atualização do Moltres (Passo 6)
```
res.description = "Essa descrição foi alterada"

Command: db.pokemons.save(res)
Updated 1 existing record(s) in 42ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

Command: db.pokemons.findOne(rpokemon)
{
  "_id": ObjectId("564421629575350d3105c6b3"),
  "name": "Moltres",
  "description": "Essa descrição foi alterada",
  "attack": 9000,
  "defense": 9000,
  "height": 12
}

```
