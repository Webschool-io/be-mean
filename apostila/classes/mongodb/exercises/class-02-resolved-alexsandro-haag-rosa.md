MongoDB - Aula 02 - Exercício

autor: Alexsandro Haag da Rosa


1. Crie uma database chamada be-mean-pokemons:

mongo be-mean-pokemons


2. Liste quais databases você possui nesse servidor:

katsumoto(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram  0.078GB
local              0.078GB
be-mean-pokemons   0.078GB


	
3. Liste quais coleções você possui nessa database:

katsumoto(mongod-3.0.7) be-mean-pokemons> show collections
pokemons        0.001MB / 0.008MB
system.indexes  0.000MB / 0.008MB


	
4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height:

katsumoto(mongod-3.0.7) be-mean-pokemons> var pokemon = [
... {nome: "Exploud",description: "Exploud provoca terremotos com os tremores que ela cria por berros.", type: "Loud Noise", attack :48, height: 1.5},
... {nome: "Bulbasaur",description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", type: "Grass", attack :20, height: 0.7},
... {nome: "Ivysaur",description: "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.", type: "Grass", attack :60, height:1.0 },
... {nome: "Venusaur",description: "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people", type: "Poison", attack :40, height:2.0 },
... {nome: "Charmander",description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.", type: "Fire", attack : 30, height: 0.6}
... ];

katsumoto(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemon)
Inserted 1 record(s) in 13ms
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


5. Liste os pokemons existentes na sua coleção:

katsumoto(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56436edbadbd043a741ef232"),
  "nome": "Exploud",
  "description": "Exploud provoca terremotos com os tremores que ela cria por berros.",
  "type": "Loud Noise",
  "attack": 48,
  "height": 1.5
}
{
  "_id": ObjectId("56436edbadbd043a741ef233"),
  "nome": "Bulbasaur",
  "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "type": "Grass",
  "attack": 20,
  "height": 0.7
}
{
  "_id": ObjectId("56436edbadbd043a741ef234"),
  "nome": "Ivysaur",
  "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
  "type": "Grass",
  "attack": 60,
  "height": 1
}
{
  "_id": ObjectId("56436edbadbd043a741ef235"),
  "nome": "Venusaur",
  "description": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people",
  "type": "Poison",
  "attack": 40,
  "height": 2
}
{
  "_id": ObjectId("56436edbadbd043a741ef236"),
  "nome": "Charmander",
  "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
  "type": "Fire",
  "attack": 30,
  "height": 0.6
}
Fetched 5 record(s) in 5ms


 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`:

katsumoto(mongod-3.0.7) be-mean-pokemons> var query = {nome:'Bulbasaur'}
katsumoto(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)


	

7. Modifique sua `description` e salvê-o:

katsumoto(mongod-3.0.7) be-mean-pokemons> poke.description = 'Este aqui demoli o Picatchu.'
Este aqui demoli o Picatchu.

katsumoto(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 25ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})




