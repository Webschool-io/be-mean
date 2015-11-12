# MongoDB - Aula 03 - Exercício
autor: Fábio Calheiros (conta: fabiocalheiros)

## Listando todos Pokemons com a altura menor que 0.5 (Passo 1)

> var query = {height: {$lt: 0.5}}
> db.pokemons.find(query)
{ "_id" : ObjectId("56427252084aeb3a13421767"), "name" : "Pikachu", "description
" : "Rato elétrico bem fofinho", "type" : "electric", "attack" : 55, "height" :
0.4 }
{ "_id" : ObjectId("564272ff084aeb3a13421768"), "name" : "Bulbassauro", "descrip
tion" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4
 }
{ "_id" : ObjectId("5642752b4960d059b2b5ab53"), "name" : "Caterpie", "descriptio
n" : "Larva lutadora", "type" : "inseto", "attack" : 30, "height" : 0.3, "defens
e" : 35 }
>

## Listando todos Pokemons com a altura maior ou igual que 0.5 (Passo 2)

> var query = {height: {$gte: 0.5}}
> db.pokemons.find(query)
{ "_id" : ObjectId("56427318084aeb3a13421769"), "name" : "Charmander", "descript
ion" : "Esse é o cão chupando manga de fofinho", "type" : "fogo", "attack" : 52,
 "height" : 0.6 }
{ "_id" : ObjectId("564273b8084aeb3a1342176a"), "name" : "Squirtle", "descriptio
n" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "heig
ht" : 0.5 }
>

## Listando todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama; (Passo 3)

> var query = { $and: [ { type: "grama" }, { height: { $lte: 0.5 } } ] }
> db.pokemons.find(query)
{ "_id" : ObjectId("564272ff084aeb3a13421768"), "name" : "Bulbassauro", "descrip
tion" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4
 }


## Listando todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5; (Passo 4)

> var query = { $or: [ { name: "Pikachu" }, { attack: { $lte: 0.5 } } ] }
> db.pokemons.find(query)
> 

## Listando todos Pokemons com o attack MAIOR OU IGUAL QUE 30 E com  height menor ou igual que 0.6; (Passo 5)


> var query = { $and: [ { attack: { $gte: 30 } }, { height: { $lte: 0.6 } } ] }
> db.pokemons.find(query)
{ "_id" : ObjectId("564299ae511ba8f81d73d9c2"), "name" : "Electrike", "description" : "Electrike stores el
ectricity in its long body hair", "type" : "Eletric", "attack" : 30, "height" : 0.6 }
