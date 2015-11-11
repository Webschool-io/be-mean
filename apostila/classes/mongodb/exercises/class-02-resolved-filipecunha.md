# MongoDB - Aula 02 - Exercício
autor: Filipe Cunha

obs1: Acho que o passo 4 deveria ser o 2 para aparecer o be-mean-pokemons na lista e as collections na listagem. De qualquer forma, segue o exercício na ordem que o tio mandou, se não fico sem recreio!

obs2: Ainda não instalei o mongo-hacker, então se fode ai p/ ver os resultados.


## Listagem das databases (passo 2)
> show databases
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB


## Listagem das coleções (passo 3)
> show collections


## Cadastro dos pokemons (passo 4)
> var poke1 = {"name":"Voltorb","description":"It was discovered when POK BALLS were introduced. It is said that there is some connection.","type":"electric","attack":30,"height":5}
> var poke2 = {"name":"Electrode","description":"It stores an over flowing amount of electric energy inside its body. Even a small shock makes it explode.","type":"electric","attack":50,"height":12}
> var poke3 = {"name":"Exeggcute","description":"Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.","type":"grass","attack":40,"height":4}
> var poke4 = {"name":"Cubone","description":"Because it never removes its skull helmet, no one has ever seen this POKMON's real face.","type":"ground","attack":50,"height":4}
> var poke5 = {"name":"Marowak","description":"The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.","type":"ground","attack":80,"height":10}
> db.pokemons.insert(poke1)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(poke2)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(poke3)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(poke4)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(poke5)
WriteResult({ "nInserted" : 1 })


## Lista dos pokemons (passo 5)
> db.pokemons.find()
{ "_id" : ObjectId("5642999e7eb8ec0d531448e2"), "name" : "Voltorb", "description" : "It was discovered when POK BALLS were introduced. It is said that there is some connection.", "type" : "electric", "attack" : 30, "height" : 5 }
{ "_id" : ObjectId("564299a17eb8ec0d531448e3"), "name" : "Electrode", "description" : "It stores an over flowing amount of electric energy inside its body. Even a small shock makes it explode.", "type" : "electric", "attack" : 50, "height" : 12 }
{ "_id" : ObjectId("564299a37eb8ec0d531448e4"), "name" : "Exeggcute", "description" : "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.", "type" : "grass", "attack" : 40, "height" : 4 }
{ "_id" : ObjectId("564299a67eb8ec0d531448e5"), "name" : "Cubone", "description" : "Because it never removes its skull helmet, no one has ever seen this POKMON's real face.", "type" : "ground", "attack" : 50, "height" : 4 }
{ "_id" : ObjectId("564299a87eb8ec0d531448e6"), "name" : "Marowak", "description" : "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.", "type" : "ground", "attack" : 80, "height" : 10 }
> 


## Exeggcute (passo 6)
> var query = {name:"Exeggcute"}
> db.pokemons.find(query)
{ "_id" : ObjectId("564299a37eb8ec0d531448e4"), "name" : "Exeggcute", "description" : "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.", "type" : "grass", "attack" : 40, "height" : 4 }


## Atualização do Exeggcute (passo 6)
> var query = {name:"Exeggcute"}
> var poke = db.pokemons.findOne(query)
> poke.description = "Exeggcute é meu ovo"
Exeggcute é meu ovo
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })