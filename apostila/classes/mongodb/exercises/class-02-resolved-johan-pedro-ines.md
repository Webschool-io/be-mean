# MongoDB - Aula 02 - Exercício
autor: JOHAN PEDRO INÊS

## Listagem das databases (passo 2)
    ```
	> use be-mean-pokemons
	switched to db be-mean-pokemons
	> show dbs
	angle-dev          0.078GB
	be-mean            0.078GB
	be-mean-instagram  0.078GB
	local              0.078GB
	noc                0.078GB
    ```
## Listagem das coleções (passo 3)
    ```
	> show collections
	>
    ```


## Cadastro dos pokemons (passo 4)
    ```
    var pokemons=[{name:"charmander",description:"dragão de fogo",type:"fogo",attack:600,defense:500,height:.5},{name:"charmeleon",description:"upgrade do dragão de fogo",type:"fogo",attack:1e3,defense:900,height:.8},{name:"charlizard",description:"upgrade do upgrade do dragão de fogo",type:"fogo",attack:1500,defense:1300,height:2.1},{name:"charliemon brown",description:"aspirador de pó",type:"skate",attack:3,defense:0,height:1.9},{name:"mc brinquedomon",description:"Roça o pokemon nela que ela gosta",type:"carai",attack:1,defense:0,height:1.6}];
    > pokemons
	[
        {
                "name" : "charmander",
                "description" : "dragão de fogo",
                "type" : "fogo",
                "attack" : 600,
                "defense" : 500,
                "height" : 0.5
        },
        {
                "name" : "charmeleon",
                "description" : "upgrade do dragão de fogo",
                "type" : "fogo",
                "attack" : 1000,
                "defense" : 900,
                "height" : 0.8
        },
        {
                "name" : "charlizard",
                "description" : "upgrade do upgrade do dragão de fogo",
                "type" : "fogo",
                "attack" : 1500,
                "defense" : 1300,
                "height" : 2.1
        },
        {
                "name" : "charliemon brown",
                "description" : "aspirador de pó",
                "type" : "skate",
                "attack" : 3,
                "defense" : 0,
                "height" : 1.9
        },
        {
                "name" : "mc brinquedomon",
                "description" : "Roça o pokemon nela que ela gosta",
                "type" : "carai",
                "attack" : 1,
                "defense" : 0,
                "height" : 1.6
        }
	]
	> db.pokemons.insert(pokemons)
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

    ```


## Lista dos pokemons (passo 5)
    ```
    > db.pokemons.find()
	{ "_id" : ObjectId("5643fe41916e298aebb522bb"), "name" : "charmander", "description" : "dragão de fogo", "type" : "fogo", "attack" : 600, "defense" : 500, "height" : 0.5 }
	{ "_id" : ObjectId("5643fe41916e298aebb522bc"), "name" : "charmeleon", "description" : "upgrade do dragão de fogo", "type" : "fogo", "attack" : 1000, "defense": 900, "height" : 0.8 }
	{ "_id" : ObjectId("5643fe41916e298aebb522bd"), "name" : "charlizard", "description" : "upgrade do upgrade do dragão de fogo", "type" : "fogo", "attack" : 1500, "defense" : 1300, "height" : 2.1 }
	{ "_id" : ObjectId("5643fe41916e298aebb522be"), "name" : "charliemon brown", "description" : "aspirador de pó", "type" : "skate", "attack" : 3, "defense" : 0, "height" : 1.9 }
	{ "_id" : ObjectId("5643fe41916e298aebb522bf"), "name" : "mc brinquedomon", "description" : "Roça o pokemon nela que ela gosta", "type" : "carai", "attack" : 1,"defense" : 0, "height" : 1.6 }
    ```


## Pokemon (passo 6)
    ```
    > var query = {name: 'charmeleon'}
	> query
	{ "name" : "charmeleon" }
	> var poke = db.pokemons.findOne(query)
	> poke
	{
	        "_id" : ObjectId("5643fe41916e298aebb522bc"),
	        "name" : "charmeleon",
	        "description" : "upgrade do dragão de fogo",
	        "type" : "fogo",
	        "attack" : 1000,
	        "defense" : 900,
	        "height" : 0.8
	}
    ```


## Atualização do Pokemon (passo 6)

    ```
    > poke.description
	upgrade do dragão de fogo
	>
	> poke.description = 'dragãozinho maior'
	dragãozinho maior
	> db.pokemons.save(poke)
	WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
	> db.pokemons.findOne(query)
	{
	        "_id" : ObjectId("5643fe41916e298aebb522bc"),
	        "name" : "charmeleon",
	        "description" : "dragãozinho maior",
	        "type" : "fogo",
	        "attack" : 1000,
	        "defense" : 900,
	        "height" : 0.8
	}
    ```
