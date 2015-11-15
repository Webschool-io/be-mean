# MongoDB - Aula 03 - Exercício
autor: Felipe Orlando B. Souza

## 1) Listar Pokemóns com altura menor que 0.5
```
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> var query = {height: {$lt: 0.5}}
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643c4e5f9a62e3e58bbeeab"),
  "name": "Pikachu",
  "description": "Todo mundo conhece sáporra",
  "attack": 30,
  "defense": 20,
  "height": 0.4
}
Fetched 1 record(s) in 29ms
```

## 2) Listar Pokemóns com altura maior ou igual que 0.5
```
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> var query = {height: {$gte: 0.5}}
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643c3def9a62e3e58bbeea9"),
  "name": "Blastoise",
  "description": "BLASTOOOOOISE!",
  "attack": 40,
  "defense": 40,
  "height": 1.6
}
{
  "_id": ObjectId("5643c47ef9a62e3e58bbeeaa"),
  "name": "Beedrill",
  "description": "Abelhão bem loco e zóio vermelho depois de ter fumado até umas hora",
  "attack": 50,
  "defense": 20,
  "height": 1
}
{
  "_id": ObjectId("5643c537f9a62e3e58bbeeac"),
  "name": "Raichu",
  "description": "Parece o Pikachu",
  "attack": 50,
  "defense": 30,
  "height": 0.8
}
{
  "_id": ObjectId("5643c5e0f9a62e3e58bbeead"),
  "name": "Houndoom",
  "description": "Cão do capiroto. Deus'o livre ",
  "attack": 50,
  "defense": 20,
  "height": 1.4
}
Fetched 4 record(s) in 11ms
```

## 3) Listar Pokemóns com altura menor ou igual que 0.5 e tipo grama
```
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{height: {$lte: 0.5}}, {type: "grama"}]}
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 9ms
```

## 4) Listar Pokémons com nome Pikachu ou ataque menor ou igual a 0.5
```
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> var query = {$or: [{name: "Pikachu"}, {attack: {$lte: 0.5}}]}
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643c4e5f9a62e3e58bbeeab"),
  "name": "Pikachu",
  "description": "Todo mundo conhece sáporra",
  "attack": 30,
  "defense": 20,
  "height": 0.4
}
Fetched 1 record(s) in 1ms
```

## 5) Lista Pokémons com ataque maior ou igual que 48 e com altura menor ou igual que 0.5
```
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{atack: {$gte: 48}}, {height: {$lte: 0.5}}]}
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 1ms
```
