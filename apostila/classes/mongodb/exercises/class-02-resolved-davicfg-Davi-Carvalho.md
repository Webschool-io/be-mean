# MongoDB - Aula 02 - Exercício
autor: Davi Carvalho Feitosa Gonçalves

## Listagem das databases (passo 2)

```
davi-Lenovo-G460(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean           → 0.078GB
be-mean-instagram → 0.078GB
local             → 0.078GB
```

## Listagem das coleções (passo 3)

```
davi-Lenovo-G460(mongod-3.0.7) be-mean-pokemons> show collections
pokemons       → 0.000MB / 0.008MB
system.indexes → 0.000MB / 0.008MB

```
## Cadastro dos pokemons (passo 4)
´´´
var pokemon = {'name':'Bulbassauro','description':'Chicote de trepadeira','type': 'grama', 'attack': 49, height: 0.4 }
db.pokemons.insert(pokemon)

db.pokemons.save({'name':'Onyx','description':'Grande pokemon de pedra no formato fálico','type': 'preda', attack: 200, height: 50 })

db.pokemons.save({'name':'Ratata','description':'Pokemon mais poderoso de todos','type': 'terra', attack: 10000, height: 15 })

db.pokemons.save({'name':'Mew','description':'Pokemon lendário pika das galáxias FODÁSTICO e fofo','type':'Psychic',attack: 60, defense: 45, height: 1.0})

db.pokemons.save({'name':'Venusaur','description':'Ultima evolução do Bulbasar','type':'Grama',attack: 45, defense: 45, height: 0.9})
```

## Lista dos pokemons (passo 5)

´´´
db.pokemons.find()
{
  "_id": ObjectId("56440b89cc16f5137a3a2a04"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("56440c71c540ff63275507fb"),
  "name": "Onyx",
  "description": "Grande pokemon de pedra no formato fálico",
  "type": "preda",
  "attack": 200,
  "height": 50
}
{
  "_id": ObjectId("56440d01c540ff63275507fc"),
  "name": "Ratata",
  "description": "Pokemon mais poderoso de todos",
  "type": "terra",
  "attack": 10000,
  "height": 15
}
{
  "_id": ObjectId("56440de6c540ff63275507fd"),
  "name": "Mew",
  "description": "Pokemon lendário pika das galáxias FODÁSTICO e fofo",
  "type": "Psychic",
  "attack": 60,
  "defense": 45,
  "height": 1
}
{
  "_id": ObjectId("56440df7c540ff63275507fe"),
  "name": "Venusaur",
  "description": "Ultima evolução do Bulbasar",
  "type": "Grama",
  "attack": 45,
  "defense": 45,
  "height": 0.9
}

```

## Bulbassauro (passo 6)
´´´
var query = {name: "Bulbassauro"}
var poke = db.pokemons.findOne(query)
poke.name
	Bulbassauro
poke
{
  "_id": ObjectId("56440b89cc16f5137a3a2a04"),
  "name": "Bulbassauro",
  "description": "Chicote de trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}

```
## Atualização do Bulbassauro (passo 7)

´´´
poke.description = "Trepadeira de Chicote"
db.pokemons.save(poke)
poke
{
  "_id": ObjectId("56440b89cc16f5137a3a2a04"),
  "name": "Bulbassauro",
  "description": "Trepadeira de Chicote",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}

```
