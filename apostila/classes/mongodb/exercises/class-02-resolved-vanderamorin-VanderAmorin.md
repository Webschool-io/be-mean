# MongoDB - Aula 02 - Exercício
autor: Vander Amorin

## Listagem das databases (passo 2)
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> show dbs
local             → 0.078GB
be_mean           → 0.078GB
be-mean-instagram → 0.078GB



## Listagem das coleções (passo 3)
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> show collections
pokemons       → 0.001MB / 0.008MB
system.indexes → 0.000MB / 0.008MB
teste          → 0.000MB / 0.008MB


## Cadastro dos pokemons (passo 4)

be-mean-instagram> var pokemon = { 'name': 'Sandslash', 'description': 'Rato espinhoso', 'type': 'Rato', attack: 50, height:  1.0}
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 8ms
WriteResult({
  "nInserted": 1
})

be-mean-instagram> var pokemon = { 'name': 'Blastoise', 'description': 'Tartaruga marinha com canhões', 'type': 'Água', attack: 40, height:  1.6}
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 7ms
WriteResult({
  "nInserted": 1
})

be-mean-instagram> var pokemon = { 'name': 'Weedle', 'description': 'Minhoca de chifre', 'type': 'terra', attack: 20, height: 0.3 }
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

be-mean-instagram> var pokemon = { 'name': 'Spearow', 'description': 'Pássaro chorão', 'type': 'Aves', attack: 30, height: 0.3 }
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

be-mean-instagram> var pokemon = { 'name': 'Clefairy', 'description': 'Bicho Rosa inútil', 'type': 'fada', attack: 0, height:  0.6}
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

be-mean-instagram> var pokemon = { 'name': 'Vulpix', 'description': 'Raposa fofinha', 'type': 'Raposa', attack: 20, height: 0.6 }
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})



## Lista dos pokemons (passo 5)

be-mean-instagram> db.pokemons.find()
{
  "_id": ObjectId("564294113a1ae06e90375de3"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("564294f43a1ae06e90375de4"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("564296b83a1ae06e90375de5"),
  "name": "Squirtle",
  "description": "Ejeta água que passarinho não bebe",
  "type": "água",
  "attack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("5642982e3a1ae06e90375de6"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "attack": 48,
  "height": 0.5
}
{
  "_id": ObjectId("5642993e3a1ae06e90375de7"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3,
  "defense": 35
}
{
  "_id": ObjectId("5642a2a57a0d8f07689b8256"),
  "name": "Sandslash",
  "description": "Rato espinhoso",
  "type": "Rato",
  "attack": 50,
  "height": 1
}
{
  "_id": ObjectId("5642a2e88752932d9235dbe3"),
  "name": "Blastoise",
  "description": "Tartaruga marinha com canhões",
  "type": "Água",
  "attack": 40,
  "height": 1.6
}
{
  "_id": ObjectId("5642a3218752932d9235dbe4"),
  "name": "Weedle",
  "description": "Minhoca de chifre",
  "type": "terra",
  "attack": 20,
  "height": 0.3
}
{
  "_id": ObjectId("5642a3568752932d9235dbe5"),
  "name": "Spearow",
  "description": "Pássaro chorão",
  "type": "Aves",
  "attack": 30,
  "height": 0.3
}
{
  "_id": ObjectId("5642a37c8752932d9235dbe6"),
  "name": "Clefairy",
  "description": "Bicho Rosa inútil",
  "type": "fada",
  "attack": 0,
  "height": 0.6
}
{
  "_id": ObjectId("5642a3968752932d9235dbe7"),
  "name": "Vulpix",
  "description": "Raposa fofinha",
  "type": "Raposa",
  "attack": 20,
  "height": 0.6
}
Fetched 11 record(s) in 3ms



## Selecionando Poquemon (passo 6)
be-mean-instagram> var query = {name: 'Blastoise'}
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> var poke = db.pokemons.findOne(query)
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> poke
{
  "_id": ObjectId("5642a2e88752932d9235dbe3"),
  "name": "Blastoise",
  "description": "Tartaruga marinha com canhões",
  "type": "Água",
  "attack": 40,
  "height": 1.6
}

## Atualização do Poquemon (passo 6)
be-mean-instagram> poke.description = "Pokemon tartaruga com canhões nas costas"
Pokemon tartaruga com canhões nas costas
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
