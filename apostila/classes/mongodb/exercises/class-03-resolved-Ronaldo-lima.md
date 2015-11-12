# MongoDB - Aula 02 - Exercício
autor: Ronaldo Lima

## altura menor que 0.5 (passo 1) - busca higienizada.

> var query = { height :{ $lt:0.5 }}
> var fields = {name : 1, height :1, _id: 0}
> db.pokemons.find(query, fields)
{ "name" : "Yveltal", "height" : 0 }
{ "name" : "Zygarde", "height" : 0 }
{ "name" : "Sylveon", "height" : 0 }
>


## altura maior ou igual a 0.5 (passo 2) - busca higienizada.

> var query = { height :{ $gte:0.5 }}
> var fields = {name : 1, height :1, _id: 0}
> db.pokemons.find(query, fields)
{ "name" : "Riolu", "height" : 7 }
{ "name" : "Lucario", "height" : 12 }
> 


## altura menor ou igual que 0.5 e do tipo Grama (passo 3) - busca higienizada.


> var query = { $and : [ { height :{ $lte:0.5 }} ,{ type:"Grama"}]}
> var fields = {name : 1, height : 1, type : 1, _id: 0}
> db.pokemons.find(query, fields)
{ "name" : "Sylveon", "type" : "Grama", "height" : 0 }
>

## name 'Pikachu' ou attack menor ou igual a 0.5 (passo 4) - busca higienizada.

> var query = {$or : [{name:"Pikachu"},{attack: { $lte:5 } }]}
> var fields = {name : 1, attack :1, _id: 0}
> db.pokemons.find(query, fields)
> 

## attack maior ou igual que 48 e com height menor ou igual que 0.5 (passo 5) - busca higienizada.

> var query = { $and : [ { attack :{ $gte:48 }}, { height :{ $lte:0.5 }} ] }
> var fields = {name : 1, attack :1, height: 1,_id: 0}
> db.pokemons.find(query, fields)
{ "name" : "Yveltal", "attack" : 131, "height" : 0 }
{ "name" : "Zygarde", "attack" : 100, "height" : 0 }
{ "name" : "Sylveon", "attack" : 65, "height" : 0 }
> 