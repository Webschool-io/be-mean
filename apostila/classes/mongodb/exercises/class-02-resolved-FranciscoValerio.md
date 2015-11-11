# MongoDB - Aula 02 - Exercício
autor: Francisco Henrique Ruiz Valério

## Criando database

	> use be-mean-pokemons
	switched to db be-mean-pokemons
	
## Listagem das databases

	> show dbs
	be-mean            0.078GB
	be-mean-instagram  0.078GB
	local              0.078GB

## Listagem das coleções

	> show collections
	>


## Cadastro dos pokemons

	http://www.pokemon.com/br/pokedex/charmaleon
	> var pokemon = {'name':'Charmaleon', 'description':'Seria um cameleão de fogo', 'type':'fogo', attack:30, defense:30, height: 1.1 }
	> db.pokemons.insert(pokemon)
	WriteResult({ "nInserted" : 1 })
	
	http://www.pokemon.com/br/pokedex/pidgey
	> var pokemon = {'name':'Pidgey', 'description':'Passarin normal', 'type':'normal', attack:20, defense:20, height: 0.3 }
	> db.pokemons.insert(pokemon)
	WriteResult({ "nInserted" : 1 })
	
	http://www.pokemon.com/br/pokedex/alakazam
	> var pokemon = {'name':'Alakazam', 'description':'Pisicoloco', 'type':'psychic', attack:30, defense:20, height: 1.5 }
	> db.pokemons.insert(pokemon)
	WriteResult({ "nInserted" : 1 })
	
	http://www.pokemon.com/br/pokedex/sandshrew
	> var pokemon = {'name':'Sandshrew', 'description':'Tatu bola', 'type':'ground', attack:40, defense:40, height: 0.6 }
	> db.pokemons.insert(pokemon)
	WriteResult({ "nInserted" : 1 })
	
	http://www.pokemon.com/br/pokedex/dragonite
	> var pokemon = {'name':'Dragonite', 'description':'Dragão gordo', 'type':'dragon', attack:70, defense:40, height: 2.2 }
	> db.pokemons.insert(pokemon)
	WriteResult({ "nInserted" : 1 })
	
	http://www.pokemon.com/br/pokedex/metapod
	> var pokemon = {'name':'Metapod', 'description':'Esperando evoluir mais demora em', 'type':'inseto', attack:10, defense:30, height: 0.7 }
	> db.pokemons.insert(pokemon)
	WriteResult({ "nInserted" : 1 })
	
	
	http://www.pokemon.com/br/pokedex/diglett
	> var pokemon = {'name':'Diglett', 'description':'Pareçe um dedo', 'type':'ground', attack:30, defense:20, height: 0.2 }
	> db.pokemons.insert(pokemon)
	WriteResult({ "nInserted" : 1 })
	
	http://www.pokemon.com/br/pokedex/beedrill
	> var pokemon = {'name':'Beedrill', 'description':'Abelha lokona', 'type':'inseto', attack:50, defense:20, height: 1.0 }
	> db.pokemons.insert(pokemon)
	WriteResult({ "nInserted" : 1 })	


## Lista dos pokemons

	> db.pokemons.find()
	{ "_id" : ObjectId("5642a49655b599c8d14a4758"), "name" : "Charmaleon", "description" : "Seria um cameleão de fogo", "type" : "fogo", "attack" : 30, "defense" : 30, "height" : 1.1 }
	{ "_id" : ObjectId("5642a51855b599c8d14a4759"), "name" : "Pidgey", "description" : "Passarin normal", "type" : "normal", "attack" : 20, "defense" : 20, "height" : 0.3 }
	{ "_id" : ObjectId("5642a57f55b599c8d14a475a"), "name" : "Alakazam", "description" : "Pisicoloco", "type" : "psychic", "attack" : 30, "defense" : 20, "height" : 1.5 }
	{ "_id" : ObjectId("5642a5cf55b599c8d14a475b"), "name" : "Sandshrew", "description" : "Tatu bola", "type" : "ground", "attack" : 40, "defense" : 40, "height" : 0.6 }
	{ "_id" : ObjectId("5642a63f55b599c8d14a475c"), "name" : "Dragonite", "description" : "Dragão gordo", "type" : "dragon", "attack" : 70, "defense" : 40, "height" : 2.2 }
	{ "_id" : ObjectId("5642a69455b599c8d14a475d"), "name" : "Metapod", "description" : "Esperando evoluir mais demora em", "type" : "inseto", "attack" : 10, "defense" : 30, "height" : 0.7 }
	{ "_id" : ObjectId("5642a6cd55b599c8d14a475e"), "name" : "Diglett", "description" : "Pareçe um dedo", "type" : "ground", "attack" : 30, "defense" : 20, "height" : 0.2 }
	{ "_id" : ObjectId("5642a82455b599c8d14a475f"), "name" : "Beedrill", "description" : "Abelha lokona", "type" : "inseto", "attack" : 50, "defense" : 20, "height" : 1 }
	>

## Editando pokemon ( Charmaleon ) 
	
	> var query = { name: 'Charmaleon' }
	> var poke = db.pokemons.findOne(query)
	>	

## Atualização pokemon ( Charmaleon ) 

	> poke.description = 'Acho que é sim um camaleão de fuego'
	Acho que é sim um camaleão de fuego
	> db.pokemons.save(poke)
	WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
	>
