# MongoDB - Aula 02 - Exercício
autor: Lucas Moreira

## Listagem das databases (passo 2)

```
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
be-mean-pokemons  → 0.078GB
be-mean           → 0.078GB
local             → 0.078GB
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> 
```

## Listagem das coleções (passo 3)

```
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> show collections
pokemons       → 0.001MB / 0.008MB
system.indexes → 0.000MB / 0.008MB
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons>
```

## Cadastro dos pokemons (passo 4)

```
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> var pokemon = {name: 'Ivysaur', description: 'Evolução do Bubasaur. Nesta fase o bulbo em suas costas se abre, revelando um botão de flor', attack: 35, defense: 30, height: 0.4}
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 925ms
WriteResult({
  "nInserted": 1
})

MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> var pokemon = {name: 'Venusaur', description: 'Evolução do Ysysaur. Agora ele ficou maior, o bulbo está completamente aberto e a flor desabrochou, fornecendo mais energia para ele', attack: 40, defense: 40, height: 0.5}
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> var pokemon = {name: 'Wartortle', decription: 'Evolução do Squirtle. Continua se parecendo com uma tartaruga, agora com o rabo maior e ondulado. Surgiram orelhas em sua cabeça', attack: 50, defense: 50, height: 0.6}
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> var pokemon = {name: 'Blastoise', description: 'Evolução do Wartotle. Tornou-se muito maior, com grandes garras. Surgiram dois canhões de seu casco, que disparam Água', attack: 40, defense: 50, height: 0.4} 
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> var pokemon = {name: 'Metapod', description: 'É ainda um casulo, evolução do Caterpie', attack: 20, defense: 20, height: 0.2}
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
```

## Lista dos pokemons (passo 5)

```
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56427ca176cb4bb0ef93cbbd"),
  "name": "Ivysaur",
  "description": "Evolução do Bubasaur. Nesta fase o bulbo em suas costas se abre, revelando um botão de flor",
  "attack": 35,
  "defense": 30,
  "height": 0.4
}
{
  "_id": ObjectId("56427d5d76cb4bb0ef93cbbe"),
  "name": "Venusaur",
  "description": "Evolução do Ysysaur. Agora ele ficou maior, o bulbo está completamente aberto e a flor desabrochou, fornecendo mais energia para ele",
  "attack": 40,
  "defense": 40,
  "height": 0.5
}
{
  "_id": ObjectId("56427dc076cb4bb0ef93cbbf"),
  "name": "Wartortle",
  "decription": "Evolução do Squirtle. Continua se parecendo com uma tartaruga, agora com o rabo maior e ondulado. Surgiram orelhas em sua cabeça",
  "attack": 50,
  "defense": 50,
  "height": 0.6
}
{
  "_id": ObjectId("56427e1f76cb4bb0ef93cbc0"),
  "name": "Blastoise",
  "description": "Evolução do Wartotle. Tornou-se muito maior, com grandes garras. Surgiram dois canhões de seu casco, que disparam Água",
  "attack": 40,
  "defense": 50,
  "height": 0.4
}
{
  "_id": ObjectId("56427e5b76cb4bb0ef93cbc1"),
  "name": "Metapod",
  "description": "É ainda um casulo, evolução do Caterpie",
  "attack": 20,
  "defense": 20,
  "height": 0.2
}
Fetched 5 record(s) in 2ms
```

## Pikachu (passo 6)

```
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name: 'Metapod'})
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("56427e5b76cb4bb0ef93cbc1"),
  "name": "Metapod",
  "description": "É ainda um casulo, evolução do Caterpie",
  "attack": 20,
  "defense": 20,
  "height": 0.2
}
```

## Atualização do Pikachu (passo 6)

```
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> poke.description
É ainda um casulo, evolução do Caterpie
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> poke.description = 'Ele é zica memo, tio!!!'
Ele é zica memo, tio!!!
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 7ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
MacBook-Pro-de-Lucas(mongod-3.0.7) be-mean-pokemons> db.pokemons.findOne({name: 'Metapod'})
{
  "_id": ObjectId("56427e5b76cb4bb0ef93cbc1"),
  "name": "Metapod",
  "description": "Ele é zica memo, tio!!!",
  "attack": 20,
  "defense": 20,
  "height": 0.2
}
```