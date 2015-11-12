# MongoDB - Aula 03 - Exercício
autor: André Dias

#Listando todos os Pokemons com a altura menor que 0.5

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> var query = {"height": {$lt : 0.5}}

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642a6a8b03182128350bb25"),
  "nome": "Mew",
  "description": "É tipo o shun dos pokemons",
  "type": "Psiquico",
  "attack": 100,
  "height": 0.4
}

#Listando todos os Pokemons com a altura maior ou igual que 0.5

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> var query = {"height": {$gte : 0.5}}
andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
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
  "description": "Fastasminha camarada é o Caraleoo",
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
  "height": 1
}
Fetched 9 record(s) in 3ms



#Listando todos os Pokemons com a altura maior ou igual que 0.5 E do tipo psiquico

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> var query = {$and : [{height : {$gte : 0.5}}, {type : 'Psiquico'}]}
andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642a604b03182128350bb24"),
  "nome": "Mewtwo",
  "description": "Esse é o ZICA mesmo",
  "type": "Psiquico",
  "attack": 110,
  "height": 2
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
  "_id": ObjectId("5642a873b03182128350bb28"),
  "nome": "Mr. Mime",
  "description": "Mistura de Bozo e JigSaw",
  "type": "Psiquico",
  "attack": 45,
  "height": 1.3
}
Fetched 3 record(s) in 1ms


#Listando todos os Pokemons com o nome Pikachu OU com attack menor ou igual que 50

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> var query = {$or : [{nome : 'Pikachu'}, {attack : {$lte : 50}}]}
andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642a42ab03182128350bb22"),
  "nome": "Haunter",
  "description": "Fastasminha camarada é o Caraleoo",
  "type": "Fantasma",
  "attack": 50,
  "height": 1.6
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
  "_id": ObjectId("5642a873b03182128350bb28"),
  "nome": "Mr. Mime",
  "description": "Mistura de Bozo e JigSaw",
  "type": "Psiquico",
  "attack": 45,
  "height": 1.3
}
Fetched 3 record(s) in 5ms


#Listando todos os Pokemons com attack maior ou igual que 48 E com height menor ou igual que 1.0

andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> var query = {$and : [{attack : {$gte : 48}}, {height : {$lte : 1.0}}]}
andre-dias-skywalker(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
{
  "_id": ObjectId("5642a369b03182128350bb21"),
  "nome": "Magneton",
  "description": "É um imã maneiro com olhos",
  "type": "Eletrico e Ferro",
  "attack": 60,
  "height": 1
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
  "_id": ObjectId("5642a8d5b03182128350bb29"),
  "nome": "Rhyhorn",
  "description": "Rinoceronte maneiro",
  "type": "Pedra, Terra",
  "attack": 85,
  "height": 1
}
Fetched 3 record(s) in 1ms


