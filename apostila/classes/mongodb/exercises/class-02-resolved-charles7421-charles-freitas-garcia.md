# MongoDB - Aula 02 - Exercício
autor: Charles de Freitas Garcia



> use be-mean-pokemons
switched to db be-mean-pokemons

## Cadastro dos pokemons (passo 4)

> var pokemon = {name : 'Heracross', description : 'Heracross é um Bug / Lutar tipo Pokémon introduzida na
Generation 2. É conhecida como o chifre único Pokémon.', attack : '125', defense : '75', height : '1.50'}
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {name : 'Groudon', description : 'Groudon é uma terra Pokémon tipo introduzido na Geração 3
. Ele é conhecido como o Continente Pokémon.', attack : '150', defense : '140', height : '3.51'}
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {name : 'Rayquaza', description : 'Rayquaza é um dragão / Voador tipo Pokémon introduzida n
a Geração 3. Ele é conhecido como o Sky High Pokémon.', attack : '150', defense : '90', height : '7.01'}
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {name : 'Deoxys', description : 'Deoxys é um Psychic Pokémon tipo introduzido na Geração 3.
 Ele é conhecido como o DNA Pokémon.', attack : '150', defense : '50', height : '1.70'}
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

## Listagem das databases (passo 2)

> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
local              0.078GB

## Listagem das coleções (passo 3)

> show collections
pokemons
system.indexes

## Lista dos pokemons (passo 5)

>db.pokemons.find()
{ 
	"_id" : ObjectId("5643ef812549be4e41d3afdf"), 
	"name" : "Mewtwo", 
	"description" : "Mewtwo é um Psychic Pokémon tipo introduzido na Geração 1. É conhecida como a genética Pokémon.", 
	"attack" : 110, 
	"defense" : 90,
	"height" : 2.01 
}
{ 
	"_id" : ObjectId("5643f0262549be4e41d3afe0"),
	 "name" : "Heracross", 
	 "description" : "Heracross é um Bug / Lutar tipo Pokémon introduzida na Generation 2. É conhecida como o chifre único Pokémon.", 
	 "attack" : "125", 
	 "defense" : "75", 
	 "height" : "1.50" 
 }
{ 
	"_id" : ObjectId("5643f0462549be4e41d3afe1"), 
	"name" : "Groudon", 
	"description" : "Groudon é uma terra Pokémon tipo introduzido na Geração 3. Ele é conhecido como o Continente Pokémon.", 
	"attack" : "150", 
	"defense" : "140", 
	"height" : "3.51" 
}
{ 
	"_id" : ObjectId("5643f0722549be4e41d3afe2"),
	 "name" : "Rayquaza", 
	 "description" : "Rayquaza é um dragão/ Voador tipo Pokémon introduzida na Geração 3. Ele é conhecido como o Sky High Pokémon.", 
	 "attack" : "150", 
	 "defense" : "90", 
	 "height" : "7.01" 
}
{ 
	"_id" : ObjectId("5643f07f2549be4e41d3afe3"), 
	"name" : "Deoxys", 
	"description" : "Deoxys é um Psychic Pokémon tipo introduzido na Geração 3. Ele é conhecido como o DNA Pokémon.", 
	"attack" : "150",
	"defense" : "50", 
	"height" : "1.70" 
}
## Selecionar pokemon e atribuir na variavel poke (passo 6)
> var consulta = {name : 'Mewtwo'}
> var poke = db.pokemons.findOne(consulta)
> poke
{
	"_id" : ObjectId("5643ef812549be4e41d3afdf"),
	"name" : "Mewtwo",
	"description" : "Mewtwo é um Psychic Pokémon tipo introduzido na Geração 1. É conhecida como a genética Pokémon.",
	"attack" : 110,
	"defense" : 90,
	"height" : 2.01
}

## Atualização do Pikachu (passo 6)


> poke.description = 'Descrição super, hiper, mega, modificada'
Descrição super, hiper, mega, modificada
> db.pokemons.save(poke);
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.find({name : 'Mewtwo'})
{ 
	"_id" : ObjectId("5643ef812549be4e41d3afdf"), 
	"name" : "Mewtwo", 
	"description" : "Descrição super, hiper, mega, modificada", 
	"attack" : 110, 
	"defense" : 90, 
	"height" : 2.01 
}
