# MongoDB - Aula 02 - Exercício
autor: Tiago Amaral

## Criando DB

	```
	mongo be-mean-pokemons

	```
## Listando DBs

	```
	show dbs
	be-mean           → 0.078GB
	be-mean-instagram → 0.078GB
	local             → 0.078GB

	```

## Listando Collections

	```
	show collections
	*nenhuma coleção criada ainda

	```
## Inserir 5 pokemons

	```
	var pokemon = {'name':'Sandshrew','description':'tatu lutador', attack: 40, defense: 40, height: 0.6 }
	db.pokemons.save(pokemon)
	Inserted 1 record(s) in 229ms
		WriteResult({
			"nInserted": 1
	})

	var pokemon = {'name':'Clefairy','description':'fada lutadora', attack: 20, defense: 20, height: 0.6 }
	db.pokemons.save(pokemon)
	Inserted 1 record(s) in 4ms
		WriteResult({
			"nInserted": 1
	})

	var pokemon = {'name':'Diglett','description':'esconde esconde',attack: 30, defense: 10, height: 0.2 }
	db.pokemons.save(pokemon)
	Inserted 1 record(s) in 4ms
		WriteResult({
			"nInserted": 1
	})

	var pokemon = {'name':'Abra','description':'dorminhoco teletransportador', attack: 10, defense: 10,  height: 0.9 }
	db.pokemons.save(pokemon)
	Inserted 1 record(s) in 4ms
		WriteResult({
			"nInserted": 1
	})

	var pokemon = {'name':'Tentacool','description':'polvo lutador',attack: 20, defense: 20,  height: 0.9 }
	db.pokemons.save(pokemon)
	Inserted 1 record(s) in 4ms
		WriteResult({
			"nInserted": 1
	})

	```

## Listar collection

	```
	db.pokemons.find()

	{
	  "_id": ObjectId("580fc3f4a881fd5358291b78"),
	  "name": "Sandshrew",
	  "description": "tatu lutador",
	  "attack": 40,
	  "defense": 40,
	  "height": 0.6
	}
	{
	  "_id": ObjectId("580fc3fca881fd5358291b79"),
	  "name": "Clefairy",
	  "description": "fada lutadora",
	  "attack": 20,
	  "defense": 20,
	  "height": 0.6
	}
	{
	  "_id": ObjectId("580fc40aa881fd5358291b7a"),
	  "name": "Diglett",
	  "description": "esconde esconde",
	  "attack": 30,
	  "defense": 10,
	  "height": 0.2
	}
	{
	  "_id": ObjectId("580fc41fa881fd5358291b7b"),
	  "name": "Abra",
	  "description": "dorminhoco teletransportador",
	  "attack": 10,
	  "defense": 10,
	  "height": 0.9
	}
	{
	  "_id": ObjectId("580fc427a881fd5358291b7c"),
	  "name": "Tentacool",
	  "description": "polvo lutador",
	  "attack": 20,
	  "defense": 20,
	  "height": 0.9
	}
	Fetched 5 record(s) in 6ms

	```

## Buscar pokemon

	```
	var query = {name: 'Abra'}
	var poke = db.pokemons.findOne(query)
	poke
	{
	  "_id": ObjectId("580fc41fa881fd5358291b7b"),
	  "name": "Abra",
	  "description": "dorminhoco teletransportador",
	  "attack": 10,
	  "defense": 10,
	  "height": 0.9
	}
	poke.description = "foge-foge da estrela"
	{
	  "_id": ObjectId("580fc41fa881fd5358291b7b"),
	  "name": "Abra",
	  "description": "foge-foge da estrela",
	  "attack": 10,
	  "defense": 10,
	  "height": 0.9
	}
	db.pokemons.save(poke)
	Updated 1 existing record(s) in 5ms
	WriteResult({
	  "nMatched": 1,
	  "nUpserted": 0,
	  "nModified": 1
	})

	```