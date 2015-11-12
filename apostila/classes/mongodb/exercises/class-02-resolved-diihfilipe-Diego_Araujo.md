#CRIANDO A DATABASE BE-MEAN-POKEMONS

Zeus(mongod-3.0.7) be-mean-teste> db.pokemons.insert({'name':'charizard','description':'Dragao do rabo pegando fogo','type':'fire','attack':68,'defense':55,'height':6.0})
Inserted 1 record(s) in 7ms
WriteResult({
  "nInserted": 1
})
Zeus(mongod-3.0.7) be-mean-teste> use be-mean-pokemons
switched to db be-mean-pokemons

#LISTANDO AS DATABASES QUE POSSUO NO SERVIDOR

Zeus(mongod-3.0.7) be-mean-pokemons> show dbs
local         → 0.078GB
be-mean       → 0.078GB
be-mean-teste → 0.078GB
be-mean-pokemons → 0.078GB

#LISTANDO AS COLLECTIONS QUE POSSUO NO SERVIDOR

Zeus(mongod-3.0.7) be-mean-pokemons> show collections
pokemons       → 0.000MB / 0.008MB
system.indexes → 0.000MB / 0.008MB

#INSERINDO OS POKEMONS ZIKAS

Zeus(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Butterfree','description':'Borboleta kawai kkkk','type':'wind','attack':44,'defense':44,'height':3.0}
Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 5ms
WriteResult({
  "nInserted": 1
})
Zeus(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Blastoise','description':'Blastoiseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee','type':'water','attack':68,'defense':63,'height':7.0}
Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 5ms
WriteResult({
  "nInserted": 1
})
Zeus(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Rattata','description':'Apenas um rato','type':'normal','attack':27,'defense':30,'height':2.0}
Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 9ms
WriteResult({
  "nInserted": 1
})
Zeus(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Raticate','description':'Mestre Splinter antes da radiacao','type':'normal','attack':44,'defense':36,'height':3.0}
Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 5ms
WriteResult({
  "nInserted": 1
})
Zeus(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Arbok','description':'Serpente que fugiu do Eden','type':'poison','attack':68,'defense':64,'height':6.0}
Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
Zeus(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Onix','description':'Cobra de pedra','type':'rock','attack':54,'defense':76,'height':6.0}
Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})

#LISTANDO OS POKEMONS ZIKAS NA COLLECTION

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
  "description": "Blastoiseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
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
Fetched 7 record(s) in 7ms

#BUSCANDO OS POKEMONS PELO NOME E ARMAZENANDO NUMA VARIAVEL CHAMADA POKE


Zeus(mongod-3.0.7) be-mean-pokemons> var query = {name: 'Blastoise'}
Zeus(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)

#MODIFICANDO DO JEITO QUE EU QUISER =P
Zeus(mongod-3.0.7) be-mean-pokemons> poke.description = 'Tartaruga fodona com canhoes nas costas'
Tartaruga fodona com canhoes nas costas

#SALVANDO A ZOEIRA

Zeus(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 5ms
WriteResult({
  "nMatched": 1,5
  "nUpserted": 0,
  "nModified": 1
})

#LISTANDO A ZOEIRA SALVA
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
Fetched 7 record(s) in 6ms

