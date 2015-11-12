# MongoDB - Aula 03 - Exercício
autor: Dariano Soares

## Consultas usando operadores aritméticos

## 1. Liste todos Pokemons com a altura menor que 0.5

	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> var query = { height: { $lt: 0.5}}
	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query)
	{
	   "_id": ObjectId("56429658ce29771f1d16afba"),
	   "nome": "Pikachu",
	   "description": "Rato elétrico bem fofinho",
	   "type": "electric",
	   "attack": 100,
	   "height": 0.4
 	}
 	{
	   "_id": ObjectId("56429705ce29771f1d16afbb"),
	   "nome": "Bulbassauro",
	   "description": "Chicote de trepadeira",
	   "type": "grama",
	   "attack": 49,
	   "height": 0.4
	}
 	{
	   "_id": ObjectId("56429871ce29771f1d16afbe"),
	   "name": "Caterpie",
	   "description": "Larva lutadora",
	   "type": "inseto",
	   "attack": 30,
	   "height": 0.3,
	   "defense": 35
	}
	Fetched 3 record(s) in 2ms

## 2. Liste todos Pokemons com a altura maior ou igual que 0.5 

	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> var query = { height: { $gte: 0.5} }
	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query)
	{
	  "_id": ObjectId("56429748ce29771f1d16afbc"),
	  "nome": "Charmander",
	  "description": "Esse é o cão chupando manga do fofinho",
	  "type": "fogo",
	  "attack": 48,
	  "height": 0.5
	}
	{
	  "_id": ObjectId("5642977cce29771f1d16afbd"),
	  "nome": "Squirtle",
	  "description": "Ejeta água que passarinho não bebe",
	  "type": "água",
	  "attack": 48,
	  "height": 0.5
	}
	{
	  "_id": ObjectId("5642a05eeb28f474ff7dd11a"),
	  "nome": "Exploud",
	  "description": "Exploud provoca terremotos com os tremores que ela cria por berros.",
	  "type": "Loud Noise",
	  "attack": 48,
	  "height": 1.5
	}
	{
	  "_id": ObjectId("5642a064eb28f474ff7dd11b"),
	  "nome": "Machop",
	  "description": "Os músculos de Machop são especiais, eles nunca ficam doloridos não importa o quanto eles são usados em exercício.",
	  "type": "Loud Noise",
	  "attack": 40,
	  "height": 0.8
	}
	{
	   "_id": ObjectId("5642a068eb28f474ff7dd11c"),
	   "nome": "Haunter",
	   "description": "Haunter é um Pokémon perigoso. Se alguém acena-lhe enquanto flutuando na escuridão, você nunca deve abordá-lo.",
	   "type": "Gases",
	   "attack": 54,
	   "height": 1.6
	}
	{
	  "_id": ObjectId("5642a06deb28f474ff7dd11d"),
	  "nome": "Lickilicky",
	  "description": "Ela envolve as coisas com a língua extensível.",
	  "type": "Licking",
	  "attack": 44,
	  "height": 1.7
	}
	{
	  "_id": ObjectId("5642a070eb28f474ff7dd11e"),
	  "nome": "Delphox",
	  "description": "Ela envolve as coisas com a língua extensível.",
	  "type": "Fox",
	  "attack": 47,
	  "height": 1.5
	}
	Fetched 7 record(s) in 5ms

## 3. Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama

	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> var query = { $and: [{ type: 'grama'}, { height:{ $lte: 0.5} }]}
	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query)
	{
	  "_id": ObjectId("56429705ce29771f1d16afbb"),
	  "nome": "Bulbassauro",
	  "description": "Chicote de trepadeira",
	  "type": "grama",
	  "attack": 49,
	  "height": 0.4
 	}
	Fetched 1 record(s) in 1ms

## 4. Liste todos Pokemons com o nome 'Pikachu' OU com attack menor ou igual que 0.5

	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> var query = { $or: [{ nome: 'Pikachu'}, { attack: { $lte: 0.5}}]}
	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query)
	{
	  "_id": ObjectId("56429658ce29771f1d16afba"),
	  "nome": "Pikachu",
	  "description": "Rato elétrico bem fofinho",
	  "type": "electric",
	  "attack": 100,
	  "height": 0.4
	}
	Fetched 1 record(s) in 1ms

## 5. liste todos Pokemons com attack MAIOR OU IGUAL QUE 48 E com height menor ou igual que 0.5

	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> var query = { $and: [{ attack: { $gte: 48}}, { height: { $lte: 0.5}}]}
	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> db.pokemons.find(query)
	{
	  "_id": ObjectId("56429658ce29771f1d16afba"),
	  "nome": "Pikachu",
	  "description": "Rato elétrico bem fofinho",
	  "type": "electric",
	  "attack": 100,
	  "height": 0.4
	}
	{
	  "_id": ObjectId("56429705ce29771f1d16afbb"),
	  "nome": "Bulbassauro",
	  "description": "Chicote de trepadeira",
	  "type": "grama",
	  "attack": 49,
	  "height": 0.4
	}
	{
	  "_id": ObjectId("56429748ce29771f1d16afbc"),
	  "nome": "Charmander",
	  "description": "Esse é o cão chupando manga do fofinho",
	  "type": "fogo",
	  "attack": 48,
	  "height": 0.5
	}
 	{
	  "_id": ObjectId("5642977cce29771f1d16afbd"),
	  "nome": "Squirtle",
	  "description": "Ejeta água que passarinho não bebe",
	  "type": "água",
	  "attack": 48,
	  "height": 0.5
	}

	Fetched 4 record(s) in 5ms
