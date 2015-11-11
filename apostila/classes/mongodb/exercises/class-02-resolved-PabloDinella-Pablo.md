# MongoDB - Aula 02 - Exercício
autor: Pablo R. Dinella

## 1. Crie uma database chamada be-mean-pokemons

```
Pablos-MacBook-Air(mongod-3.0.7) be-mean-instagram> use be-mean-pokemons
switched to db be-mean-pokemons
```

## 2. Liste quais databases você possui nesse servidor

```
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
local             → 0.078GB
```
To sabendo, o ```be-mean-pokemons``` não aparece porque não inseri nada ainda ;)

## 3. Liste quais coleções você possui nessa database

```
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> show collections
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons>
```

## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height

```
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'rain-dish','description':'Blastoise has water spouts that protrude from its shell', attack: 82, defense: 100, height: 1.6 }
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Butterfree','description':'Butterfree is a Bug/Flying type Pokemon', attack: 45, defense: 50, height: 1.09 }
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'metapod','description':'The shell covering this Pokémons body is as hard as an iron slab', attack: 20, defense: 55, height: 0.71 }
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Weedle','description':'Weedle has an extremely acute sense of smell', attack: 35, defense: 30, height: 0.3 }
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Kakuna','description':'Kakuna remains virtually immobile as it clings to a tree', attack: 25, defense: 50, height: 0.61 }
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})
```

## 5. Liste os pokemons existentes na sua coleção
```
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5643a1f8c07db82a129bc6f8"),
  "name": "rain-dish",
  "description": "Blastoise has water spouts that protrude from its shell",
  "attack": 82,
  "defense": 100,
  "height": 1.6
}
{
  "_id": ObjectId("5643a4dfc07db82a129bc6f9"),
  "name": "Butterfree",
  "description": "Butterfree is a Bug/Flying type Pokemon",
  "attack": 45,
  "defense": 50,
  "height": 1.09
}
{
  "_id": ObjectId("5643a54cc07db82a129bc6fa"),
  "name": "metapod",
  "description": "The shell covering this Pokémons body is as hard as an iron slab",
  "attack": 20,
  "defense": 55,
  "height": 0.71
}
{
  "_id": ObjectId("5643a587c07db82a129bc6fb"),
  "name": "Weedle",
  "description": "Weedle has an extremely acute sense of smell",
  "attack": 35,
  "defense": 30,
  "height": 0.3
}
{
  "_id": ObjectId("5643a5b1c07db82a129bc6fc"),
  "name": "Kakuna",
  "description": "Kakuna remains virtually immobile as it clings to a tree",
  "attack": 25,
  "defense": 50,
  "height": 0.61
}
Fetched 5 record(s) in 7ms
```

## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`
```
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name: 'Kakuna'})
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5643a5b1c07db82a129bc6fc"),
  "name": "Kakuna",
  "description": "Kakuna remains virtually immobile as it clings to a tree",
  "attack": 25,
  "defense": 50,
  "height": 0.61
}
```

## 7. Modifique sua `description` e salvê-o
```
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> poke.description = "Kakuna é legal"
Kakuna é legal
Pablos-MacBook-Air(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 17ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
