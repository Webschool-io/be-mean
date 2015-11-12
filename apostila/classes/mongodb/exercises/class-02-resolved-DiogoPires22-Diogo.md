 # MongoDB - Aula 01 - Exercício
autor: Diogo Pires Caires Silva (conta: Taise Feijo)

## Criando database

    ```
        > use be-mean-pokemons
        switched to db be-mean-pokemons

    ```

## Listando databases

    ```
    > show dbs
    be-mean  0.078GB
    local    0.078GB


    ```
    
## Criando colecao e Listando colecoes da database

    ```
    > db.createCollection('pokemons')
        { "ok" : 1 }
    > show collections
    pokemons
    system.indexes


    ```    
## Inserindo os monstrinhos no banco

    ```
     > db.pokemons.insert({name:'Gengar',description:'Fantasma bolado',atack:30,defense:55,height:0.5});
     WriteResult({ "nInserted" : 1 })
     
     > db.pokemons.insert({name:'Alakazam',description:'Macumbeiro',atack:40,defense:20,height:0.8});
     WriteResult({ "nInserted" : 1 })
     
     > db.pokemons.insert({name:'Venusaur',description:'Weed master',atack:120,defense:200,height:300});
     WriteResult({ "nInserted" : 1 })

    db.pokemons.insert({name:'Infernape',description:'Macaco em chamas',atack:300,defense:130,height:1.0});
    WriteResult({ "nInserted" : 1 })
    
    db.pokemons.insert({name:'Salamancer',description:'Dragao crazy',atack:300,defense:140,height:3.0});
    WriteResult({ "nInserted" : 1 })

    ```    
    
## Lista os pokemons

    ```
    > db.pokemons.find()
    { "_id" : ObjectId("56434132e1c4531476ee8edc"), "name" : "Gengar", "description" : "Fantasma bolado", "atack" : 30, "defense" : 55, "height" : 0.5 }
    { "_id" : ObjectId("56434174e1c4531476ee8edd"), "name" : "Alakazam", "description" : "Macumbeiro", "atack" : 40, "defense" : 20, "height" : 0.8 }
    { "_id" : ObjectId("564341a3e1c4531476ee8ede"), "name" : "Venusaur", "description" : "Weed master", "atack" : 120, "defense" : 200, "height" : 300 }
    { "_id" : ObjectId("564341e0e1c4531476ee8edf"), "name" : "Infernape", "description" : "Macaco em chamas", "atack" : 300, "defense" : 130, "height" : 1 }
    { "_id" : ObjectId("5643420de1c4531476ee8ee0"), "name" : "Salamancer", "description" : "Dragao crazy", "atack" : 300, "defense" : 140, "height" : 3 }

    ```  
    
    
## Buscando Pokemon

    ```
    > var query={name:"Gengar"}
    > var poke=db.pokemons.findOne(query)
    > poke
    {
        "_id" : ObjectId("56434132e1c4531476ee8edc"),
        "name" : "Gengar",
        "description" : "Fantasma bolado",
        "atack" : 30,
        "defense" : 55,
        "height" : 0.5
    }
    

    ```  
    
## Alterando description e salvando

    ```
    > poke.description=poke.description+" das trevas"
    Fantasma bolado das trevas
    > poke
    {
        "_id" : ObjectId("56434132e1c4531476ee8edc"),
        "name" : "Gengar",
        "description" : "Fantasma bolado das trevas",
        "atack" : 30,
        "defense" : 55,
        "height" : 0.5
    }
    
    > db.pokemons.save(poke)
    WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
    

    ```  
 
 

 


