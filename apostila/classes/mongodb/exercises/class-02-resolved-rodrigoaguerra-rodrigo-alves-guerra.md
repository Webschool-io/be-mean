# MongoDB - Aula 02 - Exercício
autor: Rodrigo Alves Guerra

## Listagem das databases (passo 2)

	ogid-S430(mongod-2.4.9) be-mean-pokemons> show dbs
	be-mean-pokemons  → 0.063GB
	pokemons          → 0.063GB
	local             → 0.031GB
	be-mean-instagram → 0.063GB

## Listagem das coleções (passo 3)

	ogid-S430(mongod-2.4.9) be-mean-pokemons> show collections
	pokemons       → 0.000MB / 0.008MB
	system.indexes → 0.000MB / 0.008MB

## Cadastro dos pokemons (passo 4)

	01-
	ogid-S430(mongod-2.4.9) be-mean-pokemons> var pokemon = {name : 'Kadabra', description : 'Muito Misterioso', type : 'psychic', attack : 35, defense : '30' , height: 0.6 }
	ogid-S430(mongod-2.4.9) be-mean-pokemons> db.pokemons.insert(pokemon)
	Inserted 1 record(s) in 1ms

	02-
	ogid-S430(mongod-2.4.9) be-mean-pokemons> var pokemon = {name : 'Raichu', description : 'Evolução do pikachu', type : 'electric', attack : 90, defense : '55' , height: 0.9 }
	ogid-S430(mongod-2.4.9) be-mean-pokemons> db.pokemons.insert(pokemon)
	Inserted 1 record(s) in 1ms

	03-
	ogid-S430(mongod-2.4.9) be-mean-pokemons> var pokemon = {name : 'Blastoise', description : 'Um dos mais top da galaxia', type : 'water', attack : 83, defense : '100' , height: 0.9 }
	ogid-S430(mongod-2.4.9) be-mean-pokemons> db.pokemons.insert(pokemon)
	Inserted 1 record(s) in 1ms

	04-
	ogid-S430(mongod-2.4.9) be-mean-pokemons> var pokemon = {name : 'Abra', description : 'Muito loko chapadao', type : 'psychic', attack : 20, defense : '15' , height: 0.5 }
	ogid-S430(mongod-2.4.9) be-mean-pokemons> db.pokemons.insert(pokemon)
	Inserted 1 record(s) in 1ms

	05-
	ogid-S430(mongod-2.4.9) be-mean-pokemons> var pokemon = {name : 'Rattata', description : 'Deixa a galera loka', type : 'normal', attack : 30, defense : '56' , height: 0.4 }
	ogid-S430(mongod-2.4.9) be-mean-pokemons> db.pokemons.insert(pokemon)




## Lista dos pokemons (passo 5)

	ogid-S430(mongod-2.4.9) be-mean-pokemons> db.pokemons.find()
	{
	  "_id": ObjectId("5642c9018068785ae3aecb57"),
	  "name": "Kadabra",
	  "description": "Muito Misterioso",
	  "type": "psychic",
	  "attack": 35,
	  "defense": "30",
	  "height": 0.6
	}
	{
	  "_id": ObjectId("5642c9cb8068785ae3aecb58"),
	  "name": "Raichu",
	  "description": "Evolução do pikachu",
	  "type": "electric",
	  "attack": 90,
	  "defense": "55",
	  "height": 0.9
	}
	{
	  "_id": ObjectId("5642ca298068785ae3aecb59"),
	  "name": "Blastoise",
	  "description": "Um dos mais top da galaxia",
	  "type": "water",
	  "attack": 83,
	  "defense": "100",
	  "height": 0.9
	}
	{
	  "_id": ObjectId("5642ca838068785ae3aecb5a"),
	  "name": "Abra",
	  "description": "Muito loko chapadao",
	  "type": "psychic",
	  "attack": 20,
	  "defense": "15",
	  "height": 0.5
	}
	{
	  "_id": ObjectId("5642cb668068785ae3aecb5b"),
	  "name": "Rattata",
	  "description": "Deixa a galera loka",
	  "type": "normal",
	  "attack": 30,
	  "defense": "56",
	  "height": 0.4
	}
	Fetched 5 record(s) in 6ms


## Pikachu (passo 6)
	ogid-S430(mongod-2.4.9) be-mean-pokemons> var query = {name : 'Raichu'}
	ogid-S430(mongod-2.4.9) be-mean-pokemons> var poke = db.pokemons.findOne(query);


## Atualização do Pikachu (passo 6)

	ogid-S430(mongod-2.4.9) be-mean-pokemons> poke.description = 'Pokemon maloqueiro'
	Pokemon maloqueiro
	ogid-S430(mongod-2.4.9) be-mean-pokemons> poke
	{
	  "_id": ObjectId("5642c9cb8068785ae3aecb58"),
	  "name": "Raichu",
	  "description": "Pokemon maloqueiro",
	  "type": "electric",
	  "attack": 90,
	  "defense": "55",
	  "height": 0.9
	}

	ogid-S430(mongod-2.4.9) be-mean-pokemons> db.pokemons.save(poke)
