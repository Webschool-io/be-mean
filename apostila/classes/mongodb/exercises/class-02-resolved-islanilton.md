# MongoDB - Aula 02 - Exercício
autor: Islanilton Rodrigues

## Criando database (passo 1)

```
islanilton@ubuntu-dev:~/vhosts/be-mean/be-mean-instagram-mongodb$ mongo be-mean-pokemons
MongoDB shell version: 2.6.3
connecting to: be-mean-pokemons
Mongo-Hacker 0.0.8
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> 
```

## Listando databases (passo 2)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> show dbs
local             → 0.078GB
be-mean           → 0.078GB
licencapp         → 0.078GB
admin             → (empty)
be-mean-instagram → (empty)
be-mean-pokemons  → (empty)
test              → (empty)
```

## Listando collections da database be-mean-pokemons (passo 3)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> show collections
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> 

```

## Cadastro dos pokemons (passo 4)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> var pokemons = [
...   {"name":"Venusaur", "description":"Este é um Pokémon de força, com um alto Sp. Atk e Sp. Def", "attack":82, "defense":83, "height":2.0}
... , {"name":"Meganium", "description":"Pokémon que se destaca não pelo seu ataque, mas sim pela sua defesa", "attack":100, "defense":105, "height": 1.8}
... , {"name":"Sceptile", "description":"Sceptile apresenta uma combinação de alta velocidade", "attack":85, "defense":65, "height":1.7 }
... , {"name":"Torterra", "description":"Pokémon pesado e lento, porém com defesa e ataque muito altos", "attack":109, "defense":105, "height": 2.1}
... , {"name":"Serperior", "description":"Serperior tem um grande destaque pela sua velocidade", "attack":75, "defense":95, "height": 3.3} 
... ]
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> db.pokemons.insert(pokemons);
Inserted 1 record(s) in 508ms
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

## Lista de todos os pokemons da collections pokemons (passo 5)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> db.pokemons.find();
{
  "_id": ObjectId("5642c54453f28318ac852fdc"),
  "name": "Venusaur",
  "description": "Este é um Pokémon de força, com um alto Sp. Atk e Sp. Def",
  "attack": 82,
  "defense": 83,
  "height": 2
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
Fetched 5 record(s) in 6ms
```

## Query para buscar um pokemon (passo 6)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> var query = {name: 'Venusaur'};
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> var poke = db.pokemons.findOne(query);
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> poke
{
  "_id": ObjectId("5642c54453f28318ac852fdc"),
  "name": "Venusaur",
  "description": "Este é um Pokémon de força, com um alto Sp. Atk e Sp. Def",
  "attack": 82,
  "defense": 83,
  "height": 2
}
```

## Atualização do Pokemon selecionado (passo 7)

```
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> poke.height = 2.6
2.6
ubuntu-dev(mongod-2.6.3) be-mean-pokemons> poke
{
  "_id": ObjectId("5642c54453f28318ac852fdc"),
  "name": "Venusaur",
  "description": "Este é um Pokémon de força, com um alto Sp. Atk e Sp. Def",
  "attack": 82,
  "defense": 83,
  "height": 2.6
}
```
