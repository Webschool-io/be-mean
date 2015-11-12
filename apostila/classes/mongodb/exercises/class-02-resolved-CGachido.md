# MongoDB - Aula 02 - Exercício

## Show Dbs
```
> show dbs
be-mean  0.078GB
local    0.078GB
test     0.078GB
```

## Show Collections
```
> show collections
pokemons
system.indexes
teste
```

## Inserindo Pokemons
```
> db.pokemons.find({}).count()
6
> db.pokemons.find()
{ "_id" : ObjectId("5642885014995cf4c9d9909c"), "name" : "Pikachu", "description" : "Poke fraco", "type" : "electric", "attack" : 55, "defense" : 40, "height" : 4 }
{ "_id" : ObjectId("564288fd14995cf4c9d9909d"), "name" : "Mewtwo", "description" : "Because its battle abilities were raised to the ultimate level, it thinks only of de feating its foes.", "type" : "psychic", "attack" : 110, "defense" : 90, "height" : 20 }
{ "_id" : ObjectId("5642890614995cf4c9d9909e"), "name" : "Dragonite", "description" : "It can fly in spite of its big and bulky physique. It circles the globe in just 16 hours.", "type" : "dragon", "attack" : 134, "defense" : 95, "height" : 22 }
{ "_id" : ObjectId("5642891514995cf4c9d9909f"), "name" : "Milotic", "description" : "\"Its said that a glimpse of a MILOTIC and its beauty will calm any hostile emotions youre feeling.", "type" : "water", "attack" : 60, "defense" : 79, "height" : 62 }
{ "_id" : ObjectId("5642892714995cf4c9d990a0"), "name" : "Swinub", "description" : "It loves eating mushrooms that grow under dead grass. It also finds hot springs while foraging.", "type" : "ice", "attack" : 50, "defense" : 40, "height" : 4 }
{ "_id" : ObjectId("5642893314995cf4c9d990a1"), "name" : "Dragonair", "description" : "A mystical POKMON that exudes a gentle aura. Has the ability to change climate conditions.", "type" : "dragon", "attack" : 84, "defense" : 65, "height" : 40 }
>
```

## Modificando Pokemons
```
> db.pokemons.save(p)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.find()
{ "_id" : ObjectId("5642885014995cf4c9d9909c"), "name" : "Pikachu", "description" : "Pokemon tosco", "type" : "electric", "attack" : 55, "defense" : 40, "height" : 4 }
{ "_id" : ObjectId("564288fd14995cf4c9d9909d"), "name" : "Mewtwo", "description" : "Because its battle abilities were raised to the ultimate level, it thinks only of de feating its foes.", "type" : "psychic", "attack" : 110, "defense" : 90, "height" : 20 }
{ "_id" : ObjectId("5642890614995cf4c9d9909e"), "name" : "Dragonite", "description" : "It can fly in spite of its big and bulky physique. It circles the globe in just 16 hours.", "type" : "dragon", "attack" : 134, "defense" : 95, "height" : 22 }
{ "_id" : ObjectId("5642891514995cf4c9d9909f"), "name" : "Milotic", "description" : "\"Its said that a glimpse of a MILOTIC and its beauty will calm any hostile emotions youre feeling.", "type" : "water", "attack" : 60, "defense" : 79, "height" : 62 }
{ "_id" : ObjectId("5642892714995cf4c9d990a0"), "name" : "Swinub", "description" : "It loves eating mushrooms that grow under dead grass. It also finds hot springs while foraging.", "type" : "ice", "attack" : 50, "defense" : 40, "height" : 4 }
{ "_id" : ObjectId("5642893314995cf4c9d990a1"), "name" : "Dragonair", "description" : "A mystical POKMON that exudes a gentle aura. Has the ability to change climate conditions.", "type" : "dragon", "attack" : 84, "defense" : 65, "height" : 40 }
>
```