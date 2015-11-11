# MongoDB - Aula 02 - Exercício
autor: WILSON ALBINO JUNIOR

## 1 Criando DataBase

	junior-pc(mongod-2.6.3) test> use be-mean-pokemons
	switched to db be-mean-pokemons

## 2 Listanto DataBases

	junior-pc(mongod-2.6.3) be-mean-pokemons> show dbs
	be-mean           → 0.078GB
	be-mean-instagram → 0.078GB
	local             → 0.078GB
	admin             → (empty)

## 3 Listando Collections
	junior-pc(mongod-2.6.3) be-mean-pokemons> show collections
	junior-pc(mongod-2.6.3) be-mean-pokemons>

## 4 Casastrando Pokemons
	var pokemons = [{'name':'Venusaur','description':'Ultima evolução do Bulbasar','type':'Grama',attack: 45, defense: 45, height: 0.9},{'name':'Charizard','description':'Ultima evolução do Charmander','type':'Fogo',attack: 45, defense: 30, height: 0.9},{'name':'Blastoise','description':'Ultima evolução do Squirtle','type':'Água',attack: 40, defense: 45, height: 0.8},{'name':'Articuno','description':'Pokemon lendário pika das galáxias','type':'Gelo',attack: 60, defense: 45, height: 1.0},{'name':'Zapdos','description':'Pokemon lendário pika das galáxias II','type':'Elétrico',attack: 55, defense: 45, height: 1.0},{'name':'Moltres','description':'Pokemon lendário pika das galáxias III','type':'Fogo',attack: 58, defense: 45, height: 1.0},{'name':'Mewtwo','description':'Pokemon lendário pika das galáxias FODÁSTICO','type':'Psychic',attack: 65, defense: 50, height: 1.0},{'name':'Mew','description':'Pokemon lendário pika das galáxias FODÁSTICO e fofo','type':'Psychic',attack: 60, defense: 45, height: 1.0}]
	junior-pc(mongod-2.6.3) be-mean-pokemons> db.pokemons.insert(pokemons)
	Inserted 1 record(s) in 3ms
	WriteResult({
	  "nInserted": 8
	})

## 5 Listando Pokemons
	db.pokemons.find()
	{
	  "_id": ObjectId("56433b05ece2228ff6988a28"),
	  "name": "Venusaur",
	  "description": "Ultima evolução do Bulbasar",
	  "type": "Grama",
	  "attack": 45,
	  "defense": 45,
	  "height": 0.9
	}
	{
	  "_id": ObjectId("56433c29ece2228ff6988a29"),
	  "name": "Charizard",
	  "description": "Ultima evolução do Charmander",
	  "type": "Fogo",
	  "attack": 45,
	  "defense": 30,
	  "height": 0.9
	}
	{
	  "_id": ObjectId("56433cafece2228ff6988a2a"),
	  "name": "Blastoise",
	  "description": "Ultima evolução do Squirtle",
	  "type": "Água",
	  "attack": 40,
	  "defense": 45,
	  "height": 0.8
	}
	{
	  "_id": ObjectId("56433dd0ece2228ff6988a2b"),
	  "name": "Articuno",
	  "description": "Pokemon lendário pika das galáxias",
	  "type": "Gelo",
	  "attack": 60,
	  "defense": 45,
	  "height": 1
	}
	{
	  "_id": ObjectId("56433e1cece2228ff6988a2c"),
	  "name": "Zapdos",
	  "description": "Pokemon lendário pika das galáxias II",
	  "type": "Elétrico",
	  "attack": 55,
	  "defense": 45,
	  "height": 1
	}
	{
	  "_id": ObjectId("56433e54ece2228ff6988a2d"),
	  "name": "Moltres",
	  "description": "Pokemon lendário pika das galáxias III",
	  "type": "Fogo",
	  "attack": 58,
	  "defense": 45,
	  "height": 1
	}
	{
	  "_id": ObjectId("56433ed4ece2228ff6988a2e"),
	  "name": "Mewtwo",
	  "description": "Pokemon lendário pika das galáxias FODÁSTICO",
	  "type": "Psychic",
	  "attack": 65,
	  "defense": 50,
	  "height": 1
	}
	{
	  "_id": ObjectId("56433f1aece2228ff6988a2f"),
	  "name": "Mew",
	  "description": "Pokemon lendário pika das galáxias FODÁSTICO e fofo",
	  "type": "Psychic",
	  "attack": 60,
	  "defense": 45,
	  "height": 1
	}
	Fetched 8 record(s) in 9ms
	junior-pc(mongod-2.6.3) be-mean-pokemons> 

## 6 Buscando pokemon de preferencia
	junior-pc(mongod-2.6.3) be-mean-pokemons> var query = {name: 'Articuno'}
	junior-pc(mongod-2.6.3) be-mean-pokemons> var poke = db.pokemons.findOne(query)
	junior-pc(mongod-2.6.3) be-mean-pokemons> poke.name
	Articuno
	junior-pc(mongod-2.6.3) be-mean-pokemons> poke
	{
	  "_id": ObjectId("56433dd0ece2228ff6988a2b"),
	  "name": "Articuno",
	  "description": "Pokemon lendário pika das galáxias",
	  "type": "Gelo",
	  "attack": 60,
	  "defense": 45,
	  "height": 1
	}
## 7 Alterando Pokemon
	poke.description = 'Pokemon lendário pika das galáxias fodastico I'
	Pokemon lendário pika das galáxias fodastico I
	junior-pc(mongod-2.6.3) be-mean-pokemons> db.pokemons.save(poke)
	Updated 1 existing record(s) in 28ms
	WriteResult({
	  "nMatched": 1,
	  "nUpserted": 0,
	  "nModified": 1
	})
	
	junior-pc(mongod-2.6.3) be-mean-pokemons> poke
	
	{
	  "_id": ObjectId("56433dd0ece2228ff6988a2b"),
	  "name": "Articuno",
	  "description": "Pokemon lendário pika das galáxias fodastico I",
	  "type": "Gelo",
	  "attack": 60,
	  "defense": 45,
	  "height": 1
	}
	
