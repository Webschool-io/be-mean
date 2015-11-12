# MongoDB - Aula 02 - Exercício
Autor: Bruno Stoffel Berté

## 1. Crie uma database chamada be-mean-pokemons;

```
brunoberte(mongod-3.0.7) be-mean> use be-mean-pokemons
switched to db be-mean-pokemons
```

## 2. Liste quais databases você possui nesse servidor;
```
brunoberte(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean  0.078GB
local    0.078GB
```

## 3. Liste quais coleções você possui nessa database;
```
brunoberte(mongod-3.0.7) be-mean-pokemons> show collections
```

## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;
```
brunoberte(mongod-3.0.7) be-mean-pokemons> var pokemons = [{'name':'Bulbasaur','description':'Bulbasaur can be seen napping in bright sunlight.','type': 'Seed', attack: 30, height: 0.7 }, {'name':'Ivysaur','description':'There is a bud on this Pokémon\'s back.','type': 'Seed', attack: 30, height: 1 }, {'name':'Venusaur','description':'There is a large flower on Venusaur\'s back.','type': 'Seed', attack: 40, height: 2 }, {'name':'Charmander','description':'The flame that burns at the tip of its tail is an indication of its emotions.','type': 'Lizard', attack: 30, height: 0.6 }, {'name':'Charmeleon','description':'Charmeleon mercilessly destroys its foes using its sharp claws.','type': 'Lizard', attack: 30, height: 1.1 } ]
brunoberte(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemons)
Inserted 1 record(s) in 394ms
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

## 5. Liste os pokemons existentes na sua coleção;
```
brunoberte(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5644727772b44f2ff6515819"),
  "name": "Bulbasaur",
  "description": "Bulbasaur can be seen napping in bright sunlight.",
  "type": "Seed",
  "attack": 30,
  "height": 0.7
}
{
  "_id": ObjectId("5644727772b44f2ff651581a"),
  "name": "Ivysaur",
  "description": "There is a bud on this Pokémon's back.",
  "type": "Seed",
  "attack": 30,
  "height": 1
}
{
  "_id": ObjectId("5644727772b44f2ff651581b"),
  "name": "Venusaur",
  "description": "There is a large flower on Venusaur's back.",
  "type": "Seed",
  "attack": 40,
  "height": 2
}
{
  "_id": ObjectId("5644727772b44f2ff651581c"),
  "name": "Charmander",
  "description": "The flame that burns at the tip of its tail is an indication of its emotions.",
  "type": "Lizard",
  "attack": 30,
  "height": 0.6
}
{
  "_id": ObjectId("5644727772b44f2ff651581d"),
  "name": "Charmeleon",
  "description": "Charmeleon mercilessly destroys its foes using its sharp claws.",
  "type": "Lizard",
  "attack": 30,
  "height": 1.1
}
Fetched 5 record(s) in 4ms
```

## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;
```
brunoberte(mongod-3.0.7) be-mean-pokemons> var busca = {"name": "Charmeleon"}
brunoberte(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(busca)
brunoberte(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5644727772b44f2ff651581d"),
  "name": "Charmeleon",
  "description": "Charmeleon mercilessly destroys its foes using its sharp claws.",
  "type": "Lizard",
  "attack": 30,
  "height": 1.1
}
```

## 7. Modifique sua `description` e salvê-o
```
brunoberte(mongod-3.0.7) be-mean-pokemons> poke.description = "Charmeleon mercilessly destroys its foes using its sharp claws. 222"
Charmeleon mercilessly destroys its foes using its sharp claws. 222
brunoberte(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 4ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
