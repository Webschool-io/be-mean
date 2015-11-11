# MongoDB - Aula 02 - Exercício
autor: Douglas Caina


## Criando tabela 
```
> use be-mean-pokemons
switched to db be-mean-pokemons
> db.pokemons.insert({'name':'','description':'’})
WriteResult({ "nInserted" : 1 })
```

## Listando tabelas
``` 
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
restaurante        0.078GB
```
## Listando collections
```
> show collections
pokemons
system.indexes
```

## Inserindo 5 pokemons
```
> var pokemons = [{"name":"Pikachu", "description":"Raio amarelo", "attack":45, "defense":4, "height":0.3}, {"name":"Charmander", "description":"Dragonino", "attack":32, "defense":1, "height": 0.4}, {"name":"Squirtle", "description":"Lider de torcida", "attack":25, "defense":4, "height":0.6 }, {"name":"Jiglipuf", "description":"Adormece tudo", "attack":99, "defense":2, "height": 0.1}, {"name":"Bullbassaur", "description":"Plana legal", "attack":65, "defense":1, "height": 0.3} ]
> db.pokemons.insert(pokemons)
BulkWriteResult({
"writeErrors" : [ ],
"writeConcernErrors" : [ ],
"nInserted" : 5,
"nUpserted" : 0,
"nMatched" : 0,
"nModified" : 0,
"nRemoved" : 0,
"upserted" : [ ]
})
```
## Listando os pokemons
```
> db.pokemons.find()
{ "_id" : ObjectId("564274a5732d8896c19164c0"), "name" : "", "description" : "" }
{ "_id" : ObjectId("564276f8732d8896c19164c1"), "name" : "Pikachu", "description" : "Raio amarelo", "attack" : 45, "defense" : 4, "height" : 0.3 }
{ "_id" : ObjectId("564276f8732d8896c19164c2"), "name" : "Charmander", "description" : "Dragonino", "attack" : 32, "defense" : 1, "height" : 0.4 }
{ "_id" : ObjectId("564276f8732d8896c19164c3"), "name" : "Squirtle", "description" : "Lider de torcida", "attack" : 25, "defense" : 4, "height" : 0.6 }
{ "_id" : ObjectId("564276f8732d8896c19164c4"), "name" : "Jiglipuf", "description" : "Adormece tudo", "attack" : 99, "defense" : 2, "height" : 0.1 }
{ "_id" : ObjectId("564276f8732d8896c19164c5"), "name" : "Bullbassaur", "description" : "Plana legal", "attack" : 65, "defense" : 1, "height" : 0.3 }
```

## Buscando um pokemon e armazenando numa variavel
```
>var poke = db.pokemons.findOne({"name":"Charmander"})
```

## Modificando o resultado
```
> poke.description = "modificado"

> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> var poke = db.pokemons.findOne({"name":"Charmander"})
> poke
{
"_id" : ObjectId("564276f8732d8896c19164c2"),
"name" : "Charmander",
"description" : "modificado",
"attack" : 32,
"defense" : 1,
"height" : 0.4
}
```
 