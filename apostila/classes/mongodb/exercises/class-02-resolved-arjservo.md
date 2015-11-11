1. Crie uma database chamada be-mean-pokemons;
```
MacBook-Pro-de-Angelo(mongod-3.0.6) test> use be-mean-pokemons
switched to db be-mean-pokemons
```
2. Liste quais databases você possui nesse servidor;
```
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
be-mean           → 0.078GB
local             → 0.078GB
```
3. Liste quais coleções você possui nessa database; (Obs: Comando executado depois de inserir os pokemons)
```
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> show collections
pokemons       → 0.001MB / 0.008MB
system.indexes → 0.000MB / 0.008MB
```
4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;
```
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var pokemon = {'name':'Hitmonchan','description':'Espírito de Boxeador','type': 'lutador', 'attack': 50, 'defense': 30, height: 1.4 }
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1733ms
WriteResult({
  "nInserted": 1
})
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var pokemon = {'name':'Lickitung','description':'Lambedor','type': 'normal', 'attack': 30, 'defense': 30, height: 1.2 }
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var pokemon = {'name':'Charmeleon','description':'Fogo no rabo','type': 'fogo', 'attack': 30, 'defense': 30, height: 1.1 }
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var pokemon = {'name':'Blastoise','description':'Mano da água','type': 'água', 'attack': 40, 'defense': 40, height: 1.6 }
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var pokemon = {'name':'Rattata','description':'Rato roxo','type': 'normal', 'attack': 30, 'defense': 20, height: 0.3 }
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
```
5. Liste os pokemons existentes na sua coleção;
```
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.find()
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
{
  "_id": ObjectId("564280783fd63b969ae24fbe"),
  "name": "Rattata",
  "description": "Rato roxo",
  "type": "normal",
  "attack": 30,
  "defense": 20,
  "height": 0.3
}
Fetched 5 record(s) in 2ms
```
6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;
```
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var query = {name: 'Rattata'}
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> var poke = db.pokemons.findOne(query)
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> poke
{
  "_id": ObjectId("564280783fd63b969ae24fbe"),
  "name": "Rattata",
  "description": "Rato roxo",
  "type": "normal",
  "attack": 30,
  "defense": 20,
  "height": 0.3
}
```
7. Modifique sua `description` e salvê-o
```
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> poke.description = 'Ratão loko e roxo'
Ratão loko e roxo
MacBook-Pro-de-Angelo(mongod-3.0.6) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
