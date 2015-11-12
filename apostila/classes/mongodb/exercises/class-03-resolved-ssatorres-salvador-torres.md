# MongoDB - Aula 03 - Exercício
autor: Salvador Torres

## 1. Liste todos Pokemons com a altura menor que 0.5;
```
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> var query = {height: {$lt:0.5}}
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642879eee374d5a126ae423"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4,
  "defense": 49
}
Fetched 1 record(s) in 1ms
```
## 2. Liste todos Pokemons com a altura maior ou igual que 0.5;
```
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> var query = {height: {$gte:0.5}}
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("56428768ee374d5a126ae421"),
  "name": "Zubat",
  "description": "Morcego troll",
  "type": "flying",
  "attack": 45,
  "height": 8,
  "defense": 35
}
{
  "_id": ObjectId("56428786ee374d5a126ae422"),
  "name": "Nidoqueen",
  "description": "Cantor de banda famosa",
  "type": "poison",
  "attack": 92,
  "height": 13,
  "defense": 87
}
{
  "_id": ObjectId("564287a4ee374d5a126ae424"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 52,
  "height": 0.6,
  "defense": 43
}
{
  "_id": ObjectId("564287c3ee374d5a126ae425"),
  "name": "Squirtle",
  "description": "Ejeta água destilada",
  "type": "água",
  "attack": 48,
  "height": 0.5,
  "defense": 65
}
Fetched 4 record(s) in 21ms
```
## 3. Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama;
```
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> var query = {$and:[{height: {$lte:0.5}}, {type:'grama'}]}
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642879eee374d5a126ae423"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4,
  "defense": 49
}
Fetched 1 record(s) in 4ms
```
## 4. Liste todos Pokemons com o name 'Pikachu' OU com attack menor ou igual que 0.5;
```
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> var query = {$or:[{attack: {$lte:0.5}}, {name:'Pikachu'}]}
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 4ms
```
## 5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5;
```
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> var query = {$and:[{attack: {$gte:48}}, {height:{$lte:0.5}}]}
Air-de-SSA(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642879eee374d5a126ae423"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4,
  "defense": 49
}
{
  "_id": ObjectId("564287c3ee374d5a126ae425"),
  "name": "Squirtle",
  "description": "Ejeta água destilada",
  "type": "água",
  "attack": 48,
  "height": 0.5,
  "defense": 65
}
Fetched 2 record(s) in 1ms
```