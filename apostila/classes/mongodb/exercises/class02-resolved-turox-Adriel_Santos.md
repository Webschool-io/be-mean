# MongoDB - Aula 02 - Exercício
autor: Adriel Cardoso dos Santos

## Listagem das databases (passo 2)

	be-mean-pokemons> show dbs
	be-mean-instagram → 0.000GB
	be-mean-pokemons  → 0.000GB
	be-mean-teste     → 0.000GB
	local             → 0.000GB


## Listagem das coleções (passo 3)

	be-mean-pokemons> show collections
	pokemons → 0.001MB / 0.035MB


## Cadastro dos pokemons (passo 4)

	 be-mean-pokemons> db.pokemons.save({'name':'Obesochu','description':'Raramente visto à luz do dia, obesochu é um pokemon que se esconde em quartos escuros e ficam assistando anime','type': 'otaku', attack: 2, height: 200 })
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
	 be-mean-pokemons> db.pokemons.save({'name':'Onyx','description':'Grande pokemon de pedra no formato fálico','type': 'preda', attack: 200, height: 50 })
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
	 be-mean-pokemons> db.pokemons.save({'name':'Ditto','description':'Pokemon que se transforma em outros','type': 'agua', attack: 200, height: 50 })
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
	 be-mean-pokemons> db.pokemons.save({'name':'Ratata','description':'Pokemon mais poderoso de todos','type': 'terra', attack: 10000, height: 15 })
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})


## Lista dos pokemons (passo 5)
	
	be-mean-pokemons> db.pokemons.find();
{
  "_id": ObjectId("56428920967a62f7a4b29bb7"),
  "name": "Obesochu",
  "description": "Raramente visto à luz do dia, obesochu é um pokemon que se esconde em quartos escuros e ficam assistando anime",
  "type": "otaku",
  "attack": 2,
  "height": 200
}
{
  "_id": ObjectId("5642894b967a62f7a4b29bb8"),
  "name": "Onyx",
  "description": "Grande pokemon de pedra no formato fálico",
  "type": "preda",
  "attack": 200,
  "height": 50
}
{
  "_id": ObjectId("56428963967a62f7a4b29bb9"),
  "name": "Ditto",
  "description": "Pokemon que se transforma em outros",
  "type": "agua",
  "attack": 200,
  "height": 50
}
{
  "_id": ObjectId("56428985967a62f7a4b29bba"),
  "name": "Ratata",
  "description": "Pokemon mais poderoso de todos",
  "type": "terra",
  "attack": 10000,
  "height": 15
}


## Pikachu (passo 6)

	be-mean-pokemons> var poke = db.pokemons.findOne({name: "Obesochu"});
	be-mean-pokemons> poke
{
  "_id": ObjectId("56428920967a62f7a4b29bb7"),
  "name": "Obesochu",
  "description": "Raramente visto à luz do dia, obesochu é um pokemon que se esconde em quartos escuros e ficam assistando anime",
  "type": "otaku",
  "attack": 2,
  "height": 200
}

## Atualização do Pikachu (passo 6)

	be-mean-pokemons> poke.description = "Raríssimo espécime"
Raríssimo espécime
	be-mean-pokemons> db.pokemons.save(poke);
Updated 1 existing record(s) in 3ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

