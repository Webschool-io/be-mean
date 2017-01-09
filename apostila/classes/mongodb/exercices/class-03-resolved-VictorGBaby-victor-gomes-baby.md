## MongoDb - Aula 03 - Exercício
autor: Victor Gomes Baby

## Liste todos os Pokemons com altura menor que 0.5

MacBook-Pro-de-Victor(mongod-3.0.7) be-mean-instagram> var query = {height: {$lt:0.5}}
MacBook-Pro-de-Victor(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("56428121cb1c07093682ea8d"),
  "name": "PIkachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56428260cb1c07093682ea8e"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564284c2cb1c07093682ea91"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3,
  "defense": 35
}
{
  "_id": ObjectId("564284e8cb1c07093682ea92"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3
}
Fetched 4 record(s) in 267ms

## Liste todos os Pokemons com altura maior ou igual que 0.5

MacBook-Pro-de-Victor(mongod-3.0.7) be-mean-instagram> var query = {height: {$gte:0.5}}
MacBook-Pro-de-Victor(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("564282bccb1c07093682ea8f"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("564282f8cb1c07093682ea90"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 2 record(s) in 33ms

## Liste todos os Pokemons com altura menor ou igual que 0.5 E do tipo grama

MacBook-Pro-de-Victor(mongod-3.0.7) be-mean-instagram> var query = {$and: [{type:'grama'}, {height: {$lte:0.5}}]}
MacBook-Pro-de-Victor(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("56428260cb1c07093682ea8e"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
Fetched 1 record(s) in 46ms

## Liste todos os Pokemons com o attack maior ou igual que 48 E com height menor ou igual que 0.5

MacBook-Pro-de-Victor(mongod-3.0.7) be-mean-instagram> var query = {$and: [{attack: {$gte:48}},{height: {$lte:0.5}}]}
MacBook-Pro-de-Victor(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("56428121cb1c07093682ea8d"),
  "name": "PIkachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56428260cb1c07093682ea8e"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564282f8cb1c07093682ea90"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 3 record(s) in 3ms

