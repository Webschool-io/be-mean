# MongoDB - Aula 02 - Exercício
autor: Fernando Rufino Fontoura

## 1. Crie uma database chamada be-mean-pokemons

    ```
    fernando(mongod-3.0.7) test> use be-mean-pokemons
	switched to db be-mean-pokemons
	fernando(mongod-3.0.7) be-mean-pokemons> 
    ```

## 2. Liste quais databases você possui nesse servidor

    ```
    fernando(mongod-3.0.7) be-mean-pokemons> show dbs
	be-mean-instagram → 0.078GB
	be-mean           → 0.078GB
	local             → 0.078GB
	fernando(mongod-3.0.7) be-mean-pokemons> 
    ```

## 3. Liste quais coleções você possui nessa database;

    ```
    fernando(mongod-3.0.7) be-mean-pokemons> show collections
    ```

## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;

    ```
    fernando(mongod-3.0.7) be-mean-pokemons> var pokemons = [{'name':'Gyarados','description':'Jiraiya','type': 'water', attack: 125, height: 518.1 }, {'name':'Greninja','description':'Sapo ninja','type': 'water', attack: 95, height: 88.2 }, {'name':'Volcanion','description':'Volcano','type': 'fire', attack: 110, height: 429.9 }, {'name':'Spearow','description':'Quase o jack','type': 'normal', attack: 60, height: 4.4 }, {'name':'Zubat','description':'Ponto fraco: Ozzy','type': 'normal', attack: 55, height: 16.5 }]
	fernando(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(pokemons)
	Inserted 1 record(s) in 255ms
	BulkWriteResult({
	  "writeErrors": [ ],
	  "writeConcernErrors": [ ],
	  "nInserted": 5,
	  "nUpserted": 0,
	  "nMatched": 0,
	  "nModified": 0,
	  "nRemoved": 0,
	  "upserted": [ ]
	})
    ```

## 5. Liste os pokemons existentes na sua coleção;

    ```
    fernando(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
	{
	  "_id": ObjectId("5643c5043a9dc25717f22bb4"),
	  "name": "Gyarados",
	  "description": "Jiraiya",
	  "type": "water",
	  "attack": 125,
	  "height": 518.1
	}
	{
	  "_id": ObjectId("5643c5043a9dc25717f22bb5"),
	  "name": "Greninja",
	  "description": "Sapo ninja",
	  "type": "water",
	  "attack": 95,
	  "height": 88.2
	}
	{
	  "_id": ObjectId("5643c5043a9dc25717f22bb6"),
	  "name": "Volcanion",
	  "description": "Volcano",
	  "type": "fire",
	  "attack": 110,
	  "height": 429.9
	}
	{
	  "_id": ObjectId("5643c5043a9dc25717f22bb7"),
	  "name": "Spearow",
	  "description": "Quase o jack",
	  "type": "normal",
	  "attack": 60,
	  "height": 4.4
	}
	{
	  "_id": ObjectId("5643c5043a9dc25717f22bb8"),
	  "name": "Zubat",
	  "description": "Ponto fraco: Ozzy",
	  "type": "normal",
	  "attack": 55,
	  "height": 16.5
	}
	Fetched 5 record(s) in 13ms
    ```

## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;

    ```
    fernando(mongod-3.0.7) be-mean-pokemons> var query = {name: 'Spearow'}
	fernando(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
	fernando(mongod-3.0.7) be-mean-pokemons> poke
	{
	  "_id": ObjectId("5643c5043a9dc25717f22bb7"),
	  "name": "Spearow",
	  "description": "Quase o jack",
	  "type": "normal",
	  "attack": 60,
	  "height": 4.4
	}
    ```

## 7. Modifique sua `description` e salvê-o

    ```
    fernando(mongod-3.0.7) be-mean-pokemons> poke.description = "Passarinho"
	Passarinho
	fernando(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
	Updated 1 existing record(s) in 13ms
	WriteResult({
	  "nMatched": 1,
	  "nUpserted": 0,
	  "nModified": 1
	})
    ```