# MongoDB - Aula 02 - Exercício
autor: Leonardo Cassuriaga Lima

## Criando a database

use be-mean-pokemons
switched to db be-mean-pokemons

## Listando as databases

show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB

## Listando as coleções
show collections


## Dados para inserir
 {'name': 'Haunter', 'description': 'Pokemon perigoso', 'type':'ghost', attack: 30, height: 0.16}
 {'name': 'Lickilicky', 'description': 'Pokemon linguarudo', 'type':'normal', attack: 40, height: 1.7}
 {'name': 'Delphox', 'description': 'Pokemon metido a Xaman', 'type':'psychic', attack: 40, height: 1.5}
 {'name': 'Electrike', 'description': 'Pokemon like a flash(DC)', 'type':'eletric', attack: 20, height: 0.6}
 {'name': 'Scyther', 'description': 'Cortador de cana eficiente', 'type':'bug', attack: 60, height: 1.5}
 
## Inserindo os dados dos pokemons
 
var pokemon = {'name': 'Haunter', 'description': 'Pokemon perigoso', 'type':'ghost', attack: 30, height: 0.16}
db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {'name': 'Lickilicky', 'description': 'Pokemon linguarudo', 'type':'normal', attack: 40, height: 1.7}
db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {'name': 'Delphox', 'description': 'Pokemon metido a Xaman', 'type':'psychic', attack: 40, height: 1.5}
db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {'name': 'Electrike', 'description': 'Pokemon like a flash(DC)', 'type':'eletric', attack: 20, height: 0.6}
db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

var pokemon = {'name': 'Scyther', 'description': 'Cortador de cana eficiente', 'type':'bug', attack: 60, height: 1.5}
db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })


## Listando os pokemons inseridos

> var cur = db.pokemons.find()                       
> while(cur.hasNext()){print(tojson(cur.next()))}    
{                                                    
        "_id" : ObjectId("56428fa675e5e0f170ca7edf"),
        "name" : "Haunter",                          
        "description" : "Pokemon perigoso",          
        "type" : "ghost",                            
        "attack" : 30,                               
        "height" : 0.16                              
}                                                    
{                                                    
        "_id" : ObjectId("56428fd475e5e0f170ca7ee0"),
        "name" : "Lickilicky",                       
        "description" : "Pokemon linguarudo",        
        "type" : "normal",                           
        "attack" : 40,                               
        "height" : 1.7                               
}                                                    
{                                                    
        "_id" : ObjectId("56428fe475e5e0f170ca7ee1"),
        "name" : "Delphox",                          
        "description" : "Pokemon metido a Xaman",    
        "type" : "psychic",                          
        "attack" : 40,                               
        "height" : 1.5                               
}                                                    
{                                                    
        "_id" : ObjectId("56428ff275e5e0f170ca7ee2"),
        "name" : "Electrike",                        
        "description" : "Pokemon like a flash(DC)",  
        "type" : "eletric",                          
        "attack" : 20,                               
        "height" : 0.6                               
}                                                    
{                                                    
        "_id" : ObjectId("56428ffb75e5e0f170ca7ee3"),
        "name" : "Scyther",                          
        "description" : "Cortador de cana eficiente",
        "type" : "bug",                              
        "attack" : 60,                               
        "height" : 1.5                               
}

## Editando a description de um pokemon


> var query = {name: 'Scyther'}
> var poke = db.pokemons.findOne(query)                          
> poke.description = 'Praticamente um ceifeiro'                  
Praticamente um ceifeiro                                         
> poke                                                           
{                                                                
        "_id" : ObjectId("56428ffb75e5e0f170ca7ee3"),            
        "name" : "Scyther",                                      
        "description" : "Praticamente um ceifeiro",              
        "type" : "bug",                                          
        "attack" : 60,                                           
        "height" : 1.5                                           
}                                                                
> db.pokemons.save(poke)                                         
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.findOne(query)                                     
{                                                                
        "_id" : ObjectId("56428ffb75e5e0f170ca7ee3"),            
        "name" : "Scyther",                                      
        "description" : "Praticamente um ceifeiro",              
        "type" : "bug",                                          
        "attack" : 60,                                           
        "height" : 1.5                                           
}                                                                