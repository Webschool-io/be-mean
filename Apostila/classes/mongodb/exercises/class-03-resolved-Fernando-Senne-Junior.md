'Exercício 3'

'Liste todos os pokemons menor que 0.5'

DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> var query = {height: {$lt: 0.5}}
DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("58b45cbebe365e7ac9eb7c03"),
  "name": "Beedrill",
  "description": "ataca em conjunto com seu enxame mortal",
  "type": "voa",
  "attack": 95,
  "defense": "escudo de abelhas",
  "height": 0.11
}
{
  "_id": ObjectId("58b45d56be365e7ac9eb7c04"),
  "name": "Arcanine",
  "description": "super veloz",
  "type": "tipo atlético",
  "attack": 100,
  "defense": "fulga ultra rápida",
  "height": 0.11
}
Fetched 2 record(s) in 15ms


'Liste todos os pokemons maior ou igual que 0.5'

DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> var query = {height: {$gte:0.5}}
DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("58b45b07be365e7ac9eb7c00"),
  "name": "Blastoise",
  "description": "atira balas de agua",
  "type": "água",
  "attack": 48,
  "defense": "cria um escudo de agua",
  "height": 0.5
}
{
  "_id": ObjectId("58b45baebe365e7ac9eb7c01"),
  "name": "Butterfree",
  "description": "atira flores",
  "type": "voa",
  "attack": 59,
  "defense": "paralisa o oponente",
  "height": 0.7
}
{
  "_id": ObjectId("58b45c4fbe365e7ac9eb7c02"),
  "name": "Arbok",
  "description": "picada venenosa",
  "type": "rastejante",
  "attack": 79,
  "defense": "espiral de aço",
  "height": 0.8
}
Fetched 3 record(s) in 27ms


'Liste todos os pokemons com altura menor ou igual a 0.5 E do tipo grama'
DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> var query = {$and: [{type:"grama"}, {height: {$lte:0.5}}]}
DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 1ms


'EXTRA - Liste todos os pokemons com altura menor ou igual a 0.5 E do tipo VOA'
DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> var query = {$and: [{type:"voa"}, {height: {$lte:0.5}}]}
DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("58b45cbebe365e7ac9eb7c03"),
  "name": "Beedrill",
  "description": "ataca em conjunto com seu enxame mortal",
  "type": "voa",
  "attack": 95,
  "defense": "escudo de abelhas",
  "height": 0.11
}
Fetched 1 record(s) in 10ms

'Liste todos os pokemons com o name Pikachu OU com attack menor ou igual que 0.5'
DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> var query = {$or: [{name:"Pikachu"}, {attack: {$lte: 0.5}}]}
DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 1ms


'EXTRA - Liste todos os pokemons com o name Beedril OU com attack menor ou igual que 0.5'
DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> var query = {$or: [{name:"Beedrill"}, {attack: {$lte: 79}}]}
DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("58b45b07be365e7ac9eb7c00"),
  "name": "Blastoise",
  "description": "atira balas de agua",
  "type": "água",
  "attack": 48,
  "defense": "cria um escudo de agua",
  "height": 0.5
}
{
  "_id": ObjectId("58b45baebe365e7ac9eb7c01"),
  "name": "Butterfree",
  "description": "atira flores",
  "type": "voa",
  "attack": 59,
  "defense": "paralisa o oponente",
  "height": 0.7
}
{
  "_id": ObjectId("58b45c4fbe365e7ac9eb7c02"),
  "name": "Arbok",
  "description": "picada venenosa",
  "type": "rastejante",
  "attack": 79,
  "defense": "espiral de aço",
  "height": 0.8
}
{
  "_id": ObjectId("58b45cbebe365e7ac9eb7c03"),
  "name": "Beedrill",
  "description": "ataca em conjunto com seu enxame mortal",
  "type": "voa",
  "attack": 95,
  "defense": "escudo de abelhas",
  "height": 0.11
}
Fetched 4 record(s) in 31ms


'Liste todos os pokemons com o attack MAIOR OU IGUAL QUE 48 E com height menor ou igual que 0.5'

DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> var query = {$and: [{attack: {$gte:48}}, {height:{$lte: 0.5}}]}
DESKTOP-K2FFG0R(mongod-3.4.2) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("58b45b07be365e7ac9eb7c00"),
  "name": "Blastoise",
  "description": "atira balas de agua",
  "type": "água",
  "attack": 48,
  "defense": "cria um escudo de agua",
  "height": 0.5
}
{
  "_id": ObjectId("58b45cbebe365e7ac9eb7c03"),
  "name": "Beedrill",
  "description": "ataca em conjunto com seu enxame mortal",
  "type": "voa",
  "attack": 95,
  "defense": "escudo de abelhas",
  "height": 0.11
}
{
  "_id": ObjectId("58b45d56be365e7ac9eb7c04"),
  "name": "Arcanine",
  "description": "super veloz",
  "type": "tipo atlético",
  "attack": 100,
  "defense": "fulga ultra rápida",
  "height": 0.11
}
Fetched 3 record(s) in 27ms