# MongoDB - Aula 02 - Exercício
autor: Jefferson William Machado

## Listagem das databases (passo 2)
show dbs
be-mean-instagram  0.078GB
local              0.078GB

## Listagem das coleções (passo 3)
show collections


## Cadastro dos pokemons (passo 4)
var Raticate = {"name": "Raticate", "description": "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.", "attack": 81, "defense": 60, "height": 7}
db.pokemons.insert(Raticate)
WriteResult({ "nInserted" : 1 })

var Spearow = {"name": "Spearow", "description": "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.", "attack": 60, "defense": 30, "height": 3}
db.pokemons.insert(Spearow)
WriteResult({ "nInserted" : 1 })

var Fearow = {"name": "Fearow", "description": "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.", "attack": 90, "defense": 65, "height": 12}
db.pokemons.insert(Fearow)
WriteResult({ "nInserted" : 1 })

var Ekans = {"name": "Ekans", "description": "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.", "attack": 60, "defense": 44, "height": 20}
db.pokemons.insert(Ekans)
WriteResult({ "nInserted" : 1 })

var Arbok = {"name": "Arbok", "description": "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.", "attack": 85, "defense": 69, "height": 35}
db.pokemons.insert(Arbok)
WriteResult({ "nInserted" : 1 })

var Pikachu = {"name": "Pikachu", "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.", "attack": 55, "defense": 40, "height": 4}
db.pokemons.insert(Pikachu)
WriteResult({ "nInserted" : 1 })

## Lista dos pokemons (passo 5)
db.pokemons.find({})
{ "_id" : ObjectId("5644abe70db0460bf34c31ee"), "name" : "Raticate", "description" : "Raticate's sturdy fangs grow stead
ily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.", "attack" : 81, "de
fense" : 60, "height" : 7 }
{ "_id" : ObjectId("5644abf10db0460bf34c31ef"), "name" : "Spearow", "description" : "Spearow has a very loud cry that ca
n be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warni
ng each other of danger.", "attack" : 60, "defense" : 30, "height" : 3 }
{ "_id" : ObjectId("5644abfa0db0460bf34c31f0"), "name" : "Fearow", "description" : "Fearow is recognized by its long nec
k and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skin
ny beak to pluck prey.", "attack" : 90, "defense" : 65, "height" : 12 }
{ "_id" : ObjectId("5644ac000db0460bf34c31f1"), "name" : "Ekans", "description" : "Ekans curls itself up in a spiral whi
le it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its up
raised head.", "attack" : 60, "defense" : 44, "height" : 20 }
{ "_id" : ObjectId("5644ac050db0460bf34c31f2"), "name" : "Arbok", "description" : "This Pokémon is terrifically strong i
n order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe
, escaping its crunching embrace is impossible.", "attack" : 85, "defense" : 69, "height" : 35 }
{ "_id" : ObjectId("5644ac090db0460bf34c31f3"), "name" : "Pikachu", "description" : "Whenever Pikachu comes across somet
hing new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon
 mistook the intensity of its charge.", "attack" : 55, "defense" : 40, "height" : 4 }

## Pikachu (passo 6)
var poke = db.pokemons.findOne({"name": "Pikachu"})

## Atualização do Pikachu (passo 6)
poke.description = "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge."
db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })