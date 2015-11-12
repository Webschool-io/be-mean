# MongoDB - Aula 02 - Exercício
autor: André Machado

## Crie uma database chamada be-mean-pokemons;


>AndrePC(mongod-3.0.7) be-mean-instagram> use be-mean-pokemons


switched to db be-mean-pokemons


## 2. Liste quais databases você possui nesse servidor;


>AndrePC(mongod-3.0.7) be-mean-pokemons> show dbs


be-mean-instagram → 0.078GB

local             → 0.078GB


## 3. Liste quais coleções você possui nessa database;

>AndrePC(mongod-3.0.7) be-mean-pokemons> show collections


pokemons       → 0.000MB / 0.008MB

system.indexes → 0.000MB / 0.008MB


## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA 

>AndrePC(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name': 'Pikachu', 'description': 'Ratinho eletrico fofinho', 'type': 'eletrico', attack: 55, height: 0.4, defense: 40}


>AndrePC(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)


>AndrePC(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name': 'Tangela', 'description': 'Cabelo de medusa muito louco',
... 'type': 'grama', attack: 55, height: 0.3, defense: 115}


>AndrePC(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)


>AndrePC(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name': 'Nidoran', 'description': 'Um ratinho mais bonitinho','type': 'veneno', attack: 47, height: 0.4, defense: 52}


>AndrePC(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)


>AndrePC(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name': 'Mr. Mime', 'description': 'Um palhaco muito do estranho','type': 'psiquico/fada', attack: 45, height: 1.3, defense: 65}


>AndrePC(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)

>AndrePC(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name': 'Caterpie', 'description': 'Larva lutadora', 'type': 'inseto', attack: 30, height: 0.3, defense: 35}


>AndrePC(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)


## 5. Liste os pokemons existentes na sua coleção;

>AndrePC(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()


1.{
  "_id": ObjectId("5643d253c8e7c6976cee0168"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3,
  "defense": 35
}


2.{
  "_id": ObjectId("5643d3acc8e7c6976cee0169"),
  "name": "Pikachu",
  "description": "Ratinho eletrico fofinho",
  "type": "eletrico",
  "attack": 55,
  "height": 0.4,
  "defense": 40
}


3.{
  "_id": ObjectId("5643d479c8e7c6976cee016a"),
  "name": "Tangela",
  "description": "Cabelo de medusa muito louco",
  "type": "grama",
  "attack": 55,
  "height": 0.3,
  "defense": 115
}


4.{
  "_id": ObjectId("5643d4eec8e7c6976cee016b"),
  "name": "Nidoran",
  "description": "Um ratinho mais bonitinho",
  "type": "veneno",
  "attack": 47,
  "height": 0.4,
  "defense": 52
}


5.{
  "_id": ObjectId("5643d548c8e7c6976cee016c"),
  "name": "Mr. Mime",
  "description": "Um palhaco muito do estranho",
  "type": "psiquico/fada",
  "attack": 45,
  "height": 1.3,
  "defense": 65
}


## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;

>AndrePC(mongod-3.0.7) be-mean-pokemons> var name = {name: 'Nidoran'}


>AndrePC(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(name)


## 7. Modifique sua `description` e salvê-o

>AndrePC(mongod-3.0.7) be-mean-pokemons> poke.description = "Um ratinho venenoso do fofinho"
Um ratinho venenoso do fofinho


>AndrePC(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)

Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})


>AndrePC(mongod-3.0.7) be-mean-pokemons> poke


{
  "_id": ObjectId("5643d4eec8e7c6976cee016b"),
  "name": "Nidoran",
  "description": "Um ratinho venenoso do fofinho",
  "type": "veneno",
  "attack": 47,
  "height": 0.4,
  "defense": 52
}