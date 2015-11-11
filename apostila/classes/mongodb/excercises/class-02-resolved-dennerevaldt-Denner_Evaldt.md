# MongoDB - Aula 02 - Exercício
autor: Denner Evaldt Machado

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
> 

```
## Cadastro dos pokemons (passo 4)

```

> var pokemon = {'name':'Butterfree','description':'Borboleta colorida bonitinha','type': 'Butterfly', attack: 20, height: 1.1 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name':'Metapod','description':'Baguio loco de pedra e ferro','type': 'Butterfly', attack: 20, height: 1.1 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name':'Charizard','description':'Fogo na bomba','type': 'Fire', attack: 40, height: 1.7 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name':'Rattata','description':'Ratinho louco','type': 'Normal', attack: 30, height: 0.3 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

> var pokemon = {'name':'Raichu','description':'Parente do pikachu ','type': 'electric', attack: 50, height: 0.8 }
> db.pokemons.save(pokemon)
WriteResult({ "nInserted" : 1 })

```

## Lista dos pokemons (passo 5)

```

> db.pokemons.find()
{ "_id" : ObjectId("56427c825978a2317b17a1df"), "name" : "Metapod", "description" : "Baguio loco de pedra e ferro", "type" : "Bug", "attack" : 10, "height" : 0.7 }
{ "_id" : ObjectId("56427d5e5978a2317b17a1e0"), "name" : "Butterfree", "description" : "Borboleta colorida bonitinha", "type" : "Butterfly", "attack" : 20, "height" : 1.1 }
{ "_id" : ObjectId("564281df5978a2317b17a1e1"), "name" : "Charizard", "description" : "Fogo na bomba", "type" : "Fire", "attack" : 40, "height" : 1.7 }
{ "_id" : ObjectId("5642827c5978a2317b17a1e2"), "name" : "Rattata", "description" : "Ratinho louco", "type" : "Normal", "attack" : 30, "height" : 0.3 }
{ "_id" : ObjectId("564283105978a2317b17a1e3"), "name" : "Raichu", "description" : "Parente do pikachu ", "type" : "electric", "attack" : 50, "height" : 0.8 }

```

## Pikachu (passo 6)

```

> var query = {name: 'Raichu'}
> var poke = db.pokemons.findOne(query)

```

## Atualização do Pikachu (passo 6)

```

> poke.description = "Pokemon elétrico parecido com pikachu"
Pokemon elétrico parecido com pikachu
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

```