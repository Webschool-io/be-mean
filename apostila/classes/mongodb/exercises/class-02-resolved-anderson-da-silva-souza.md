# MongoDB - Aula 02 - Exercício
autor: Anderson da Silva Souza 

## Crie uma database chamada be-mean-pokemons (passo 1)

	C307-NEAD-068m(mongod-3.0.7) be-mean> use be-mean-pokemons
    switched to db be-mean-pokemons

## Listagem das databases (passo 2)

	show dbs
	be-mean-pokemons  0.078GB
	be-mean           0.078GB
	local             0.078GB


## Listagem das coleções (passo 3)

	show collections
	pokemons        0.001MB / 0.008MB
	system.indexes  0.000MB / 0.008MB


## Cadastro dos pokemons (passo 4)

    db.pokemons.insert({'name':'Zubat','description':'Morcego troll','type': 'flying', 'attack': 45, height: 8, 'defense': 35});

	Inserted 1 record(s) in 1425ms
	WriteResult({
	  "nInserted": 1
	})

	db.pokemons.insert({'name':'Nidoqueen','description':'Cantor de banda famosa','type': 'poison', 'attack': 92, height: 13, 'defense': 87});

	Inserted 1 record(s) in 17ms
	WriteResult({
	  "nInserted": 1
	})

	db.pokemons.insert({'name':'Bulbassauro','description':'Chicote de trepadeira','type': 'grama', 'attack': 49, height: 0.4, 'defense': 49});

	Inserted 1 record(s) in 1ms
	WriteResult({
	  "nInserted": 1
	})

	db.pokemons.insert({'name':'Charmander','description':'Esse é o cão chupando manga de fofinho','type': 'fogo', 'attack': 52, height: 0.6, 'defense': 43 });

	Inserted 1 record(s) in 1ms
	WriteResult({
	  "nInserted": 1
	})

	db.pokemons.insert({'name':'Squirtle','description':'Ejeta água que passarinho não bebe','type': 'água', 'attack': 48, height: 0.5, 'defense': 65 });
	Inserted 1 record(s) in 2ms
	WriteResult({
	  "nInserted": 1
	})



## Lista dos pokemons (passo 5)

	db.pokemons.find()
	{
	  "_id": ObjectId("56439714ea6cf42d7e5395c3"),
	  "name": "Zubat",
	  "description": "Morcego troll",
	  "type": "flying",
	  "attack": 45,
	  "height": 8,
	  "defense": 35
	}
	{
	  "_id": ObjectId("56439733ea6cf42d7e5395c4"),
	  "name": "Nidoqueen",
	  "description": "Cantor de banda famosa",
	  "type": "poison",
	  "attack": 92,
	  "height": 13,
	  "defense": 87
	}
	{
	  "_id": ObjectId("56439740ea6cf42d7e5395c5"),
	  "name": "Bulbassauro",
	  "description": "Chicote de trepadeira",
	  "type": "grama",
	  "attack": 49,
	  "height": 0.4,
	  "defense": 49
	}
	{
	  "_id": ObjectId("56439757ea6cf42d7e5395c6"),
	  "name": "Charmander",
	  "description": "Esse é o cão chupando manga de fofinho",
	  "type": "fogo",
	  "attack": 52,
	  "height": 0.6,
	  "defense": 43
	}
	{
	  "_id": ObjectId("56439766ea6cf42d7e5395c7"),
	  "name": "Squirtle",
	  "description": "Ejeta água que passarinho não bebe",
	  "type": "água",
	  "attack": 48,
	  "height": 0.5,
	  "defense": 65
	}
	Fetched 5 record(s) in 91ms	


## Pikachu (passo 6)

	var query = {name:'Charmander'}
	var poke  = db.pokemons.find(query)

	C307-NEAD-068m(mongod-3.0.7) be-mean-pokemons> poke
	{
	  "_id": ObjectId("56439757ea6cf42d7e5395c6"),
	  "name": "Charmander",
	  "description": "Esse é o cão chupando manga de fofinho",
	  "type": "fogo",
	  "attack": 52,
	  "height": 0.6,
	  "defense": 43
	}
	Fetched 1 record(s) in 64ms


## Atualização do Pikachu (passo 6)

	C307-NEAD-068m(mongod-3.0.7) be-mean-pokemons> poke.description = "Cao super forte"
	Cao super forte
	C307-NEAD-068m(mongod-3.0.7) be-mean-pokemons> poke
	{
	  "_id": ObjectId("56439757ea6cf42d7e5395c6"),
	  "name": "Charmander",
	  "description": "Cao super forte",
	  "type": "fogo",
	  "attack": 52,
	  "height": 0.6,
	  "defense": 43
	}
	db.pokemons.save(poke)
		Updated 1 existing record(s) in 171ms
		WriteResult({
		  "nMatched": 1,
		  "nUpserted": 0,
		  "nModified": 1
		})

	
