# MongoDB - Aula 03 - Exercício
autor: Anderson S Santos

## Liste todos Pokemons com a altura menor que 0.5 (passo 1)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-instagram> var query = {height: {$lt: 0.5}}
Mac-mini-de-Anderson(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("564290bbad5b2c885bd5cf81"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56429127ad5b2c885bd5cf82"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56429385ad5b2c885bd5cf85"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3,
  "defense": 35
}

## Liste todos Pokemons com a altura maior ou igual que 0.5 (passo 2)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-instagram> var query = {height: {$gte: 0.5}}
Mac-mini-de-Anderson(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("56429155ad5b2c885bd5cf83"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.5
}
{
  "_id": ObjectId("56429186ad5b2c885bd5cf84"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 2 record(s) in 2ms

## Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama (passo 3)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-instagram> var query = {$and: [{height: {$lte: 0.5}}, {type: "grama"}]}
Mac-mini-de-Anderson(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("56429127ad5b2c885bd5cf82"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}

## Liste todos Pokemons com o name 'Pikachu' OU attack menor ou igual que 0.5  (passo 4)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-instagram> var query = {$or: [{name: "Pikachu"}, {attack: {$lte: 0.5}}]}
Mac-mini-de-Anderson(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("564290bbad5b2c885bd5cf81"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}

## Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com height menor ou igual que 0.5 (passo 5)

Mac-mini-de-Anderson(mongod-3.0.7) be-mean-instagram> var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
Mac-mini-de-Anderson(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("564290bbad5b2c885bd5cf81"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56429127ad5b2c885bd5cf82"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56429155ad5b2c885bd5cf83"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.5
}
{
  "_id": ObjectId("56429186ad5b2c885bd5cf84"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}