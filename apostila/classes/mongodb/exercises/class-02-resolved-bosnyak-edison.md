# MongoDB - Aula 02 - Exercício
autor: Edison Bosnyak

## Criação do database (passo 1)
	> use be-mean-pokemons
	switched to db be-mean-pokemons

## Listagem das databases (passo 2)
	
	> show dbs
	be-mean      0.078GB
	dd           0.078GB
	local        0.078GB
	mydatabase   0.078GB
	oficial-dev  0.078GB
	test         0.078GB

## Listagem das coleções (passo 3)
	> show collections
	>

## Cadastro dos pokemons (passo 4)
	> var pokemons = [
	... {
	... name:"Abra",
	... description:"Abra sleeps for eighteen hours a day.",
	... attack:20,
	... defense:15,
	... height:9
	... },
	... {
	... name:"Kadabra",
	... description:"Kadabra emits a peculiar alpha wave if it develops a headache.",
	... attack:35,
	... defense:30,
	... height:13
	... },
	... {
	... name:"Alakazam",
	... description:"Alakazam's brain continually grows, making its head far too heavy to support with its neck.",
	... attack:50,
	... defense:45,
	... height:15
	... },
	... {
	... name:"Voltorb",
	... description:"Voltorb was first sighted at a company that manufactures Poké Balls. ",
	... attack:30,
	... defense:50,
	... height:5
	... },
	... {
	... name:"Electrode",
	... description:"Electrode eats electricity in the atmosphere.",
	... attack:50,
	... defense:70,
	... height:12
	... }
	...
	... ]
	> db.pokemons.save(pokemons)
	BulkWriteResult({
	        "writeErrors" : [ ],
	        "writeConcernErrors" : [ ],
	        "nInserted" : 5,
	        "nUpserted" : 0,
	        "nMatched" : 0,
	        "nModified" : 0,
	        "nRemoved" : 0,
	        "upserted" : [ ]
	})

## Lista dos pokemons (passo 5)
	> db.pokemons.find()
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca670"),
	        "name" : "Abra",
	        "description" : "Abra sleeps for eighteen hours a day.",
	        "attack" : 20,
	        "defense" : 15,
	        "height" : 9
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca671"),
	        "name" : "Kadabra",
	        "description" : "Kadabra emits a peculiar alpha wave if it develops a headache.",
	        "attack" : 35,
	        "defense" : 30,
	        "height" : 13
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca672"),
	        "name" : "Alakazam",
	        "description" : "Alakazam's brain continually grows, making its head far too heavy to support with its neck.",
	        "attack" : 50,
	        "defense" : 45,
	        "height" : 15
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca673"),
	        "name" : "Voltorb",
	        "description" : "Voltorb was first sighted at a company that manufactures Poké Balls. ",
	        "attack" : 30,
	        "defense" : 50,
	        "height" : 5
	}
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca674"),
	        "name" : "Electrode",
	        "description" : "Electrode eats electricity in the atmosphere.",
	        "attack" : 50,
	        "defense" : 70,
	        "height" : 12
	}

## Pikachu (passo 6)
	> var poke = db.pokemons.findOne({name:"Kadabra"})
	> poke
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca671"),
	        "name" : "Kadabra",
	        "description" : "Kadabra emits a peculiar alpha wave if it develops a headache.",
	        "attack" : 35,
	        "defense" : 30,
	        "height" : 13
	}


## Atualização do Pikachu (passo 7)
	> poke.description="Kadabra emite uma onda peculiar."
	Kadabra emite uma onda peculiar.
	> db.pokemons.save(poke)
	WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
	> db.pokemons.findOne({name:"Kadabra"})
	{
	        "_id" : ObjectId("5642dba9135c3c27f86ca671"),
	        "name" : "Kadabra",
	        "description" : "Kadabra emite uma onda peculiar.",
	        "attack" : 35,
	        "defense" : 30,
	        "height" : 13
	}
		