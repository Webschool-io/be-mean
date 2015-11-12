##LISTANDO TODOS OS POKEMONS COM ALTURA MENOR QUE 0.5 (NO MEU CASO USEI NUMEROS INTEIROS NO DIA DE CADASTRAR)
Zeus(mongod-3.0.7) be-mean-pokemons> var query = {height:{$lt: 5}}
Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642b225db49f9570d8a5fb1"),
  "name": "Butterfree",
  "description": "Borboleta kawai kkkk",
  "type": "wind",
  "attack": 44,
  "defense": 44,
  "height": 3
}
{
  "_id": ObjectId("5642b2dddb49f9570d8a5fb3"),
  "name": "Rattata",
  "description": "Apenas um rato",
  "type": "normal",
  "attack": 27,
  "defense": 30,
  "height": 2
}
{
  "_id": ObjectId("5642b301db49f9570d8a5fb4"),
  "name": "Raticate",
  "description": "Mestre Splinter antes da radiacao",
  "type": "normal",
  "attack": 44,
  "defense": 36,
  "height": 3
}
Fetched 3 record(s) in 2ms
Zeus(mongod-3.0.7) be-mean-pokemons> var query = {height:{$lt: 5}}
Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642b225db49f9570d8a5fb1"),
  "name": "Butterfree",
  "description": "Borboleta kawai kkkk",
  "type": "wind",
  "attack": 44,
  "defense": 44,
  "height": 3
}
{
  "_id": ObjectId("5642b2dddb49f9570d8a5fb3"),
  "name": "Rattata",
  "description": "Apenas um rato",
  "type": "normal",
  "attack": 27,
  "defense": 30,
  "height": 2
}
{
  "_id": ObjectId("5642b301db49f9570d8a5fb4"),
  "name": "Raticate",
  "description": "Mestre Splinter antes da radiacao",
  "type": "normal",
  "attack": 44,
  "defense": 36,
  "height": 3
}
Fetched 3 record(s) in 2ms

#LISTANDO TODOS OS POKEMONS COM ALTURA MAIOR OU IGUAL A 0.5

Zeus(mongod-3.0.7) be-mean-pokemons> var query = {height:{$lte: 5}}
Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642b225db49f9570d8a5fb1"),
  "name": "Butterfree",
  "description": "Borboleta kawai kkkk",
  "type": "wind",
  "attack": 44,
  "defense": 44,
  "height": 3
}
{
  "_id": ObjectId("5642b2dddb49f9570d8a5fb3"),
  "name": "Rattata",
  "description": "Apenas um rato",
  "type": "normal",
  "attack": 27,
  "defense": 30,
  "height": 2
}
{
  "_id": ObjectId("5642b301db49f9570d8a5fb4"),
  "name": "Raticate",
  "description": "Mestre Splinter antes da radiacao",
  "type": "normal",
  "attack": 44,
  "defense": 36,
  "height": 3
}
Fetched 3 record(s) in 2ms


## LISTANDO POKEMONS COM ALTURA MENOR QUE 5 E DO TIPO GRAMA (NO MEU CASO O TIPO GRAMA NAO EXISTE)
Zeus(mongod-3.0.7) be-mean-pokemons> var query1 = {height:{$lte:5}}
Zeus(mongod-3.0.7) be-mean-pokemons> var query2 = {type: 'grama'}
Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.find({$and: [query1, query2]})
Fetched 0 record(s) in 1ms

## LISTANDO POKEMONS COM NOME PIKACHU E ALTURA MENOR OU IGUAL A 0.5

Zeus(mongod-3.0.7) be-mean-pokemons> var query = {$or: [{name:'Pikachu'}, {attack:{$lte:5}}]}
Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
Fetched 0 record(s) in 1ms

## LISTANDO TODOS OS POKEMONS COM ATTACK MAIOR QUE 48 E HEIGHT MENOR OU IGUAL A 0.5 (naum tem kkk)

Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.find({$and:[query1, query2]})
Fetched 0 record(s) in 1ms



## LISTANDO MEUS POKEMONS PARA CONFERENCIA

Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5642b130db49f9570d8a5fb0"),
  "name": "charizard",
  "description": "Dragao do rabo pegando fogo",
  "type": "fire",
  "attack": 68,
  "defense": 55,
  "height": 6
}
{
  "_id": ObjectId("5642b225db49f9570d8a5fb1"),
  "name": "Butterfree",
  "description": "Borboleta kawai kkkk",
  "type": "wind",
  "attack": 44,
  "defense": 44,
  "height": 3
}
{
  "_id": ObjectId("5642b281db49f9570d8a5fb2"),
  "name": "Blastoise",
  "description": "Tartaruga fodona com canhoes nas costas",
  "type": "water",
  "attack": 68,
  "defense": 63,
  "height": 7
}
{
  "_id": ObjectId("5642b2dddb49f9570d8a5fb3"),
  "name": "Rattata",
  "description": "Apenas um rato",
  "type": "normal",
  "attack": 27,
  "defense": 30,
  "height": 2
}
{
  "_id": ObjectId("5642b301db49f9570d8a5fb4"),
  "name": "Raticate",
  "description": "Mestre Splinter antes da radiacao",
  "type": "normal",
  "attack": 44,
  "defense": 36,
  "height": 3
}
{
  "_id": ObjectId("5642b33edb49f9570d8a5fb5"),
  "name": "Arbok",
  "description": "Serpente que fugiu do Eden",
  "type": "poison",
  "attack": 68,
  "defense": 64,
  "height": 6
}
{
  "_id": ObjectId("5642b3a3db49f9570d8a5fb6"),
  "name": "Onix",
  "description": "Cobra de pedra",
  "type": "rock",
  "attack": 54,
  "defense": 76,
  "height": 6
}

