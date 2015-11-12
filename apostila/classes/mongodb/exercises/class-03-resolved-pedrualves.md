# MongoDB - Aula 03 - Exercício
autor: Pedro Alves

## Liste todos Pokemons com altura menor que 0.5

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var query = { height: {$lt: 0.5}}
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642913df5fbb520a8ae5de7"),
  "name": "Eevee",
  "description": "Lindinho",
  "type": "normal",
  "attack": 55,
  "defense": 50,
  "height": 0.3
}
{
  "_id": ObjectId("5642917cf5fbb520a8ae5def"),
  "name": "Sylveon",
  "description": "Menininha",
  "type": "fada",
  "attack": 65,
  "defense": 65,
  "height": 0.3
}
Fetched 2 record(s) in 1ms
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> 

## Liste todos Pokemons com altura maior ou igual que 0.5

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var query = { height: {$gte: 0.5}}
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642914bf5fbb520a8ae5de8"),
  "name": "Vaporeon",
  "description": "Bonitao",
  "type": "agua",
  "attack": 65,
  "defense": 60,
  "height": 1
}
{
  "_id": ObjectId("56429153f5fbb520a8ae5de9"),
  "name": "Jolteon",
  "description": "Espetado",
  "type": "eletrico",
  "attack": 65,
  "defense": 60,
  "height": 0.8
}
{
  "_id": ObjectId("56429159f5fbb520a8ae5dea"),
  "name": "Flareon",
  "description": "Maneiro",
  "type": "fogo",
  "attack": 130,
  "defense": 60,
  "height": 1
}
{
  "_id": ObjectId("56429160f5fbb520a8ae5deb"),
  "name": "Umbreon",
  "description": "Sinistro",
  "type": "noturno",
  "attack": 65,
  "defense": 110,
  "height": 0.8
}
{
  "_id": ObjectId("56429167f5fbb520a8ae5dec"),
  "name": "Glaceon",
  "description": "Gelado",
  "type": "gelo",
  "attack": 60,
  "defense": 110,
  "height": 1
}
{
  "_id": ObjectId("5642916cf5fbb520a8ae5ded"),
  "name": "Leafon",
  "description": "Calmo",
  "type": "grama",
  "attack": 110,
  "defense": 130,
  "height": 0.9
}
{
  "_id": ObjectId("56429175f5fbb520a8ae5dee"),
  "name": "Espeon",
  "description": "Preguica",
  "type": "psiquico",
  "attack": 65,
  "defense": 60,
  "height": 1
}
Fetched 7 record(s) in 4ms
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> 

## Liste todos Pokemons com altura menor ou igual que 0.5 E do tipo grama

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var query = {$and:[{ height: {$lte: 0.5}},{type: 'grama'}]}
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> query
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
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 1ms
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> 

## Liste todos Pokemons com o name ‘Pikachu’ OU com attack menor ou igual que 0.5

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var query = {$or:[{ name: 'Pikachu'},{attack: {$lte: 0.5}}]}
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 1ms
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons>

## Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com height menor ou igual que 0.5

MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> var query = {$and:[{attack: {$gte: 48}},{height:{$lte:0.5}}]}
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642913df5fbb520a8ae5de7"),
  "name": "Eevee",
  "description": "Lindinho",
  "type": "normal",
  "attack": 55,
  "defense": 50,
  "height": 0.3
}
{
  "_id": ObjectId("5642917cf5fbb520a8ae5def"),
  "name": "Sylveon",
  "description": "Menininha",
  "type": "fada",
  "attack": 65,
  "defense": 65,
  "height": 0.3
}
Fetched 2 record(s) in 3ms
MacBook-Pro-de-Pedro(mongod-3.0.6) be-mean-pokemons> 
