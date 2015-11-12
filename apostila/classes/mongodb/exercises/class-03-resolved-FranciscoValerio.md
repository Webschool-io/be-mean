# MongoDB - Aula 03 - Exercício
autor: Francisco Henrique Ruiz Valério

## Liste todos Pokemons com a altura menor que 0.5

	> var query = { height: { $lt: 0.5 } }
	> db.pokemons.find(query)
	{ "_id" : ObjectId("5642a51855b599c8d14a4759"), "name" : "Pidgey", "description" : "Passarin normal", "type" : "normal", "attack" : 20, "defense" : 20, "height" : 0.3 }
	{ "_id" : ObjectId("5642a6cd55b599c8d14a475e"), "name" : "Diglett", "description" : "Pareçe um dedo", "type" : "ground", "attack" : 30, "defense" : 20, "height" : 0.2 }
	>

## Liste todos Pokemons com a altura maior ou igual que 0.5
	
	> var query = { height: { $gte: 0.5 } }
	> db.pokemons.find(query)
	{ "_id" : ObjectId("5642a49655b599c8d14a4758"), "name" : "Charmaleon", "description" : "Acho que é sim um camaleão de fuego", "type" : "fogo", "attack" : 30, "defense" : 30, "height" : 1.1 }
	{ "_id" : ObjectId("5642a57f55b599c8d14a475a"), "name" : "Alakazam", "description" : "Pisicoloco", "type" : "psychic", "attack" : 30, "defense" : 20, "height" : 1.5 }
	{ "_id" : ObjectId("5642a5cf55b599c8d14a475b"), "name" : "Sandshrew", "description" : "Tatu bola", "type" : "ground", "attack" : 40, "defense" : 40, "height" : 0.6 }
	{ "_id" : ObjectId("5642a63f55b599c8d14a475c"), "name" : "Dragonite", "description" : "Dragão gordo", "type" : "dragon", "attack" : 70, "defense" : 40, "height" : 2.2 }
	{ "_id" : ObjectId("5642a69455b599c8d14a475d"), "name" : "Metapod", "description" : "Esperando evoluir mais demora em", "type" : "grama", "attack" : 0.5, "defense" : 30, "height" : 0.5 }
	{ "_id" : ObjectId("5642a82455b599c8d14a475f"), "name" : "Beedrill", "description" : "Abelha lokona", "type" : "inseto", "attack" : 50, "defense" : 20, "height" : 0.4 }
	>
	
## Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama
		
	> var query = { $and : [ { height: { $lte: 0.5 } }, { type: 'grama' } ] }
	> db.pokemons.find(query)
	{ "_id" : ObjectId("5642a69455b599c8d14a475d"), "name" : "Metapod", "description" : "Esperando evoluir mais demora em", "type" : "grama", "attack" : 0.5, "defense" : 30, "height" : 0.5 }
	>

## Liste todos Pokemons com o name 'Pikachu' OU com attack menor ou igual que 0.5

	> var query = { $or: [ { name: 'Pikachu' }, { attack: { $lte: 0.5 } } ] }
	> db.pokemons.find(query)
	{ "_id" : ObjectId("5642a69455b599c8d14a475d"), "name" : "Metapod", "description" : "Esperando evoluir mais demora em", "type" : "grama", "attack" : 0.5, "defense" : 30, "height" : 0.5 }
	>


## Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com height menor ou igual que 0.5

	> var query = { $and: [ { attack: { $gte:48 } }, { height: { $lte: 0.5 } } ] }
	> db.pokemons.find(query)
	{ "_id" : ObjectId("5642a82455b599c8d14a475f"), "name" : "Beedrill", "description" : "Abelha lokona", "type" : "inseto", "attack" : 50, "defense" : 20, "height" : 0.4 }
	>

	





























