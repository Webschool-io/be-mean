# MongoDB - Aula 01 - Exercício
autor: PABLO BOZZI FLORES OLIVEIRA

## Criando database be-mean-pokemons
mean(mongod-3.0.7) be-mean> use be-mean-pokemons
switched to db be-mean-pokemons
mean(mongod-3.0.7) be-mean-pokemons> db
be-mean-pokemons

## Listando databases
mean(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean  0.078GB
local    0.078GB

## Inserindo 5 pokemons
mean(mongod-3.0.7) be-mean-pokemons> var p={name:'pickachu',description:'Fodão',attack:10,defense:10,height:0.5}
mean(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(p)
Inserted 1 record(s) in 119ms
WriteResult({
  "nInserted": 1
})
mean(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5642aab3b01582a9e4951d66"),
  "name": "pickachu",
  "description": "Fodão",
  "attack": 10,
  "defense": 10,
  "height": 0.5
}
Fetched 1 record(s) in 0ms
mean(mongod-3.0.7) be-mean-pokemons> var p={name:'2',description:'2',attack:9,defense:9,height:0.6}
mean(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(p)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
mean(mongod-3.0.7) be-mean-pokemons> var p={name:'3',description:'3',attack:11,defense:11,height:0.6}
mean(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(p)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
mean(mongod-3.0.7) be-mean-pokemons> var p={name:'4',description:'4',attack:8,defense:15,height:0.8}
mean(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(p)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
mean(mongod-3.0.7) be-mean-pokemons> var p={name:'5',description:'5',attack:11,defense:8,height:0.6}
mean(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(p)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

## Listando pokemons inseridos
mean(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5642aab3b01582a9e4951d66"),
  "name": "pickachu",
  "description": "Fodão",
  "attack": 10,
  "defense": 10,
  "height": 0.5
}
{
  "_id": ObjectId("5642aad2b01582a9e4951d67"),
  "name": "2",
  "description": "2",
  "attack": 9,
  "defense": 9,
  "height": 0.6
}
{
  "_id": ObjectId("5642aae3b01582a9e4951d68"),
  "name": "3",
  "description": "3",
  "attack": 11,
  "defense": 11,
  "height": 0.6
}
{
  "_id": ObjectId("5642aafab01582a9e4951d69"),
  "name": "4",
  "description": "4",
  "attack": 8,
  "defense": 15,
  "height": 0.8
}
{
  "_id": ObjectId("5642ab12b01582a9e4951d6a"),
  "name": "5",
  "description": "5",
  "attack": 11,
  "defense": 8,
  "height": 0.6
}
Fetched 5 record(s) in 2ms

## Buscando o pickachu pelo nome e armazenando na variável poke
mean(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name:'pickachu'})
mean(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5642aab3b01582a9e4951d66"),
  "name": "pickachu",
  "description": "Fodão",
  "attack": 10,
  "defense": 10,
  "height": 0.5
}

## Alterando a propriedade descriprion do pickachu
mean(mongod-3.0.7) be-mean-pokemons> poke.description='Fodão da hora!!!'
Fodão da hora!!!
mean(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5642aab3b01582a9e4951d66"),
  "name": "pickachu",
  "description": "Fodão da hora!!!",
  "attack": 10,
  "defense": 10,
  "height": 0.5
}

## Salvando o pickachu com a nova description
mean(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

## Indo dormir!
mean(mongod-3.0.7) be-mean-pokemons> ^C
bye
