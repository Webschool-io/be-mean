# MongoDB - Aula 02 - Exercício
autor: Filipe Leuch Bonfim

## Listagem das databases (passo 2)
nz-fedora(mongod-3.0.7) be-mean-pokemons> show dbs
test              → 0.078GB
local             → 0.078GB
be-mean-instagram → 0.078GB

## Listagem das coleções (passo 3)
nz-fedora(mongod-3.0.7) be-mean-pokemons> show collections

## Cadastro dos pokemons (passo 4)
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.save({'name': 'Mewtwo', 'description': 'Pokemon fodabagarai!!!', 'type': 'psiquico', attack: 110, height: 2.0, defense: 90})
Inserted 1 record(s) in 338ms
WriteResult({
  "nInserted": 1
})
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.save({'name': 'Jigglypuff', 'description': 'Jiggaly ... puff ... puff ... jiggaly!', 'type': 'normal, fada', attack: 45, height: 0.5, defense: 20})
Inserted 1 record(s) in 0ms
WriteResult({
  "nInserted": 1
})
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.save({'name': 'Psyduck', 'description': 'Atrapalhado e fofinho', 'type': 'água', attack: 52, height: 0.8, defense: 48})
Inserted 1 record(s) in 0ms
WriteResult({
  "nInserted": 1
})
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.save({'name': 'Mr. Mime', 'description': 'Um palhaço muitcho loko', 'type': 'psiquico, fada', attack: 45, height: 1.3, defense: 65})
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.save({'name': 'Meowth', 'description': 'Membro da equipe rocket e, e curte uma grana', 'type': 'normal', attack: 45, height: 0.4, defense: 35})
Inserted 1 record(s) in 0ms
WriteResult({
  "nInserted": 1
})

## Lista dos pokemons (passo 5)
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56427740ead061cff56c4121"),
  "name": "Mewtwo",
  "description": "Pokemon fodabagarai!!!",
  "type": "psiquico",
  "attack": 110,
  "height": 2,
  "defense": 90
}
{
  "_id": ObjectId("5642792eead061cff56c4122"),
  "name": "Jigglypuff",
  "description": "Jiggaly ... puff ... puff ... jiggaly!",
  "type": "normal, fada",
  "attack": 45,
  "height": 0.5,
  "defense": 20
}
{
  "_id": ObjectId("564279d7ead061cff56c4123"),
  "name": "Psyduck",
  "description": "Atrapalhado e fofinho",
  "type": "água",
  "attack": 52,
  "height": 0.8,
  "defense": 48
}
{
  "_id": ObjectId("56427a64ead061cff56c4124"),
  "name": "Mr. Mime",
  "description": "Um palhaço muitcho loko",
  "type": "psiquico, fada",
  "attack": 45,
  "height": 1.3,
  "defense": 65
}
{
  "_id": ObjectId("56427b38ead061cff56c4125"),
  "name": "Meowth",
  "description": "Membro da equipe rocket e, e curte uma grana",
  "type": "normal",
  "attack": 45,
  "height": 0.4,
  "defense": 35
}
Fetched 5 record(s) in 1ms

## Mewtwo (passo 6)
nz-fedora(mongod-3.0.7) be-mean-pokemons> var query = {name: 'Mewtwo'}
nz-fedora(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)


## Atualização do Mewtwo (passo 6)
nz-fedora(mongod-3.0.7) be-mean-pokemons> poke.description = "Fodabagarai e manja dos paranaue"
Fodabagarai e manja dos paranaue
nz-fedora(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 1ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

