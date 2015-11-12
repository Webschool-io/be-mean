# MongoDB - Aula 02 - Exercício
autor: Felipe Cabianchi de Oliveira

## Criar database be-mean-pokemons

	use be-mean-pokemons

## Listagem das databases (passo 2)

	show dbs
	be-mean  0.078GB
	local    0.078GB

## Listagem das coleções (passo 3)

	show collections

## Cadastro dos pokemons (passo 4)

	Fiz uma function para facilitar adicionar os pokemons

	function query (name, description, type, attack, height) {
		return pokemon = {
			 'name'        : name
			,'description' : description
			,'type'        : type
			,'attack'      : attack
			,'height'      : height 
		}
	}

	db.pokemons.insert(query('Charizard', 'sorta fogo', 'fire', 84, 17))
	db.pokemons.insert(query('Charmeleon', 'sorta -fogo', 'fire', 64, 11))
	db.pokemons.insert(query('Pidgeot', 'nois q voa', 'normal', 80, 15))
	db.pokemons.insert(query('Meowth', 'Mia', 'normal', 45, 4))
	db.pokemons.insert(query('Kakuna', 'Pele de pedra', 'Bug', 25, 6))


## Lista dos pokemons (passo 5)
	db.pokemons.find()

	{
	  "_id": ObjectId("5643f4dd403adc69105a1ed2"),
	  "name": "Charizard",
	  "description": "sorta fogo",
	  "type": "fire",
	  "attack": 84,
	  "height": 17
	}
	{
	  "_id": ObjectId("5643f54a403adc69105a1ed3"),
	  "name": "Charmeleon",
	  "description": "sorta -fogo",
	  "type": "fire",
	  "attack": 64,
	  "height": 11
	}
	{
	  "_id": ObjectId("5643f5ac403adc69105a1ed4"),
	  "name": "Pidgeot",
	  "description": "nois q voa",
	  "type": "normal",
	  "attack": 80,
	  "height": 15
	}
	{
	  "_id": ObjectId("5643f600403adc69105a1ed5"),
	  "name": "Meowth",
	  "description": "Mia",
	  "type": "normal",
	  "attack": 45,
	  "height": 4
	}
	{
	  "_id": ObjectId("5643f631403adc69105a1ed6"),
	  "name": "Kakuna",
	  "description": "Pele de pedra",
	  "type": "Bug",
	  "attack": 25,
	  "height": 6
	}


## Charizard (passo 6)
	var poke = db.pokemons.findOne({name:'Charizard'})

## Atualização do Charizard (passo 6)
	poke.description = "fogo++"
	db.pokemons.save(poke)
