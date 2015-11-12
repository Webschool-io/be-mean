# MongoDB - Aula 02 - Exercício
autor: Gustavo Cardoso

## Criando database be-mean-pokemons

```
Grindhouse(mongod-3.0.4) be-mean-instagram> use be-mean-pokemons
switched to db be-mean-pokemons
```

## Listando os databases

```
Grindhouse(mongod-3.0.4) be-mean-pokemons> show dbs;
be-mean-instagram  0.078GB
be-mean            0.078GB
demo               0.078GB
filepicker         0.078GB
local              0.078GB
m101               0.078GB
mean               0.078GB
nodejs             0.078GB
todo               0.078GB
```

## Listando as collections do database

```
Grindhouse(mongod-3.0.4) be-mean-pokemons> show collections;
Grindhouse(mongod-3.0.4) be-mean-pokemons>
```

## Listando os pokemons

```
Grindhouse(mongod-3.0.4) be-mean-pokemons> db.pokemons.find();
{
  "_id": ObjectId("56440f66a511bc2dc25a2e53"),
  "name": "Shedinja",
  "description": "A hard body doesn't move",
  "type": "bug",
  "attack": 50,
  "defense": 20,
  "height": 2.07
}
{
  "_id": ObjectId("56440ffda511bc2dc25a2e54"),
  "name": "Haunter",
  "description": "A dangerous pokemon",
  "type": "ghost",
  "attack": 30,
  "defense": 45,
  "height": 5.03
}
{
  "_id": ObjectId("5644103fa511bc2dc25a2e55"),
  "name": "Duskull",
  "description": "Can pass through any wall",
  "type": "ghost",
  "attack": 20,
  "defense": 40,
  "height": 2.07
}
{
  "_id": ObjectId("5644108aa511bc2dc25a2e56"),
  "name": "Froslass",
  "description": "It freezes foes with an icy breath",
  "type": "ice",
  "attack": 40,
  "defense": 30,
  "height": 4.03
}
{
  "_id": ObjectId("564410d5a511bc2dc25a2e57"),
  "name": "Phantump",
  "description": "They prefer to live in abandoned forests",
  "type": "grass",
  "attack": 40,
  "defense": 20,
  "height": 1.04
}
Fetched 5 record(s) in 2ms
```

## Buscando pokemon

```
Grindhouse(mongod-3.0.4) be-mean-pokemons> var query = {name: "Froslass"}
Grindhouse(mongod-3.0.4) be-mean-pokemons> var poke = db.pokemons.findOne(query);
Grindhouse(mongod-3.0.4) be-mean-pokemons> poke
{
  "_id": ObjectId("5644108aa511bc2dc25a2e56"),
  "name": "Froslass",
  "description": "It freezes foes with an icy breath",
  "type": "ice",
  "attack": 40,
  "defense": 30,
  "height": 4.03
}
```

## Alterando descrição do pokemon

```
Grindhouse(mongod-3.0.4) be-mean-pokemons> poke.description = "A very nice and cute pokemon";
A very nice and cute pokemon
Grindhouse(mongod-3.0.4) be-mean-pokemons> db.pokemons.save(poke);
Updated 1 existing record(s) in 1ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
