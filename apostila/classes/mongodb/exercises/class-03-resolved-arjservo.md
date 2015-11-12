
1. Liste todos Pokemons com a altura menor que 0.5;
```
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var query = { height: { $lt : 0.5 }}
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564280783fd63b969ae24fbe"),
  "name": "Rattata",
  "description": "Ratão loko e roxo",
  "type": "normal",
  "attack": 30,
  "defense": 20,
  "height": 0.3
}
Fetched 1 record(s) in 1ms
```
2. Liste todos Pokemons com a altura maior ou igual que 0.5;
```
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var query = { height: { $gte : 0.5 }}
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564280423fd63b969ae24fba"),
  "name": "Hitmonchan",
  "description": "Espírito de Boxeador",
  "type": "lutador",
  "attack": 50,
  "defense": 30,
  "height": 1.4
}
{
  "_id": ObjectId("5642805b3fd63b969ae24fbb"),
  "name": "Lickitung",
  "description": "Lambedor",
  "type": "normal",
  "attack": 30,
  "defense": 30,
  "height": 1.2
}
{
  "_id": ObjectId("564280683fd63b969ae24fbc"),
  "name": "Charmeleon",
  "description": "Fogo no rabo",
  "type": "fogo",
  "attack": 30,
  "defense": 30,
  "height": 1.1
}
{
  "_id": ObjectId("564280713fd63b969ae24fbd"),
  "name": "Blastoise",
  "description": "Mano da água",
  "type": "água",
  "attack": 40,
  "defense": 40,
  "height": 1.6
}
Fetched 4 record(s) in 2ms
```
3. Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama (usei "normal");
```
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var query = { $and: [{height: { $lte : 0.5 }}, {type: "normal"}]}
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564280783fd63b969ae24fbe"),
  "name": "Rattata",
  "description": "Ratão loko e roxo",
  "type": "normal",
  "attack": 30,
  "defense": 20,
  "height": 0.3
}
Fetched 1 record(s) in 1ms
```
4. Liste todos Pokemons com o name `Blastoide` OU com attack menor ou igual que 30;
```
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var query = { $or: [{name: "Blastoide"}, {attack: {$lte : 30}}]}
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642805b3fd63b969ae24fbb"),
  "name": "Lickitung",
  "description": "Lambedor",
  "type": "normal",
  "attack": 30,
  "defense": 30,
  "height": 1.2
}
{
  "_id": ObjectId("564280683fd63b969ae24fbc"),
  "name": "Charmeleon",
  "description": "Fogo no rabo",
  "type": "fogo",
  "attack": 30,
  "defense": 30,
  "height": 1.1
}
{
  "_id": ObjectId("564280783fd63b969ae24fbe"),
  "name": "Rattata",
  "description": "Ratão loko e roxo",
  "type": "normal",
  "attack": 30,
  "defense": 20,
  "height": 0.3
}
Fetched 3 record(s) in 2ms
```
5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 40 E com height menor ou igual que 2.0;
```
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var query = { $and: [{attack: {$gte : 40}}, {height: {$lte : 2.0}}]}
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564280423fd63b969ae24fba"),
  "name": "Hitmonchan",
  "description": "Espírito de Boxeador",
  "type": "lutador",
  "attack": 50,
  "defense": 30,
  "height": 1.4
}
{
  "_id": ObjectId("564280713fd63b969ae24fbd"),
  "name": "Blastoise",
  "description": "Mano da água",
  "type": "água",
  "attack": 40,
  "defense": 40,
  "height": 1.6
}
Fetched 2 record(s) in 1ms
```
