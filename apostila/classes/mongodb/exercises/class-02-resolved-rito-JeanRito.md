# MongoDB - Aula 02 - Exercício
autor: Jean Martins Rito
https://github.com/rito


# 1. Criando a database
```
Mockingjay(mongod-3.0.7) test> use be-mean-pokemons
switched to db be-mean-pokemons
Mockingjay(mongod-3.0.7) be-mean-pokemons>
```

Nesse caso ela não salva pois não possui nada, então temos que criar uma collection vazia por exemplo:
```
Mockingjay(mongod-3.0.7) be-mean-pokemons> db.createCollection("collection-vazia")
{
  "ok": 1
}
Mockingjay(mongod-3.0.7) be-mean-pokemons>
```

# 2. Listar as databases no meu micro

```
Mockingjay(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
be-mean            0.078GB
DesativaEA         0.078GB
junkstation        0.078GB
local              0.078GB
test               0.078GB
Mockingjay(mongod-3.0.7) be-mean-pokemons>
```

# 3. Listar as collections desta database
```
Mockingjay(mongod-3.0.7) be-mean-pokemons> show collections
collection-vazia  0.000MB / 0.008MB
system.indexes    0.000MB / 0.008MB
Mockingjay(mongod-3.0.7) be-mean-pokemons>
```

# 4. Inserir 5 Pokemons à escolha

```
var pokeArray = [
{
  name: "Sandslash",
  description: "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
  attack: 45,
  defense: 55,
  height: 1.0
}
,{
  name: "Nidoking",
  description: "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
  attack: 85,
  defense: 75 ,
  height: 1.4
}
,{
  name: "Clefable",
  description: "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
  attack: 95,
  defense: 90,
  height: 1.3
}
,{
  name: "Ninetales",
  description: "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.",
  attack: 81,
  defense: 100,
  height: 1.1
}
,{
  name: "Vivillon",
  description: "Vivillon with many different patterns are found all over the world. These patterns are affected by the climate of their habitat.",
  attack: 90,
  defense: 50,
  height: 1.2
}
,{
  name: "Greninja",
  description: "It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.",
  attack: 95,
  defense: 67,
  height: 1.5
}];
```
```
db.pokemons.insert(pokeArray);

Inserted 1 record(s) in 305ms
BulkWriteResult({
  "writeErrors": [ ],
  "writeConcernErrors": [ ],
  "nInserted": 6,
  "nUpserted": 0,
  "nMatched": 0,
  "nModified": 0,
  "nRemoved": 0,
  "upserted": [ ]
})

```

# 5. Listar os pokemons da collection

```
Mockingjay(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56439131e25bbeb0b9427a5f"),
  "name": "Sandslash",
  "description": "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
  "attack": 45,
  "defense": 55,
  "height": 1
}
{
  "_id": ObjectId("56439131e25bbeb0b9427a60"),
  "name": "Nidoking",
  "description": "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
  "attack": 85,
  "defense": 75,
  "height": 1.4
}
{
  "_id": ObjectId("56439131e25bbeb0b9427a61"),
  "name": "Clefable",
  "description": "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
  "attack": 95,
  "defense": 90,
  "height": 1.3
}
{
  "_id": ObjectId("56439131e25bbeb0b9427a62"),
  "name": "Ninetales",
  "description": "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.",
  "attack": 81,
  "defense": 100,
  "height": 1.1
}
{
  "_id": ObjectId("56439131e25bbeb0b9427a63"),
  "name": "Vivillon",
  "description": "Vivillon with many different patterns are found all over the world. These patterns are affected by the climate of their habitat.",
  "attack": 90,
  "defense": 50,
  "height": 1.2
}
{
  "_id": ObjectId("56439131e25bbeb0b9427a64"),
  "name": "Greninja",
  "description": "It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.",
  "attack": 95,
  "defense": 67,
  "height": 1.5
}
Fetched 6 record(s) in 162ms
Mockingjay(mongod-3.0.7) be-mean-pokemons>
```

# 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`

```
var busca = {name: 'Vivillon'}
var poke = db.pokemons.findOne(busca)
```

Resultado:
```
Mockingjay(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("56439131e25bbeb0b9427a63"),
  "name": "Vivillon",
  "description": "Vivillon with many different patterns are found all over the world. These patterns are affected by the climate of their habitat.",
  "attack": 90,
  "defense": 50,
  "height": 1.2
}
Mockingjay(mongod-3.0.7) be-mean-pokemons>
```
# 7. Modificar a Description e salvar

```
poke.description = "Vivillon possui o ID 666. Vivillon with many different patterns are found all over the world. These patterns are affected by the climate of their habitat."

db.pokemons.save(poke)
```

Resultado:

```
Updated 1 existing record(s) in 148ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```

```
Mockingjay(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(busca)
{
  "_id": ObjectId("56439131e25bbeb0b9427a63"),
  "name": "Vivillon",
  "description": "Vivillon possui o ID 666. Vivillon with many different patterns are found all over the world. These patterns are affected by the climate of their habitat.",
  "attack": 90,
  "defense": 50,
  "height": 1.2
}
Fetched 1 record(s) in 2ms
Mockingjay(mongod-3.0.7) be-mean-pokemons>
```
