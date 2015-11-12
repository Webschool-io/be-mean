#MongoDB -Aula2- Exercícios
autor: marco aurellio

## Criando o DB (passo 1)

...

use be-mean-pokemons

switched to db be-mean-pokemons
...

## Listagem das databases (passo 2)

...

show dbs

+be-mean-instagram → 0.078GB
+local             → 0.078GB
+be-mean-pokemons  → 0.078GB
+test              → 0.078GB
...


## Listagem Collections (passo 3)

...

show collections
+pokemons       → 0.002MB / 0.008MB
+system.indexes → 0.000MB / 0.008MB
...

## Inserts (passo 4)

...

db.pokemons.find()

{ "_id" : ObjectId("56437e8683be273596123134"),
 "name" : "Pikachu",
 "description" : "Rato elétrico bem fofinho", 
 "type": "electric",
 "attack" : 55, 
 "height" : 0.4 
   }
   
{ "_id" : ObjectId("56437f5083be273596123135"),
 "name" : "Furicu", 
 "description" : "Pokemon peidão",
 "type" : "gas",
 "attack" : 55, 
 "height" : 0.4
    }
	
{ "_id" : ObjectId("56437f9283be273596123136"), 
"name" : "Matinho", 
"description" : "Pokemon doidão",
"type" : "planta",
"attack" : 75,
"height" : 0.7 
  }
{ "_id" : ObjectId("56437fe683be273596123137"), 
"name" : "Xotinha",
"description" : "Pokemon gostoso",
"type" : "feminino",
"attack" : 105, 
"height" : 0.6 }
   
   { "_id" : ObjectId("56437fe683be273596123138"), 
"name" : "Silvio Santos",
"description" : "Pokemon da grana",
"type" : "chefe",
"attack" : 100, 
"height" : 0.8}
>


...

## Editar descrição (passo 5)

...


var query = {nome : 'Matinho'}
+
var poke = db.pokemons.findOne(query)
+
+poke.description = 'Matinho muuuito louco'
+Matinho muuuito louco
+
+poke
+
+ { "_id" : ObjectId("56437f9283be273596123136"), 
"name" : "Matinho", 
"description" : "Matinho muuuito louco",
"type" : "planta",
"attack" : 75,
"height" : 0.7 
  

+}
+
+db.pokemons.save(poke)
+Updated 1 existing record(s) in 327ms
+WriteResult({
+  "nMatched": 1,
+  "nUpserted": 0,
+  "nModified": 1
+})
...




























