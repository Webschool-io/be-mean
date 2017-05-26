# MongoDB - Aula 02 - Exercício
autor: ADILO EDUARDO BERTONCELLO

## Criando database be-mean-pokemons
```
mongo be-mean-pokemons
MongoDB shell version: 3.2.5
connecting to: be-mean-pokemons
Server has startup warnings:
2016-05-01T18:11:03.384-0300 I CONTROL  [initandlisten]
2016-05-01T18:11:03.388-0300 I CONTROL  [initandlisten] ** WARNING: Insecure configuration, access control is not enabled and no --bind_ip has been specified.
2016-05-01T18:11:03.398-0300 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted,
2016-05-01T18:11:03.406-0300 I CONTROL  [initandlisten] **          and the server listens on all available network interfaces.
2016-05-01T18:11:03.413-0300 I CONTROL  [initandlisten]
```

## Listando as databases
```
show dbs
be-mean            0.005GB
be-mean-instagram  0.000GB
be-mean-pokemons   0.000GB
local              0.000GB
```

## Listando as coleções
```
show collections
pokemons
```

## Inserindo os pokemons
```
var p1 = {name: "Bulbasaur", description: "Bulbasaur can be seen napping in bright sunlight", attack: 3, defense: 2, height: 2.04}
db.pokemons.insert(p1)
WriteResult({ "nInserted" : 1 })

var p2 = {name: "Ivysaur", description: "There is a bud on this Pokémon's back", attack: 3, defense: 3, height: 3.03}
db.pokemons.insert(p2)
WriteResult({ "nInserted" : 1 })

var p3 = {name: "Venusaur", description: "There is a large flower on Venusaur's back", attack: 4, defense: 4, height: 6.07}
db.pokemons.insert(p3)
WriteResult({ "nInserted" : 1 })

var p4 = {name: "Charmander", description: "The flame that burns at the tip of its tail is an indication of its emotions", attack: 3, defense: 2, height: 2.00}
db.pokemons.insert(p4)
WriteResult({ "nInserted" : 1 })

var p5 = {name: "Charmeleon", description: "Charmeleon mercilessly destroys its foes using its sharp claws", attack: 3, defense: 3, height: 3.07}
db.pokemons.insert(p5)
WriteResult({ "nInserted" : 1 })

var p6 = {name: "Charizard", description: "Charizard flies around the sky in search of powerful opponents", attack: 4, defense: 3, height: 5.07}
db.pokemons.insert(p6)
WriteResult({ "nInserted" : 1 })
```

## Listando os pokemons
```
db.pokemons.find()
{ "_id" : ObjectId("57268e9279836121bc5d265b"), "name" : "Bulbasaur", "description" : "Bulbasaur can be seen napping in bright sunlight", "attack" : 3, "defense" : 2, "height" : 2.04 }
{ "_id" : ObjectId("57268e9579836121bc5d265c"), "name" : "Ivysaur", "description" : "There is a bud on this Pokémon's back", "attack" : 3, "defense" : 3, "height" : 3.03 }
{ "_id" : ObjectId("57268e9779836121bc5d265d"), "name" : "Venusaur", "description" : "There is a large flower on Venusaur's back", "attack" : 4, "defense" : 4, "height" : 6.07 }
{ "_id" : ObjectId("57268e9979836121bc5d265e"), "name" : "Charmander", "description" : "The flame that burns at the tip of its tail is an indication of its emotions", "attack" : 3, "defense" : 2, "height" : 2 }
{ "_id" : ObjectId("57268e9c79836121bc5d265f"), "name" : "Charmeleon", "description" : "Charmeleon mercilessly destroys its foes using its sharp claws", "attack" : 3, "defense" : 3, "height" : 3.07 }
{ "_id" : ObjectId("57268e9e79836121bc5d2660"), "name" : "Charizard", "description" : "Charizard flies around the sky in search of powerful opponents", "attack" : 4, "defense" : 3, "height" : 5.07 }
```

## Buscando o 'Venusaur' para a variável poke
```
var poke = db.pokemons.findOne({name: "Venusaur"})
```

## Modificando a description e salvando
```
poke.description = "There is a large flower on Venusaur's back. Sinistro!!"
There is a large flower on Venusaur's back. Sinistro!!

db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```