# MongoDB - Aula 03 - Exercício
autor: Dayan Barros

## Liste todos Pokemons com a altura menor que 0.5 (passo 2)
```
var query = {height: {$lt: 0.5}}
db.pokemons.find(query)
{
  "_id": ObjectId("5643ed3d0fee040067814030"),
  "name": "MenorQue0.5",
  "description": "Apenas para retornar menor do que 0.5",
  "type": "grama",
  "attack": 0.3,
  "height": 0.1
}
Fetched 1 record(s) in 1ms
```

## Liste todos Pokemons com a altura maior ou igual que 0.5 (passo 2)
```
var query = {height: {$gte: 0.5}}
db.pokemons.find(query)
{
  "_id": ObjectId("5642afd33190eff8fe754d1d"),
  "name": "Steelix",
  "description": "Steelix lives even further underground than Onix.",
  "type": "steel",
  "attack": 20,
  "height": 9.2
}
{
  "_id": ObjectId("5642afd33190eff8fe754d1e"),
  "name": "Articuno",
  "description": "Articuno is a legendary bird Pokémon that can control ice.",
  "type": "ice",
  "attack": 20,
  "height": 1.7
}
{
  "_id": ObjectId("5642afd33190eff8fe754d1f"),
  "name": "Poliwhirl",
  "description": "The surface of Poliwhirl's body is always wet and slick with a slimy fluid.",
  "type": "water",
  "attack": 15,
  "height": 1
}
{
  "_id": ObjectId("5642afd33190eff8fe754d20"),
  "name": "Gourgeist",
  "description": "Singing in eerie voices, they wander town streets on the night of the new moon.",
  "type": "ghost",
  "attack": 25,
  "height": 0.9
}
{
  "_id": ObjectId("5642afd33190eff8fe754d21"),
  "name": "Rhydon",
  "description": "Outra descrição",
  "type": "rock",
  "attack": 35,
  "height": 0.9
}
Fetched 5 record(s) in 3ms
```

## Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama (passo 3)
```
var query = {$and: [{ height: {$lte: 0.5} }, {type: 'grama'}]}
db.pokemons.find(query)
{
  "_id": ObjectId("5643ed3d0fee040067814030"),
  "name": "MenorQue0.5",
  "description": "Apenas para retornar menor do que 0.5",
  "type": "grama",
  "attack": 0.3,
  "height": 0.1
}
```

## Liste todos Pokemons com o nome `Poliwhirl` OU com attack menor ou igual que 0.5 (passo 4)
```
var query = {$or: [{ name: 'Poliwhirl' }, {attack: { $lte: 0.5 } }]}
db.pokemons.find(query)
{
  "_id": ObjectId("5642afd33190eff8fe754d1f"),
  "name": "Poliwhirl",
  "description": "The surface of Poliwhirl's body is always wet and slick with a slimy fluid.",
  "type": "water",
  "attack": 15,
  "height": 1
}
{
  "_id": ObjectId("5643ed3d0fee040067814030"),
  "name": "MenorQue0.5",
  "description": "Apenas para retornar menor do que 0.5",
  "type": "grama",
  "attack": 0.3,
  "height": 0.1
}
{
  "_id": ObjectId("5643edb40fee040067814031"),
  "name": "TipoGramaMenorQue0.5",
  "description": "Apenas para retornar menor do que 0.5",
  "type": "grama",
  "attack": 0.3,
  "height": 1.1
}
Fetched 3 record(s) in 1ms

```

## Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com height menor ou igual que 0.5 (passo 5)
```
var query = { $and: [ { attack: {$gte: 48} }, {height: {$lte: 0.5} }] }
db.pokemons.find(query)
Fetched 0 record(s) in 1ms
```