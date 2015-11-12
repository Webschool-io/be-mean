# MongoDB - Aula 03 - Exercício
autor: ELVISLEY SOUZA PEREIRA

## Liste todos Pokemons com a altura menor que 0.5; (passo 1)
```
 > mongo be-mean-pokemons
 > var query = {height: {$lt:0.5}}
 > db.pokemons.find(query)
 > {
      "_id": ObjectId("56427a70d00be8bdf3d3ec6d"),
      "name": "Beedrill",
      "description": "Abelha",
      "type": "inseto",
      "attack": 30,
      "height": 0.3
    }
    {
      "_id": ObjectId("56427a77d00be8bdf3d3ec6e"),
      "name": "Pidgey",
      "description": "Galinha Normal ",
      "type": "passaro",
      "attack": 35,
      "height": 0.4
    }
    Fetched 2 record(s) in 3ms
```

## Liste todos Pokemons com a altura maior ou igual que 0.5; (passo 2)

```
> var query = {height: {$gte:0.5}}
> db.pokemons.find(query)
> {
    "_id": ObjectId("56427a7ad00be8bdf3d3ec6f"),
    "name": "Pidgeotto",
    "description": "Passaro voador",
    "type": "passaro",
    "attack": 40,
    "height": 0.5
  }
  {
    "_id": ObjectId("56427a7dd00be8bdf3d3ec70"),
    "name": "Rattata",
    "description": "Rato",
    "type": "mouse",
    "attack": 45,
    "height": 0.6
  }
  {
    "_id": ObjectId("56427a7fd00be8bdf3d3ec71"),
    "name": "Raticate",
    "description": "Ratinho",
    "type": "mouse",
    "attack": 50,
    "height": 0.7
  }
  Fetched 3 record(s) in 2ms
```
## Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama; (passo 3)

```
> var query = {$and: [{ height:{ $gte:0.5 } } , { type: "grama" } ]}
> db.pokemons.find(query)
> Fetched 0 record(s) in 0ms

// Alterei o parametro para retornar dados na minha consulta

> var query = {$and: [{type:"mouse"}, { height:{$gte:0.5}}]}
> db.pokemons.find(query)
> {
    "_id": ObjectId("56427a7dd00be8bdf3d3ec70"),
    "name": "Rattata",
    "description": "Rato",
    "type": "mouse",
    "attack": 45,
    "height": 0.6
  }
  {
    "_id": ObjectId("56427a7fd00be8bdf3d3ec71"),
    "name": "Raticate",
    "description": "Ratinho",
    "type": "mouse",
    "attack": 50,
    "height": 0.7
  }
  Fetched 2 record(s) in 1ms
```

## Liste todos Pokemons com name 'Pikachu' OU com attack menor ou igual que 0.5 (passo 4)

```
> var query = {$or: [{name:"Pikachu"}, { attack:{$lte:0.5}}]}
> db.pokemons.find(query)
> Fetched 0 record(s) in 0ms
```

## Liste todos Pokemons com attack maior ou igual que 48 E com height menor ou igual que 0.5 (passo 5)

```
> var query = {$and: [{attack:{$gte:48}}, { height:{$lte:0.5}}]}
> db.pokemons.find(query)
> Fetched 0 record(s) in 0ms
```


