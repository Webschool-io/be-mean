# MongoDB - Aula 03 - Exercícios
autor: Marcelo André Naegeler

## Liste todos os pokémons com a altura **menor que** 50(cm)
```
> db.pokemons.find({ height: { $lt: 50 } })
{ "_id" : ObjectId("56448fcf8d9cce899a4271c4"), "name" : "Pikachu", "description" : "Awesome eletric pokémon", "attack" : 20, "defense" : 5, "height" : 45, "type" : "electric" }
{ "_id" : ObjectId("56448fcf8d9cce899a4271c7"), "name" : "Squirtle", "description" : "Water pokémon", "attack" : 15, "defense" : 8, "height" : 45, "type" : "water" }
{ "_id" : ObjectId("56448fcf8d9cce899a4271c8"), "name" : "Caterpie", "description" : "Bug pokémon", "attack" : 0, "defense" : 20, "height" : 20, "type" : "bug" }
```

## Liste todos os pokémons com a altura **maior ou igual a** 50(cm)
```
> db.pokemons.find({ height: { $gte: 50 } })
{ "_id" : ObjectId("56448fcf8d9cce899a4271c5"), "name" : "Bulbasaur", "description" : "Grass pokémon", "attack" : 18, "defense" : 15, "height" : 60, "type" : "grass" }
{ "_id" : ObjectId("56448fcf8d9cce899a4271c6"), "name" : "Charizard", "description" : "Fire pokémon", "attack" : 25, "defense" : 10, "height" : 100, "type" : "fire" }
```

## Liste todos os pokémons com a altura **menor ou igual a** 60(cm) **e** do tipo grama
```
> db.pokemons.find({ $and: [ { height: { $lte: 60 } }, { type: 'grass' } ] })
{ "_id" : ObjectId("56448fcf8d9cce899a4271c5"), "name" : "Bulbasaur", "description" : "Grass pokémon", "attack" : 18, "defense" : 15, "height" : 60, "type" : "grass" }
```

## Liste todos os pokémons com o nome `Pikachu` **ou** com ataque **menor ou igual a** 15
```
> db.pokemons.find({ $or: [ { name: 'Pikachu' }, { attack: { $lte: 15 } } ] })
{ "_id" : ObjectId("56448fcf8d9cce899a4271c4"), "name" : "Pikachu", "description" : "Awesome eletric pokémon", "attack" : 20, "defense" : 5, "height" : 45, "type" : "electric" }
{ "_id" : ObjectId("56448fcf8d9cce899a4271c7"), "name" : "Squirtle", "description" : "Water pokémon", "attack" : 15, "defense" : 8, "height" : 45, "type" : "water" }
{ "_id" : ObjectId("56448fcf8d9cce899a4271c8"), "name" : "Caterpie", "description" : "Bug pokémon", "attack" : 0, "defense" : 20, "height" : 20, "type" : "bug" }
```

## Liste todos os pokémons com o ataque **maior ou igual a** 20 **e** com height **menor ou igual a** 50(cm)
```
> db.pokemons.find({ $and: [ { attack: { $gte: 20 } }, { height: { $lte: 50 } } ] })
{ "_id" : ObjectId("56448fcf8d9cce899a4271c4"), "name" : "Pikachu", "description" : "Awesome eletric pokémon", "attack" : 20, "defense" : 5, "height" : 45, "type" : "electric" }
```
