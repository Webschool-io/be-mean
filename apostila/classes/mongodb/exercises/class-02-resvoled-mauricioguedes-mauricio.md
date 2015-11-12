# MongoDB - Aula 02 - Exercício
autor: Maurício Guedes

## Listagem das databases (passo 2)
```
> show dbs
be-mean  0.078GB
local    0.078GB
```

## Listagem das coleções (passo 3)
```
> show collections
```

## Cadastro dos pokemons (passo 4)
```
> var pokemon1 = {name: 'Bulbasaur', description:'Bulbasaur can be seen napping   var pokemon1 = {name: 'Bulbasaur', description:'Bulbasaur can be seen napping invar pokemon1 = {name: 'Bulbasaur', description:'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun\'s rays, the seed grows progressively larger.', attack: 49, defense: 49, height: 7}
> var pokemon2 = {name: 'Metapod', description:'The shell covering this Pokmon\'  var pokemon2 = {name: 'Metapod', description:'The shell covering this Pokmon\'s var pokemon2 = {name: 'Metapod', description:'The shell covering this Pokmon\'s var pokemon2 = {name: 'Metapod', description:'The shell covering this Pokmon\'s body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.', attack: 20, defense: 55, height: 7}
> var pokemon3 = {name: 'Ivysaur', description:'There is a bud on this Pokmon\'s  var pokemon3 = {name: 'Ivysaur', description:'There is a bud on this Pokmon\'s bvar pokemon3 = {name: 'Ivysaur', description:'There is a bud on this Pokmon\'s bvar pokemon3 = {name: 'Ivysaur', description:'There is a bud on this Pokmon\'s back. To support its weight, Ivysaur\'s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it\'s a sign that the bud will bloom into a large flower soon.', attack: 62, defense: 63, height: 10}
> var pokemon4 = {name: 'Charmeleon', description:'Charmeleon mercilessly destro  var pokemon4 = {name: 'Charmeleon', description:'Charmeleon mercilessly destroysvar pokemon4 = {name: 'Charmeleon', description:'Charmeleon mercilessly destroysvar pokemon4 = {name: 'Charmeleon', description:'Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.', attack: 64, defense: 58, height: 11}
> var pokemon5 = {name: 'Charizard', description:'Charizard flies around the sky  var pokemon5 = {name: 'Charizard', description:'Charizard flies around the sky ivar pokemon5 = {name: 'Charizard', description:'Charizard flies around the sky ivar pokemon5 = {name: 'Charizard', description:'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.', attack: 84, defense: 78, height: 17}
> db.pokemons.insert(pokemon1)
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
{ "_id" : ObjectId("5643c6c703acdc55ec079516"), "name" : "Bulbasaur", "description" : "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", "attack" : 49, "defense" : 49, "height" : 7 }
{ "_id" : ObjectId("5643c6d103acdc55ec079517"), "name" : "Metapod", "description" : "The shell covering this Pokmon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.", "attack" : 20, "defense" : 55, "height" : 7 }
{ "_id" : ObjectId("5643c6d803acdc55ec079518"), "name" : "Ivysaur", "description" : "There is a bud on this Pokmon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.", "attack" : 62, "defense" : 63, "height" : 10 }
{ "_id" : ObjectId("5643c6e503acdc55ec079519"), "name" : "Charmeleon", "description" : "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.", "attack" : 64, "defense" : 58, "height" : 11 }
{ "_id" : ObjectId("5643c6ec03acdc55ec07951a"), "name" : "Charizard", "description" : "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.", "attack" : 84, "defense" : 78, "height" : 17 }
```

## Pikachu (passo 6)
```
> var query = {name: 'Charizard'}
> var pokemon = db.pokemons.findOne(query)
> pokemon
{
        "_id" : ObjectId("5643c6ec03acdc55ec07951a"),
        "name" : "Charizard",
        "description" : "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
        "attack" : 84,
        "defense" : 78,
        "height" : 17
}
```

## Atualização do Pikachu (passo 6)
```
> pokemon.description
Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.
> pokemon.description = 'Charizard é o bixão'
Charizard é o bixão
> db.pokemons.save(pokemon)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```