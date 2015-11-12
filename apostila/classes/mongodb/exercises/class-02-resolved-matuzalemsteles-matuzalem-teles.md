# MongoDB - Aula 02 - Exercício
autor: Matuzalém Teles

## Listagem das databases (passo 2)

	> show dbs
	be-mean            0.078GB
	be-mean-instagram  0.078GB
	be-mean-pokemons   0.078GB
	local              0.078GB


## Listagem das coleções (passo 3)

	> show collections
	pokemons
	system.indexes

## Cadastro dos pokemons (passo 4)

	> db.pokemons.insert({'name':'Charmeleon','description':'Um mini dragão com rabo pegando fogo',attack:80,defense:65,height:11})
	WriteResult({ "nInserted" : 1 })
	> db.pokemons.insert({'name':'Pikachu','description':'Ele é bixão doido e elétrico','attack':50,'defense':50,'height':4})
	WriteResult({ "nInserted" : 1 })
	> db.pokemons.insert({'name':'Ivysaur ','description':'Com dente e uma planta loca na costa','attack':80,'defense':80,'height':10})
	WriteResult({ "nInserted" : 1 })
	> db.pokemons.insert({'name':'Blastoise ','description':'Parece ser uma tartaruga com casco vida loka','attack':85,'defense':105,'height':16})
	WriteResult({ "nInserted" : 1 })
	> db.pokemons.insert({'name':'Rattata','description':'Rato vida loka','attack':25,'defense':35,'height':3})
	WriteResult({ "nInserted" : 1 })

## Lista dos pokemons (passo 5)

	> db.pokemons.find()
	{ "_id" : ObjectId("5643456be80d6742ece646ae"), "name" : "Pikachu", "description" : "Ele é bixão doido e elétrico", "type" : "electric", "attack" : 100, "height" : 0.4 }
	{ "_id" : ObjectId("56434695e80d6742ece646af"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
	{ "_id" : ObjectId("56434762e80d6742ece646b0"), "name" : "Charmander", "description" : "Esse é o cão chupando manga de fofinho", "type" : "fogo", "attack" : 52, "height" : 0.6 }
	{ "_id" : ObjectId("56434799e80d6742ece646b1"), "name" : "Squirtle", "description" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "height" : 0.5 }
	{ "_id" : ObjectId("56434fd51b65a2def9e9725a"), "name" : "Charmeleon", "description" : "Um mini dragão com rabo pegando fogo", "attack" : 80, "defense" : 65, "height" : 11 }
	{ "_id" : ObjectId("56434fdc1b65a2def9e9725b"), "name" : "Pikachu", "description" : "Ele é bixão doido e elétrico", "attack" : 50, "defense" : 50, "height" : 4 }
	{ "_id" : ObjectId("56434fe41b65a2def9e9725c"), "name" : "Ivysaur ", "description" : "Com dente e uma planta loca na costa", "attack" : 80, "defense" : 80, "height" : 10 }
	{ "_id" : ObjectId("56434fed1b65a2def9e9725d"), "name" : "Blastoise ", "description" : "Parece ser uma tartaruga com casco vida loka", "attack" : 85, "defense" : 105, "height" : 16 }
	{ "_id" : ObjectId("56434ff31b65a2def9e9725e"), "name" : "Rattata", "description" : "Rato vida loka", "attack" : 25, "defense" : 35, "height" : 3 }


## Pokemon (passo 6)

	> var query = {'name': 'Blastoise '}
	> var poke = db.pokemons.findOne(query)
	> poke
	{
        "_id" : ObjectId("56434fed1b65a2def9e9725d"),
        "name" : "Blastoise ",
        "description" : "Parece ser uma tartaruga com casco vida loka",
        "attack" : 85,
        "defense" : 105,
        "height" : 16
	}

## Atualização do Pokemon (passo 6)

	> var query = {'name': 'Blastoise '}
	> var poke = db.pokemons.findOne(query)
	> poke
	{
        "_id" : ObjectId("56434fed1b65a2def9e9725d"),
        "name" : "Blastoise ",
        "description" : "Parece ser uma tartaruga com casco vida loka",
        "attack" : 85,
        "defense" : 105,
        "height" : 16
	}
	> poke.description = "Tartaruga com vida loka"
	Tartaruga com vida loka
	> db.pokemons.save(poke)
	WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
	> db.pokemons.findOne(query)
	{
        "_id" : ObjectId("56434fed1b65a2def9e9725d"),
        "name" : "Blastoise ",
        "description" : "Tartaruga com vida loka",
        "attack" : 85,
        "defense" : 105,
        "height" : 16
	}