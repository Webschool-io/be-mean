# MongoDB - Aula 03 - Exercício
autor: Yuri Sales

###Listagem de todos Pokemons com a altura menor que 0.5 (Passo 1)
```
Megazord(mongod-3.0.7) be-mean-pokemons> var query = {height:{$lt: 0.5}}
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643f87e80dedb5e2bef735d"),
  "name": "Meowth",
  "description": "É um gatinho maroto",
  "attack": 2,
  "defense": 2,
  "height": 0.4,
  "Type": "Normal"
}
{
  "_id": ObjectId("5643f8af80dedb5e2bef735f"),
  "name": "Nidoran",
  "description": "É um roedor maroto",
  "attack": 3,
  "defense": 2,
  "height": 0.4,
  "Type": "Poison"
}
{
  "_id": ObjectId("5643f8e780dedb5e2bef7361"),
  "name": "Krabby",
  "description": "Parente do Sirigueijo",
  "attack": 5,
  "defense": 4,
  "height": 0.4,
  "Type": "Water"
}

```

###Listagem de todos Pokemons com a altura maior ou igual que 0.5 (passo 2)
```
Megazord(mongod-3.0.7) be-mean-pokemons> var query = {height:{$gte: 0.5}}
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643f89580dedb5e2bef735e"),
  "name": "Psyduck",
  "description": "Um pato meio adoidado",
  "attack": 3,
  "defense": 2,
  "height": 0.8,
  "Type": "Psychic"
}
{
  "_id": ObjectId("5643f8c280dedb5e2bef7360"),
  "name": "Machop",
  "description": "Pokemón maromba",
  "attack": 4,
  "defense": 2,
  "height": 0.8,
  "Type": "Fighter"
}
```

###Listagem de todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama (Passo 3)
```
Megazord(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{height:{$lte: 0.5}}, {Type:'Grass'}]}
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 1ms
```

###Listagem de todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5 (Passo 4)
```
Megazord(mongod-3.0.7) be-mean-pokemons> var query = {$or: [{name:'Pikachu'}, {attack:{$lte: 5}}]} //Obs.: Não pontuei de forma decimal, por isso 5 em vez de 0.5
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5643f87e80dedb5e2bef735d"),
  "name": "Meowth",
  "description": "É um gatinho maroto",
  "attack": 2,
  "defense": 2,
  "height": 0.4,
  "Type": "Normal"
}
{
  "_id": ObjectId("5643f89580dedb5e2bef735e"),
  "name": "Psyduck",
  "description": "Um pato meio adoidado",
  "attack": 3,
  "defense": 2,
  "height": 0.8,
  "Type": "Psychic"
}
{
  "_id": ObjectId("5643f8af80dedb5e2bef735f"),
  "name": "Nidoran",
  "description": "É um roedor maroto",
  "attack": 3,
  "defense": 2,
  "height": 0.4,
  "Type": "Poison"
}
{
  "_id": ObjectId("5643f8c280dedb5e2bef7360"),
  "name": "Machop",
  "description": "Pokemón maromba",
  "attack": 4,
  "defense": 2,
  "height": 0.8,
  "Type": "Fighter"
}
{
  "_id": ObjectId("5643f8e780dedb5e2bef7361"),
  "name": "Krabby",
  "description": "Parente do Sirigueijo",
  "attack": 5,
  "defense": 4,
  "height": 0.4,
  "Type": "Water"
}
```

###Listagem de todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5 (Passo 5)
```
Megazord(mongod-3.0.7) be-mean-pokemons> var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 1ms
```

![Gif Ranger](http://i2.kym-cdn.com/photos/images/newsfeed/000/629/322/e15.gif)
