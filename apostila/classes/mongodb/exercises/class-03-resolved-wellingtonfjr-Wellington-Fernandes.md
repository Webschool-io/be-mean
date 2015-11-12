# MongoDB - Aula 03 - Exercício
autor: Wellington Fernandes

## Passo 1

    ```
    var query = {height: {$lt: 0.5}}
	db.pokemons.find(query)
	{ 
		"_id" : ObjectId("5642a9f7fbf2aa7ab2c4a034"), 
		"name" : "Metapod", 
		"description" : "Um pedaço de pedra", 
		"attack" : 20, 
		"defense" : 70, 
		"height" : 0.4 
	}
	{ 
		"_id" : ObjectId("5642a9f7fbf2aa7ab2c4a036"), 
		"name" : "Haunter", 
		"description" : "Fantasma do Mário assustador", 
		"attack" : 70, 
		"defense" : 50, 
		"height" : 0.4 
	}
	{ 
		"_id" : ObjectId("5642a9f7fbf2aa7ab2c4a037"), 
		"name" : "Scyther", 
		"description" : "Louva Deus lutador de Muay Thai", 
		"attack" : 90, 
		"defense" : 50, 
		"height" : 0.3 
	}

    ```

## Passo 2

    ```
	var query = {height: {$gte: 0.5}}
	db.pokemons.find(query)
	{ "_id" : ObjectId("5642a9f7fbf2aa7ab2c4a035"), 
	"name" : "machop", 
	"description" : "Boneco azul fei pakarai", 
	"attack" : 40, 
	"defense" : 30, 
	"height" : 0.8 
}
	{ 
	"_id" : ObjectId("5642a9f7fbf2aa7ab2c4a038"), 
	"name" : "Mareep", 
	"description" : "Ovelha do mal que explode e mata todos a volta", 
	"attack" : 100, 
	"defense" : 1, 
	"height" : 0.7 }


    ```

## Passo 3

    ```
    var query = {$and: [{height: {$lte: 0.5}}, {name: 'Haunter'}]}
	db.pokemons.find(query)
	{ 
		"_id" : ObjectId("5642a9f7fbf2aa7ab2c4a036"), 
		"name" : "Haunter", 
		"description" : "Fantasma do Mário assustador", 
		"attack" : 70, 
		"defense" : 50, 
		"height" : 0.4 
	}


    ```

## Passo 4

    ```
    var query = {$or: [{attack: {$lte: 50}}, {name: 'Metapod'}]}
	db.pokemons.find(query)
	{ 
		"_id" : ObjectId("5642a9f7fbf2aa7ab2c4a034"), 
		"name" : "Metapod", 
		"description" : "Um pedaço de pedra", 
		"attack" : 20, 
		"defense" : 70, 
		"height" : 0.4 
	}
	{ 
		"_id" : ObjectId("5642a9f7fbf2aa7ab2c4a035"), 
		"name" : "machop", 
		"description" : "Boneco azul fei pakarai", 
		"attack" : 40, 
		"defense" : 30, 
		"height" : 0.8 
	}

    ```

## Passo 5

    ```    
    var query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 0.5}}]}
	db.pokemons.find(query)
	{ 
		"_id" : ObjectId("5642a9f7fbf2aa7ab2c4a036"), 
		"name" : "Haunter", 
		"description" : "Fantasma do Mário assustador", 
		"attack" : 70, 
		"defense" : 50, 
		"height" : 0.4 
	}
	{ 
		"_id" : ObjectId("5642a9f7fbf2aa7ab2c4a037"), 
		"name" : "Scyther", 
		"description" : "Louva Deus lutador de Muay Thai", 
		"attack" : 90, 
		"defense" : 50, 
		"height" : 0.3 
	}

    ```