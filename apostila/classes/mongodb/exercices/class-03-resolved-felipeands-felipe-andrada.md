# MongoDB - Aula 03 - Exercício
autor: SEU NOME

## Liste todos Pokemons com a altura **menor que** 0.5;

felipea(mongod-3.0.6) be-mean-pokemons> var query = {height: {$lt: 5}}
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56436724dfeeaa75c58bd797"),
  "name": "Meowth",
  "description": "The pokecat",
  "attack": 45,
  "defense": 35,
  "height": 4
}
{
  "_id": ObjectId("56436754dfeeaa75c58bd798"),
  "name": "Pikachu",
  "description": "Pikachu we dont like you",
  "attack": 55,
  "defense": 40,
  "height": 4
}
Fetched 2 record(s) in 7ms

## Liste todos Pokemons com a altura **maior ou igual que** 0.5

felipea(mongod-3.0.6) be-mean-pokemons> var query = {height: {$gt: 5}}
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643643bdfeeaa75c58bd793"),
  "name": "Jigglypuff",
  "description": "just pink, small and happy",
  "attack": 45,
  "defense": 20,
  "height": 5
}
{
  "_id": ObjectId("564364bedfeeaa75c58bd794"),
  "name": "Gloom",
  "description": "gloooom :D~",
  "attack": 65,
  "defense": 70,
  "height": 8
}
{
  "_id": ObjectId("5643656cdfeeaa75c58bd795"),
  "name": "Psyduck",
  "description": "A psycho sick and sad duckbill",
  "attack": 52,
  "defense": 48,
  "height": 8
}
{
  "_id": ObjectId("5643665adfeeaa75c58bd796"),
  "name": "Bulbasaur",
  "description": "Our green dino flower",
  "attack": 49,
  "defense": 49,
  "height": 7,
  "tipo": "Grama"
}
Fetched 3 record(s) in 11ms

## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama

felipea(mongod-3.0.6) be-mean-pokemons> var query = {$and: [{height: {$lte: 5}},{tipo: 'Grama'}]}
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56436754dfeeaa75c58bd798"),
  "name": "Pikachu",
  "description": "Pikachu we dont like you",
  "attack": 55,
  "defense": 40,
  "height": 4,
  "tipo": "Grama"
}
Fetched 1 record(s) in 5ms

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5

felipea(mongod-3.0.6) be-mean-pokemons> var query = {$or: [{name: 'Pikachu'},{attack: {$lte: 0.5}}]}
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56436754dfeeaa75c58bd798"),
  "name": "Pikachu",
  "description": "Pikachu we dont like you",
  "attack": 55,
  "defense": 40,
  "height": 4,
  "tipo": "Grama"
}
Fetched 1 record(s) in 2ms

## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5

felipea(mongod-3.0.6) be-mean-pokemons> var query = {$and: [{attack: {$gte: 48}},{height: {$lte: 5}}]}
felipea(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56436754dfeeaa75c58bd798"),
  "name": "Pikachu",
  "description": "Pikachu we dont like you",
  "attack": 55,
  "defense": 40,
  "height": 4,
  "tipo": "Grama"
}
Fetched 1 record(s) in 4ms
