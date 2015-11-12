# MongoDB - Aula 03 - Exercício
autor: Vander Amorin

## Listar todos os Pokemons com altura menor que 0.5
```be-mean-instagram> var query = {height: {$lt: 0.5}}
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
	"_id": ObjectId("564294113a1ae06e90375de3"),
	"name": "Pikachu",
	"description": "Rato elétrico bem fofinho",
	"type": "electric",
	"attack": 55,
	"height": 0.4
}
{
	"_id": ObjectId("564294f43a1ae06e90375de4"),
	"name": "Bulbassauro",
	"description": "Chicote de trepadeira",
	"type": "grama",
	"attack": 49,
	"height": 0.4
}
{
	"_id": ObjectId("5642993e3a1ae06e90375de7"),
	"name": "Caterpie",
	"description": "Larva lutadora",
	"type": "inseto",
	"attack": 30,
	"height": 0.3,
	"defense": 35
}
{
	"_id": ObjectId("5642a3218752932d9235dbe4"),
	"name": "Weedle",
	"description": "Minhoca de chifre",
	"type": "terra",
	"attack": 20,
	"height": 0.3
}
{
	"_id": ObjectId("5642a3568752932d9235dbe5"),
	"name": "Spearow",
	"description": "Pássaro chorão",
	"type": "Aves",
	"attack": 30,
	"height": 0.3
}
Fetched 5 record(s) in 66ms```


## Listar todos os Pokemons com altura maior ou igual a 0.5
```be-mean-instagram> var query = {height: {$gte: 0.5}}
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
	"_id": ObjectId("564296b83a1ae06e90375de5"),
	"name": "Squirtle",
	"description": "Ejeta água que passarinho não bebe",
	"type": "água",
	"attack": 52,
	"height": 0.6
}
{
	"_id": ObjectId("5642982e3a1ae06e90375de6"),
	"name": "Charmander",
	"description": "Esse é o cão chupando manga de fofinho",
	"type": "fogo",
	"attack": 48,
	"height": 0.5
}
{
	"_id": ObjectId("5642a2a57a0d8f07689b8256"),
	"name": "Sandslash",
	"description": "Rato espinhoso",
	"type": "Rato",
	"attack": 50,
	"height": 1
}
{
	"_id": ObjectId("5642a2e88752932d9235dbe3"),
	"name": "Blastoise",
	"description": "Pokemon tartaruga com canhões nas costas",
	"type": "Água",
	"attack": 40,
	"height": 1.6
}
{
	"_id": ObjectId("5642a37c8752932d9235dbe6"),
	"name": "Clefairy",
	"description": "Bicho Rosa inútil",
	"type": "fada",
	"attack": 0,
	"height": 0.6
}
{
	"_id": ObjectId("5642a3968752932d9235dbe7"),
	"name": "Vulpix",
	"description": "Raposa fofinha",
	"type": "Raposa",
	"attack": 20,
	"height": 0.6
}
Fetched 6 record(s) in 4ms```


## Listar todos os pokemons com altura menor ou igual a 0.5 E do tipo grama
```be-mean-instagram> var query = { $and: [{height: {$lte: 0.5}}, {type: 'grama'}] }
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
	"_id": ObjectId("564294f43a1ae06e90375de4"),
	"name": "Bulbassauro",
	"description": "Chicote de trepadeira",
	"type": "grama",
	"attack": 49,
	"height": 0.4
}
Fetched 1 record(s) in 1ms```


## Listar todos os pokemons com name 'Pikachu' ou com ataque menor ou igual a 0.5
```be-mean-instagram> var query = { $or: [ {name: 'Pikachu'}, {attack: {$lte: 0.5}} ] }
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
	"_id": ObjectId("564294113a1ae06e90375de3"),
	"name": "Pikachu",
	"description": "Rato elétrico bem fofinho",
	"type": "electric",
	"attack": 55,
	"height": 0.4
}
{
	"_id": ObjectId("5642a37c8752932d9235dbe6"),
	"name": "Clefairy",
	"description": "Bicho Rosa inútil",
	"type": "fada",
	"attack": 0,
	"height": 0.6
}
Fetched 2 record(s) in 1ms```


## Listar todos os Pokemons com o attack maior ou igual a 48 e com height menor ou igual a 0.5
```be-mean-instagram> var query = { $and: [ {attack: {$gte: 48}}, {height: {$lte: 0.5}} ] }
Ubuntu-VirtualBox(mongod-3.0.7) be-mean-instagram> db.pokemons.find(query)
{
	"_id": ObjectId("564294113a1ae06e90375de3"),
	"name": "Pikachu",
	"description": "Rato elétrico bem fofinho",
	"type": "electric",
	"attack": 55,
	"height": 0.4
}
{
	"_id": ObjectId("564294f43a1ae06e90375de4"),
	"name": "Bulbassauro",
	"description": "Chicote de trepadeira",
	"type": "grama",
	"attack": 49,
	"height": 0.4
}
{
	"_id": ObjectId("5642982e3a1ae06e90375de6"),
	"name": "Charmander",
	"description": "Esse é o cão chupando manga de fofinho",
	"type": "fogo",
	"attack": 48,
	"height": 0.5
}
Fetched 3 record(s) in 2ms
```