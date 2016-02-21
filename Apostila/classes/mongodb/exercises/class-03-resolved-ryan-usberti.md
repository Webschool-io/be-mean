# MongoDB - Aula 03 - Exercício
autor: Ryan Usberti

## Liste todos Pokemons com a altura **menor que** 0.5;

ryan-VirtualBox(mongod-3.2.3) be-mean-instagram> var query = {height:{$lt: 0.5}}
ryan-VirtualBox(mongod-3.2.3) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("56c92b1aa0fcd46693fc1f92"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56c92c30a0fcd46693fc1f93"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56c930c2a0fcd46693fc1f96"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3,
  "defense": 35
}
Fetched 3 record(s) in 7ms

## Liste todos Pokemons com a altura **maior ou igual que** 0.5

ryan-VirtualBox(mongod-3.2.3) be-mean-instagram> var query = {height:{$gte: 0.5}}
ryan-VirtualBox(mongod-3.2.3) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("56c92c73a0fcd46693fc1f94"),
  "name": "Charmander",
  "description": "Atira fogo",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("56c92c97a0fcd46693fc1f95"),
  "name": "Squirtle",
  "description": "Atira agua",
  "type": "agua",
  "attack": 48,
  "height": 0.5
}
Fetched 2 record(s) in 7ms

## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama

ryan-VirtualBox(mongod-3.2.3) be-mean-instagram> var query = {$and: [{height:{$lte: 0.5}},{type:'grama'}]}
ryan-VirtualBox(mongod-3.2.3) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("56c92c30a0fcd46693fc1f93"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
Fetched 1 record(s) in 4ms

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5

ryan-VirtualBox(mongod-3.2.3) be-mean-instagram> var query = {$or: [{name:"Pikachu"},{attack:{$lte:0.5}}]}
ryan-VirtualBox(mongod-3.2.3) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("56c92b1aa0fcd46693fc1f92"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 4ms


## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que**  0.5

ryan-VirtualBox(mongod-3.2.3) be-mean-instagram> var query = {$and: [{attack:{$gte:48}},{height:{$lte:0.5}}]}
ryan-VirtualBox(mongod-3.2.3) be-mean-instagram> db.pokemons.find(query)
{
  "_id": ObjectId("56c92b1aa0fcd46693fc1f92"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56c92c30a0fcd46693fc1f93"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56c92c97a0fcd46693fc1f95"),
  "name": "Squirtle",
  "description": "Atira agua",
  "type": "agua",
  "attack": 48,
  "height": 0.5
}
Fetched 3 record(s) in 10ms