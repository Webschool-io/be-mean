# MongoDB - Aula 03 - Exercício
autor: Marcos Martinez

## Liste todos Pokemons com a altura menor que 0.5
> db.pokemons.find(query).pretty()
{
	"_id" : ObjectId("5642961ec9222a3fc35f8e08"),
	"name" : "Pikachu",
	"description" : "Rato elétrico bem fofinho",
	"type" : "electric",
	"attack" : 55,
	"height" : 0.4,
	"defense" : 35
}
{
	"_id" : ObjectId("5642998cc9222a3fc35f8e09"),
	"name" : "charmander",
	"description" : "tira fogo pela bunda",
	"type" : "fogo",
	"attack" : 54,
	"height" : 0.3
}
{
	"_id" : ObjectId("56429a47c9222a3fc35f8e0a"),
	"name" : "Bulbassauro",
	"description" : "Chicote de trepadeira",
	"type" : "grama",
	"attack" : 49,
	"height" : 0.4
}
> 
## Liste todos Pokemons com a altura maior ou igual que 0.5;
> var query = {height:{$lte:0.5}}
> db.pokemons.find(query).pretty()
{
	"_id" : ObjectId("5642961ec9222a3fc35f8e08"),
	"name" : "Pikachu",
	"description" : "Rato elétrico bem fofinho",
	"type" : "electric",
	"attack" : 55,
	"height" : 0.4,
	"defense" : 35
}
{
	"_id" : ObjectId("5642998cc9222a3fc35f8e09"),
	"name" : "charmander",
	"description" : "tira fogo pela bunda",
	"type" : "fogo",
	"attack" : 54,
	"height" : 0.3
}
{
	"_id" : ObjectId("56429a47c9222a3fc35f8e0a"),
	"name" : "Bulbassauro",
	"description" : "Chicote de trepadeira",
	"type" : "grama",
	"attack" : 49,
	"height" : 0.4
}
{
	"_id" : ObjectId("56429abec9222a3fc35f8e0b"),
	"name" : "Squirtle",
	"description" : "Ejeta água que passarinho não bebe",
	"type" : "água",
	"attack" : 48,
	"height" : 0.5
}
> 
## Liste todos Pokemons com a altura menor ou igual que 0.4 E do tipo grama;
/*"eu nao tinha nada que cumpra as duas sentencas por isso mudei a altura para 0.4"*/

> var a = {height:{$gte:0.4}}
> var b ={type:'grama'}
> var query = {$and:[a,b]}
> db.pokemons.find(query).pretty()
{
	"_id" : ObjectId("56429a47c9222a3fc35f8e0a"),
	"name" : "Bulbassauro",
	"description" : "Chicote de trepadeira",
	"type" : "grama",
	"attack" : 49,
	"height" : 0.4
}
>
## Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5;

//"nao tenho Nada"
> var a = {name:'pikachu'}
> var b ={attack:{$lte:0.5}}
> var query = {$or:[a,b]}

> db.pokemons.find(query).pretty()
> 
## 5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5;

> var a ={attack:{$gte:48}}
> var b ={height:{$lte:0.5}}
> var query = {$and:[a,b]}
> db.pokemons.find(query).pretty()
{
	"_id" : ObjectId("5642961ec9222a3fc35f8e08"),
	"name" : "Pikachu",
	"description" : "Rato elétrico bem fofinho",
	"type" : "electric",
	"attack" : 55,
	"height" : 0.4,
	"defense" : 35
}
{
	"_id" : ObjectId("5642998cc9222a3fc35f8e09"),
	"name" : "charmander",
	"description" : "tira fogo pela bunda",
	"type" : "fogo",
	"attack" : 54,
	"height" : 0.3
}
{
	"_id" : ObjectId("56429a47c9222a3fc35f8e0a"),
	"name" : "Bulbassauro",
	"description" : "Chicote de trepadeira",
	"type" : "grama",
	"attack" : 49,
	"height" : 0.4
}
{
	"_id" : ObjectId("56429abec9222a3fc35f8e0b"),
	"name" : "Squirtle",
	"description" : "Ejeta água que passarinho não bebe",
	"type" : "água",
	"attack" : 48,
	"height" : 0.5
}
> 

