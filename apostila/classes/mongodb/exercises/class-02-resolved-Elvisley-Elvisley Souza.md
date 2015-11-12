# MongoDB - Aula 02 - Exercício
autor: ELVISLEY SOUZA PEREIRA

## Criando database (passo 2)
```
 >  :be-mean-instagram Elvisley$ mongo be-mean-pokemons
```

## Listagem das databases (passo 2)
```
 >  (mongod-2.6.0) be-mean-pokemons >  show dbs
be-mean-instagram  0.078GB
be-mean            0.078GB
local              0.078GB
admin              (empty)
```

## Listagem das coleções (passo 3)
```
 >  (mongod-2.6.0) be-mean-pokemons >  show collections
```

## Cadastro dos pokemons (passo 4)
```
 >  (mongod-2.6.0) be-mean-pokemons >  var pokemon1 = {'name':'Beedrill','description':'Abelha','type':'inseto','attack': 30 , 'height':0.3}
 >  (mongod-2.6.0) be-mean-pokemons >  var pokemon2 = {'name':'Pidgey','description':'Galinha caipira','type':'passaro','attack': 35 , 'height':0.4}
 >  (mongod-2.6.0) be-mean-pokemons >  var pokemon3 = {'name':'Pidgeotto','description':'Passaro voador','type':'passaro','attack': 40 , 'height':0.5}
 >  (mongod-2.6.0) be-mean-pokemons >  var pokemon4 = {'name':'Rattata','description':'Rato','type':'mouse','attack': 45 , 'height':0.6}
 >  (mongod-2.6.0) be-mean-pokemons >  var pokemon5 = {'name':'Raticate','description':'Ratinho','type':'mouse','attack': 50 , 'height':0.7}
 >  (mongod-2.6.0) be-mean-pokemons >  db.pokemons.save(pokemon1)
Inserted 1 record(s) in 1287ms
WriteResult({
  "nInserted": 1
})
 >  (mongod-2.6.0) be-mean-pokemons >  db.pokemons.save(pokemon2)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
 >  (mongod-2.6.0) be-mean-pokemons >  db.pokemons.save(pokemon3)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
 >  (mongod-2.6.0) be-mean-pokemons >  db.pokemons.save(pokemon4)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
 >  (mongod-2.6.0) be-mean-pokemons >  db.pokemons.save(pokemon5)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
```

## Lista dos pokemons (passo 5)
```
 >  (mongod-2.6.0) be-mean-pokemons >  db.pokemons.find()
{
  "_id": ObjectId("56427a70d00be8bdf3d3ec6d"),
  "name": "Beedrill",
  "description": "Abelha",
  "type": "inseto",
  "attack": 30,
  "height": 0.3
}
{
  "_id": ObjectId("56427a77d00be8bdf3d3ec6e"),
  "name": "Pidgey",
  "description": "Galinha caipira",
  "type": "passaro",
  "attack": 35,
  "height": 0.4
}
{
  "_id": ObjectId("56427a7ad00be8bdf3d3ec6f"),
  "name": "Pidgeotto",
  "description": "Passaro voador",
  "type": "passaro",
  "attack": 40,
  "height": 0.5
}
{
  "_id": ObjectId("56427a7dd00be8bdf3d3ec70"),
  "name": "Rattata",
  "description": "Rato",
  "type": "mouse",
  "attack": 45,
  "height": 0.6
}
{
  "_id": ObjectId("56427a7fd00be8bdf3d3ec71"),
  "name": "Raticate",
  "description": "Ratinho",
  "type": "mouse",
  "attack": 50,
  "height": 0.7
}
Fetched 5 record(s) in 3ms
```

## Pidgey (passo 6)

```
 >  (mongod-2.6.0) be-mean-pokemons >  var query = {name: "Pidgey"}
 >  (mongod-2.6.0) be-mean-pokemons >  var poke = db.pokemons.findOne(query)
 >  (mongod-2.6.0) be-mean-pokemons >  poke
{
  "_id": ObjectId("56427a77d00be8bdf3d3ec6e"),
  "name": "Pidgey",
  "description": "Galinha caipira",
  "type": "passaro",
  "attack": 35,
  "height": 0.4
}
```
## Atualização do Pidgey (passo 6)
```
 >  (mongod-2.6.0) be-mean-pokemons >  poke.description = "Galinha Normal "
Galinha Normal
 >  (mongod-2.6.0) be-mean-pokemons >  db.pokemons.save(poke)
Updated 1 existing record(s) in 4ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
