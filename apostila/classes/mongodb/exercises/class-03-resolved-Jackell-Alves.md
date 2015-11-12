MondoDb - Aula 03 - Exercício
autor: Jackell Alves

Liste todos Pokemons com a altura menor que 0.5
fayerxc(mongod-3.0.7) be-mean-pokemons> var query = { height: { $lt: 0.5 }}
fayerxc(mongod-3.0.7) be-mean-pokemons> db.pokemon.find(query)
{
  "_id": ObjectId("564372ef821ac90657925b7c"),
  "name": "Paras",
  "description": "Paras tem cogumelos parasitas que crescem em sua parte traseira chamado tochukaso.",
  "type": "Mushroom",
  "attack": 70,
  "defense": 55,
  "height": 0.3
}
{
  "_id": ObjectId("56437284821ac90657925b7b"),
  "name": "Paras",
  "description": "Paras tem cogumelos parasitas que crescem em sua parte traseira chamado tochukaso.",
  "type": "Mushroom",
  "attack": 70,
  "height": 0.3,
  "defense": 55,
  "descriptions": "Eles crescem grande desenhando nutrientes a partir deste host Bug Pokémon."
}
Fetched 2 record(s) in 42ms

Liste todos Pokemons com a altura maior ou igual que 0.5
fayerxc(mongod-3.0.7) be-mean-pokemons> var query = { height: { $gte: 0.5 } }
fayerxc(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564375d5821ac90657925b82"),
  "name": "Arbok",
  "description": "Este Pokémon é terrivelmente forte, a fim de contrair coisas com seu corpo.",
  "type": "cobra",
  "attack": 85,
  "defense": 69,
  "height": 3.5
}
Fetched 1 record(s) in 26ms

Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama
fayerxc(mongod-3.0.7) be-mean-pokemons> var query = { $and: [ { height: { $lte: 0.5 } }, { type: 'Grama' } ] };
fayerxc(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5644b144fc24cdcda5d10cdb"),
  "name": "Bulbasaur",
  "description": "Há uma semente em suas costas.",
  "type": "Grama",
  "attack": 49,
  "defense": 49,
  "height": 0.4
}
Fetched 1 record(s) in 1ms

Liste todos Pokemons com o name 'Pikachu' OU com attack menor ou igual que 0.5
fayerxc(mongod-3.0.7) be-mean-pokemons> var query = { $or: [ { name: 'Pikachu' }, { attack: { $lte: 0.5 } } ] }
fayerxc(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5644b7d9fc24cdcda5d10cdd"),
  "name": "Pikachu",
  "description": "Sempre que Pikachu se depara com algo novo, que explode com um choque de eletricidade.",
  "type": "Mouse",
  "attack": 55,
  "defense": 40,
  "height": 0.5
}
Fetched 2 record(s) in 1ms

Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com height menor ou igual que 0.5
fayerxc(mongod-3.0.7) be-mean-pokemons> var query = { $and: [ { attack: { $gte:48 } }, { height: { $lte: 0.5 } } ] }
fayerxc(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("564372ef821ac90657925b7c"),
  "name": "Paras",
  "description": "Paras tem cogumelos parasitas que crescem em sua parte traseira chamado tochukaso.",
  "type": "Mushroom",
  "attack": 70,
  "defense": 55,
  "height": 0.3
}
{
  "_id": ObjectId("5644b144fc24cdcda5d10cdb"),
  "name": "Bulbasaur",
  "description": "Há uma semente em suas costas.",
  "type": "Grama",
  "attack": 49,
  "defense": 49,
  "height": 0.4
}
Fetched 5 record(s) in 3ms
