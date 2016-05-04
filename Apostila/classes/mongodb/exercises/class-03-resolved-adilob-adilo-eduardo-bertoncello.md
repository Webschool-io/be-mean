# MongoDB - Aula 03 - Exercício
autor: ADILO EDUARDO BERTONCELLO

## Listando Pokemons com altura menor que 0.5 (Passo 1)
```
> var query = {height: {$lt: 0.5}}
> db.pokemons.find(query)
{ "_id" : ObjectId("57268e9279836121bc5d265b"), "name" : "Bulbasaur", "description" : "Bulbasaur can be seen napping in bright sunlight", "attack" : 3, "defense" : 2, "height" : 0.3 }
{ "_id" : ObjectId("57268e9579836121bc5d265c"), "name" : "Ivysaur", "description" : "There is a bud on this Pokémon's back", "attack" : 3, "defense" : 3, "height" : 0.4 }
```

## Listando Pokemons com altura maior ou igual que 0.5 (Passo 2)
```
> var query = {height: {$gte: 0.5}}
> db.pokemons.find(query)
{ "_id" : ObjectId("57268e9779836121bc5d265d"), "name" : "Venusaur", "description" : "There is a large flower on Venusaur's back. Sinistro!!", "attack" : 4, "defense" : 4, "height" : 0.5 }
{ "_id" : ObjectId("57268e9979836121bc5d265e"), "name" : "Charmander", "description" : "The flame that burns at the tip of its tail is an indication of its emotions", "attack" : 3, "defense" : 2, "height" : 0.6 }
{ "_id" : ObjectId("57268e9c79836121bc5d265f"), "name" : "Charmeleon", "description" : "Charmeleon mercilessly destroys its foes using its sharp claws", "attack" : 3, "defense" : 3, "height" : 0.7 }
{ "_id" : ObjectId("57268e9e79836121bc5d2660"), "name" : "Charizard", "description" : "Charizard flies around the sky in search of powerful opponents", "attack" : 4, "defense" : 3, "height" : 0.8 }
```

## Listando Pokemons com altura menor ou igual que 0.5 E do tipo grama (Passo 3)
```
> var query = {$and: [{height: {$lte: 0.5}},{type: "grama"}] }
> query
{
        "$and" : [
                {
                        "height" : {
                                "$lte" : 0.5
                        }
                },
                {
                        "type" : "grama"
                }
        ]
}
> db.pokemons.find(query)
{ "_id" : ObjectId("57268e9579836121bc5d265c"), "name" : "Ivysaur", "description" : "There is a bud on this Pokémon's back", "attack" : 3, "defense" : 3, "height" : 0.4, "type" : "grama" }
```

## Listando Pokemons com o name 'Pìkachu' OU com attack menor ou igual que 0.5 (Passo 4)
```
> var query = { $or: [ {name: "Pikachu"}, {attack : {$lte: 0.5}} ]  }
> query
{
        "$or" : [
                {
                        "name" : "Pikachu"
                },
                {
                        "attack" : {
                                "$lte" : 0.5
                        }
                }
        ]
}
> db.pokemons.find(query)
>
```

## Listando Pokemons com attack maior ou igual que 48 E com altura menor ou igual que 0.5 (Passo 5)
```
> var query = { $and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]  }
> query
{
        "$and" : [
                {
                        "attack" : {
                                "$gte" : 48
                        }
                },
                {
                        "height" : {
                                "$lte" : 0.5
                        }
                }
        ]
}
> db.pokemons.find(query)
>
```