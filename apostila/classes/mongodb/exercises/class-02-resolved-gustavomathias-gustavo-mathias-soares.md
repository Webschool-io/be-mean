#MongoDB - Aula02 - Exercicio  
autor: Gustavo Mathias

##Listagem de databases (passo 2)
	//comando
	show dbs
	//retorno
	bemean            → 0.078GB
	be-mean-instagram → 0.078GB
	local             → 0.078GB
	admin             → (empty)
	test              → (empty)

##Listagem das coleções (passo 3)
	//comando
	show collections
	//retorno
	pokemons       → 0.001MB / 0.008MB
	system.indexes → 0.000MB / 0.008MB

##Cadastro dos pokemons (passo 4)
	var p1 = {"name": "Venusaur","description": "There is a large flower on Venusaurs back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flowers aroma soothes the emotions of people.","attack": 88,"defense": 92,"height": 2}

	var p2 = {"name": "Charizard","description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.","attack": 85,"defense": 99,"height": 1.7}

	var p3 = {"name": "Alakazam","description": "Alakazam brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.","attack": 55,"defense": 22,"height": 1.5}

	var p4 = {"name": "Zapdos","description": "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.","attack": 98,"defense": 98,"height": 1.6}

	db.pokemons.save(p1)
	db.pokemons.save(p2)
	db.pokemons.save(p3)
	db.pokemons.save(p4)

##Lista de Pokemons (passo 5)
	//comando
	db.pokemons.find()
	//retorno
	{
  	"_id": ObjectId("5642931be2a7c26c8d10405e"),
	  "name": "Venusaur",
		 "description": "There is a large flower on Venusaurs back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flowers aroma soothes the emotions of people.",
		"attack": 88,
		"defense": 92,
		"height": 2
	}
	{
		"_id": ObjectId("5642931ee2a7c26c8d10405f"),
		"name": "Charizard",
		"description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
		"attack": 85,
		"defense": 99,
		"height": 1.7
	}
	{
		"_id": ObjectId("56429a9978d0c4881ba858f3"),
		"name": "Alakazam",
		"description": "Alakazam brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.",
		"attack": 55,
		"defense": 22,
		"height": 1.5
	}
	{
		"_id": ObjectId("56429d029eb55187ee698708"),
		"name": "Zapdo																		  "description": "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
		"description": "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
		"attack": 98,
		"defense": 98,
		"height": 1.6
	}

##Atualizar Pokemon
	//pokemon desejado
	var query = {'name':'Charizard'}
	//consulta
	var poke = db.pokemons.findOne(query)
	//imprimir consulta antes da alteração
	poke
	{
	  "_id": ObjectId("5642931ee2a7c26c8d10405f"),
		"name": "Charizard",
		"description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
		"attack": 85,
		"defense": 99,
		"height": 1.7
	}
	//alterando registro
	poke.type = 'fogo'
	//imprimir consulta depois da alteração
	poke
	{
	  "_id": ObjectId("5642931ee2a7c26c8d10405f"),
		"name": "Charizard",
		"description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
		"attack": 85,
		"defense": 99,
		"height": 1.7,
		"type": "fogo"
	}
	//salvando as alterações no banco
	db.pokemons.save(poke)
	Updated 1 existing record(s) in 3ms
	WriteResult({
	  "nMatched": 1,
		"nUpserted": 0,
		"nModified": 1
	})
