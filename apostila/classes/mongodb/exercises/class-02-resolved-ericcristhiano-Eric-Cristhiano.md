# MongoDB - Aula 02 - Exercício
autor: Eric Cristhiano

## Listagem das databases (passo 2)
```
show dbs
be-mean  0.078GB
local    0.078GB
```

## Listagem das coleções (passo 3)
```
show collections
```

## Cadastro dos pokemons (passo 4)
```
db.pokemons.insert({name: "Beedrill", description: "Abelha matadora", type: "poison", attack: 90, defense: 40, height: 1.0})
WriteResult({ "nInserted" : 1 })
db.pokemons.insert({name: "Blastoise", description: "Pokemon da água", type: "water", attack: 83, defense: 100, height: 1.6})
WriteResult({ "nInserted" : 1 })
db.pokemons.insert({name: "Mr. Mime", description: "Pokemon engraçado", type: "psychic", attack: 45, defense: 65, height: 1.3})
WriteResult({ "nInserted" : 1 })
db.pokemons.insert({name: "Magmar", description: "Pokemon de fogo", type: "fire", attack: 95, defense: 57, height: 1.3})
WriteResult({ "nInserted" : 1 })
db.pokemons.insert({name: "Scizor", description: "Pokemon malvado", type: "bug", attack: 130, defense: 100, height: 1.8})
WriteResult({ "nInserted" : 1 })
```

## Lista dos pokemons (passo 5)
```
db.pokemons.find()
{ "_id" : ObjectId("5642953a61b7097f40e4bb0f"), "name" : "Beedrill", "description" : "Abelha matadora", "type" : "poison", "attack" : 90, "defense" : 40, "height" : 1 }
{ "_id" : ObjectId("564295071eb6bc7dabc65413"), "name" : "Blastoise", "description" : "Pokemon da água", "type" : "water", "attack" : 83, "defense" : 100, "height" : 1.6 }
{ "_id" : ObjectId("5642953f61b7097f40e4bb10"), "name" : "Mr. Mime", "description" : "Pokemon engraçado", "type" : "psychic", "attack" : 45, "defense" : 65, "height" : 1.3 }
{ "_id" : ObjectId("5642954261b7097f40e4bb11"), "name" : "Magmar", "description" : "Pokemon de fogo", "type" : "fire", "attack" : 95, "defense" : 57, "height" : 1.3 }
{ "_id" : ObjectId("5642954661b7097f40e4bb12"), "name" : "Scizor", "description" : "Pokemon malvado", "type" : "bug", "attack" : 130, "defense" : 100, "height" : 1.8 }
```

## Scizor (passo 6)
```
var query = {name: 'Scizor'}
var poke = db.pokemons.findOne(query)
poke
{
	"_id" : ObjectId("5642954661b7097f40e4bb12"),
	"name" : "Scizor",
	"description" : "Pokemon malvado",
	"type" : "bug",
	"attack" : 130,
	"defense" : 100,
	"height" : 1.8
}
```

## Atualização do Scizor (passo 6)
```
poke.description = "Pokemon muito forte"
Pokemon muito forte
db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```
