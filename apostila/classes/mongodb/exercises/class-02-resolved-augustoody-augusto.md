# MongoDB - Aula 02 - Exercício
autor: Augusto

## Listagem das databases (passo 2)
```
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB
```

## Listagem das coleções (passo 3)
```
> show collections
```

## Cadastro dos pokemons (passo 4)
```
> var pokemon1 = {name: 'Blastoise', description:'Blastoise has water spouts that protrude from its shell', type: 'água', attack: 83, height: 16, defense: 100}
> var pokemon2 = {name: 'Sandslash', description:'Sandslash\'s body is covered by tough spikes, which are hardened sections of its hide', type: 'terra', attack: 100, height: 10, defense: 110}
> var pokemon3 = {name: 'Ninetales', description:'Ninetales casts a sinister light from its bright red eyes to gain total control over its foe\'s minde', type: 'fogo', attack: 76, height: 11, defense: 75}
> var pokemon4 = {name: 'Machamp', description:'Machamp has the power to hurl anything aside', type: 'lutador', attack: 130, height: 16, defense: 80}
> var pokemon5 = {name: 'Tauros', description:'This Pokémon is not satisfied unless it is rampaging at all times', type: 'normal', attack: 100, height: 14, defense: 95}
>db.pokemons.insert(pokemon1)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(pokemon2)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(pokemon3)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(pokemon4)
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert(pokemon5)
WriteResult({ "nInserted" : 1 })
```

## Lista dos pokemons (passo 5)
```
> db.pokemons.find()
{ "_id" : ObjectId("5643ba4eb4bf61eba67a67a9"), "name" : "Blastoise", "description" : "Blastoise has water spouts that protrude from its shell", "type" : "água", "attack" : 83, "height" : 16, "defense" : 100 }
{ "_id" : ObjectId("5643ba51b4bf61eba67a67aa"), "name" : "Sandslash", "description" : "Sandslash's body is covered by tough spikes, which are hardened sections of its hide", "type" : "terra", "attack" : 100, "height" : 10, "defense" : 110 }
{ "_id" : ObjectId("5643ba55b4bf61eba67a67ab"), "name" : "Ninetales", "description" : "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's minde", "type" : "fogo", "attack" : 76, "height" : 11, "defense" : 75 }
{ "_id" : ObjectId("5643ba57b4bf61eba67a67ac"), "name" : "Machamp", "description" : "Machamp has the power to hurl anything aside", "type" : "lutador", "attack" : 130, "height" : 16, "defense" : 80 }
{ "_id" : ObjectId("5643ba5ab4bf61eba67a67ad"), "name" : "Tauros", "description" : "This Pokémon is not satisfied unless it is rampaging at all times", "type" : "normal", "attack" : 100, "height" : 14, "defense" : 95 }
```

## Pikachu (passo 6)
```
> var query = {name: 'Blastoise'}
> var poke = db.pokemons.findOne(query)
> poke
{
	"_id" : ObjectId("5643ba4eb4bf61eba67a67a9"),
	"name" : "Blastoise",
	"description" : "Blastoise has water spouts that protrude from its shell",
	"type" : "água",
	"attack" : 83,
	"height" : 16,
	"defense" : 100
}
```

## Atualização do Pikachu (passo 6)
```
> poke.description = 'A brutal POKMON with pressurized water jets on its shell. They are used for high speed tackles'
A brutal POKMON with pressurized water jets on its shell. They are used for high speed tackles
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> var poke = db.pokemons.findOne(query)
> poke
{
	"_id" : ObjectId("5643ba4eb4bf61eba67a67a9"),
	"name" : "Blastoise",
	"description" : "A brutal POKMON with pressurized water jets on its shell. They are used for high speed tackles",
	"type" : "água",
	"attack" : 83,
	"height" : 16,
	"defense" : 100
}

```
