# MongoDB - Aula 02 - Exercício
autor: Marcelo Avancini

## Listando databases

    > show dbs
    be-mean  0.078GB
    local    0.078GB
    m101     0.078GB


## Listando coleções
    > show collections
    pokemons
    restaurantes
    system.indexes

## Cadastrando pokemons
    > db.pokemons.insert({"name":"pikachu", "description":"pika pika", "attack":45, "defense":4, "height":0.3})
    WriteResult({ "nInserted" : 1 })
    > db.pokemons.insert({"name":"charmander", "description":"~~", "attack":100, "defense":10, "height":11.3})
    WriteResult({ "nInserted" : 1 })
    > db.pokemons.insert({"name":"bulbassaur", "description":"~~", "attack":60, "defense":5, "height":1.3})
    WriteResult({ "nInserted" : 1 })
    > db.pokemons.insert({"name":"squirtle", "description":"~~", "attack":69, "defense":51, "height":1.3})
    WriteResult({ "nInserted" : 1 })
    > db.pokemons.insert({"name":"charizard", "description":"~~", "attack":100000000, "defense":100000, "height":3222})
    WriteResult({ "nInserted" : 1 })


## Listando pokemons
    > db.pokemons.find()
    { "_id" : ObjectId("5643b90debddff52206356a8"), "name" : "pikachu", "description" : "pika pika", "attack" : 45, "defense" : 4, "height" : 0.3 }
    { "_id" : ObjectId("5643b955ebddff52206356a9"), "name" : "charmander", "description" : "~~", "attack" : 100, "defense" : 10, "height" : 11.3 }
    { "_id" : ObjectId("5643b96debddff52206356aa"), "name" : "bulbassaur", "description" : "~~", "attack" : 60, "defense" : 5, "height" : 1.3 }
    { "_id" : ObjectId("5643b9b7ebddff52206356ab"), "name" : "squirtle", "description" : "~~", "attack" : 69, "defense" : 51, "height" : 1.3 }
    { "_id" : ObjectId("5643b9d9ebddff52206356ac"), "name" : "charizard", "description" : "~~", "attack" : 100000000, "defense" : 100000, "height" : 3222 }

## Consultando um pokemon
    > var pokemon = db.pokemons.findOne({name: 'charizard'})
    > pokemon
    {
    	"_id" : ObjectId("5643b9d9ebddff52206356ac"),
    	"name" : "charizard",
    	"description" : "~~",
    	"attack" : 100000000,
    	"defense" : 100000,
    	"height" : 3222
    }

## Atualizando o consultado
    > pokemon.sexAppeal = 'high'
    high
    > pokemon
    {
    	"_id" : ObjectId("5643b9d9ebddff52206356ac"),
    	"name" : "charizard",
    	"description" : "~~",
    	"attack" : 100000000,
    	"defense" : 100000,
    	"height" : 3222,
    	"sexAppeal" : "high"
    }
    > db.pokemons.save(pokemon)
    WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
