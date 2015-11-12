# MongoDB - Aula 02 - Exercício
autor: Felipe Orlando B. Souza

![BLASTOISE!!!](http://i.imgur.com/tdgqEHo.jpg)

## 1) Criar DB chamado 'be-mean-pokemons'
```
Air-de-Felipe(mongod-3.0.7) test> use be-mean-pokemons
switched to db be-mean-pokemons
```

## 2) Listar de Databases
```
Air-de-Felipe(mongod-3.0.7) test> show dbs
be-mean-instagram → 0.078GB
bemean            → 0.078GB
local             → 0.078GB
```

## 3) Listar coleções no 'be-mean-pokemons'
```
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> show collections
```

## 4) Inserir 5 Pokémons
```
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: "Blastoise", description: "Raro pra carai, faz crianças chorarem de feliciade ao se juntar a coleção", attack: 40, defense: 40, height: 1.6})
Inserted 1 record(s) in 333ms
WriteResult({
  "nInserted": 1
})
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: "Beedrill", description: "Abelhão bem loco e zóio vermelho depois de ter fumado até umas hora", attack: 50, defense: 20, height: 1.0})
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: "Pikachu", description: "Todo mundo conhece sáporra", attack: 30, defense: 20, height: 0.4})
Inserted 1 record(s) in 5ms
WriteResult({
  "nInserted": 1
})
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: "Raichu", description: "Parece o Pikachu", attack: 50, defense: 30, height: 0.8})
Inserted 1 record(s) in 7ms
WriteResult({
  "nInserted": 1
})
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert({name: "Houndoom", description: "Cão do capiroto. Deus'o livre ", attack: 50, defense: 20, height: 1.4})
Inserted 1 record(s) in 14ms
WriteResult({
  "nInserted": 1
})
```

## 5) Listar os Pokémons
```
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.find({})
{
  "_id": ObjectId("5643c3def9a62e3e58bbeea9"),
  "name": "Blastoise",
  "description": "Raro pra carai, faz crianças chorarem de feliciade ao se juntar a coleção",
  "attack": 40,
  "defense": 40,
  "height": 1.6
}
{
  "_id": ObjectId("5643c47ef9a62e3e58bbeeaa"),
  "name": "Beedrill",
  "description": "Abelhão bem loco e zóio vermelho depois de ter fumado até umas hora",
  "attack": 50,
  "defense": 20,
  "height": 1
}
{
  "_id": ObjectId("5643c4e5f9a62e3e58bbeeab"),
  "name": "Pikachu",
  "description": "Todo mundo conhece sáporra",
  "attack": 30,
  "defense": 20,
  "height": 0.4
}
{
  "_id": ObjectId("5643c537f9a62e3e58bbeeac"),
  "name": "Raichu",
  "description": "Parece o Pikachu",
  "attack": 50,
  "defense": 30,
  "height": 0.8
}
{
  "_id": ObjectId("5643c5e0f9a62e3e58bbeead"),
  "name": "Houndoom",
  "description": "Cão do capiroto. Deus'o livre ",
  "attack": 50,
  "defense": 20,
  "height": 1.4
}
Fetched 5 record(s) in 9ms
```

## 6) Buscar Pokemon pelo nome e armazenar em 'var poke'
```
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name: "Blastoise"})
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5643c3def9a62e3e58bbeea9"),
  "name": "Blastoise",
  "description": "Raro pra carai, faz crianças chorarem de feliciade ao se juntar a coleção",
  "attack": 40,
  "defense": 40,
  "height": 1.6
}
```

## 7) Modificar e salvar descrição de um Pokémon
```
Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> poke.description = "BLASTOOOOOISE!"
BLASTOOOOOISE!
MacBook-Air-de-Felipe(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 24ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```