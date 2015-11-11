# MongoDB - Aula 02 - Exercício
autor: Thiago Magalhães

## Criando database (passo 1)
> use be-mean-pokemons

## Listagem das databases (passo 2)
> show dbs
be-mean  0.078GB
local    0.078GB

## Listagem das coleções (passo 3)
> db.createCollection("pokemon")
{ "ok" : 1 }
> show collections
pokemon
system.indexes

## Cadastro dos pokemons (passo 4)
> var pokemon  = {'name': 'Yveltal', 'description': 'When this legendary Pokemon wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures', 'attack': 7, 'defense': 4, 'height': 5.8}
> db.pokemon.insert(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon  = {'name': 'Charmander', 'description': 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokemon becomes enraged, the flame burns fiercely.', 'attack': 3, 'defense': 2, 'height': 0.6}
> db.pokemon.insert(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon  = {'name': 'Bulbasaur', 'description': 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the suns rays, the seed grows progressively larger.', 'attack': 3, 'defense': 2, 'height': 0.7}
> db.pokemon.insert(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon  = {'name': 'Squirtle', 'description': 'Squirtle shell is not merely used for protection. The shells rounded shape and the grooves on its superface help minimize resistance in water, enabling this Pokemon to swim at hght speeds.', 'attack': 3, 'defense': 3, 'height': 0.5}
> db.pokemon.insert(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon  = {'name': 'Pikachu', 'description': 'Nao vou colocar agora só para eu mudar depois.', 'attack': 3, 'defense': 2, 'height': 0.4}
> db.pokemon.insert(pokemon)
WriteResult({ "nInserted" : 1 })


## Lista dos pokemons (passo 5)
> db.pokemon.find({})
{ "_id" : ObjectId("564365c14983f734887d92ac"), "name" : "Yveltal", "description" : "When this legendary Pokemon wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures", "attack" : 7, "defense" : 4, "height" : 5.8 }
{ "_id" : ObjectId("564365cc4983f734887d92ad"), "name" : "Charmander", "description" : "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokemon becomes enraged, the flame burns fiercely.", "attack" : 3, "defense" : 2, "height" : 0.6 }
{ "_id" : ObjectId("564365d54983f734887d92ae"), "name" : "Bulbasaur", "description" : "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the suns rays, the seed grows progressively larger.", "attack" : 3, "defense" : 2, "height" : 0.7 }
{ "_id" : ObjectId("564365de4983f734887d92af"), "name" : "Squirtle", "description" : "Squirtle shell is not merely used for protection. The shells rounded shape and the grooves on its superface help minimize resistance in water, enabling this Pokemon to swim at hght speeds.", "attack" : 3, "defense" : 3, "height" : 0.5 }
{ "_id" : ObjectId("564365e74983f734887d92b0"), "name" : "Pikachu", "description" : "Nao vou colocar agora só para eu mudar depois.", "attack" : 3, "defense" : 2, "height" : 0.4 }


## Pikachu (passo 6)
> var poke = db.pokemon.findOne({name: 'Pikachu'})
> poke
{
  "_id" : ObjectId("564365e74983f734887d92b0"),
  "name" : "Pikachu",
  "description" : "Nao vou colocar agora só para eu mudar depois.",
  "attack" : 3,
  "defense" : 2,
  "height" : 0.4
}


## Atualização do Pikachu (passo 6)
> poke.description = 'Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, its evidence that this Pokemon mistook the intensity of its charge.'
Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, its evidence that this Pokemon mistook the intensity of its charge.

> db.pokemon.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })