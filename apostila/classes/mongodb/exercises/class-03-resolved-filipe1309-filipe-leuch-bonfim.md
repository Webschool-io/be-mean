# MongoDB - Aula 03 - Exercício
autor: Filipe Leuch Bonfim

## Liste todos Pokemons com a altura menor que 0.5 (passo 1)
```
nz-fedora(mongod-3.0.7) be-mean-pokemons> var query = {height: {$lt: 0.5 }}
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56427b38ead061cff56c4125"),
  "name": "Meowth",
  "description": "Membro da equipe rocket e, e curte uma grana",
  "type": "normal",
  "attack": 45,
  "height": 0.4,
  "defense": 35
}
Fetched 1 record(s) in 0ms
```

## Liste todos Pokemons com a altura maior ou igual que 0.5 (passo 2)
```
nz-fedora(mongod-3.0.7) be-mean-pokemons> var query = {height: {$gte: 0.5 }}
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56427740ead061cff56c4121"),
  "name": "Mewtwo",
  "description": "Fodabagarai e manja dos paranaue",
  "type": "psiquico",
  "attack": 110,
  "height": 2,
  "defense": 90
}
{
  "_id": ObjectId("5642792eead061cff56c4122"),
  "name": "Jigglypuff",
  "description": "Jiggaly ... puff ... puff ... jiggaly!",
  "type": "normal, fada",
  "attack": 45,
  "height": 0.5,
  "defense": 20
}
{
  "_id": ObjectId("564279d7ead061cff56c4123"),
  "name": "Psyduck",
  "description": "Atrapalhado e fofinho",
  "type": "água",
  "attack": 52,
  "height": 0.8,
  "defense": 48
}
{
  "_id": ObjectId("56427a64ead061cff56c4124"),
  "name": "Mr. Mime",
  "description": "Um palhaço muitcho loko",
  "type": "psiquico, fada",
  "attack": 45,
  "height": 1.3,
  "defense": 65
}
Fetched 4 record(s) in 0ms
```

## Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama (passo 3)
```
nz-fedora(mongod-3.0.7) be-mean-pokemons> var query = {$and : [{height: {$lte: 0.5 }}, {type: 'grama'}]}
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 0ms
```

## Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5 (passo 4)
```
nz-fedora(mongod-3.0.7) be-mean-pokemons> var query = {$or : [{name: 'Pikachu'}, {attack: {$lte: 0.5 }}]}
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 0ms
```

## Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5 (passo 5)
```
nz-fedora(mongod-3.0.7) be-mean-pokemons> var query = {$and : [{attack: {$gte: 48 }}, {height: {$lte: 0.5}}]}
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 0ms
```

