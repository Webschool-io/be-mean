```md
# MongoDB - Aula 03 - Exercício
autor: PABLO BOZZI FLORES OLIVEIRA

## Liste todos os pokemons com altura menor que 0.5
mean(mongod-3.0.7) be-mean> var query={height: {$lt:0.5}}
mean(mongod-3.0.7) be-mean> db.pokemons.find(query)
{
  "_id": ObjectId("56429e14b01582a9e4951d61"),
  "name": "Pickachu",
  "description": "Raio elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56429e6eb01582a9e4951d62"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("5642a5eab01582a9e4951d65"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3,
  "defense": 35
}
Fetched 3 record(s) in 2ms

## Liste todos os pokemons com altura maior ou igual que 0.5
mean(mongod-3.0.7) be-mean> var query={height: {$gte:0.5}}
mean(mongod-3.0.7) be-mean> db.pokemons.find(query)
{
  "_id": ObjectId("56429ea8b01582a9e4951d63"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.8
}
{
  "_id": ObjectId("5642a495b01582a9e4951d64"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 2 record(s) in 2ms

## Liste todos os pokemons com altura menor ou igual que 0.5 e do tipo grama
mean(mongod-3.0.7) be-mean> var query={$and:[{height:{$lte:0.5}},{type:'grama'}]}
mean(mongod-3.0.7) be-mean> db.pokemons.find(query)
{
  "_id": ObjectId("56429e6eb01582a9e4951d62"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
Fetched 1 record(s) in 0ms

## Liste todos os pokemons com o nome Pickachu ou com ataque menor ou igual que 0.5
mean(mongod-3.0.7) be-mean> var query={$or:[{name:'Pickachu'},{attack:{$lte:0.5}}]}
mean(mongod-3.0.7) be-mean> db.pokemons.find(query)
{
  "_id": ObjectId("56429e14b01582a9e4951d61"),
  "name": "Pickachu",
  "description": "Raio elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
Fetched 1 record(s) in 1ms

## Liste todos os pokemons com ataque maior ou igual que 48 e com altura menor ou igual que 0.5
mean(mongod-3.0.7) be-mean> var query={$and:[{attack:{$gte:48}},{height:{$lte:0.5}}]}
mean(mongod-3.0.7) be-mean> db.pokemons.find(query)
{
  "_id": ObjectId("56429e14b01582a9e4951d61"),
  "name": "Pickachu",
  "description": "Raio elétrico bem fofinho",
  "type": "eletric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56429e6eb01582a9e4951d62"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("5642a495b01582a9e4951d64"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 48,
  "height": 0.5
}
Fetched 3 record(s) in 1ms
```
