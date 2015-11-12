# MongoDB - Aula 02 - Exercício
autor: Marcelo André Naegeler

## Criar a database
```
> use be-mean-pokemons 
switched to db be-mean-pokemons
```

## Listagem das databases
```
> show dbs 
blog-react    0.078GB
drive         0.078GB
local         0.078GB
node-rest     0.078GB
restaurantes  0.078GB
stock         0.078GB
```

## Listagem das coleções
```
> show collections 
>
```

## Cadastro de pokémons
```
> var pokemons = [
... {
... name: 'Pikachu'
... , description: 'Electric pokémon'
... , attack: 20
... , defense: 5
... , height: 45
... , type: 'electric'
... }
... , {
... name: 'Bulbasaur'
... , description: 'Grass pokémon'
... , attack: 18
... , defense: 15
... , height: 60
... , type: 'grass'
... }
... , {
... name: 'Charizard'
... , description: 'Fire pokémon'
... , attack: 25
... , defense: 10
... , height: 100
... , type: 'fire'
... }
... , {
... name: 'Squirtle'
... , description: 'Water pokémon'
... , attack: 15
... , defense: 8
... , height: 45
... , type: 'water'
... }
... , {
... name: 'Caterpie'
... , description: 'Bug pokémon'
... , attack: 0
... , defense: 20
... , height: 20
... , type: 'bug'
... }
... ];

> db.pokemons.insert(pokemons)
BulkWriteResult({
  "writeErrors" : [ ],
  "writeConcernErrors" : [ ],
  "nInserted" : 5,
  "nUpserted" : 0,
  "nMatched" : 0,
  "nModified" : 0,
  "nRemoved" : 0,
  "upserted" : [ ]
})
```

## Lista dos pokémons
```
> db.pokemons.find();
{ "_id" : ObjectId("56448fcf8d9cce899a4271c4"), "name" : "Pikachu", "description" : "Awesome eletric pokémon", "attack" : 20, "defense" : 5, "height" : 45, "type" : "electric" }
{ "_id" : ObjectId("56448fcf8d9cce899a4271c5"), "name" : "Bulbasaur", "description" : "Grass pokémon", "attack" : 18, "defense" : 15, "height" : 60, "type" : "grass" }
{ "_id" : ObjectId("56448fcf8d9cce899a4271c6"), "name" : "Charizard", "description" : "Fire pokémon", "attack" : 25, "defense" : 10, "height" : 100, "type" : "fire" }
{ "_id" : ObjectId("56448fcf8d9cce899a4271c7"), "name" : "Squirtle", "description" : "Water pokémon", "attack" : 15, "defense" : 8, "height" : 45, "type" : "water" }
{ "_id" : ObjectId("56448fcf8d9cce899a4271c8"), "name" : "Caterpie", "description" : "Bug pokémon", "attack" : 0, "defense" : 20, "height" : 20, "type" : "bug" }
```

## Buscar Pikachu e salvar em variável
```
> var poke = db.pokemons.findOne({ name: 'Pikachu' })
> poke
{
  "_id" : ObjectId("56448fcf8d9cce899a4271c4"),
  "name" : "Pikachu",
  "description" : "Electric pokémon",
  "attack" : 20,
  "defense" : 5,
  "height" : 45,
  "type" : "electric"
}
```

## Atualização de Pikachu
```
> poke.description = 'Awesome eletric pokémon'; 
Awesome eletric pokémon
> db.pokemons.save(poke);
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.findOne({ name: 'Pikachu' })
{
  "_id" : ObjectId("56448fcf8d9cce899a4271c4"),
  "name" : "Pikachu",
  "description" : "Awesome eletric pokémon",
  "attack" : 20,
  "defense" : 5,
  "height" : 45,
  "type" : "electric"
}
```
