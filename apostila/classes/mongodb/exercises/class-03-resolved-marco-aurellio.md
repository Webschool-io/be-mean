#MongoDB -Aula1- Exercícios
autor: marco aurellio

## Listando todos os Pokemons com a altura menor que 0.5
...
var queryBusca = {height:{ $lt:0.5}}

> db.pokemons.find(queryBusca)
{ "_id" : ObjectId("56437e8683be273596123134"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type"
: "electric", "attack" : 55, "height" : 0.4 }
{ "_id" : ObjectId("56437f5083be273596123135"), "name" : "Furicu", "description" : "Pokemon peidão", "type" : "gas", "at
tack" : 55, "height" : 0.4 }
>



...

##Listando todos os Pokemons com a altura maior ou igual que 0.5

...
 	> var queryBusca = {height:{ $gte:0.5}}
> db.pokemons.find(queryBusca)
{ "_id" : ObjectId("56437f9283be273596123136"), "name" : "Matinho", "description" : "matinho loouco", "type" : "planta",
 "attack" : 75, "height" : 0.7 }
{ "_id" : ObjectId("56437fe683be273596123137"), "name" : "Xotinha", "description" : "teste aaaa", "type" : "feminino", "
attack" : 105, "height" : 0.6 }
>

...

##Listando todos os Pokemons com a altura maior ou igual que 0.5 e do tipo feminino

...
> var query = {$and : [{height : {$gte : 0.5}}, {type : 'feminino'}]}
> db.pokemons.find(query)
{ "_id" : ObjectId("56437fe683be273596123137"), "name" : "Xotinha", "description" : "teste aaaa", "type" : "feminino", "
attack" : 105, "height" : 0.6 }
>

...

#Listando todos os Pokemons com o nome Matinho OU com attack menor ou igual que 50

...
> var query = {$or : [{attack : {$lte : 50}}, {name : 'Matinho'}]}
> db.pokemons.find(query)
{ "_id" : ObjectId("56437f9283be273596123136"), "name" : "Matinho", "description" : "matinho loouco", "type" : "planta",
 "attack" : 75, "height" : 0.7 }
>
...

#Listando todos os Pokemons com attack maior ou igual que 48 E com height menor ou igual que 1.0

...
> var query = {$and : [{attack : {$gte : 48}}, {height : {$lte :1.0}}]}
> db.pokemons.find(query)
{ "_id" : ObjectId("56437e8683be273596123134"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type"
: "electric", "attack" : 55, "height" : 0.4 }
{ "_id" : ObjectId("56437f5083be273596123135"), "name" : "Furicu", "description" : "Pokemon peidão", "type" : "gas", "at
tack" : 55, "height" : 0.4 }
{ "_id" : ObjectId("56437f9283be273596123136"), "name" : "Matinho", "description" : "matinho loouco", "type" : "planta",
 "attack" : 75, "height" : 0.7 }
{ "_id" : ObjectId("56437fe683be273596123137"), "name" : "Xotinha", "description" : "teste aaaa", "type" : "feminino", "
attack" : 105, "height" : 0.6 }
>


...



