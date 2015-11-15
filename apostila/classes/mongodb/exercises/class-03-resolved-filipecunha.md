# MongoDB - Aula 03 - Exercício
autor: Filipe Cunha


## Listagem dos Pokemons com a altura menor quer 0.5 (passo 1)
> var query = {height:{$lt:0.5}}
> db.pokemons.find(query)
{
  "_id": ObjectId("56427d0a7eb8ec0d531448d8"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("564281ff7eb8ec0d531448de"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564283787eb8ec0d531448e1"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3,
  "desenfse": 35
}


## Listagem dos Pokemons com a altura maior ou igual a 0.5
> var query = {height:{$gte:0.5}}
> db.pokemons.find(query)
{
  "_id": ObjectId("5642820e7eb8ec0d531448df"),
  "name": "Charmander",
  "description": "Esse é o cão chupando mando de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("564282187eb8ec0d531448e0"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}


## Listagem dos Pokemons com a altura menor ou igual a 0.5 e do tipo grama
> var query = {$and:[{height:{$lte:0.5}}, {type: 'grama'}]}
> db.pokemons.find(query)
{
  "_id": ObjectId("564281ff7eb8ec0d531448de"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}


## Listagem dos Pokemons com o name Pikachu ou com attack menor ou igual a 0.5
> var query = {$or:[{name:'Pikachu'},{attack:{$lte:0.5}}]}
> db.pokemons.find(query)
{
  "_id": ObjectId("56427d0a7eb8ec0d531448d8"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}


## Listagem dos Pokemons com o attack maior ou igual a 48 e com height menor ou igual a 0.5
> var query = {$and:[{attack:{$gte:48}},{height:{$lte:0.5}}]}
> db.pokemons.find(query)
{
  "_id": ObjectId("56427d0a7eb8ec0d531448d8"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("564281ff7eb8ec0d531448de"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564282187eb8ec0d531448e0"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}