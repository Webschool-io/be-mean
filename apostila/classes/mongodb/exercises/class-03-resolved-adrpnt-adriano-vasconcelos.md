# MongoDB - Aula 01 - Exercício
autor: ADRIANO VASCONCELOS

## Liste todos Pokemons
```
db.pokemons.find();
{
  "_id": ObjectId("564379f8750d5acfe9690da9"),
  "name": "Butterfree",
  "description": "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
  "type": "inseto",
  "attack": 45,
  "defense": 50,
  "height": 0.3,
  "heigth": 0.3
}
{
  "_id": ObjectId("56437b1d750d5acfe9690daa"),
  "name": "Arbok",
  "description": "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
  "type": "veneno",
  "attack": 85,
  "defense": 69,
  "height": 0.9
}
{
  "_id": ObjectId("56437bb5750d5acfe9690dab"),
  "name": "Ninetales",
  "description": "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
  "type": "fogo",
  "attack": 76,
  "defense": 75,
  "height": 0.3
}
{
  "_id": ObjectId("56437c43750d5acfe9690dac"),
  "name": "Grimer",
  "description": "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
  "type": "veneno",
  "attack": 80,
  "defense": 50,
  "height": 0.2
}
{
  "_id": ObjectId("56437cbb750d5acfe9690dad"),
  "name": "Dewgong",
  "description": "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.",
  "type": "água",
  "attack": 70,
  "defense": 80,
  "height": 0.4
}
{
  "_id": ObjectId("56437e14750d5acfe9690daf"),
  "name": "Beedrill",
  "description": "It can take down any opponent with its powerful poi son stingers.",
  "type": "inseto",
  "attack": 90,
  "defense": 40,
  "height": 0.2
}
{
  "_id": ObjectId("56437e14750d5acfe9690db0"),
  "name": "Nidorina",
  "description": "When NIDORINA are with their friends or family, they keep their barbs tucked away to prevent hurting each other.",
  "type": "veneno",
  "attack": 62,
  "defense": 67,
  "height": 0.2
}
Fetched 7 record(s) in 6ms
```

## Liste todos Pokemons com a altura menor que 0.5;
```
var query = {"height": {$lt : 0.5}};
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("564379f8750d5acfe9690da9"),
  "name": "Butterfree",
  "description": "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
  "type": "inseto",
  "attack": 45,
  "defense": 50,
  "height": 0.3,
  "heigth": 0.3
}
{
  "_id": ObjectId("56437bb5750d5acfe9690dab"),
  "name": "Ninetales",
  "description": "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
  "type": "fogo",
  "attack": 76,
  "defense": 75,
  "height": 0.3
}
{
  "_id": ObjectId("56437c43750d5acfe9690dac"),
  "name": "Grimer",
  "description": "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
  "type": "veneno",
  "attack": 80,
  "defense": 50,
  "height": 0.2
}
{
  "_id": ObjectId("56437cbb750d5acfe9690dad"),
  "name": "Dewgong",
  "description": "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.",
  "type": "água",
  "attack": 70,
  "defense": 80,
  "height": 0.4
}
{
  "_id": ObjectId("56437e14750d5acfe9690daf"),
  "name": "Beedrill",
  "description": "It can take down any opponent with its powerful poi son stingers.",
  "type": "inseto",
  "attack": 90,
  "defense": 40,
  "height": 0.2
}
{
  "_id": ObjectId("56437e14750d5acfe9690db0"),
  "name": "Nidorina",
  "description": "When NIDORINA are with their friends or family, they keep their barbs tucked away to prevent hurting each other.",
  "type": "veneno",
  "attack": 62,
  "defense": 67,
  "height": 0.2
}
Fetched 6 record(s) in 1ms
```

## Liste todos Pokemons com a altura maior ou igual que 0.5;
```
var query = {"height": {$gte : 0.5}};
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("56437b1d750d5acfe9690daa"),
  "name": "Arbok",
  "description": "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
  "type": "veneno",
  "attack": 85,
  "defense": 69,
  "height": 0.9
}
Fetched 1 record(s) in 1ms
```

## Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama;
```
var query = {$and: [{"height": {$lte : 0.5}}, {"type": "grama"}]};
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query);
Fetched 0 record(s) in 0ms
```

## Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 48;
```
var query = {$or: [{"name": "Pikachu"}, {"attack": {$lte: 48}}]};
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("564379f8750d5acfe9690da9"),
  "name": "Butterfree",
  "description": "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
  "type": "inseto",
  "attack": 45,
  "defense": 50,
  "height": 0.3,
  "heigth": 0.3
}
Fetched 1 record(s) in 1ms
```

## Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com height menor ou igual que 0.5;
```
var query = {$and: [{"height": {$lte : 0.5}}, {"attack": {$gte: 48}}]};
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query);
{
  "_id": ObjectId("56437bb5750d5acfe9690dab"),
  "name": "Ninetales",
  "description": "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
  "type": "fogo",
  "attack": 76,
  "defense": 75,
  "height": 0.3
}
{
  "_id": ObjectId("56437c43750d5acfe9690dac"),
  "name": "Grimer",
  "description": "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
  "type": "veneno",
  "attack": 80,
  "defense": 50,
  "height": 0.2
}
{
  "_id": ObjectId("56437cbb750d5acfe9690dad"),
  "name": "Dewgong",
  "description": "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.",
  "type": "água",
  "attack": 70,
  "defense": 80,
  "height": 0.4
}
{
  "_id": ObjectId("56437e14750d5acfe9690daf"),
  "name": "Beedrill",
  "description": "It can take down any opponent with its powerful poi son stingers.",
  "type": "inseto",
  "attack": 90,
  "defense": 40,
  "height": 0.2
}
{
  "_id": ObjectId("56437e14750d5acfe9690db0"),
  "name": "Nidorina",
  "description": "When NIDORINA are with their friends or family, they keep their barbs tucked away to prevent hurting each other.",
  "type": "veneno",
  "attack": 62,
  "defense": 67,
  "height": 0.2
}
Fetched 5 record(s) in 7ms
```
