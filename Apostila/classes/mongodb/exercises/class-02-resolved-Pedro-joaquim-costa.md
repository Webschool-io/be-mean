# MongoDB - Aula 02 - Exercício
autor: Pedro joaquim da costa

## Listagem das databases (passo 2)
```
> show dbs
be-mean           0.078GB
be-mean-pokemons  0.078GB
be-mean-teste     0.078GB
local             0.078GB
pokemons          0.078GB
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
> db.pokemons.insert({
    name: 'Pidgeot',
    description: 'This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.',
    attack: 80, 
    defense: 75,
    height: 15
  })

WriteResult({ "nInserted" :1 })

> db.pokemons.insert({
    name: 'Aggron', description: 'Aggron claims an entire mountain as its own territory. It mercilessly beats up anything that violates its environment. This Pokémon vigilantly patrols its territory at all times.',
    attack: 110,
    defense: 180, 
    height: 21
  })

WriteResult({ "nInserted" : 1 })

> db.pokemons.insert({
    name: 'Pikachu', description: 'Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, its evidence that this Pokémon mistook the intensity of its charge.',
    attack: 55,
    defense: 40,
    height: 4})

WriteResult({"nInserted" : 1 })

> db.pokemons.insert({
    name: 'Butterfree', description: 'Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.', 
    attack: 45, 
    defense: 50, 
    height: 11
  })
WriteResult({ "nInserted" : 1 })

> db.pokemons.insert({
    name: 'Raichu', description: 'If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. corched patches of ground will be found near this Pokémons nest.', 
    attack: 90, 
    defense: 55,
    height: 8
  })
WriteResult({ "nInserted" : 1  })

> db.pokemons.insert({
    name: 'Charizard', description: 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.',
    attack: 84, 
    defense: 78, 
    height: 17
  })

WriteResult({ "nInserted" : 1 })

```

## Lista dos pokemons (passo 5)
```
> db.pokemons.find()
{
  "_id" : ObjectId("567b58e9722f1ec06d5fbccb"),
  "name" : "Pidgeot",
  "description" : "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
  "attack" : 80,
  "defense" : 75,
  "height" : 15 
}

{
  "_id" : ObjectId("567b58eb722f1ec06d5fbccc"),
  "name" : "Aggron",
  "description" : "Aggron claims an entire mountain as its own territory. It mercilessly beats up anything that violates its environment. This Pokémon vigilantly patrols its territory at all times.", 
  "attack" : 110, 
  "defense" : 180,
  "height" : 21 
}

{
  "_id" : ObjectId("567b58ec722f1ec06d5fbccd"), 
  "name" : "Pikachu",
  "description" : "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, its evidence that this Pokémon mistook the intensity of its charge.",
  "attack" : 55, 
  "defense" : 40,
  "height" : 4 
}

{
  "_id" : ObjectId("567b58ee722f1ec06d5fbcce"),
  "name" : "Butterfree",
  "description" : "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.", 
  "attack" : 45, 
  "defense" : 50,
  "height" : 11
}

{
  "_id" : ObjectId("567b58ef722f1ec06d5fbccf"),
  "name" : "Raichu",
  "description" : "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémons nest.", 
  "attack" : 90, 
  "defense" : 55,
  "height" : 8 
}

{
  "_id" : ObjectId("567b58f4722f1ec06d5fbcd0"),
  "name" : "Charizard",
  "description" : "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
  "attack" : 84,
  "defense" : 78,
  "height" : 17
}

{
  "_id" : ObjectId("567b593f722f1ec06d5fbcd1"),
  "name" : "Raichu",
  "description" : "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémons nest.",
  "attack" : 90,
  "defense" : 55,
  "height" : 8
}

```

## Butterfree (passo 6)
```
{    "_id" : ObjectId("567b58ee722f1ec06d5fbcce"),
    "name" : "Butterfree",
    "description" : "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
    "attack" : 45,
    "defense" : 50,
    "height" : 11 
}
```

## Atualização  (passo 6)
```
> var poke = db.pokemons.findOne({name:'Butterfree'})
> poke.description = "Voa brabuleta"
Voa brabuleta
> poke
{
    "_id" : ObjectId("567b58ee722f1ec06d5fbcce"),
    "name" : "Butterfree",
    "description" : "Voa brabuleta",
    "attack" : 45,
    "defense" : 50,
    "height" : 11
}
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

```
