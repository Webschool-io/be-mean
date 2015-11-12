# MongoDB - Aula 03 - Exercício
autor: Diego Pereira Grassato

## Liste todos Pokemons com a altura menor que 0.5

```
a12c1841e174(mongod-2.4.9) test> var query = { height : { $lt : 0.5 } };
a12c1841e174(mongod-2.4.9) test> query
{
  "height": {
    "$lt": 0.5
  }
}
a12c1841e174(mongod-2.4.9) test>  db.pokemons.find(query).pretty()
Fetched 0 record(s) in 1ms

```

## Liste todos Pokemons com a altura maior ou igual que 0.5

```
a12c1841e174(mongod-2.4.9) test> var query = { height : { $gte : 0.5 } };
a12c1841e174(mongod-2.4.9) test> query
{
  "height": {
    "$gte": 0.5
  }
}
a12c1841e174(mongod-2.4.9) test>  db.pokemons.find(query).pretty()
{
  "_id": ObjectId("5645012b15f94b334d7d340a"),
  "name": "Gyarados",
  "description": "Jiraiya",
  "type": "water",
  "attack": 125,
  "height": 518.1
}
{
  "_id": ObjectId("5645012b15f94b334d7d340b"),
  "name": "Greninja",
  "description": "Sapo ninja",
  "type": "water",
  "attack": 95,
  "height": 88.2
}
{
  "_id": ObjectId("5645012b15f94b334d7d340c"),
  "name": "Volcanion",
  "description": "Volcano",
  "type": "fire",
  "attack": 110,
  "height": 429.9
}
{
  "_id": ObjectId("5645012b15f94b334d7d340d"),
  "name": "Spearow",
  "description": "Quase o jack",
  "type": "normal",
  "attack": 60,
  "height": 4.4
}
{
  "_id": ObjectId("5645012b15f94b334d7d340e"),
  "name": "Zubat",
  "description": "Ponto forte: Ozzy",
  "type": "normal",
  "attack": 55,
  "height": 16.5
}
Fetched 5 record(s) in 5ms
```

## Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama

```
a12c1841e174(mongod-2.4.9) test>  var query = { $and : [ { height : { $lte : 0.5 } }, { type : 'grama' } ] };
a12c1841e174(mongod-2.4.9) test> query
{
  "$and": [
    {
      "height": {
        "$lte": 0.5
      }
    },
    {
      "type": "grama"
    }
  ]
}
a12c1841e174(mongod-2.4.9) test> db.pokemons.find(query);
Fetched 0 record(s) in 1ms

```

## Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5

```
a12c1841e174(mongod-2.4.9) test> var query = { $or : [ { name : 'Pikachu' }, { attack : { $lte : 0.5 } } ] };
a12c1841e174(mongod-2.4.9) test> query
{
  "$or": [
    {
      "name": "Pikachu"
    },
    {
      "attack": {
        "$lte": 0.5
      }
    }
  ]
}
a12c1841e174(mongod-2.4.9) test> db.pokemons.find(query)
Fetched 0 record(s) in 1ms

```


Nao tenho nenhum Pikachu nem pokemons com atack menor a 0.5, mas se mudo o attack para menor ou igual a 70 da

```
a12c1841e174(mongod-2.4.9) test> var query = { $or : [ { name : 'Pikachu' }, { attack : { $lte : 70 } } ] };
a12c1841e174(mongod-2.4.9) test> query
{
  "$or": [
    {
      "name": "Pikachu"
    },
    {
      "attack": {
        "$lte": 70
      }
    }
  ]
}
a12c1841e174(mongod-2.4.9) test> db.pokemons.find(query).pretty()
{
  "_id": ObjectId("5645012b15f94b334d7d340d"),
  "name": "Spearow",
  "description": "Quase o jack",
  "type": "normal",
  "attack": 60,
  "height": 4.4
}
{
  "_id": ObjectId("5645012b15f94b334d7d340e"),
  "name": "Zubat",
  "description": "Ponto forte: Ozzy",
  "type": "normal",
  "attack": 55,
  "height": 16.5
}
Fetched 2 record(s) in 2ms

```


## Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5

```
a12c1841e174(mongod-2.4.9) test> var query = { $and : [ { attack : { $gte : 48 } }, { height : { $lte : 0.5 } } ] };
a12c1841e174(mongod-2.4.9) test> query
{
"$and": [
  {
    "attack": {
      "$gte": 48
    }
  },
  {
    "height": {
      "$lte": 0.5
    }
  }
]
}

```
