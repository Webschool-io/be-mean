# MongoDB - Aula 02 - Exercício
autor: Carlo Schneider

## Listagem das databases
```
be-mean-instagram> use be-mean-pokemons
switched to db be-mean-pokemons
be-mean-pokemons> show databases
be-mean-instagram  0.078GB
be-mean            0.078GB
local              0.078GB
```

## Listagem das coleções
```
be-mean-pokemons> show collections
```

## Cadastro dos pokemons
```
be-mean-pokemons> var pokemons = [{ 'name': 'Venusaur', 'description': 'There is a large flower on Venusaurs back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flowers aroma soothes the emotions of people.', 'type': 'seed', 'attack': 82, 'height': 20 }, { 'name': 'Charizard', 'description': 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.', 'type': 'dragon', 'attack': 84, 'height': 17 }, { 'name': 'Blastoise', 'description': 'Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.', 'type': 'water', 'attack': 83, 'height': 16 }, { 'name': 'Butterfree', 'description': 'Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.', 'type': 'bug', 'attack': 45, 'height': 11 }, { 'name': 'Pidgeot', 'description': 'This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.', 'type': 'bird', 'attack': 80, 'height': 15 }];
be-mean-pokemons> db.pokemons.insert(pokemons)
Inserted 1 record(s) in 2ms
BulkWriteResult({
  "writeErrors": [ ],
  "writeConcernErrors": [ ],
  "nInserted": 5,
  "nUpserted": 0,
  "nMatched": 0,
  "nModified": 0,
  "nRemoved": 0,
  "upserted": [ ]
})
```

## Listagem dos pokemons
```
be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("564288bc862eeea45f8afd20"),
  "name": "Venusaur",
  "description": "There is a large flower on Venusaurs back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flowers aroma soothes the emotions of people.",
  "type": "seed",
  "attack": 82,
  "height": 20
}
{
  "_id": ObjectId("564288bc862eeea45f8afd21"),
  "name": "Charizard",
  "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
  "type": "dragon",
  "attack": 84,
  "height": 17
}
{
  "_id": ObjectId("564288bc862eeea45f8afd22"),
  "name": "Blastoise",
  "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
  "type": "water",
  "attack": 83,
  "height": 16
}
{
  "_id": ObjectId("564288bc862eeea45f8afd23"),
  "name": "Butterfree",
  "description": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
  "type": "bug",
  "attack": 45,
  "height": 11
}
{
  "_id": ObjectId("564288bc862eeea45f8afd24"),
  "name": "Pidgeot",
  "description": "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
  "type": "bird",
  "attack": 80,
  "height": 15
}
Fetched 5 record(s) in 14ms
```

## Buscar e alterar um pokemon
```
be-mean-pokemons> var query = {name: 'Pidgeot'}
be-mean-pokemons> var pokemon = db.pokemons.findOne(query)
be-mean-pokemons> pokemon
{
  "_id": ObjectId("564288bc862eeea45f8afd24"),
  "name": "Pidgeot",
  "description": "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
  "type": "bird",
  "attack": 80,
  "height": 15
}
be-mean-pokemons> pokemon.description = 'Flying'
Flying
be-mean-pokemons> db.pokemons.save(pokemon)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564288bc862eeea45f8afd24"),
  "name": "Pidgeot",
  "description": "Flying",
  "type": "bird",
  "attack": 80,
  "height": 15
}
Fetched 1 record(s) in 1ms
```
