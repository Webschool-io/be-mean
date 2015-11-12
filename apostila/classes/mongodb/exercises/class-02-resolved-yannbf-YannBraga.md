# MongoDB - Aula 02 - Exercício
Autor: Yann Braga

## Conectando ao banco
```
mongo be-mean-pokemon
MongoDB shell version: 3.0.7
connecting to: be-mean-pokemon
Mongo-Hacker 0.0.4
```

## Listando databases
```
Yann(mongod-3.0.7) be-mean-pokemon> show dbs
be-mean-instagram  0.078GB
be-mean            0.078GB
chirp-test         0.078GB
local              0.078GB
```

## Criando a coleção (foi criada senão o exercício da listagem não faria sentido)
```
Yann(mongod-3.0.7) be-mean-pokemon> db.createCollection("pokemons")
{
    "ok": 1
}
```

## Listando coleções
```
Yann(mongod-3.0.7) be-mean-pokemon> show collections
pokemons        0.000MB / 0.008MB
system.indexes  0.000MB / 0.008MB
```

## Inserindo pokemons

Criei um arquivo js chamado "pokemon-import.js" com os seguintes dados:
```
var pokemons = [

	{
		name: 'Eeve',
		description: 'Just a naïve little cat',
		type: 'Normal',
		attack: 39,
		defense: 40,
		height: 0.4
	},
	{
		name: 'Vaporeon',
		description: 'Wet version of Eeve',
		type: 'Water',
		attack: 39,
		defense: 40,
		height: 0.4
	},
	{
		name: 'Jolteon',
		description: 'Electric gypsy version of Eeve',
		type: 'Electric',
		attack: 60,
		defense: 60,
		height: 0.6
	},
	{
		name: 'Flareon',
		description: 'Fire in the hole version of Eeve',
		type: 'Fire',
		attack: 92,
		defense: 40,
		height: 0.6
	},
	{
		name: 'Umbreon',
		description: 'Come to the dark side version of Eeve',
		type: 'Dark',
		attack: 47,
		defense: 80,
		height: 0.9
	},
	{
		name: 'Glaceon',
		description: 'Let it go version of Eeve',
		type: 'Ice',
		attack: 73,
		defense: 38,
		height: 0.5
	},
	{
		name: 'Leafeon',
		description: 'Greenie version of Eeve',
		type: 'Grass',
		attack: 52,
		defense: 49,
		height: 0.6
	},
	{
		name: 'Espeon',
		description: 'Intellectual version of Eeve',
		type: 'Psychic',
		attack: 55,
		defense: 50,
		height: 0.6
	},
	{
		name: 'Sylveon',
		description: 'Glamorous version of Eeve',
		type: 'Fairy',
		attack: 85,
		defense: 70,
		height: 0.8
	}
]

db.pokemons.save(pokemons);
```

depois carreguei o arquivo de importação:
```
Yann(mongod-3.0.7) be-mean-pokemon> load("pokemon-import.js")
Inserted 1 record(s) in 6ms
true
```

## Listagem dos pokemons
```
Yann(mongod-3.0.7) be-mean-pokemon> db.pokemons.find()
{
    "_id": ObjectId("56438967d0d00f41c686e0d8"),
    "name": "Eeve",
    "description": "Just a naïve little cat",
    "type": "Normal",
    "attack": 39,
    "defense": 40,
    "height": 0.4
}
{
    "_id": ObjectId("56438967d0d00f41c686e0d9"),
    "name": "Vaporeon",
    "description": "Wet version of Eeve",
    "type": "Water",
    "attack": 39,
    "defense": 40,
    "height": 0.4
}
{
    "_id": ObjectId("56438967d0d00f41c686e0da"),
    "name": "Jolteon",
    "description": "Electric gypsy version of Eeve",
    "type": "Electric",
    "attack": 60,
    "defense": 60,
    "height": 0.6
}
{
    "_id": ObjectId("56438967d0d00f41c686e0db"),
    "name": "Flareon",
    "description": "Fire in the hole version of Eeve",
    "type": "Fire",
    "attack": 92,
    "defense": 40,
    "height": 0.6
}
{
    "_id": ObjectId("56438967d0d00f41c686e0dc"),
    "name": "Umbreon",
    "description": "Come to the dark side version of Eeve",
    "type": "Dark",
    "attack": 47,
    "defense": 80,
    "height": 0.9
}
{
    "_id": ObjectId("56438967d0d00f41c686e0dd"),
    "name": "Glaceon",
    "description": "Let it go version of Eeve",
    "type": "Ice",
    "attack": 73,
    "defense": 38,
    "height": 0.5
}
{
    "_id": ObjectId("56438967d0d00f41c686e0de"),
    "name": "Leafeon",
    "description": "Greenie version of Eeve",
    "type": "Grass",
    "attack": 52,
    "defense": 49,
    "height": 0.6
}
{
    "_id": ObjectId("56438967d0d00f41c686e0df"),
    "name": "Espeon",
    "description": "Intellectual version of Eeve",
    "type": "Psychic",
    "attack": 55,
    "defense": 50,
    "height": 0.6
}
{
    "_id": ObjectId("56438967d0d00f41c686e0e0"),
    "name": "Sylveon",
    "description": "Glamorous version of Eeve",
    "type": "Fairy",
    "attack": 85,
    "defense": 70,
    "height": 0.8
}
Fetched 9 record(s) in 86ms
```

## Criação do objeto de busca e utilização do mesmo
```
Yann(mongod-3.0.7) be-mean-pokemon> var query = { name:'Eeve' }
Yann(mongod-3.0.7) be-mean-pokemon> var poke = db.pokemons.findOne(query)
```

## Atualização da propriedade do objeto e persistência
```
Yann(mongod-3.0.7) be-mean-pokemon> poke.description = 'Lamest version of Eeve'
Lamest version of Eeve
Yann(mongod-3.0.7) be-mean-pokemon> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
    "nMatched": 1,
    "nUpserted": 0,
    "nModified": 1
})
```
## Testando se a atualização funcionou
```
Yann(mongod-3.0.7) be-mean-pokemon> db.pokemons.findOne(query)
{
    "_id": ObjectId("56438967d0d00f41c686e0d8"),
    "name": "Eeve",
    "description": "Lamest version of Eeve",
    "type": "Normal",
    "attack": 39,
    "defense": 40,
    "height": 0.4
}
```



