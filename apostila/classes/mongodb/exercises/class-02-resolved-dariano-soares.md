# MongoDB - Aula 01 - Exercício
autor: Dariano Soares

## Pokemons

## 1. Crie uma database chamada be-mean-pokemons;
	mongo be-mean-pokemons
## 2. Liste quais databases você possui nesse servidor;
	show dbs
	be-mean            0.078GB
	learnig-express    0.078GB
	test               0.078GB
	todo               0.078GB
	be-mean-instagran  0.078GB
	local              0.078GB
	admin              (empty)
	be-mean-pokemons   (empty)
## 3. Liste quais coleções você possui nessa database;
	show collections
	pokemons        0.001MB / 0.008MB
	system.indexes  0.000MB / 0.008MB
## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;
	var pokemon1 = {"nome":"Exploud","description":"Exploud provoca terremotos com os tremores que ela cria por berros.","type":"Loud Noise","attack":48,"height":1.5}
	var pokemon2 = {"nome":"Machop","description":"Os músculos de Machop são especiais, eles nunca ficam doloridos não importa o quanto eles são usados em exercício.","type":"Loud Noise","attack":40,"height":0.8}
	var pokemon3 = {"nome":"Haunter","description":"Haunter é um Pokémon perigoso. Se alguém acena-lhe enquanto flutuando na escuridão, você nunca deve abordá-lo.","type":"Gas","attack":54,"height":1.6}
	var pokemon4 = {"nome":"Lickilicky","description":"Ela envolve as coisas com a língua extensível.","type":"Licking","attack":44,"height":1.7}
	var pokemon5 = {"nome":"Delphox","description":"Ela envolve as coisas com a língua extensível.","type":"Fox","attack":47,"height":1.5}

	db.pokemons.save(pokemon1)
	db.pokemons.save(pokemon2)
	db.pokemons.save(pokemon3)
	db.pokemons.save(pokemon4)
	db.pokemons.save(pokemon5)
## 5. Liste os pokemons existentes na sua coleção;
	db.pokemons.find()
## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;
	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> var poke = db.pokemons.findOne({nome: "Haunter"})
	dariano-IC4I(mongod-2.6.3) be-mean-pokemons> poke
	{
	  "_id": ObjectId("5642a068eb28f474ff7dd11c"),
	  "nome": "Haunter",
	  "description": "Haunter é um Pokémon perigoso. Se alguém acena-lhe enquanto flutuando na escuridão, você nunca deve abordá-lo.",
	  "type": "Gas",
	  "attack": 54,
	  "height": 1.6
	}

## 7. Modifique sua `description` e salvê-o
	poke.type = "Gases"
	db.pokemons.save(poke)

