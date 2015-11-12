# MongoDB - Aula 02 - Exercício
autor: Andrew Esteves

##Criar database
```
use be-mean-pokemons
switched to db be-mean-pokemons

```
##Listar databases
```
show dbs;
be-mean → 0.078GB
local   → 0.078GB
```
##Listar coleções

```
show collections
Andrew(mongod-3.0.4) be-mean-pokemons> 

```
##Inserir pelo menos 5 pokemons
```
var pokemons = [{'name': 'Blastoise', 'description': 'Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.', 'attack': 60, 'defense': 80, 'height': 1.6}, {'name': 'Charizard','description': 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.', 'attack': 70, 'defense': 50, 'height': 1.7},{'name': 'Venusaur', 'description': 'There is a large flower on Venusaur back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flowers aroma soothes the emotions of people.', 'attack': 50, 'defense': 80, 'height': 2.0}, {'name': 'Pidgeot','description': 'This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.', 'attack': 75, 'defense': 50, 'height': 1.5}, {'name': 'Golduck', 'description': 'The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer.', 'attack': 90, 'defense': 70, 'height': 1.7}]

db.pokemons.insert(pokemons)
Inserted 1 record(s) in 950ms
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
##Lisar pokemons existentes
```
show collections
pokemons       → 0.002MB / 0.008MB
system.indexes → 0.000MB / 0.008MB

db.pokemons.find();
{
  "_id": ObjectId("56447e617fe9cee4a5bc8adc"),
  "name": "Blastoise",
  "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
  "attack": 60,
  "defense": 80,
  "height": 1.6
}
{
  "_id": ObjectId("56447e617fe9cee4a5bc8add"),
  "name": "Charizard",
  "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
  "attack": 70,
  "defense": 50,
  "height": 1.7
}
{
  "_id": ObjectId("56447e617fe9cee4a5bc8ade"),
  "name": "Venusaur",
  "description": "There is a large flower on Venusaur back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flowers aroma soothes the emotions of people.",
  "attack": 50,
  "defense": 80,
  "height": 2
}
{
  "_id": ObjectId("56447e617fe9cee4a5bc8adf"),
  "name": "Pidgeot",
  "description": "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
  "attack": 75,
  "defense": 50,
  "height": 1.5
}
{
  "_id": ObjectId("56447e617fe9cee4a5bc8ae0"),
  "name": "Golduck",
  "description": "The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer.",
  "attack": 90,
  "defense": 70,
  "height": 1.7
}
Fetched 5 record(s) in 33ms

```
##Selecionar pokemon pelo nome e armazenar na variavel poke
```
var poke = db.pokemons.findOne({name: 'Golduck'});
Andrew(mongod-3.0.4) be-mean-pokemons> poke
{
  "_id": ObjectId("56447e617fe9cee4a5bc8ae0"),
  "name": "Golduck",
  "description": "The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer.",
  "attack": 90,
  "defense": 70,
  "height": 1.7
}

```
##Modificar o campo description e salvar
```
poke.description = 'Description updated';
Description updated
Andrew(mongod-3.0.4) be-mean-pokemons> db.pokemons.save(poke);
Updated 1 existing record(s) in 6ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

db.pokemons.findOne({name:'Golduck'});
{
  "_id": ObjectId("56447e617fe9cee4a5bc8ae0"),
  "name": "Golduck",
  "description": "Description updated",
  "attack": 90,
  "defense": 70,
  "height": 1.7
}
```