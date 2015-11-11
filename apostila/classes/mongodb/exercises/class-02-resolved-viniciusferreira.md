# MongoDB - Aula 02 - Exercício

autor: VINICIUS FERREIRA PIASSAROLLO

## Listagem das databases (passo 2)

```
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> show dbs;
be-mean-instagram → 0.078GB
be-mean           → 0.078GB
db-pokemons       → 0.078GB
local             → 0.078GB
 
``` 

## Listagem das coleções (passo 3) 

```
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> show collections;
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> 

```


## Cadastro dos pokemons (passo 4)

  ```
  var p1 = {"name": "Venusaur","description": "There is a large flower on Venusaurs back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flowers aroma soothes the emotions of people.","attack": 88,"defense": 92,"height": 2}
 
  var p2 = {"name": "Charizard","description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.","attack": 44,"defense": 55,"height": 6}
 
  var p3 = {"name": "Squirtle","description": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.","attack": 33,"defense": 44,"height": 2}

  var p4 = {"name": "Metapod","description": "Metapod The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is prepared.","attack": 46,"defense": 15,"height": 1}
 
  var p5 = {"name": "Caterpie","description": "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.","attack": 58,"defense": 10,"height": 2}

MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> db.pokemons.save(p1);
Inserted 1 record(s) in 201ms
WriteResult({
  "nInserted": 1
})
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> db.pokemons.save(p2);
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> db.pokemons.save(p3);
Inserted 1 record(s) in 8ms
WriteResult({
  "nInserted": 1
})
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> db.pokemons.save(p4);
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> db.pokemons.save(p5);
Inserted 1 record(s) in 6ms
WriteResult({
  "nInserted": 1
})
```

## Lista dos pokemons (passo 5)

```
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> db.pokemons.find();

{
  "_id": ObjectId("5642b50408c2a11dc65a94d9"),
  "name": "Venusaur",
  "description": "There is a large flower on Venusaurs back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flowers aroma soothes the emotions of people.",
  "attack": 88,
  "defense": 92,
  "height": 2
}
{
  "_id": ObjectId("5642b50f08c2a11dc65a94da"),
  "name": "Charizard",
  "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
  "attack": 44,
  "defense": 55,
  "height": 6
}
{
  "_id": ObjectId("5642b51308c2a11dc65a94db"),
  "name": "Squirtle",
  "description": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
  "attack": 33,
  "defense": 44,
  "height": 2
}
{
  "_id": ObjectId("5642b51808c2a11dc65a94dc"),
  "name": "Metapod",
  "description": "Metapod The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is prepared.",
  "attack": 46,
  "defense": 15,
  "height": 1
}
{
  "_id": ObjectId("5642b51e08c2a11dc65a94dd"),
  "name": "Caterpie",
  "description": "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
  "attack": 58,
  "defense": 10,
  "height": 2
}
Fetched 5 record(s) in 13ms
```

## Squirtle (passo 6)

```
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> var query = {'name':'Squirtle'};
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> var poke = db.pokemons.findOne(query);

```

## Atualização do Squirtle (passo 6)

```
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> poke.description="alterado tio hora do skank";
alterado tio hora do skank
MacBook-Pro-de-vinicius(mongod-3.0.4) be-mean-pokemons> db.pokemons.save(poke);
Updated 1 existing record(s) in 8ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```


