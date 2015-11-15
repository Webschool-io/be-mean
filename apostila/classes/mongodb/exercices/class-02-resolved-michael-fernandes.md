<<<<<<< HEAD
# MongoDb - Aula 02 - Exercício

1. Crie uma database chamada be-mean-pokemons;
2. Liste quais databases você possui nesse servidor;
3. Liste quais coleções você possui nessa database;
4. Insira pelo menos 5 pokemons **A SUA ESCOLHA** utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;
5. Liste os pokemons existentes na sua coleção;
6. Busque o `pickachu` e armazene-o em uma variável chamada `poke`;
7. Modifique sua `description` e salvê-o



## Estrutura

```md
# MongoDB - Aula 02 - Exercício
autor: Michael Fernandes

## Listagem das databases (passo 2)
    use be-mean-pokemons
	switched to db be-mean-pokemons

	be-mean-instagram  0.078GB
	be-mean            0.078GB
	local              0.078GB
	test               0.078GB


## Listagem das coleções (passo 3)
	show collections


## Cadastro dos pokemons (passo 4)
	var pokemon = [{
	name:'Pikachu', description:'Tato elétrico bem fofinho', type:'electic', attack: 55, height:0.4},
	{ name:'Bulbassauro', description:'Chicote de trepadeira', type:'grama', attack: 49, height:0.4},
	{ name:'Charmander', description:'Esse é o cçao chupando manga de fofinho', type:'fogo', attack: 52, height:0.6},
	{ name:'Squirtle', description:'Ejeta água que passarinho não bebe', type:'água', attack: 48, height:0.5},
	{ name:'Caterpie', description:'Larva lindinha', type:'inseto', attack: 30, height:0.3},
	{ name:'Magby', description:'Um pato que cospe fogo', type:'fogo', attack: 35, height:0.7},
	{ name:'Treecko', description:'Largarto marento estiloso', type:'grama', attack: 30, height:0.5},
	{ name:'Elgyem', description:'Largarto marento estiloso', type:'psiquica', attack: 35, height:0.5}
	]
	pokemon
	[
	    {
	        "name": "Pikachu",
	        "description": "Tato elétrico bem fofinho",
	        "type": "electic",
	        "attack": 55,
	        "height": 0.4
	    },
	    {
	        "name": "Bulbassauro",
	        "description": "Chicote de trepadeira",
	        "type": "grama",
	        "attack": 49,
	        "height": 0.4
	    },
	    {
	        "name": "Charmander",
	        "description": "Esse é o cçao chupando manga de fofinho",
	        "type": "fogo",
	        "attack": 52,
	        "height": 0.6
	    },
	    {
	        "name": "Squirtle",
	        "description": "Ejeta água que passarinho não bebe",
	        "type": "água",
	        "attack": 48,
	        "height": 0.5
	    },
	    {
	        "name": "Caterpie",
	        "description": "Larva lindinha",
	        "type": "inseto",
	        "attack": 30,
	        "height": 0.3
	    },
	    {
	        "name": "Magby",
	        "description": "Um pato que cospe fogo",
	        "type": "fogo",
	        "attack": 35,
	        "height": 0.7
	    },
	    {
	        "name": "Treecko",
	        "description": "Largarto marento estiloso",
	        "type": "grama",
	        "attack": 30,
	        "height": 0.5
	    },
	    {
	        "name": "Elgyem",
	        "description": "Largarto marento estiloso",
	        "type": "psiquica",
	        "attack": 35,
	        "height": 0.5
	    }
	]

	db.pokemons.insert(pokemon)
	Inserted 1 record(s) in 496ms
	BulkWriteResult({
	    "writeErrors": [ ],
	    "writeConcernErrors": [ ],
	    "nInserted": 8,
	    "nUpserted": 0,
	    "nMatched": 0,
	    "nModified": 0,
	    "nRemoved": 0,
	    "upserted": [ ]
	})


## Lista dos pokemons (passo 5)
	db.pokemons.find()
	{
	    "_id": ObjectId("5648044446704952eb6850a2"),
	    "name": "Pikachu",
	    "description": "Tato elétrico bem fofinho",
	    "type": "electic",
	    "attack": 55,
	    "height": 0.4
	}
	{
	    "_id": ObjectId("5648044446704952eb6850a3"),
	    "name": "Bulbassauro",
	    "description": "Chicote de trepadeira",
	    "type": "grama",
	    "attack": 49,
	    "height": 0.4
	}
	{
	    "_id": ObjectId("5648044446704952eb6850a4"),
	    "name": "Charmander",
	    "description": "Esse é o cçao chupando manga de fofinho",
	    "type": "fogo",
	    "attack": 52,
	    "height": 0.6
	}
	{
	    "_id": ObjectId("5648044446704952eb6850a5"),
	    "name": "Squirtle",
	    "description": "Ejeta água que passarinho não bebe",
	    "type": "água",
	    "attack": 48,
	    "height": 0.5
	}
	{
	    "_id": ObjectId("5648044446704952eb6850a6"),
	    "name": "Caterpie",
	    "description": "Larva lindinha",
	    "type": "inseto",
	    "attack": 30,
	    "height": 0.3
	}
	{
	    "_id": ObjectId("5648044446704952eb6850a7"),
	    "name": "Magby",
	    "description": "Um pato que cospe fogo",
	    "type": "fogo",
	    "attack": 35,
	    "height": 0.7
	}
	{
	    "_id": ObjectId("5648044446704952eb6850a8"),
	    "name": "Treecko",
	    "description": "Largarto marento estiloso",
	    "type": "grama",
	    "attack": 30,
	    "height": 0.5
	}
	{
	    "_id": ObjectId("5648044446704952eb6850a9"),
	    "name": "Elgyem",
	    "description": "Largarto marento estiloso",
	    "type": "psiquica",
	    "attack": 35,
	    "height": 0.5
	}
	Fetched 8 record(s) in 1ms


## Pikachu (passo 6)
	var query = {"name":"Elgyem"}
	query
	{
	    "name": "Elgyem"
	}

	var poke = db.pokemons.findOne(query)
	poke
	{
	    "_id": ObjectId("5648044446704952eb6850a9"),
	    "name": "Elgyem",
	    "description": "Largarto marento estiloso",
	    "type": "psiquica",
	    "attack": 35,
	    "height": 0.5
	}


## Atualização do Pikachu (passo 7)
	var query = {"name":"Elgyem"}
	query
	{
	    "name": "Elgyem"
	}
	var poke = db.pokemons.findOne(query)
	poke
	{
	    "_id": ObjectId("5648044446704952eb6850a9"),
	    "name": "Elgyem",
	    "description": "Largarto marento estiloso",
	    "type": "psiquica",
	    "attack": 35,
	    "height": 0.5
	}
	poke.description
	Largarto marento estiloso
	poke.description = "Largarta marenta cheia de estilo"
	Largarta marenta cheia de estilo
	db.pokemons.save(poke)
	Updated 1 existing record(s) in 4ms
	WriteResult({
	    "nMatched": 1,
	    "nUpserted": 0,
	    "nModified": 1
	})
	db.pokemons.findOne(query)
	{
	    "_id": ObjectId("5648044446704952eb6850a9"),
	    "name": "Elgyem",
	    "description": "Largarta marenta cheia de estilo",
	    "type": "psiquica",
	    "attack": 35,
	    "height": 0.5
	}


```


## Envio

[Veja na nossa Wiki](https://github.com/Webschool-io/be-mean-instagram/wiki/Exerc%C3%ADcios)

1. Crie o repositório específico do módulo. Ex.: be-mean-instagram-mongodb
2. Crie a solução do exercício localmente nesse repositório, usando sempre o padrão `class-02-resolved-suissa-jean-nascimento.md`
3. Dê um `fork` no repositório oficial https://github.com/Webschool-io/be-mean-instagram/
4. Vá até a pasta do módulo desejado e **COLE** seu arquivo na pasta `exercises`
5. Crie um **Pull Request** enviando **APENAS** o seu arquivo sem modificar mais nada.
6. Na mensagem do commit/pull request favor seguir o padrão: Jean Nascimento - MongoDB - Exercicio 02 resolvido
7. Levante as mão para o céu e agradeça se acaso tiver ... #brinks
=======
# MongoDb - Aula 02 - Exercício

1. Crie uma database chamada be-mean-pokemons;
2. Liste quais databases você possui nesse servidor;
3. Liste quais coleções você possui nessa database;
4. Insira pelo menos 5 pokemons **A SUA ESCOLHA** utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;
5. Liste os pokemons existentes na sua coleção;
6. Busque um pokemon a sua escolha, que acabou de ser inserido, e armazene-o em uma variável chamada `poke`;
7. Modifique sua `description` e salvê-o



## Estrutura

```md
# MongoDB - Aula 02 - Exercício
autor: SEU NOME

## Listagem das databases (passo 2)


## Listagem das coleções (passo 3)


## Cadastro dos pokemons (passo 4)


## Lista dos pokemons (passo 5)


## Pikachu (passo 6)


## Atualização do Pikachu (passo 6)

```


## Envio

[Veja na nossa Wiki](https://github.com/Webschool-io/be-mean-instagram/wiki/Exerc%C3%ADcios)

1. Crie o repositório específico do módulo. Ex.: be-mean-instagram-mongodb
2. Crie a solução do exercício localmente nesse repositório, usando sempre o padrão `class-02-resolved-suissa-jean-nascimento.md`
3. Dê um `fork` no repositório oficial https://github.com/Webschool-io/be-mean-instagram/
4. Vá até a pasta do módulo desejado e **COLE** seu arquivo na pasta `exercises`
5. Crie um **Pull Request** enviando **APENAS** o seu arquivo sem modificar mais nada.
6. Na mensagem do commit/pull request favor seguir o padrão: Jean Nascimento - MongoDB - Exercicio 02 resolvido
7. Levante as mão para o céu e agradeça se acaso tiver ... #brinks
>>>>>>> upstream_/master
