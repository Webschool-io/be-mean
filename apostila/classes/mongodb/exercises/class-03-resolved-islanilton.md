# MongoDB - Aula 03 - Exercício
autor: Islanilton Rodrigues

## Listar todos Pokemons da collection (passo 1)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5642c54453f28318ac852fdc"),
  "name": "Venusaur",
  "description": "Este é um Pokémon de força, com um alto Sp. Atk e Sp. Def",
  "attack": 82,
  "defense": 83,
  "height": 2.5
}
{
  "_id": ObjectId("5642c54453f28318ac852fdd"),
  "name": "Meganium",
  "description": "Pokémon que se destaca não pelo seu ataque, mas sim pela sua defesa",
  "attack": 100,
  "defense": 105,
  "height": 1.8
}
{
  "_id": ObjectId("5642c54453f28318ac852fde"),
  "name": "Sceptile",
  "description": "Sceptile apresenta uma combinação de alta velocidade",
  "attack": 85,
  "defense": 65,
  "height": 1.7
}
{
  "_id": ObjectId("5642c54453f28318ac852fdf"),
  "name": "Torterra",
  "description": "Pokémon pesado e lento, porém com defesa e ataque muito altos",
  "attack": 109,
  "defense": 105,
  "height": 2.1
}
{
  "_id": ObjectId("5642c54453f28318ac852fe0"),
  "name": "Serperior",
  "description": "Serperior tem um grande destaque pela sua velocidade",
  "attack": 75,
  "defense": 95,
  "height": 3.3
}

```

## Listar todos Pokemons com altura menor que 0.5 utilizando o $lt (passo 2)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> var query = {height: {$lt: 0.5}}
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> query
{
  "height": {
    "$lt": 0.5
  }
}
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query);
Fetched 0 record(s) in 1ms
```

## Listar todos Pokemons com altura maior ou igual 0.5 utilizando $gte (passo 3)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> var query = {height: {$gte: 0.5}};
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> query
{
  "height": {
    "$gte": 0.5
  }
}
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("5642c54453f28318ac852fdc"),
  "name": "Venusaur",
  "description": "Este é um Pokémon de força, com um alto Sp. Atk e Sp. Def",
  "attack": 82,
  "defense": 83,
  "height": 2.5
}
{
  "_id": ObjectId("5642c54453f28318ac852fdd"),
  "name": "Meganium",
  "description": "Pokémon que se destaca não pelo seu ataque, mas sim pela sua defesa",
  "attack": 100,
  "defense": 105,
  "height": 1.8
}
{
  "_id": ObjectId("5642c54453f28318ac852fde"),
  "name": "Sceptile",
  "description": "Sceptile apresenta uma combinação de alta velocidade",
  "attack": 85,
  "defense": 65,
  "height": 1.7
}
{
  "_id": ObjectId("5642c54453f28318ac852fdf"),
  "name": "Torterra",
  "description": "Pokémon pesado e lento, porém com defesa e ataque muito altos",
  "attack": 109,
  "defense": 105,
  "height": 2.1
}
{
  "_id": ObjectId("5642c54453f28318ac852fe0"),
  "name": "Serperior",
  "description": "Serperior tem um grande destaque pela sua velocidade",
  "attack": 75,
  "defense": 95,
  "height": 3.3
}
Fetched 5 record(s) in 5ms

```

## Listar todos Pokemons com altura menor OU igual a 0.5 E tipo grama utiliando $and e $lte (passo 4)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> var query = {$and: [{height: {$lte: 0.5}}, {type: "grama"}]};
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> query
{
  "$and": [
    {
      "height": {
        "$lte": 0.5
      }
    },
    {
      "type": "grama"
    }
  ]
}
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query);
Fetched 0 record(s) in 1ms
```

## Listar todos Pokemons com name 'Pikachu' OU com atack menor OU igual a 0.5 utiliando $or e $lte (passo 5)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> var query = {$or: [{name:"Pikachu"} , {attack:{$lte: 0.5}}]};
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> query
{
  "$or": [
    {
      "name": "Pikachu"
    },
    {
      "attack": {
        "$lte": 0.5
      }
    }
  ]
}
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query);
Fetched 0 record(s) in 1ms
ubuntu-dev(mongod-2.6.3) be

```

## Listar todos Pokemons com name 'Pikachu' OU com attack menor OU igual a 1.9 utiliando $or e $lte (passo 5)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> var query = {$or: [{name:"Pikachu"} , {attack:{$lte: 100}}]};
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> query
{
  "$or": [
    {
      "name": "Pikachu"
    },
    {
      "attack": {
        "$lte": 100
      }
    }
  ]
}
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("5642c54453f28318ac852fdc"),
  "name": "Venusaur",
  "description": "Este é um Pokémon de força, com um alto Sp. Atk e Sp. Def",
  "attack": 82,
  "defense": 83,
  "height": 2.5
}
{
  "_id": ObjectId("5642c54453f28318ac852fdd"),
  "name": "Meganium",
  "description": "Pokémon que se destaca não pelo seu ataque, mas sim pela sua defesa",
  "attack": 100,
  "defense": 105,
  "height": 1.8
}
{
  "_id": ObjectId("5642c54453f28318ac852fde"),
  "name": "Sceptile",
  "description": "Sceptile apresenta uma combinação de alta velocidade",
  "attack": 85,
  "defense": 65,
  "height": 1.7
}
{
  "_id": ObjectId("5642c54453f28318ac852fe0"),
  "name": "Serperior",
  "description": "Serperior tem um grande destaque pela sua velocidade",
  "attack": 75,
  "defense": 95,
  "height": 3.3
}
Fetched 4 record(s) in 5ms

```

## Liste todos Pokemons com attack Maior OU igual a 48 E com height menor OU igual que 0.5 (passo 6)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> var query = {$and: [{atack:{$gte: 48}} , {height:{$lte: 0.5}}]};
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> query
{
  "$and": [
    {
      "atack": {
        "$gte": 48
      }
    },
    {
      "height": {
        "$lte": 0.5
      }
    }
  ]
}
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query);
Fetched 0 record(s) in 0ms
ubuntu-dev(mongod-2.6.3) be-mean-pokemons>
```
