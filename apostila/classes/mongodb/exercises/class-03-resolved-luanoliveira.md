# MongoDB - Aula 03 - Exercício
autor: Luan Oliveira

# passo 1 - Liste todos os pokemons com a altura menor que 0.5

luanoliveira(mongod-3.0.7) be-mean-instagram> var query = {height: {$lt: 0.5}}
luanoliveira(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("5643a72b2744f8421e90e7e9"),
  "name": "Pikachu",
  "description": "Rto elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("5643a7d72744f8421e90e7ea"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "attack",
  "attack": 49,
  "height": 0.4
}
Fetched 2 record(s) in 1ms

# passo 2 - Liste todos os Pokemons com a altura maior ou igual que 0.5

luanoliveira(mongod-3.0.7) be-mean-instagram> var query = {height: {$lte: 0.5}}
luanoliveira(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("5643a72b2744f8421e90e7e9"),
  "name": "Pikachu",
  "description": "Rto elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("5643a7d72744f8421e90e7ea"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "attack",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("5643a89f2744f8421e90e7ec"),
  "name": "Squirtle",
  "description": "Ejeta água que pasarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 3 record(s) in 2ms

# passo 3 - Liste todos os Pokemons com a altura menor ou igual que 0.5 E do tipo grama

luanoliveira(mongod-3.0.7) be-mean-instagram> var query = { $and: [{height: {$lte: 0.5}}, {type: "grama"}] }
luanoliveira(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
Fetched 0 record(s) in 1ms

# passo 4 - Liste todos Pokemons com o name "Pikachu" Ou com attack menor ou igual que 0.5

luanoliveira(mongod-3.0.7) be-mean-instagram> var query = {$or: [{name: "Pikachu"}, {attack: {$lte: 0.5}}]}
luanoliveira(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("5643a72b2744f8421e90e7e9"),
  "name": "Pikachu",
  "description": "Rto elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 0ms

# passo 5 - Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com height menor ou igual que 0.5

luanoliveira(mongod-3.0.7) be-mean-instagram> var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
luanoliveira(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("5643a72b2744f8421e90e7e9"),
  "name": "Pikachu",
  "description": "Rto elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("5643a7d72744f8421e90e7ea"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "attack",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("5643a89f2744f8421e90e7ec"),
  "name": "Squirtle",
  "description": "Ejeta água que pasarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 3 record(s) in 1ms
