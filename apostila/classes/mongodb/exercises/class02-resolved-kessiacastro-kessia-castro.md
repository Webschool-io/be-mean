# MongoDB - Aula 02 - Exercício
autor(a): KÉSSIA CASTRO CORRÊA

## Listagem das databases (passo 2)

-> show dbs
be-mean-instagram → 0.078GB
be-mean-mongo     → 0.078GB
be-mean-pokemons  → 0.078GB
local             → 0.078GB


## Listagem das coleções (passo 3)

-> show collections
pokemons       → 0.000MB / 0.008MB
system.indexes → 0.000MB / 0.008MB

## Cadastro dos pokemons (passo 4)

-> var pokemon = {'name':'Pikachu','description':'Rato elétrico bem fofinho','type': 'electric', attack: 55, height: 0.4 }

-> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 545ms
WriteResult({
  "nInserted": 1
})

-> var pokemon = {'name':'Charizard','description':'Diabo do fogo','type': 'fire', attack: 84, defense: 78, height: 17 }

-> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

-> var pokemon = {'name':'Jigglypuff','description':'Rainha do deserto','type': 'fairy', attack: 45, defense: 20, height: 5 }

-> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 12ms
WriteResult({
  "nInserted": 1
})

-> var pokemon = {'name':'Snorlax','description':'Bicho preguiça','type': 'normal', attack: 110, defense: 65, height: 21 }

-> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

-> var pokemon = {'name':'Ditto','description':'Jogo da Imitação','type': 'normal', attack: 48, defense: 48, height: 3 }

-> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 11ms
WriteResult({
  "nInserted": 1
})

-> var pokemon = {'name':'Psyduck','description':'Duuuuuuh','type': 'water', attack: 52, defense: 48, height: 8 }

-> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

-> var pokemon = {'name':'Meowth','description':'Sneaky Gangsta','type': 'normal', attack: 45, defense: 35, height: 4 }

-> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})


## Lista dos pokemons (passo 5)

-> db.pokemons.find()
{
  "_id": ObjectId("56431e1f3cb17616b8b398a8"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("56431f6a3cb17616b8b398a9"),
  "name": "Charizard",
  "description": "Diabo do fogo",
  "type": "fire",
  "attack": 84,
  "defense": 78,
  "height": 17
}
{
  "_id": ObjectId("564321083cb17616b8b398aa"),
  "name": "Jigglypuff",
  "description": "Rainha do deserto",
  "type": "fairy",
  "attack": 45,
  "defense": 20,
  "height": 5
}
{
  "_id": ObjectId("564321743cb17616b8b398ab"),
  "name": "Snorlax",
  "description": "Bicho preguiça",
  "type": "normal",
  "attack": 110,
  "defense": 65,
  "height": 21
}
{
  "_id": ObjectId("564321c93cb17616b8b398ac"),
  "name": "Ditto",
  "description": "Jogo da Imitação",
  "type": "normal",
  "attack": 48,
  "defense": 48,
  "height": 3
}
{
  "_id": ObjectId("5643222f3cb17616b8b398ad"),
  "name": "Psyduck",
  "description": "Duuuuuuh",
  "type": "water",
  "attack": 52,
  "defense": 48,
  "height": 8
}
{
  "_id": ObjectId("564322a73cb17616b8b398ae"),
  "name": "Meowth",
  "description": "Sneaky Gangsta",
  "type": "normal",
  "attack": 45,
  "defense": 35,
  "height": 4
}
Fetched 7 record(s) in 22ms


## Pikachu (passo 6)

-> var pika = {name: 'Pikachu'}
-> var poke = db.pokemons.findOne(pika)
-> poke
{
  "_id": ObjectId("56431e1f3cb17616b8b398a8"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "electric",
  "attack": 55,
  "height": 0.4
}


## Atualização do Pikachu (passo 6)

-> poke.description = "Rato do tinhoso"

-> db.pokemons.save(poke)
Updated 1 existing record(s) in 16ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
