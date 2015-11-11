# MongoDB - Aula 02 - Exercício
autor: Rodolfo Antunes Dias Cintra

## Listagem das databases (passo 2)

rodolfocintra(mongod-3.0.7) test> use be-mean-pokemons
switched to db be-mean-pokemons
rodolfocintra(mongod-3.0.7) be-mean-pokemons> show dbs
be-meam-instagram → 0.078GB
be-mean           → 0.078GB
local             → 0.078GB



## Listagem das coleções (passo 3)
rodolfocintra(mongod-3.0.7) be-mean-pokemons> show collections

## Cadastro dos pokemons (passo 4)

rodolfocintra(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Pikachu','description':'Rato elétrico bem fofinho','type':'eletric',atrack:55,height:0.4}
rodolfocintra(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 348ms
WriteResult({
  "nInserted": 1
})
rodolfocintra(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Bulbassauro','description':'Chicote de trepadeira','type':'grama',atrack:49,height:0.4}
rodolfocintra(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
rodolfocintra(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Charmander','description':'Esse é o cão chupando manga de fofinho','type':'fogo',atrack:52,height:0.6}
rodolfocintra(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
rodolfocintra(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Squirtle','description':'ejeta água que passarinho não bebe','type':'água',atrack:48,height:0.5}
rodolfocintra(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
rodolfocintra(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Caterpie','description':'Larva lutadora','type':'inseto',atrack:30,height:0.3}
rodolfocintra(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
rodolfocintra(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Ivysaur','description':'Bixinho troncudinho','type':'flor',atrack:62,height:1.0}
rodolfocintra(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
rodolfocintra(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Venusaur','description':'Bixo troncutão','type':'flor',atrack:82,height:2.0}
rodolfocintra(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
rodolfocintra(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Charizard','description':'Dragao do bozo','type':'fogo',atrack:84,height:1.7}
rodolfocintra(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
rodolfocintra(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Wartortle','description':'Tartaruga brabinha','type':'tartaruga',atrack:63,height:1.0}
rodolfocintra(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})



## Lista dos pokemons (passo 5)

rodolfocintra(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("564297f21cac0155e823527d"),
  "name": "Pikachu",
  "description": "Rato elétrico bem fofinho",
  "type": "eletric",
  "atrack": 55,
  "height": 0.4
}
{
  "_id": ObjectId("564298851cac0155e823527e"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "atrack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("5642989b1cac0155e823527f"),
  "name": "Charmander",
  "description": "Esse é o cão chupando manga de fofinho",
  "type": "fogo",
  "atrack": 52,
  "height": 0.6
}
{
  "_id": ObjectId("564298ae1cac0155e8235280"),
  "name": "Squirtle",
  "description": "ejeta água que passarinho não bebe",
  "type": "água",
  "atrack": 48,
  "height": 0.5
}
{
  "_id": ObjectId("564298c81cac0155e8235281"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "atrack": 30,
  "height": 0.3
}
{
  "_id": ObjectId("564298e61cac0155e8235282"),
  "name": "Ivysaur",
  "description": "Bixinho troncudinho",
  "type": "flor",
  "atrack": 62,
  "height": 1
}
{
  "_id": ObjectId("564298fa1cac0155e8235283"),
  "name": "Venusaur",
  "description": "Bixo troncutão",
  "type": "flor",
  "atrack": 82,
  "height": 2
}
{
  "_id": ObjectId("564299131cac0155e8235284"),
  "name": "Charizard",
  "description": "Dragao do bozo",
  "type": "fogo",
  "atrack": 84,
  "height": 1.7
}
{
  "_id": ObjectId("564299271cac0155e8235285"),
  "name": "Wartortle",
  "description": "Tartaruga brabinha",
  "type": "tartaruga",
  "atrack": 63,
  "height": 1
}
Fetched 9 record(s) in 3ms
rodolfocintra(mongod-3.0.7) be-mean-pokemons> 


## buscando Venusaur (passo 6)
rodolfocintra(mongod-3.0.7) be-mean-pokemons> var query = {name:'Venusaur'}
rodolfocintra(mongod-3.0.7) be-mean-pokemons> var p = db.pokemons.findOne(query)
rodolfocintra(mongod-3.0.7) be-mean-pokemons> p
{
  "_id": ObjectId("564298fa1cac0155e8235283"),
  "name": "Venusaur",
  "description": "Bixo troncutão",
  "type": "flor",
  "atrack": 82,
  "height": 2
}




## Atualização do Venusaur (passo 7)

rodolfocintra(mongod-3.0.7) be-mean-pokemons> p.description = 'Bixinho troncudão'
Bixinho troncudão
rodolfocintra(mongod-3.0.7) be-mean-pokemons> p
{
  "_id": ObjectId("564298fa1cac0155e8235283"),
  "name": "Venusaur",
  "description": "Bixinho troncudão",
  "type": "flor",
  "atrack": 82,
  "height": 2
}
rodolfocintra(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(p)
Updated 1 existing record(s) in 4ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
rodolfocintra(mongod-3.0.7) be-mean-pokemons> 
