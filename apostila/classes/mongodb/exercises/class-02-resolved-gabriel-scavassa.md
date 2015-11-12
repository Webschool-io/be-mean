# MongoDB - Aula 02 - Exercício
autor: Gabriel Scavassa

## Listagem das databases (passo 2)
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB

## Listagem das coleções (passo 3)
> show collections

## Cadastro dos pokemons (passo 4)
> var pokemon = {'name' : 'Wartortle', 'description': 'Evolução da Squirtle', 'type' : 'Aquatico', attack : 80 , defense : 60, height : 0.8}
> var pokemon1 = {'name' : 'Blastoise', 'description': 'Evolução da Wartortle', 'type' : 'Aquatico', attack : 150 , defense : 140, height : 5.8}
> var pokemon2 = {'name' : 'Pidgey', 'description': 'Pardalzão', 'type' : 'Passaro', attack : 30 , defense : 40, height : 0.3}
> var pokemon3 = {'name' : 'pidgeotto', 'description': 'Pardalzão evoluido do pidgey', 'type' : 'Passaro', attack : 60 , defense : 60, height : 0.6}
> var pokemon4 = {'name' : 'pidgeot', 'description': 'Pardalzão evoluido do pidgeotto', 'type' : 'Passaro', attack : 150 , defense : 120, height : 0.9}
> var pokemon5 = {'name' : 'Ratata', 'description': 'Rato das droga', 'type' : 'Rato loco', attack : 30 , defense : 20, height : 0.3}
> var pokemon6 = {'name' : 'Raticate', 'description': 'Ratazana', 'type' : 'Rato', attack : 60 , defense : 50, height : 0.5}
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })
> db.pokemons.save(pokemon1)
WriteResult({ "nInserted" : 1 })
> db.pokemons.save(pokemon2)
WriteResult({ "nInserted" : 1 })
> db.pokemons.save(pokemon3)
WriteResult({ "nInserted" : 1 })
> db.pokemons.save(pokemon4)
WriteResult({ "nInserted" : 1 })
> db.pokemons.save(pokemon5)
WriteResult({ "nInserted" : 1 })
> db.pokemons.save(pokemon6)
WriteResult({ "nInserted" : 1 })

## Lista dos pokemons (passo 5)
> db.pokemons.find()
{ "_id" : ObjectId("5643b7a947d3bcac08b578f3"), "name" : "Wartortle", "description" : "Evolução da Squirtle", "type" : "Aquatico", "attack" : 80, "defense" : 60, "height" : 0.8 }
{ "_id" : ObjectId("5643b7d747d3bcac08b578f4"), "name" : "Blastoise", "description" : "Evolução da Wartortle", "type" : "Aquatico", "attack" : 150, "defense" : 140, "height" : 5.8 }
{ "_id" : ObjectId("5643b7df47d3bcac08b578f5"), "name" : "Pidgey", "description" : "Pardalzão", "type" : "Passaro", "attack" : 30, "defense" : 40, "height" : 0.3 }
{ "_id" : ObjectId("5643b7e347d3bcac08b578f6"), "name" : "pidgeotto", "description" : "Pardalzão evoluido do pidgey", "type" : "Passaro", "attack" : 60, "defense" : 60, "height" : 0.6 }
{ "_id" : ObjectId("5643b7e847d3bcac08b578f7"), "name" : "pidgeot", "description" : "Pardalzão evoluido do pidgeotto", "type" : "Passaro", "attack" : 150, "defense" : 120, "height" : 0.9 }
{ "_id" : ObjectId("5643b7eb47d3bcac08b578f8"), "name" : "Ratata", "description" : "Rato das droga", "type" : "Rato loco", "attack" : 30, "defense" : 20, "height" : 0.3 }
{ "_id" : ObjectId("5643b7f047d3bcac08b578f9"), "name" : "Raticate", "description" : "Ratazana", "type" : "Rato", "attack" : 60, "defense" : 50, "height" : 0.5 }

## Wartortle (passo 6)
> var poke = db.pokemons.findOne({name : 'Wartortle'})

## Atualização do Pikachu (passo 7)
> poke.description = 'Evolução foda pra caralho da Squirtle'
Evolução foda pra caralho da Squirtle
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.find()
{ "_id" : ObjectId("5643b7a947d3bcac08b578f3"), "name" : "Wartortle", "description" : "Evolução foda pra caralho da Squirtle", "type" : "Aquatico", "attack" : 80, "defense" : 60, "height" : 0.8 }
{ "_id" : ObjectId("5643b7d747d3bcac08b578f4"), "name" : "Blastoise", "description" : "Evolução da Wartortle", "type" : "Aquatico", "attack" : 150, "defense" : 140, "height" : 5.8 }
{ "_id" : ObjectId("5643b7df47d3bcac08b578f5"), "name" : "Pidgey", "description" : "Pardalzão", "type" : "Passaro", "attack" : 30, "defense" : 40, "height" : 0.3 }
{ "_id" : ObjectId("5643b7e347d3bcac08b578f6"), "name" : "pidgeotto", "description" : "Pardalzão evoluido do pidgey", "type" : "Passaro", "attack" : 60, "defense" : 60, "height" : 0.6 }
{ "_id" : ObjectId("5643b7e847d3bcac08b578f7"), "name" : "pidgeot", "description" : "Pardalzão evoluido do pidgeotto", "type" : "Passaro", "attack" : 150, "defense" : 120, "height" : 0.9 }
{ "_id" : ObjectId("5643b7eb47d3bcac08b578f8"), "name" : "Ratata", "description" : "Rato das droga", "type" : "Rato loco", "attack" : 30, "defense" : 20, "height" : 0.3 }
{ "_id" : ObjectId("5643b7f047d3bcac08b578f9"), "name" : "Raticate", "description" : "Ratazana", "type" : "Rato", "attack" : 60, "defense" : 50, "height" : 0.5 }