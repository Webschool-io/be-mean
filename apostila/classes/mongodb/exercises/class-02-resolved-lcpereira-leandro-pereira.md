# MongoDB - Aula 02 - Exercício
autor: Leandro Carlos Pereira

## Criação do database (passo 1)

```
test> use be-mean-pokemons
switched to db be-mean-pokemons
be-mean-pokemons> db.pokemons.insert({'name':'Pikachu','description':'Rato elétrico bem fofinho','type': 'electric', attack: 55, height: 0.4 })
Inserted 1 record(s) in 66ms
WriteResult({
  "nInserted": 1
})
```

## Listagem das databases (passo 2)

```
be-mean-pokemons> show dbs
worfing-mail      0.078GB
cartic            0.078GB
listMails         0.078GB
local             0.078GB
be-mean-pokemons  0.078GB
worfing           0.078GB
be-mean           0.078GB
admin             (empty)
```

## Listagem das coleções (passo 3)

```
be-mean-pokemons> show collections
pokemons        0.000MB / 0.008MB
system.indexes  0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)

```
be-mean-pokemons> var pokemons = [{'name':'Moltres','description':'Pássaro com fogo no rabo','type': 'fire', attack: 110, defense: 65, height: 21 },{'name':'Mewtwo','description':'Canguru revoltado','type': 'psychic', attack: 110, defense: 90, height: 20 },{'name':'Articuno','description':'Pássaro super sayajin','type': 'ice', attack: 85, defense: 100, height: 17 },{'name':'Zapdos','description':'Pássaro com fogo no rabo','type': 'eletric', attack: 90, defense: 80, height: 21 },{'name':'Entei','description':'Cachorro esquentadinho','type': 'fire', attack: 115, defense: 85, height: 21 }]
```

```
be-mean-pokemons> db.pokemons.insert(pokemons)
Inserted 1 record(s) in 2ms
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
be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56428958209ed01d55b8faae"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("564289dd209ed01d55b8faaf"),
  "name": "Moltres",
  "description": "Pássaro com fogo no rabo",
  "type": "fire",
  "attack": 110,
  "defense": 65,
  "height": 21
}
{
  "_id": ObjectId("564289dd209ed01d55b8fab0"),
  "name": "Mewtwo",
  "description": "Canguru revoltado",
  "type": "psychic",
  "attack": 110,
  "defense": 90,
  "height": 20
}
{
  "_id": ObjectId("564289dd209ed01d55b8fab1"),
  "name": "Articuno",
  "description": "Pássaro super sayajin",
  "type": "ice",
  "attack": 85,
  "defense": 100,
  "height": 17
}
{
  "_id": ObjectId("564289dd209ed01d55b8fab2"),
  "name": "Zapdos",
  "description": "Pássaro com fogo no rabo",
  "type": "eletric",
  "attack": 90,
  "defense": 80,
  "height": 21
}
{
  "_id": ObjectId("564289dd209ed01d55b8fab3"),
  "name": "Entei",
  "description": "Cachorro esquentadinho",
  "type": "fire",
  "attack": 115,
  "defense": 85,
  "height": 21
}
```

## Buscando um pokemon e armazemando na variável "poke" (passo 6)

```
be-mean-pokemons> var poke = db.pokemons.findOne({'name': 'Zapdos'})
```

## Atualização do Pikachu (passo 7)

```
be-mean-pokemons> poke.description = "Pássaro com MUITO fogo no rabo"
be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

```

```
be-mean-pokemons> db.pokemons.findOne({'name': 'Zapdos'})
{
  "_id": ObjectId("564289dd209ed01d55b8fab2"),
  "name": "Zapdos",
  "description": "Pássaro com MUITO fogo no rabo",
  "type": "eletric",
  "attack": 90,
  "defense": 80,
  "height": 21
}
```
