# MongoDB - Aula 02 - Exercicio
autor: Jonathas Amaral

## Criando database

```
jonathas-desktop(mongod-3.0.7) be-mean> use be-mean-pokemons
switched to db be-mean-pokemons
```

## Listando databases

```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> show dbs
local    0.078GB
be-mean  0.078GB
```

## Listando collections

Nenhum registro foi inserido, por isso não há collections
```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> show collections
```

## Inserindo Pokemons

```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({"name":"Snorlax", "description":"Pokemon preguiçoso","type":"sleeping", "attack":60, "height":0.6})
Inserted 1 record(s) in 728ms
WriteResult({
  "nInserted": 1
})
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({"name":"Blastoise", "description":"Pokemon com bazooka","type":"shellfish", "attack":40, "height":0.5})
Inserted 1 record(s) in 12ms
WriteResult({
  "nInserted": 1
})
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({"name":"Oddish", "description":"Cara de cebola","type":"weed", "attack":30, "height":0.1})
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({"name":"Gastly", "description":"Bola 8 da sinuca","type":"gas", "attack":20, "height":0.4})

Inserted 1 record(s) in 28ms
WriteResult({
  "nInserted": 1
})
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({"name":"Rattata", "description":"Ratata é bicho solto","type":"mouse", "attack":30, "height":0.1})
Inserted 1 record(s) in 38ms
WriteResult({
  "nInserted": 1
})
```

## Listando Pokemons

```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5642a5354f9f678b0b9d94ad"),
  "name": "Snorlax",
  "description": "Pokemon preguiçoso",
  "type": "sleeping",
  "attack": 60,
  "height": 0.6
}
{
  "_id": ObjectId("5642a5844f9f678b0b9d94ae"),
  "name": "Blastoise",
  "description": "Pokemon com bazooka",
  "type": "shellfish",
  "attack": 40,
  "height": 0.5
}
{
  "_id": ObjectId("5642a5d24f9f678b0b9d94af"),
  "name": "Oddish",
  "description": "Cara de cebola",
  "type": "weed",
  "attack": 30,
  "height": 0.1
}
{
  "_id": ObjectId("5642a6614f9f678b0b9d94b0"),
  "name": "Gastly",
  "description": "Bola 8 da sinuca",
  "type": "gas",
  "attack": 20,
  "height": 0.4
}
{
  "_id": ObjectId("5642a6c64f9f678b0b9d94b1"),
  "name": "Rattata",
  "description": "Ratata é bicho solto",
  "type": "mouse",
  "attack": 30,
  "height": 0.1
}
Fetched 5 record(s) in 24ms
```

## Buscando o pokemon 'Rattata'

```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> query = {"name": "Rattata"}
{
  "name": "Rattata"
}
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5642a6c64f9f678b0b9d94b1"),
  "name": "Rattata",
  "description": "Ratata é bicho solto",
  "type": "mouse",
  "attack": 30,
  "height": 0.1
}
```


## Alterando a sua descrição 

```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> poke.description = "Ratata é bicho solto, ficar ligeiro ja faz parte do jogo"
Ratata é bicho solto, ficar ligeiro ja faz parte do jogo
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5642a6c64f9f678b0b9d94b1"),
  "name": "Rattata",
  "description": "Ratata é bicho solto, ficar ligeiro ja faz parte do jogo",
  "type": "mouse",
  "attack": 30,
  "height": 0.1
}
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 123ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```

## LIstando novamente os registros pra confirmar alteração

```
jonathas-desktop(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5642a5354f9f678b0b9d94ad"),
  "name": "Snorlax",
  "description": "Pokemon preguiçoso",
  "type": "sleeping",
  "attack": 60,
  "height": 0.6
}
{
  "_id": ObjectId("5642a5844f9f678b0b9d94ae"),
  "name": "Blastoise",
  "description": "Pokemon com bazooka",
  "type": "shellfish",
  "attack": 40,
  "height": 0.5
}
{
  "_id": ObjectId("5642a5d24f9f678b0b9d94af"),
  "name": "Oddish",
  "description": "Cara de cebola",
  "type": "weed",
  "attack": 30,
  "height": 0.1
}
{
  "_id": ObjectId("5642a6614f9f678b0b9d94b0"),
  "name": "Gastly",
  "description": "Bola 8 da sinuca",
  "type": "gas",
  "attack": 20,
  "height": 0.4
}
{
  "_id": ObjectId("5642a6c64f9f678b0b9d94b1"),
  "name": "Rattata",
  "description": "Ratata é bicho solto, ficar ligeiro ja faz parte do jogo",
  "type": "mouse",
  "attack": 30,
  "height": 0.1
}
Fetched 5 record(s) in 1ms
```





