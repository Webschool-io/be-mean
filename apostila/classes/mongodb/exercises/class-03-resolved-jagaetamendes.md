# MongoDB - Aula 03 - Exercício
autor: J. A. Gaeta Mendes

## Liste todos Pokemons com a altura **menor que** 0.5;

```
var query = {height: {$lt: 0.5}}

db.pokemons.find(query)

{
  "_id": ObjectId("564292c5a42672eb82036d26"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("5642934fa42672eb82036d27"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56429595a42672eb82036d2a"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3,
  "defense": 35
}
{
  "_id": ObjectId("564478e7dcab83cf1ffdacfd"),
  "name": "Blastoise",
  "description": "Manda balas de água para todo lado",
  "type": "marisco",
  "attack": 63,
  "defense": 80,
  "height": 0.1
}
{
  "_id": ObjectId("56447908dcab83cf1ffdacfe"),
  "name": "Butterfree",
  "description": "Antenada no mel das flores",
  "type": "borboleta",
  "attack": 45,
  "defense": 50,
  "height": 0.11
}
{
  "_id": ObjectId("5644791ddcab83cf1ffdacff"),
  "name": "Weedle",
  "description": "Olfato privilegiado",
  "type": "inseto cabeludo",
  "attack": 35,
  "defense": 30,
  "height": 0.3
}
{
  "_id": ObjectId("5644793adcab83cf1ffdad00"),
  "name": "Beedrill",
  "description": "Defende seu território",
  "type": "abelha venenosa",
  "attack": 90,
  "defense": 40,
  "height": 0.1
}
{
  "_id": ObjectId("56447953dcab83cf1ffdad01"),
  "name": "Rattata",
  "description": "Bichinho muito arisco",
  "type": "rato",
  "attack": 56,
  "defense": 35,
  "height": 0.3
}
Fetched 8 record(s) in 2ms
```

## Liste todos Pokemons com a altura **maior ou igual que** 0.5

```
var query = {height: {$gte: 0.5}}

db.pokemons.find(query)

{
  "_id": ObjectId("564293b2a42672eb82036d28"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.5
}
{
  "_id": ObjectId("56429404a42672eb82036d29"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 2 record(s) in 1ms
```

## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama

```
var query = {$and: [{height: {$lte: 0.5}}, {type: 'grama'}]}

db.pokemons.find(query)

{
  "_id": ObjectId("5642934fa42672eb82036d27"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
```

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5

```
var query = {$or: [{name: 'Pikachu' }, {attack: {$lte: 0.5}}]}

db.pokemons.find(query)

{
  "_id": ObjectId("564292c5a42672eb82036d26"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 0ms
```

## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5

```
var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}

db.pokemons.find(query)

{
  "_id": ObjectId("564292c5a42672eb82036d26"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("5642934fa42672eb82036d27"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564293b2a42672eb82036d28"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.5
}
{
  "_id": ObjectId("56429404a42672eb82036d29"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
{
  "_id": ObjectId("564478e7dcab83cf1ffdacfd"),
  "name": "Blastoise",
  "description": "Manda balas de água para todo lado",
  "type": "marisco",
  "attack": 63,
  "defense": 80,
  "height": 0.1
}
{
  "_id": ObjectId("5644793adcab83cf1ffdad00"),
  "name": "Beedrill",
  "description": "Defende seu território",
  "type": "abelha venenosa",
  "attack": 90,
  "defense": 40,
  "height": 0.1
}
{
  "_id": ObjectId("56447953dcab83cf1ffdad01"),
  "name": "Rattata",
  "description": "Bichinho muito arisco",
  "type": "rato",
  "attack": 56,
  "defense": 35,
  "height": 0.3
}
Fetched 7 record(s) in 3ms
```
