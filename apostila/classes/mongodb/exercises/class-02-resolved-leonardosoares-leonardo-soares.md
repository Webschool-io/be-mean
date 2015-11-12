
# MongoDB - Aula 02 - Exercício
Autor: Leonardo Soares

## Listagem das databases (passo 2)

```
helpdesk(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean          → 0.078GB
local            → 0.078GB
be-mean-pokemons → 0.078GB
```

## Listagem das coleções (passo 3)
```
helpdesk(mongod-3.0.7) be-mean-pokemons> show collections
pokemons       → 0.001MB / 0.008MB
system.indexes → 0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)
```
helpdesk(mongod-3.0.7) be-mean-pokemons> var blastoise = {'name': 'Blastoise', 'description': 'Tartaruga mal encarada com canhões de água', 'type': 'Water', attack: 83, height: 16 }
helpdesk(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(blastoise)

helpdesk(mongod-3.0.7) be-mean-pokemons> var vulpix = {'name': 'Vulpix', 'description': 'Um "Kyuubi wannabe" do caralho"', 'type': 'Fire', attack: 41, height: 6 }
helpdesk(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(vulpix)

helpdesk(mongod-3.0.7) be-mean-pokemons> var kadabra = {'name': 'Kadabra', 'description': 'Neo do mundo pokemon', 'type': 'Psychic', attack: 35, height: 13 }
helpdesk(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(kadabra)

helpdesk(mongod-3.0.7) be-mean-pokemons> var hitmonlee = {'name': 'Hitmonlee', 'description': 'O da voadora com os dois pés na cara', 'type': 'Fighting', attack: 120, height: 15 }
helpdesk(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(hitmonlee)

helpdesk(mongod-3.0.7) be-mean-pokemons> var hitmonchan = {'name': 'Hitmonchan', 'description': 'Soquinho, soquinho, soquinho...', 'type': 'Fighting', attack: 105, height: 14 }
helpdesk(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(hitmonchan)
```

## Lista dos pokemons (passo 5)
```
helpdesk(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56438cf50a7b8dda1cf8c599"),
  "name": "Blastoise",
  "description": "Tartaruga mal encarada com canhões de água",
  "type": "Water",
  "attack": 83,
  "height": 16
}
{
  "_id": ObjectId("56438d4f0a7b8dda1cf8c59a"),
  "name": "Vulpix",
  "description": "Um \"Kyuubi wannabe\" do caralho\"",
  "type": "Fire",
  "attack": 41,
  "height": 6
}
{
  "_id": ObjectId("56438d660a7b8dda1cf8c59b"),
  "name": "Kadabra",
  "description": "Neo do mundo pokemon",
  "type": "Psychic",
  "attack": 35,
  "height": 13
}
{
  "_id": ObjectId("56438db0704f0fcfec9fb689"),
  "name": "Hitmonlee",
  "description": "O da voadora com os dois pés na cara",
  "type": "Fighting",
  "attack": 120,
  "height": 15
}
{
  "_id": ObjectId("56438dcf704f0fcfec9fb68a"),
  "name": "Hitmonchan",
  "description": "Soquinho, soquinho, soquinho...",
  "type": "Fighting",
  "attack": 105,
  "height": 14
}
Fetched 5 record(s) in 28ms
```

## Pokemon (passo 6)
```
helpdesk(mongod-3.0.7) be-mean-pokemons> var query = {name: 'Hitmonlee'}
helpdesk(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
helpdesk(mongod-3.0.7) be-mean-pokemons> poke.valueOf()
{
  "_id": ObjectId("56438db0704f0fcfec9fb689"),
  "name": "Hitmonlee",
  "description": "O da voadora com os dois pés na cara",
  "type": "Fighting",
  "attack": 120,
  "height": 15
}
```

## Atualização do Pokemon (passo 6)
```
helpdesk(mongod-3.0.7) be-mean-pokemons> poke.attack = 150
150
helpdesk(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
