# MongoDB - Aula 02 - Exercício
autor: JEAN MATEUS SCUSSEL

## Listagem das databases (passo 2)

```
	jean-Inspiron-7520(mongod-3.0.7) be-mean-instagram> use be-mean-pokemons
	switched to db be-mean-pokemons
	jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> show dbs
	workshop-online-julho-2015  0.203GB
	be-mean                     0.078GB
	local                       0.078GB
	minhadb                     0.203GB
	be-mean-instagram           0.078GB

```

## Listagem das coleções (passo 3)

```
	jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> show collections

```

## Cadastro dos pokemons (passo 4)

```
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Charizard','description':'Dragão de fogo valentão','type':'fogo',attack: 80, defense: 60, height: 1.7}
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 135ms
WriteResult({
  "nInserted": 1
})
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Blastoise','description':'Canhão de água ambulante','type':'água',attack: 58, defense: 60, height: 1.6}
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Raichu','description':'Evolução do Pikachu','type':'elétrico',attack: 99, defense: 55, height: 0.8}
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Seadra','description':'Cavalo marinho cuspidor','type':'água',attack: 55, defense: 45, height: 1.2}
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Articuno','description':'Pokémon lendário que controla o gelo','type':'gelo',attack: 92, defense: 100, height: 1.7}
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Mewtwo','description':'Pokémon mais poderoso, criado em laboratório','type':'psiquico', attack: 168, defense: 85, height: 2.0}
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 0ms
WriteResult({
  "nInserted": 1
})
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Rayquaza','description':'Vive na atmosfera observando','type':'dragão', attack: 158, defense: 85, height: 7.0}

jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Umbreon','description':'Nasce de experimentos com as ondas da lua','type':'escuridão', attack: 98, defense: 95, height: 1.0}
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

```

## Lista dos pokemons (passo 5)

```
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5643cbcc5805a8c729a735e5"),
  "name": "Charizard",
  "description": "Dragão de fogo valentão",
  "type": "fogo",
  "attack": 80,
  "defense": 60,
  "height": 1.7
}
{
  "_id": ObjectId("5643cc435805a8c729a735e6"),
  "name": "Blastoise",
  "description": "Canhão de água ambulante",
  "type": "água",
  "attack": 58,
  "defense": 60,
  "height": 1.6
}
{
  "_id": ObjectId("5643cc835805a8c729a735e7"),
  "name": "Raichu",
  "description": "Evolução do Pikachu",
  "type": "elétrico",
  "attack": 99,
  "defense": 55,
  "height": 0.8
}
{
  "_id": ObjectId("5643ccee5805a8c729a735e8"),
  "name": "Seadra",
  "description": "Cavalo marinho cuspidor",
  "type": "água",
  "attack": 55,
  "defense": 45,
  "height": 1.2
}
{
  "_id": ObjectId("5643cd355805a8c729a735e9"),
  "name": "Articuno",
  "description": "Pokémon lendário que controla o gelo",
  "type": "gelo",
  "attack": 92,
  "defense": 100,
  "height": 1.7
}
{
  "_id": ObjectId("5643cd975805a8c729a735ea"),
  "name": "Mewtwo",
  "description": "Pokémon mais poderoso, criado em laboratório",
  "type": "psiquico",
  "attack": 168,
  "defense": 85,
  "height": 2
}
{
  "_id": ObjectId("5643cdeb5805a8c729a735eb"),
  "name": "Rayquaza",
  "description": "Vive na atmosfera observando",
  "type": "dragão",
  "attack": 158,
  "defense": 85,
  "height": 7
}
{
  "_id": ObjectId("5643cecc5805a8c729a735ec"),
  "name": "Umbreon",
  "description": "Nasce de experimentos com as ondas da lua",
  "type": "escuridão",
  "attack": 98,
  "defense": 95,
  "height": 1
}
Fetched 8 record(s) in 2ms

```

## Pokémon (passo 6)

```
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> var query = {name: 'Rayquaza'}
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)

```

## Atualização do Pokémon (passo 6)

```

jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne(query)
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> poke.description = "Dragão da atmosfera que defende a terra"
Dragão da atmosfera que defende a terra
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("5643cdeb5805a8c729a735eb"),
  "name": "Rayquaza",
  "description": "Dragão da atmosfera que defende a terra",
  "type": "dragão",
  "attack": 158,
  "defense": 85,
  "height": 7
}
jean-Inspiron-7520(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 1ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})


```

