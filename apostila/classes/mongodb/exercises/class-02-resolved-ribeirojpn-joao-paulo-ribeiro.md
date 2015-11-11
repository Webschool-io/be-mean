# MongoDB - Aula 02 - Exercício
autor: João Paulo Ribeiro

## 1 - Criar uma database chamada be-mean-pokemons

  ```
  joao-Inspiron-5437(mongod-2.4.9) test> use be-mean-pokemons
  switched to db be-mean-pokemons
  ```

## 2 - Liste quais databases você possui nesse servidor

  ```
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> show dbs
  local             → 0.078GB
  memest            → 0.203GB
  be-mean-instagram → 0.203GB
  be-mean           → 0.203GB
  ```

## 3 - Liste quais coleções você possui nessa database

  ```
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> show collections
  ```

## 4 - Insira pelo menos 5 pokemons A SUA ESCOLHA

  ```
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> var weedle = {'name':'Weedle','description':'Minhoca com chifre e nariz rosa','attack':35,'defense':30,'height':3}
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> var charizard = {'name':'Charizard','description':'Evolução do Charmeleon','attack':84,'defense':78,'height':17}
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> var venusaur = {'name':'Venusaur','description':'Evolução do Ivysaur','attack':82,'defense':83,'height':20}
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> var magneton = {'name':'Magneton','description':'Magneton emits a powerful magnetic force that is fatal to mechanical devices.','attack':60,'defense':95,'height':10}
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> var treecko = {'name':'Treecko','description':'Treecko has small hooks on the bottom of its feet that enable it to scale vertical walls.','attack':45,'defense':35,'height':5}

  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> db.pokemons.insert(venusaur)
  Inserted 1 record(s) in 72ms
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> db.pokemons.insert(charizard)
  Inserted 1 record(s) in 0ms
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> db.pokemons.insert(weedle)
  Inserted 1 record(s) in 1ms
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> db.pokemons.insert(magneton)
  Inserted 1 record(s) in 1ms
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> db.pokemons.insert(treecko)
  Inserted 1 record(s) in 0ms
  ```

## 5 - Liste os pokemons existentes na sua coleção

  ```
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> db.pokemons.find({})
  {
    "_id": ObjectId("5643ac6794505292b56f3b53"),
    "name": "Venusaur",
    "description": "Evolução do Ivysaur",
    "attack": 82,
    "defense": 83,
    "height": 20
  }
  {
    "_id": ObjectId("5643ac7194505292b56f3b54"),
    "name": "Charizard",
    "description": "Evolução do Charmeleon",
    "attack": 84,
    "defense": 78,
    "height": 17
  }
  {
    "_id": ObjectId("5643ac7d94505292b56f3b55"),
    "name": "Weedle",
    "description": "Minhoca com chifre e nariz rosa",
    "attack": 35,
    "defense": 30,
    "height": 3
  }
  {
    "_id": ObjectId("5643ac8694505292b56f3b56"),
    "name": "Magneton",
    "description": "Magneton emits a powerful magnetic force that is fatal to mechanical devices.",
    "attack": 60,
    "defense": 95,
    "height": 10
  }
  {
    "_id": ObjectId("5643ac8d94505292b56f3b57"),
    "name": "Treecko",
    "description": "Treecko has small hooks on the bottom of its feet that enable it to scale vertical walls.",
    "attack": 45,
    "defense": 35,
    "height": 5
  }
  Fetched 5 record(s) in 2ms
  ```

## 6 - Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada 'poke';

  ```
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> var query = {name: 'Treecko'};
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> var poke = db.pokemons.findOne(query)
  ```

## 7 - Modifique sua 'description' e salvê-o

  ```
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> poke.description = "It's a very nice guy"
  It's a very nice guy
  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> db.pokemons.save(poke)
  Updated 1 existing record(s) in 1ms

  joao-Inspiron-5437(mongod-2.4.9) be-mean-pokemons> db.pokemons.findOne(query)
  {
    "_id": ObjectId("5643ac8d94505292b56f3b57"),
    "name": "Treecko",
    "description": "It's a very nice guy",
    "attack": 45,
    "defense": 35,
    "height": 5
  }

  ```
