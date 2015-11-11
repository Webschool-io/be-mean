# MongoDB - Aula 02 - Exercício
Autor: Fábio de Carvalho

## Listagem das databases (passo 2)

```

> show dbs
be-mean           0.078GB
be-mean-pokemons  0.078GB
local             0.078GB
test              0.078GB

```

## Listagem das coleções (passo 3)

```

> show collections
pokemons
system.indexes

```
## Cadastro dos pokemons (passo 4)

```

> var pokemon = {'name': 'Blastoise', 'description': 'Tartaruga mal encarada com canhões de água', 'type': 'Water', attack: 83, height: 16 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name': 'Vulpix', 'description': 'Um "Kyuubi wannabe" do caralho"', 'type': 'Fire', attack: 41, height: 6 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name': 'Kadabra', 'description': 'Neo do mundo pokemon', 'type': 'Psychic', attack: 35, height: 13 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name': 'Hitmonlee', 'description': 'O da voadora com os dois pés na cara', 'type': 'Fighting', attack: 120, height: 15 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name': 'Hitmonchan', 'description': 'Soquinho, soquinho, soquinho...', 'type': 'Fighting', attack: 105, height: 14 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

```

## Lista dos pokemons (passo 5)

```

> db.pokemons.find()
{ "_id" : ObjectId("5642870f5f8490554cedb83b"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type" : "electric", "attack" : 100, "height" : 0.4 }
{ "_id" : ObjectId("5642904c33cfeb8f143e0172"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "Grama", "attack" : 49, "height" : 0.4 }
{ "_id" : ObjectId("5642907933cfeb8f143e0173"), "name" : "Charmander", "description" : "Esse é o cão chupando manga de fofinho", "type" : "Fogo", "attack" : 52, "height" : 0.6 }
{ "_id" : ObjectId("564290ad33cfeb8f143e0174"), "name" : "Squirtle", "description" : "Ejeta água que passarinho não bebe", "type" : "Água", "attack" : 48, "height" : 0.5 }
{ "_id" : ObjectId("564294196684ac57e3500bad"), "name" : "Caterpie", "description" : "Larva lutadora", "type" : "inseto", "attack" : 30, "height" : 0.3, "defense" : 35 }
{ "_id" : ObjectId("56429dc26684ac57e3500bae"), "name" : "Blastoise", "description" : "Tartaruga mal encarada com canhões de água", "type" : "Water", "attack" : 83, "height" : 16 }
{ "_id" : ObjectId("56429de06684ac57e3500baf"), "name" : "Vulpix", "description" : "Um \"Kyuubi wannabe\" do caralho\"", "type" : "Fire", "attack" : 41, "height" : 6 }
{ "_id" : ObjectId("56429df16684ac57e3500bb0"), "name" : "Kadabra", "description" : "Neo do mundo pokemon", "type" : "Psychic", "attack" : 35, "height" : 13 }
{ "_id" : ObjectId("56429dfb6684ac57e3500bb1"), "name" : "Hitmonlee", "description" : "O da voadora com os dois pés na cara", "type" : "Fighting", "attack" : 120, "height" : 15 }
{ "_id" : ObjectId("56429e056684ac57e3500bb2"), "name" : "Hitmonchan", "description" : "Soquinho, soquinho, soquinho...", "type" : "Fighting", "attack" : 105, "height" : 14 }

```

## Pokemon (passo 6)

```

> var query = {name: 'Kadabra'}
> var poke = db.pokemons.findOne(query)

```

## Atualização do Pokemon (passo 6)

```

> poke.defense = 30
30
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.findOne(query)
{
  "_id" : ObjectId("56429df16684ac57e3500bb0"),
  "name" : "Kadabra",
  "description" : "Neo do mundo pokemon",
  "type" : "Psychic",
  "attack" : 35,
  "height" : 13,
  "defense" : 30
}

```