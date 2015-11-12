# MongoDB - Aula 03 - Exercício
autor: Gilmar Palega

## Liste todos Pokemons com a altura **menor que** 0.5;
```
> var query = {height: {$lt: 0.5}}
> db.pokemons.find(query)
{
  "_id": ObjectId("56426e43222b08e954199e61"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56426ebe222b08e954199e62"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564270a1222b08e954199e65"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3,
  "defense": 35
}
Fetched 3 record(s) in 1ms


```

## Liste todos Pokemons com a altura **maior ou igual que** 0.5
```
> var query = {height: {$gte: 0.5}}
> db.pokemons.find(query)
{
  "_id": ObjectId("56426f05222b08e954199e63"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("56426f3f222b08e954199e64"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 2 record(s) in 2ms


```

## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama
```
> var query = { $and:[{height: {$lte: 0.5}}, {type: "grama"}]}
> db.pokemons.find(query)
{
  "_id": ObjectId("56426ebe222b08e954199e62"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
Fetched 1 record(s) in 1ms

```

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5
> var query = { $or:[ {name: "Pikachu"},  {attack: {$lte: 0.5}} ]}
> db.pokemons.find(query)
{
  "_id": ObjectId("56426e43222b08e954199e61"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 2ms
```

```

## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5
```
> var query = { $and:[ {attack: {$gte: 48}}, {height: {$lte: 0.5}} ]}
> db.pokemons.find(query)
{
  "_id": ObjectId("56426e43222b08e954199e61"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56426ebe222b08e954199e62"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56426f3f222b08e954199e64"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 3 record(s) in 2ms

```
