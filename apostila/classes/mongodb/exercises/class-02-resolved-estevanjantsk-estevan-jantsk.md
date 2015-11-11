# MongoDB - Aula 02 - Exercício
autor: Estevan Jantsk

## Listagem das databases (passo 2)
```
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB
>
```

## Listagem das coleções (passo 3)
```
> db
be-mean-instagram
> show collections
pokemons
system.indexes
teste
>
```

## Cadastro dos pokemons (passo 4)
```
> var pokemon = {'name':'Pikachu','description':'Rato elétrico bem fofinho','type': 'electric', attack: 55, height: 0.4 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert({'name':'Bulbassauro','description':'Chicote de trepadeira','type': 'grama', 'attack': 49, height: 0.4 })
> db.pokemons.insert({'name':'Charmander','description':'Esse é o cão chupando manga de fofinho','type': 'fogo', 'attack': 52, height: 0.6 })
> db.pokemons.insert({'name':'Squirtle','description':'Ejeta água que passarinho não bebe','type': 'água', 'attack': 48, height: 0.5 })
> var pokemon = {'name':'Caterpie','description':'Larva lutadora','type': 'inseto', attack: 30, height: 0.3 }
> db.pokemons.insert({"name" : "Voltorb", "description" : "Choque caraaaai", "type" : "electric", "attack" : 30, "height" : 104 })
WriteResult({ "nInserted" : 1 })
```

## Lista dos pokemons (passo 5)
```
> db.pokemons.find()
{ "_id" : ObjectId("5642717bce53631fd9ce8527"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type" : "electric", "attack" : 55, "height" : 0.4 }
{ "_id" : ObjectId("564271ffce53631fd9ce8528"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
{ "_id" : ObjectId("5642720ece53631fd9ce8529"), "name" : "Charmander", "description" : "Esse é o cão chupando manga de fofinho", "type" : "fogo", "attack" : 52, "height" : 0.6 }
{ "_id" : ObjectId("56427272ce53631fd9ce852a"), "name" : "Squirtle", "description" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "height" : 0.5 }
{ "_id" : ObjectId("564273d0ce53631fd9ce852b"), "name" : "Caterpie", "description" : "Larva lutadora", "type" : "inseto", "attack" : 30, "height" : 0.3 }
{ "_id" : ObjectId("564282d9ce53631fd9ce852c"), "name" : "Voltorb", "description" : "Choque caraaaai", "type" : "electric", "attack" : 30, "height" : 104 }
>
```

## Pikachu (passo 6)
```
> var poke = db.pokemons.findOne({'name':'Voltorb'})
> poke
{
	"_id" : ObjectId("564282d9ce53631fd9ce852c"),
	"name" : "Voltorb",
	"description" : "Choque caraaaai",
	"type" : "electric",
	"attack" : 30,
	"height" : 104
}
>
```

## Atualização do Pikachu (passo 6)
```
> poke.description = "Aaaaaaaa que delícia cara!!!"
Aaaaaaaa que delícia cara!!!
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.find({'name':'Voltorb'})
{ "_id" : ObjectId("564282d9ce53631fd9ce852c"), "name" : "Voltorb", "description" : "Aaaaaaaa que delícia cara!!!", "type" : "electric", "attack" : 30, "height" : 104 }
>
``
