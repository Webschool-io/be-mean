# MongoDB - Aula 02 - Exercício
autor: Wellington Fernandes

## Passo 1 e 2

    ```
    use be-mean-pokemons
    switched to db be-mean-pokemons

    show dbs
    be-mean            0.078GB
    be-mean-instagram  0.078GB
    local              0.078GB


    ```

## Passo 3

    ```
    show collections


    ```

## Passo 4

    ```
    var json = [{'name':'Metapod','description':'Um pedaço de pedra','attack':20,'defense':70,'height':0.4},
    {'name':'machop','description':'Boneco azul fei pakarai','attack':40,'defense':30,'height':0.8},
    {'name':'Haunter','description':'Fantasma do Mário assustador','attack':70,'defense':50,'height':0.4}, {'name':'Scyther','description':'Louva Deus que manja dos paranauê','attack':90,'defense':50,'height':0.3}, {'name':'Mareep','description':'Ovelha do mal que explode e mata todos a volta','attack':100,'defense':1,'height':0.7}]

    
    db.pokemons.insert(json)
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

## Passo 5

    ```
    db.pokemons.find()
    { "_id" : ObjectId("5642a9f7fbf2aa7ab2c4a034"), "name" : "Metapod", "description" : "Um pedaço de pedra", "attack" : 20, "defense" : 70, "height" : 0.4 }
    { "_id" : ObjectId("5642a9f7fbf2aa7ab2c4a035"), "name" : "machop", "description" : "Boneco azul fei pakarai", "attack" : 40, "defense" : 30, "height" : 0.8 }
    { "_id" : ObjectId("5642a9f7fbf2aa7ab2c4a036"), "name" : "Haunter", "description" : "Fantasma do Mário assustador", "attack" : 70, "defense" : 50, "height" : 0.4 }
    { "_id" : ObjectId("5642a9f7fbf2aa7ab2c4a037"), "name" : "Scyther", "description" : "Louva Deus que manja dos paranauê", "attack" : 90, "defense" : 50, "height" : 0.3 }
    { "_id" : ObjectId("5642a9f7fbf2aa7ab2c4a038"), "name" : "Mareep", "description" : "Ovelha do mal que explode e mata todos a volta", "attack" : 100, "defense" : 1, "height" : 0.7 }

    ```

## Passo 6

    ```    
    var poke = db.pokemons.findOne({name:'Scyther'})
    poke
    {
            "_id" : ObjectId("5642a9f7fbf2aa7ab2c4a037"),
            "name" : "Scyther",
            "description" : "Louva Deus que manja dos paranauê",
            "attack" : 90,
            "defense" : 50,
            "height" : 0.3
    }

    ```

## Passo 7

    ```
    poke.description = 'Louva Deus lutador de Muay Thai'
    Louva Deus lutador de Muay Thai
    db.pokemons.save(poke)
    WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

    poke
    {
        "_id" : ObjectId("5642a9f7fbf2aa7ab2c4a037"),
        "name" : "Scyther",
        "description" : "Louva Deus lutador de Muay Thai",
        "attack" : 90,
        "defense" : 50,
        "height" : 0.3
    }

    ```