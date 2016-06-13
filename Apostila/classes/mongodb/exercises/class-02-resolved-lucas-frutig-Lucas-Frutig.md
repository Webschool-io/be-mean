# MongoDB - Aula 02 - Exercício
autor: Lucas Futig

## Crie uma database nova, chamada be-mean-pokemons

```
vahalla(mongod-3.2.7) test> use be-mean-pokemons
switched to db be-mean-pokemons

```

## Liste quais databases você possui nesse servidor

```
vahalla(mongod-3.2.7) be-mean-pokemons> show dbs
be-mean           → 0.005GB
be-mean-instagram → 0.000GB
local             → 0.000GB

```

## Lista quais collections você possui nessa database

```
vahalla(mongod-3.2.7) be-mean-pokemons> show collections
vahalla(mongod-3.2.7) be-mean-pokemons> 

```

## Insira pelo menos 5 pokemons utilizando o mesmo padrão de campos utilizado:name,description,attack,defense e height

```
vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.insert(pokemons)
Inserted 1 record(s) in 194ms
BulkWriteResult({
  "writeErrors": [ ],
  "writeConcernErrors": [ ],
  "nInserted": 5,
  "nUpserted": 0,
  "nMatched": 0,
  "nModified": 0,
  "nRemoved": 0,
  "upserted": [ ]
})

```

## Liste os pokemons existentes em sua coleção

```
vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("575eac71d750c75617a38e4b"),
  "name": "Bulbasaur",
  "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "type": "grass, poision",
  "attack": 300,
  "defense": 200,
  "height": 0.7
}
{
  "_id": ObjectId("575eac71d750c75617a38e4c"),
  "name": "Ivysaur",
  "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon. ",
  "type": "grass, poison",
  "attack": 300,
  "defense": 300,
  "height": 1
}
{
  "_id": ObjectId("575eac71d750c75617a38e4d"),
  "name": "Charmeleon",
  "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color. ",
  "type": "fire",
  "attack": 300,
  "defense": 300,
  "height": 1.1
}
{
  "_id": ObjectId("575eac71d750c75617a38e4e"),
  "name": "Blastoise",
  "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet. ",
  "type": "water",
  "attack": 400,
  "defense": 400,
  "height": 1.6
}
{
  "_id": ObjectId("575eac71d750c75617a38e4f"),
  "name": "Pikachu",
  "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge. ",
  "type": "electric",
  "attack": 300,
  "defense": 200,
  "height": 0.4
}
Fetched 5 record(s) in 8ms



```

## Busque o pokemon pelo nome e armazene-o em uma variável chamada 'poke'

```
vahalla(mongod-3.2.7) be-mean-pokemons> var query = {"name": "Blastoise"}
vahalla(mongod-3.2.7) be-mean-pokemons> query
{
  "name": "Blastoise"
}
vahalla(mongod-3.2.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
vahalla(mongod-3.2.7) be-mean-pokemons> poke
{
  "_id": ObjectId("575eac71d750c75617a38e4e"),
  "name": "Blastoise",
  "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet. ",
  "type": "water",
  "attack": 400,
  "defense": 400,
  "height": 1.6
}

```

## Modifique sua 'description' e salvê-o

```
vahalla(mongod-3.2.7) be-mean-pokemons> poke.description = "Aloha aaaa"
Aloha aaaa
vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
vahalla(mongod-3.2.7) be-mean-pokemons> db.pokemons.findOne(poke)
{
  "_id": ObjectId("575eac71d750c75617a38e4e"),
  "name": "Blastoise",
  "description": "Aloha aaaa",
  "type": "water",
  "attack": 400,
  "defense": 400,
  "height": 1.6
}

```

