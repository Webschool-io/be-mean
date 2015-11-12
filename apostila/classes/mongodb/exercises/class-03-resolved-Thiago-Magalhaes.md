# MongoDB - Aula 03 - Exercício
autor: Thiago Magalhães

## Liste todos Pokemons com a altura **menor que** 0.5;
> var query = {height: {$lt: 0.5}}
> query
{ "height" : { "$lt" : 0.5 } }
> db.pokemon.find(query)
{ "_id" : ObjectId("564365e74983f734887d92b0"), "name" : "Pikachu", "description" : "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, its evidence that this Pokemon mistook the intensity of its charge.", "attack" : 3, "defense" : 2, "height" : 0.4 }


## Liste todos Pokemons com a altura **maior ou igual que** 0.5
> var query = {height: {$gte: 0.5}}
> query
{ "height" : { "$gte" : 0.5 } }
> db.pokemon.find(query)
{ "_id" : ObjectId("564365c14983f734887d92ac"), "name" : "Yveltal", "description" : "When this legendary Pokemon wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures", "attack" : 7, "defense" : 4, "height" : 5.8 }
{ "_id" : ObjectId("564365cc4983f734887d92ad"), "name" : "Charmander", "description" : "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokemon becomes enraged, the flame burns fiercely.", "attack" : 3, "defense" : 2, "height" : 0.6 }
{ "_id" : ObjectId("564365d54983f734887d92ae"), "name" : "Bulbasaur", "description" : "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the suns rays, the seed grows progressively larger.", "attack" : 3, "defense" : 2, "height" : 0.7 }
{ "_id" : ObjectId("564365de4983f734887d92af"), "name" : "Squirtle", "description" : "Squirtle shell is not merely used for protection. The shells rounded shape and the grooves on its superface help minimize resistance in water, enabling this Pokemon to swim at hght speeds.", "attack" : 3, "defense" : 3, "height" : 0.5 }


## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama
> var query = {$and: [{height: {$lte: 0.5}}, {type: 'grass'}]}
> query
{
  "$and" : [
    {
      "height" : {
        "$lte" : 0.5
      }
    },
    {
      "type" : "grass"
    }
  ]
}
> db.pokemon.find(query)


## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5
> var query = {$or: [{name: 'Pikachu'}, {attack: {$lte: 0.5}}]}
> query
{
  "$or" : [
    {
      "name" : "Pikachu"
    },
    {
      "attack" : {
        "$lte" : 0.5
      }
    }
  ]
}
> db.pokemon.find(query)
{ "_id" : ObjectId("564365e74983f734887d92b0"), "name" : "Pikachu", "description" : "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, its evidence that this Pokemon mistook the intensity of its charge.", "attack" : 3, "defense" : 2, "height" : 0.4 }


## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5
> var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
> query
{
  "$and" : [
    {
      "attack" : {
        "$gte" : 48
      }
    },
    {
      "height" : {
        "$lte" : 0.5
      }
    }
  ]
}
> db.pokemon.find(query)