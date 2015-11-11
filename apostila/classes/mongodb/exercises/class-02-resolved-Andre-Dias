# MongoDB - Aula 02 - Exercício
autor: André Dias

Criando a database

use be-mean-pokemons switched to db be-mean-pokemons

Listando as databases

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean-instagram → 0.078GB
local             → 0.078GB
be-mean-pokemons  → 0.078GB
test              → 0.078GB

Listando as coleções

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> show collections
pokemons       → 0.002MB / 0.008MB
system.indexes → 0.000MB / 0.008MB

Pokemons Inseridos

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5642a2a3b03182128350bb20"),
  "nome": "Machamp",
  "description": "É o Zangief de 4 braços",
  "type": "Lutador",
  "attack": 130,
  "height": 1.6
}
{
  "_id": ObjectId("5642a369b03182128350bb21"),
  "nome": "Magneton",
  "description": "É um imã maneiro com olhos",
  "type": "Eletrico e Ferro",
  "attack": 60,
  "height": 1
}
{
  "_id": ObjectId("5642a42ab03182128350bb22"),
  "nome": "Haunter",
  "description": "Fantasminha camarada",
  "type": "Fantasma",
  "attack": 50,
  "height": 1.6
}
{
  "_id": ObjectId("5642a511b03182128350bb23"),
  "nome": "Snorlax",
  "description": "Gordinho perigoso",
  "type": "Normal",
  "attack": 110,
  "height": 2.1
}
{
  "_id": ObjectId("5642a604b03182128350bb24"),
  "nome": "Mewtwo",
  "description": "Esse é o ZICA mesmo",
  "type": "Psiquico",
  "attack": 110,
  "height": 2
}
{
  "_id": ObjectId("5642a6a8b03182128350bb25"),
  "nome": "Mew",
  "description": "É tipo o shun dos pokemons",
  "type": "Psiquico",
  "attack": 100,
  "height": 0.4
}
{
  "_id": ObjectId("5642a751b03182128350bb26"),
  "nome": "Alakazan",
  "description": "Não é a colher que entorta, e sim você. Não há colher!",
  "type": "Psiquico",
  "attack": 50,
  "height": 1.5
}
{
  "_id": ObjectId("5642a7deb03182128350bb27"),
  "nome": "Hitmonlee",
  "description": "Esse é faixa preta do taekwondo",
  "type": "Lutador",
  "attack": 120,
  "height": 1.5
}
{
  "_id": ObjectId("5642a873b03182128350bb28"),
  "nome": "Mr. Mime",
  "description": "Mistura de Bozo e JigSaw",
  "type": "Psiquico",
  "attack": 45,
  "height": 1.3
}
{
  "_id": ObjectId("5642a8d5b03182128350bb29"),
  "nome": "Rhyhorn",
  "description": "Rinoceronte maneiro",
  "type": "Pedra, Terra",
  "attack": 85,
  "height": 1.0
}

Editando a description de um pokemon

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> var query = {nome : 'Haunter'}

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> poke.description = 'Fastasminha camarada é o Caraleoo'
Fastasminha camarada é o Caraleoo

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5642a42ab03182128350bb22"),
  "nome": "Haunter",
  "description": "Fastasminha camarada é o Caraleoo",
  "type": "Fantasma",
  "attack": 50,
  "height": 1.6
}

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 346ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})


