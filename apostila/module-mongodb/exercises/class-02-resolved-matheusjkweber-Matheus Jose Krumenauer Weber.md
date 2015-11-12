# MongoDB - Aula 01 - Exercício autor: Matheus Jose Krumenauer Weber

Criando database

```
    > use be-mean-pokemons
switched to db be-mean-pokemons


```
Listando databases

```
> show dbs
be-mean  0.078GB
local    0.078GB


```
Criando colecao e Listando colecoes da database

```
> db.createCollection('pokemons')
    { "ok" : 1 }
> show collections
pokemons
system.indexes


```    
Inserindo os pokemons no banco

```
> var pokemon1 = {'name':'Charmander','description':'Salamandra de fogo', 'type':'fire', attack: 60, height: 0.5}
> var pokemon2  = {'name':'Charmeleon','description':'Salamandra de fogo evoluida', 'type':'fire', attack: 100, height: 5.2}
> var pokemon3  = {'name':'Charizard','description':'Salamandra de fogo evoluida suprema', 'type':'fire', attack: 160, height: 17}
> var pokemon4  = {'name':'Mewtwo','description':'O senhor supremo do mundo pokemon', 'type':'psychic', attack: 130, height: 5}
> var pokemon5  = {'name':'Mew','description':'Pequeninho e bonitinho', 'type':'psychic', attack: 110, height: 0.3}
> db.pokemons.insert(pokemon1)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(pokemon2)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(pokemon3)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(pokemon4)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(pokemon5)
WriteResult({ "nInserted" : 1 })


```    
Lista os pokemons

```
> db.pokemons.find()
{ "_id" : ObjectId("5643ef90f149114008bbca01"), "name" : "Charmander", "description" : "Salamandra de fogo", "type" : "fire", "attack" : 60, "height" : 0.5 }
{ "_id" : ObjectId("5643ef95f149114008bbca02"), "name" : "Charmeleon", "description" : "Salamandra de fogo evoluida", "type" : "fire", "attack" : 100, "height" : 5.2 }
{ "_id" : ObjectId("5643ef99f149114008bbca03"), "name" : "Charizard", "description" : "Salamandra de fogo evoluida suprema", "type" : "fire", "attack" : 160, "height" : 17 }
{ "_id" : ObjectId("5643ef9bf149114008bbca04"), "name" : "Mewtwo", "description" : "O senhor supremo do mundo pokemon", "type" : "psychic", "attack" : 130, "height" : 5 }
{ "_id" : ObjectId("5643ef9cf149114008bbca05"), "name" : "Mew", "description" : "Pequeninho e bonitinho", "type" : "psychic", "attack" : 110, "height" : 0.3 }

```  
Buscando Pokemon

```
> var query = {name: 'Mew'}
> var poke = db.findOne(query)
2015-11-11T23:48:45.931-0200 E QUERY    TypeError: Property 'findOne' of object be-mean-pokemons is not a function
    at (shell):1:15
> var poke = db.pokemons.findOne(query)
> poke
{
	"_id" : ObjectId("5643ef9cf149114008bbca05"),
	"name" : "Mew",
	"description" : "Pequeninho e bonitinho",
	"type" : "psychic",
	"attack" : 110,
	"height" : 0.3
}



```  
Alterando description e salvando

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

> poke.description = "Derrotei o Mewtwo chorem"
Derrotei o Mewtwo chorem
> poke
{
	"_id" : ObjectId("5643ef9cf149114008bbca05"),
	"name" : "Mew",
	"description" : "Derrotei o Mewtwo chorem",
	"type" : "psychic",
	"attack" : 110,
	"height" : 0.3
}
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })



```  
