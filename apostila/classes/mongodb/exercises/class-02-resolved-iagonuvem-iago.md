# MongoDB - Aula 02 - Exercício
autor: Iago Nuvem


# 1 - Crie uma database chamada be-mean-pokemons;
	Iago Nuvem@IAGO /C/Program Files/MongoDB/Server/3.0/bin
	$ mongo.exe
	MongoDB shell version: 3.0.7
	connecting to: test
	** Cria database se nao existir e seleciona-o para uso **
	> use be-mean-pokemons
	switched to db be-mean-pokemons
	> ^C
	bye

# 2 - Liste quais databases você possui nesse servidor;
	Iago Nuvem@IAGO /C/Program Files/MongoDB/Server/3.0/bin
	
	** Conecta no client usando o database escolhido **
	$ mongo.exe be-mean-pokemons
	
	MongoDB shell version: 3.0.7
	connecting to: be-mean-pokemons

	** Lista as databases do servidor **
	> show dbs
	be-mean            0.078GB
	be-mean-instagram  0.078GB
	local              0.078GB
	test               0.078GB
	> ^C
	bye

# 3 - Liste quais coleções você possui nessa database;
	Iago Nuvem@IAGO /C/Program Files/MongoDB/Server/3.0/bin
	$ mongo.exe be-mean-pokemons
	MongoDB shell version: 3.0.7
	connecting to: be-mean-pokemons
	** Exibe as coleções **
	> show collections
	** Como nao tem porra nenhuma nesse database ainda, nao vai mostrar porra nenhuma , vlw flw **
	> ^C
	bye

# 4 - Inserindo dados
	** Criando variaveis para cada pokemon **
	> var pikachu = {"name" : "Pikachu", "description" : "Rato Elétrico Psicodélico", "type" : "electric", "attack" : 100, "height" : 0.4 }
	> var bubassauro = {'name': 'bulbassauro', 'description': 'Chicote de Trepadeira', 'type':'grama','attack':49, height: 0.4}
	> var charmander = {'name' : 'Charmander', 'description': 'Esse é o cao chupando manga', 'type':'fogo','attack':52, height: 0.6}
	> var squirtle = {'name': 'Squirtle', 'description': 'Ejeta fluidos vaginais', 'type':'agua', 'attack': 48, height: 0.5}
	> var blastoise = {'name': 'Blastoise', 'description': 'Só tiro porrada e bomba', 'type':'agua', 'attack': 48, height: 1.6}

	** Inserindo cada feladaputa **
	> db.pokemons.insert(pikachu)
	WriteResult({ "nInserted" : 1 })
	> db.pokemons.insert(bubassauro)
	WriteResult({ "nInserted" : 1 })
	> db.pokemons.insert(charmander)
	WriteResult({ "nInserted" : 1 })
	> db.pokemons.insert(squirtle)
	WriteResult({ "nInserted" : 1 })
	> db.pokemons.insert(blastoise)
	WriteResult({ "nInserted" : 1 })

# 5. Liste os pokemons existentes na sua coleção;
	** Exibindo dados inseridos **
	> db.pokemons.find()
	{ "_id" : ObjectId("564da4e50b47a45b460e4232"), "name" : "Pikachu", "description" : "Rato Elétrico Psicodélico", "type" : "electric", "attack" : 100, "height" : 0.4 }
	{ "_id" : ObjectId("564daf81e9a7daec5650c86a"), "name" : "bulbassauro", "description" : "Chicote de Trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
	{ "_id" : ObjectId("564dafafe9a7daec5650c86b"), "name" : "Charmander", "description" : "Esse é o cao chupando manga", "type" : "fogo", "attack" : 52, "height" : 0.6 }
	{ "_id" : ObjectId("564dafbce9a7daec5650c86c"), "name" : "Squirtle", "description" : "Ejeta fluidos vaginais", "type" : "agua", "attack" : 48, "height" : 0.5 }
	{ "_id" : ObjectId("564dafbce9a7daec5650c86e"), "name" : "Blastoise", "description": "Só tiro porrada e bomba", "type":"agua", "attack": 48, height: 1.6 }

# 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;
	** Define uma query para busca **
	> var query = {'name' : 'Blastoise'}

	** Utiliza o Método findOne() para realizar a busca retornando array, e atribui-o à variavel 'poke' **
	> var poke = db.pokemons.findOne(query)
	
	** exibe os dados retornados **
	> poke
	{
	        "_id" : ObjectId("564db23d77a952f6723bae8f"),
	        "name" : "Blastoise",
	        "description" : "Só tiro porrada e bomba",
	        "type" : "agua",
	        "attack" : 48,
	        "height" : 1.6
	}

# 7. Modifique sua `description` e salvê-o
	Iago Nuvem@IAGO /C/Program Files/MongoDB/Server/3.0/bin
	$ mongo.exe
	MongoDB shell version: 3.0.7
	connecting to: test
	** Define uma query para busca **
	> var query = {'name' : 'Blastoise'}

	** Utiliza o Método findOne() para realizar a busca retornando array, e atribui-o à variavel 'poke' **
	> var poke = db.pokemons.findOne(query)

	
	** Altera ou cria uma propriedade do objeto **
	> poke.description = "Squirtle bombadão"
	"Squirtle bombadão"

	** Exibe objeto apos alteracao **
	> poke
	{
	        "_id" : ObjectId("564db23d77a952f6723bae8f"),
	        "name" : "Blastoise",
	        "description" : "Squirtle bombadão",
	        "type" : "agua",
	        "attack" : 48,
	        "height" : 1.6
	}
	
	** Altera e salva saporra **
	> db.pokemons.save(result)
	WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
	