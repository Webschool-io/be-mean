# MongoDB - Aula 03 - Exercício
autor: Geriel Castro


## Listando todos Pokemons com a altura **menor que** 0.5;
```
Command: var query = {height: {$lt:0.5}}
Command: db.pokemons.find(query)
         {
           "_id": ObjectId("5642e0dcced08cfd55d2bc00"),
           "name": "Pikachu",
           "description": "Rato elétrico bem fofinho",
           "type": "eletric",
           "attack": 55,
           "height": 0.4
         }
         {
           "_id": ObjectId("5642e16fced08cfd55d2bc02"),
           "name": "Pikachu",
           "description": "Rato elétrico bem fofinho",
           "type": "eletric",
           "attack": 55,
           "height": 0.4
         }
         {
           "_id": ObjectId("5642e3bbced08cfd55d2bc03"),
           "name": "Bulbassauro",
           "description": "Chicote de trepadeira",
           "type": "grama",
           "attack": 49,
           "height": 0.4
         }
         {
           "_id": ObjectId("5642e4f4ced08cfd55d2bc06"),
           "name": "Caterpie",
           "description": "Larva lutadora",
           "type": "inseto",
           "attack": 30,
           "height": 0.3,
           "defense": 35
         }
         Fetched 4 record(s) in 28ms

```

## Listando todos Pokemons com a altura **maior ou igual que** 0.5;
```
Command: var query = {height: {$gte:0.5}}
Command: db.pokemons.find(query)
         {
           "_id": ObjectId("5642e3ddced08cfd55d2bc04"),
           "name": "Charmander",
           "description": "Esse é o cão chupando manga de fofinho",
           "type": "fogo",
           "attack": 52,
           "height": 0.6
         }
         {
           "_id": ObjectId("5642e40fced08cfd55d2bc05"),
           "name": "Squirtle",
           "description": "Ejeta água que passarinho não bebe",
           "type": "água",
           "attack": 48,
           "height": 0.5
         }
         Fetched 2 record(s) in 7ms

```

## Listando todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama;
```
Command: var query = {$and: [{type: 'grama'},{height: {$lte: 0.5}}]}
Command: db.pokemons.find(query)
         {
           "_id": ObjectId("5642e3bbced08cfd55d2bc03"),
           "name": "Bulbassauro",
           "description": "Chicote de trepadeira",
           "type": "grama",
           "attack": 49,
           "height": 0.4
         }
         Fetched 1 record(s) in 5ms

```

## Listando todos Pokemons com a nome 'Pikachu' **ou** attack com **Menor ou igual que** 48;
```
Command: var query = {$or: [{name: 'Pikachu'},{attack: {$lte: 48}}]}
Command: db.pokemons.find(query)
         {
           "_id": ObjectId("5642e0dcced08cfd55d2bc00"),
           "name": "Pikachu",
           "description": "Rato elétrico bem fofinho",
           "type": "eletric",
           "attack": 55,
           "height": 0.4
         }
         {
           "_id": ObjectId("5642e16fced08cfd55d2bc02"),
           "name": "Pikachu",
           "description": "Rato elétrico bem fofinho",
           "type": "eletric",
           "attack": 55,
           "height": 0.4
         }
         {
           "_id": ObjectId("5642e40fced08cfd55d2bc05"),
           "name": "Squirtle",
           "description": "Ejeta água que passarinho não bebe",
           "type": "água",
           "attack": 48,
           "height": 0.5
         }
         {
           "_id": ObjectId("5642e4f4ced08cfd55d2bc06"),
           "name": "Caterpie",
           "description": "Larva lutadora",
           "type": "inseto",
           "attack": 30,
           "height": 0.3,
           "defense": 35
         }
         Fetched 4 record(s) in 4ms

```

## Listando todos Pokemons com attack  **MAIOR OU IGUAL que** 48 **E** com height **Menor ou igual que **0.5;
```
Command: var query = {$and: [{height: {$lte: 0.5}},{attack: {$gte: 48}}]}
Command: db.pokemons.find(query)
         {
           "_id": ObjectId("5642e0dcced08cfd55d2bc00"),
           "name": "Pikachu",
           "description": "Rato elétrico bem fofinho",
           "type": "eletric",
           "attack": 55,
           "height": 0.4
         }
         {
           "_id": ObjectId("5642e16fced08cfd55d2bc02"),
           "name": "Pikachu",
           "description": "Rato elétrico bem fofinho",
           "type": "eletric",
           "attack": 55,
           "height": 0.4
         }
         {
           "_id": ObjectId("5642e3bbced08cfd55d2bc03"),
           "name": "Bulbassauro",
           "description": "Chicote de trepadeira",
           "type": "grama",
           "attack": 49,
           "height": 0.4
         }
         {
           "_id": ObjectId("5642e40fced08cfd55d2bc05"),
           "name": "Squirtle",
           "description": "Ejeta água que passarinho não bebe",
           "type": "água",
           "attack": 48,
           "height": 0.5
         }
         Fetched 4 record(s) in 4ms

```

