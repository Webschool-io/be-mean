# MongoDB - Aula 02 - Exercício
autor: Alex Farias

## 1. Crie uma database chamada be-mean-pokemons;

    ```	
    show mongo be-mean-pokemons  	

    ```

## 2. Liste quais databases você possui nesse servidor;

    ```
    show dbs
    local            → 0.078GB
    be-mean-pokemons → 0.078GB

    ```

## 3. Liste quais coleções você possui nessa database;

    ```
    show collections
    pokemons       → 0.000MB / 0.008MB
    system.indexes → 0.000MB / 0.008MB

    ```
## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;

    ```
    db.pokemons.find().count()
    7

    ```
## 5. Liste os pokemons existentes na sua coleção;

    ```  
	 db.pokemons.find()
	{
	  "_id": ObjectId("56439d6abdda6aabca5a7fd1"),
	  "name": "Squirtle",
	  "description": "Shell is not merely for protection",
	  "attack": 48,
	  "defense": 65,
	  "height": 0.5
	}
	{
	  "_id": ObjectId("56439f82bdda6aabca5a7fd2"),
	  "name": "Butterfree",
	  "description": "Inseto q avoa",
	  "attack": 20,
	  "defense": 30,
	  "height": 1.1
	}
	{
	  "_id": ObjectId("5643a00ebdda6aabca5a7fd3"),
	  "name": "Blastoise",
	  "description": "Monxtrão que tem canhão de água",
	  "attack": 40,
	  "defense": 40,
	  "height": 1.6
	}
	{
	  "_id": ObjectId("5643a05ebdda6aabca5a7fd4"),
	  "name": "Metapod",
	  "description": "Inseto de casca dura",
	  "attack": 10,
	  "defense": 30,
	  "height": 0.7
	}
	{
	  "_id": ObjectId("5643a0b7bdda6aabca5a7fd5"),
	  "name": "Pidgey",
	  "description": "Passarinho q grita e voa",
	  "attack": 20,
	  "defense": 20,
	  "height": 0.3
	}
	{
	  "_id": ObjectId("5643a11abdda6aabca5a7fd6"),
	  "name": "Beedrill",
	  "description": "Abelhão do mal, vixe",
	  "attack": 50,
	  "defense": 30,
	  "height": 1
	}
	{
	  "_id": ObjectId("5643a157bdda6aabca5a7fd7"),
	  "name": "Arbok",
	  "description": "Cobra da Equipe Rocket",
	  "attack": 40,
	  "defense": 30,
	  "height": 3.5
	}

    ```

## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;

    ```

	be-mean-pokemons> var query = {name:'Beedrill'}
	be-mean-pokemons> var poke = db.pokemons.findOne(query)
	be-mean-pokemons> poke
	{
	  "_id": ObjectId("5643a11abdda6aabca5a7fd6"),
	  "name": "Beedrill",
	  "description": "Abelhão do mal, vixe",
	  "attack": 50,
	  "defense": 30,
	  "height": 1

    ```

   
## 7. Modifique sua `description` e salvê-o

    ```

	be-mean-pokemons> poke.description = 'Zoeira, é do bem :D '
	be-mean-pokemons> poke
	{
	  "_id": ObjectId("5643a11abdda6aabca5a7fd6"),
	  "name": "Beedrill",
	  "description": "Zoeira, é do bem :D ",
	  "attack": 50,
	  "defense": 30,
	  "height": 1
	}

    ```





