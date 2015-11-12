# MongoDB - Aula 02 - Exercicio
autor: Edno Fedulo

##Criar database
```
ubuntu-VirtualBox(mongod-3.0.7) test> use be-mean-pokemons
switched to db be-mean-pokemons
```
##Listar databases
```
ubuntu-VirtualBox(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean  0.078GB
local    0.078GB
```
##Listar coleções

```
ubuntu-VirtualBox(mongod-3.0.7) be-mean-pokemons> show collections
```
##Inserir pelo menos 5 pokemons
```
ubuntu@ubuntu-VirtualBox:~$ mongoimport --db be-mean-pokemons --collection pokemons --drop --file /home/ubuntu/Desktop/pokemons.json --jsonArray
2015-11-11T13:22:09.085-0300	connected to: localhost
2015-11-11T13:22:09.085-0300	dropping: be-mean-pokemons.pokemons
2015-11-11T13:22:09.229-0300	imported 6 documents
```
##Lisar pokemons existentes
```
ubuntu-VirtualBox(mongod-3.0.7) test> use be-mean-pokemons
switched to db be-mean-pokemons
ubuntu-VirtualBox(mongod-3.0.7) be-mean-pokemons> show collections
pokemons        0.003MB / 0.008MB
system.indexes  0.000MB / 0.008MB
ubuntu-VirtualBox(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56436b31e560d128cc56ee65"),
  "name": "Diglett",
  "attack": 55,
  "defense": 25,
  "height": 0.2,
  "description": "Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables."
}
{
  "_id": ObjectId("56436b31e560d128cc56ee66"),
  "name": "Machop",
  "attack": 80,
  "defense": 50,
  "height": 0.8,
  "description": "Machop's muscles are special—they never get sore no matter how much they are used in exercise. This Pokémon has sufficient power to hurl a hundred adult humans."
}
{
  "_id": ObjectId("56436b31e560d128cc56ee67"),
  "name": "Butterfree",
  "attack": 45,
  "defense": 50,
  "height": 1.1,
  "description": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest."
}
{
  "_id": ObjectId("56436b31e560d128cc56ee68"),
  "name": "Nidoran",
  "attack": 57,
  "defense": 40,
  "height": 0.5,
  "description": "Nidoran has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice."
}
{
  "_id": ObjectId("56436b31e560d128cc56ee69"),
  "name": "Bellsprout",
  "attack": 75,
  "defense": 35,
  "height": 0.7,
  "description": "Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. "
}
{
  "_id": ObjectId("56436b31e560d128cc56ee6a"),
  "name": "Kingler",
  "attack": 130,
  "defense": 115,
  "height": 1.3,
  "description": "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires."
}
Fetched 6 record(s) in 4ms
```
##Selecionar pokemon pelo nome e armazenar na variavel poke
```
ubuntu-VirtualBox(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name: "Nidoran"})
ubuntu-VirtualBox(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("56436b31e560d128cc56ee68"),
  "name": "Nidoran",
  "attack": 57,
  "defense": 40,
  "height": 0.5,
  "description": "Nidoran has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice."
}
```
##Modificar o campo description e salvar
```
ubuntu-VirtualBox(mongod-3.0.7) be-mean-pokemons> poke.description = "alterando descricao"
alterando descricao
ubuntu-VirtualBox(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 7ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
ubuntu-VirtualBox(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name: "Nidoran"})
ubuntu-VirtualBox(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("56436b31e560d128cc56ee68"),
  "name": "Nidoran",
  "attack": 57,
  "defense": 40,
  "height": 0.5,
  "description": "alterando descricao"
}
```
