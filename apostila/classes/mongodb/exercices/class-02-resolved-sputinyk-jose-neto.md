# MongoDB - Aula 02 - Exercício

## 1. Crie uma database chamada be-mean-pokemons
use be-mean-pokemons

## 2. Liste quais databases você possui nesse servidor
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> show dbs
local    0.078GB
be-mean  0.078GB

## 3. Liste quais coleções você possui nessa database
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> show collections

## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height
db.pokemons.save({'name':'Pikachu','description':'Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it\'s evidence that this Pokémon mistook the intensity of its charge.','type': 'Eletric', attack: 30, defense: 20, height: 0.4})
Inserted 1 record(s) in 5ms
WriteResult({
  "nInserted": 1
})
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.save({'name':'Wartortle','description':'Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon\'s toughness as a battler.','type': 'Water', attack: 30, defense: 40, height: 1.0})
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.save({'name':'Metapod','description':'The shell covering this Pokémon\'s body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.','type': 'Bug', attack: 10, defense: 30, height: 0.7})
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.save({'name':'Butterfree','description':'Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.','type': 'Bug', attack: 20, defense: 20, height: 1.1})
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.save({'name':'Weedle','description':'Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).','type': 'Bug', attack: 20, defense: 20, height: 0.3})
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})

## 5. Liste os pokemons existentes na sua coleção
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5645560b90461003350c7041"),
  "name": "Pikachu",
  "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
  "type": "Eletric",
  "attack": 30,
  "defense": 20,
  "height": 0.4
}
{
  "_id": ObjectId("5645560b90461003350c7042"),
  "name": "Wartortle",
  "description": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
  "type": "Water",
  "attack": 30,
  "defense": 40,
  "height": 1
}
{
  "_id": ObjectId("5645560b90461003350c7043"),
  "name": "Metapod",
  "description": "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
  "type": "Bug",
  "attack": 10,
  "defense": 30,
  "height": 0.7
}
{
  "_id": ObjectId("5645560b90461003350c7044"),
  "name": "Butterfree",
  "description": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
  "type": "Bug",
  "attack": 20,
  "defense": 20,
  "height": 1.1
}
{
  "_id": ObjectId("5645560e90461003350c7045"),
  "name": "Weedle",
  "description": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
  "type": "Bug",
  "attack": 20,
  "defense": 20,
  "height": 0.3
}
Fetched 5 record(s) in 11ms

## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name:'Weedle'})

## 7. Modifique sua `description` e salvê-o
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> poke.description = poke.description + ' Editado!!!'
Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose). Editado!!!
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 12ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
vagrant-ubuntu-trusty-64(mongod-3.0.7) be-mean-pokemons> 