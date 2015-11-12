poke# MongoDB - Aula 02 - Exercício
autor: Kirmayr Tomaz

## Criando database (passo 1)

```
kirmayr@whey:~/projetos/be-mean-instagram$ mongo
MongoDB shell version: 2.6.11
connecting to: test
Mongo-Hacker 0.0.8
whey(mongod-2.6.11) test> use be-mean-pokemons 
switched to db be-mean-pokemons

```

## Listando databases (passo 2)

```
whey(mongod-2.6.11) test> show databases
be-mean-pokemons → 0.078GB
local            → 0.078GB
vieiralves       → 0.078GB
be-mean          → 0.078GB
pokemons         → 0.078GB
admin            → (empty)
test             → (empty)


```

## Listando collections da database be-mean-pokemons (passo 3)

```
switched to db be-mean-pokemons
whey(mongod-2.6.11) be-mean-pokemons> show collections
pokemons       → 0.001MB / 0.008MB
system.indexes → 0.000MB / 0.008MB


```

## Cadastro dos pokemons (passo 4)

```
whey(mongod-2.6.11) pokemons> show collections
whey(mongod-2.6.11) pokemons> var pokemon = [{"name":"Pidgey",description:"Pokemon que mais parece na grama do gameboy",type:"voador","attack":20,defense:20,"heigth":1.8},{"name":"Ditto",description:"Mais conhecido como Latino",type:"normal","attack":30,defense:20,"heigth":4.0},{"name":"Meowth",description:"Gato leproso que vive na fuleiragem",type:"normal","attack":20,defense:20,"heigth":4.2},{"name":"Squirtle",description:"Tartaruga que lança agua",type:"agua","attack":30,defense:30,"heigth":9},{"name":"charizard",description:"Voa ao redor do céu",type:"fogo","attack":40,defense:30,"heigth":90}]

whey(mongod-2.6.11) pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 129ms
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

## Lista de todos os pokemons da collections pokemons (passo 5)

```
whey(mongod-2.6.11) pokemons> db.pokemons.find();
{
  "_id": ObjectId("56441dbaa2038c3622aa0f31"),
  "name": "Pidgey",
  "description": "Pokemon que mais parece na grama do gameboy",
  "type": "voador",
  "attack": 20,
  "defense": 20,
  "heigth": 1.8
}
{
  "_id": ObjectId("56441dbaa2038c3622aa0f32"),
  "name": "Ditto",
  "description": "Mais conhecido como Latino",
  "type": "normal",
  "attack": 30,
  "defense": 20,
  "heigth": 4
}
{
  "_id": ObjectId("56441dbaa2038c3622aa0f33"),
  "name": "Meowth",
  "description": "Gato leproso que vive na fuleiragem",
  "type": "normal",
  "attack": 20,
  "defense": 20,
  "heigth": 4.2
}
{
  "_id": ObjectId("56441dbaa2038c3622aa0f34"),
  "name": "Squirtle",
  "description": "Tartaruga que lança agua",
  "type": "agua",
  "attack": 30,
  "defense": 30,
  "heigth": 9
}
{
  "_id": ObjectId("56441dbaa2038c3622aa0f35"),
  "name": "charizard",
  "description": "Voa ao redor do céu",
  "type": "fogo",
  "attack": 40,
  "defense": 30,
  "heigth": 90
}
Fetched 5 record(s) in 5ms

```

## Query para buscar um pokemon (passo 6)

```
whey(mongod-2.6.11) pokemons> var query = {name:"Meowth"}
whey(mongod-2.6.11) pokemons> var poke = db.pokemons.findOne(query)
whey(mongod-2.6.11) pokemons> poke
{
  "_id": ObjectId("56441dbaa2038c3622aa0f33"),
  "name": "Meowth",
  "description": "Gato leproso que vive na fuleiragem",
  "type": "normal",
  "attack": 20,
  "defense": 20,
  "heigth": 4.2
}

```

## Atualização do Pokemon selecionado (passo 7)

```
whey(mongod-2.6.11) pokemons> var query = {name:"Meowth"}
whey(mongod-2.6.11) pokemons> var poke = db.pokemons.findOne(query)
whey(mongod-2.6.11) pokemons> poke.description = "Gato leproso que vive com a Equipe rocket"
Gato leproso que vive com a Equipe rocket
whey(mongod-2.6.11) pokemons> db.pokemons.s
db.pokemons.save(             db.pokemons.setWriteConcern(  db.pokemons.stats(
db.pokemons.setSlaveOk(       db.pokemons.shellPrint(       db.pokemons.storageSize(
whey(mongod-2.6.11) pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 9ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

```
