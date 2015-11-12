MongoDB - Aula 02 - Exercício
autor: Gustavo Guimarães

1 - Criando database be-mean-pokemons

```

gustavorag-Inspiron-5437(mongod-3.0.7) test> use be-mean-pokemons
switched to db be-mean-pokemons
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons>

```
2 - Listar Bases do Servidor

```
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
local             → 0.078GB
be-mean           → 0.078GB

```
3 - Listar coleções da base

```
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> show collections
pokemons       → 0.000MB / 0.008MB
system.indexes → 0.000MB / 0.008MB


```
4 - Inserindo 5 ou mais pokemons

```
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> var pokemon = {name: 'Caterpie', description: 'For protection, it releases a horrible stench from the antennae on its head to drive away enemies.', attack: 30, defense: 55, height: 3}

gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 32ms
WriteResult({
  "nInserted": 1
})

gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> pokemon = {name: 'Beedrill', description: 'If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.', attack: 90, defense: 40, height: 10}
{
  "name": "Beedrill",
  "description": "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
  "attack": 90,
  "defense": 40,
  "height": 10
}
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> pokemon = {name: 'Clefairy', description: 'Adored for their cute looks and playfulness. They are thought to be rare, as they do not appear often.', attack: 45, defense: 48, height: 6}

{
  "name": "Clefairy",
  "description": "Adored for their cute looks and playfulness. They are thought to be rare, as they do not appear often.",
  "attack": 45,
  "defense": 48,
  "height": 6
}
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})

gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> pokemon = {name: 'Wigglytuff', description: 'The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.', attack: 70, defense: 45, height: 10}
{
  "name": "Wigglytuff",
  "description": "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
  "attack": 70,
  "defense": 45,
  "height": 10
}
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> pokemon = {name: 'Vileplume', description: 'The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.', attack: 80, defense: 85, height: 12}

{
  "name": "Vileplume",
  "description": "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.",
  "attack": 80,
  "defense": 85,
  "height": 12
}
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> pokemon = {name: 'Persian', description: 'Many adore it for its sophisticated air. However, it will lash out and scratch for little reason.', attack: 70, defense: 60, height: 10}
{
  "name": "Persian",
  "description": "Many adore it for its sophisticated air. However, it will lash out and scratch for little reason.",
  "attack": 70,
  "defense": 60,
  "height": 10
}
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})



```
5 - Listando pokemons na collection pokemons

```
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5643e73f28d44182097ffec0"),
  "name": "Caterpie",
  "description": "For protection, it releases a horrible stench from the antennae on its head to drive away enemies.",
  "attack": 30,
  "defense": 55,
  "height": 3
}
{
  "_id": ObjectId("5643e76c28d44182097ffec1"),
  "name": "Beedrill",
  "description": "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
  "attack": 90,
  "defense": 40,
  "height": 10
}
{
  "_id": ObjectId("5643e79528d44182097ffec2"),
  "name": "Clefairy",
  "description": "Adored for their cute looks and playfulness. They are thought to be rare, as they do not appear often.",
  "attack": 45,
  "defense": 48,
  "height": 6
}
{
  "_id": ObjectId("5643e7bb28d44182097ffec3"),
  "name": "Wigglytuff",
  "description": "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
  "attack": 70,
  "defense": 45,
  "height": 10
}
{
  "_id": ObjectId("5643e7e128d44182097ffec4"),
  "name": "Vileplume",
  "description": "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.",
  "attack": 80,
  "defense": 85,
  "height": 12
}
{
  "_id": ObjectId("5643e7fc28d44182097ffec5"),
  "name": "Persian",
  "description": "Many adore it for its sophisticated air. However, it will lash out and scratch for little reason.",
  "attack": 70,
  "defense": 60,
  "height": 10
}
Fetched 6 record(s) in 53ms


```
6 - Buscando por um Pokemon específico e armazenando em uma variável. 

```
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> var query = {name: 'Vileplume'}
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5643e7e128d44182097ffec4"),
  "name": "Vileplume",
  "description": "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.",
  "attack": 80,
  "defense": 85,
  "height": 12
}


```
7 - Atualizando o pokemon recuperado no passo 6

```
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> poke.description = 'Esta é a nova descrição do Vileplume'
Esta é a nova descrição do Vileplume
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 1ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
gustavorag-Inspiron-5437(mongod-3.0.7) be-mean-pokemons> db.pokemons.findOne(query)
{
  "_id": ObjectId("5643e7e128d44182097ffec4"),
  "name": "Vileplume",
  "description": "Esta é a nova descrição do Vileplume",
  "attack": 80,
  "defense": 85,
  "height": 12
}


```
