# MongoDB - Aula 02 - Exercício
autor: Jean Silva

## Criar o database (passo 1)

// Comando
use be-mean-pokemons

// Resultado
switched to db be-mean-pokemons

## Listagem das databases (passo 2)

// Comando
> show dbs

// Resultado
be-mean           0.078GB
be-mean-pokemons  0.078GB
local             0.078GB

## Listagem das coleções (passo 3)

// Comando
show collections

// Resultado
pokemons
system.indexes

## Cadastro dos pokemons (passo 4)

// Criando um JSON de Pokemons

var jsonPokemons = 
[
	{
		"name" : "Charizard",
		"description" : "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
		"attack" : 5,
		"defense" : 3,
		"height" : 1.7
	},
	{
		"name" : "Squirtle",
		"description" : "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
		"attack" : 2,
		"defense" : 3,
		"height" : 0.5
	},
	{
		"name" : "Wartortle",
		"description" : "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
		"attack" : 3,
		"defense" : 4,
		"height" : 1.0
	},
	{
		"name" : "Blastoise",
		"description" : "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
		"attack" : 4,
		"defense" : 4,
		"height" : 1.6
	},
	{
		"name" : "Butterfree",
		"description" : "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
		"attack" : 4,
		"defense" : 2,
		"height" : 1.1
	},
	{
		"name" : "Pikachu",
		"description" : "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
		"attack" : 3,
		"defense" : 2,
		"height" : 0.4
	}
];

// Salvando os pokemons na collection "pokemons"

// Comando
db.pokemons.save(jsonPokemons)

// Resultado
BulkWriteResult({
	"writeErrors" : [ ],
	"writeConcernErrors" : [ ],
	"nInserted" : 6,
	"nUpserted" : 0,
	"nMatched" : 0,
	"nModified" : 0,
	"nRemoved" : 0,
	"upserted" : [ ]
})


## Lista dos pokemons (passo 5)

// Listando os pokemons

// Comando
db.pokemons.find()

// Resultado
{ "_id" : ObjectId("564347f8797b3ee5ef7eef44"), "name" : "Charizard", "description" : "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.", "attack" : 5, "defense" : 3, "height" : 1.7 }
{ "_id" : ObjectId("564347f8797b3ee5ef7eef45"), "name" : "Squirtle", "description" : "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.", "attack" : 2, "defense" : 3, "height" : 0.5 }
{ "_id" : ObjectId("564347f8797b3ee5ef7eef46"), "name" : "Wartortle", "description" : "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.", "attack" : 3, "defense" : 4, "height" : 1 }
{ "_id" : ObjectId("564347f8797b3ee5ef7eef47"), "name" : "Blastoise", "description" : "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.", "attack" : 4, "defense" : 4, "height" : 1.6 }
{ "_id" : ObjectId("564347f8797b3ee5ef7eef48"), "name" : "Butterfree", "description" : "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.", "attack" : 4, "defense" : 2, "height" : 1.1 }
{ "_id" : ObjectId("564347f8797b3ee5ef7eef49"), "name" : "Pikachu", "description" : "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.", "attack" : 3, "defense" : 2, "height" : 0.4 }


## Pikachu (passo 6)

// Commando
var query = { name: "Pikachu" }
var poke = db.pokemons.findOne(query)

// Resultado
> poke
{
	"_id" : ObjectId("564347f8797b3ee5ef7eef49"),
	"name" : "Pikachu",
	"description" : "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
	"attack" : 3,
	"defense" : 2,
	"height" : 0.4
}

## Atualização do Pikachu (passo 6)

// Modificando a description
> poke.description = "Description Pikachu Update"
Description Pikachu Update

// Salvando a alteração
db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

// Listando o registro atualizado
db.pokemons.findOne(query)
{
	"_id" : ObjectId("564347f8797b3ee5ef7eef49"),
	"name" : "Pikachu",
	"description" : "Description Pikachu Update",
	"attack" : 3,
	"defense" : 2,
	"height" : 0.4
}

