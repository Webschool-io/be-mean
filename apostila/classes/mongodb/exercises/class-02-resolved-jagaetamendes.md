# MongoDB - Aula 02 - Exercício
autor: J.A. Gaeta Mendes


## Listagem das databases (passo 2)
```
show dbs
be-mean-instagram → 0.078GB
be-mean           → 0.078GB
local             → 0.078GB
```

## Listagem das coleções (passo 3)
```
db.createCollection("pokemon")
{
  "ok": 1
}

show collections
pokemon        → 0.000MB / 0.008MB
system.indexes → 0.000MB / 0.008MB
```

## Cadastro dos pokemons (passo 4)
```
var pokemon = {'name':'Blastoise','description':'Manda balas de água para todo lado','type':'marisco',attack: 63, defense: 80, height: 0.1} 
db.pokemon.insert(pokemon)
Inserted 1 record(s) in 6ms
WriteResult({
  "nInserted": 1
})

var pokemon = {'name':'Butterfree','description':'Antenada no mel das flores','type':'borboleta',attack: 45, defense: 50, height: 0.11}
db.pokemon.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})


var pokemon = {'name':'Weedle','description':'Olfato privilegiado','type':'inseto cabeludo',attack: 35, defense: 30, height: 0.3}
db.pokemon.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

var pokemon = {'name':'Beedrill','description':'Defende seu território','type':'abelha venenosa',attack: 90, defense: 40, height: 0.1}
db.pokemon.insert(pokemon)
Inserted 1 record(s) in 1ms
WriteResult({
  "nInserted": 1
})

var pokemon = {'name':'Rattata','description':'Bichinho muito arisco','type':'rato',attack: 56, defense: 35, height: 0.3}
db.pokemon.insert(pokemon)
Inserted 1 record(s) in 5ms
WriteResult({
  "nInserted": 1
})
```

## Lista dos pokemons (passo 5)
```
db.pokemon.find()
{
  "_id": ObjectId("5643b4e94dbfa84833f68d16"),
  "name": "Blastoise",
  "description": "Manda balas de água para todo lado",
  "type": "marisco",
  "attack": 63,
  "defense": 80,
  "height": 0.1
}
{
  "_id": ObjectId("5643b5334dbfa84833f68d17"),
  "name": "Butterfree",
  "description": "Antenada no mel das flores",
  "type": "borboleta",
  "attack": 45,
  "defense": 50,
  "height": 0.11
}
{
  "_id": ObjectId("5643b56f4dbfa84833f68d18"),
  "name": "Weedle",
  "description": "Olfato privilegiado",
  "type": "inseto cabeludo",
  "attack": 35,
  "defense": 30,
  "height": 0.3
}
{
  "_id": ObjectId("5643b6564dbfa84833f68d19"),
  "name": "Beedrill",
  "description": "Defende seu território",
  "type": "abelha venenosa",
  "attack": 90,
  "defense": 40,
  "height": 0.1
}
{
  "_id": ObjectId("5643b72fe8c916af6a28579c"),
  "name": "Rattata",
  "description": "Bichinho muito arisco",
  "type": "rato",
  "attack": 56,
  "defense": 35,
  "height": 0.3
}
Fetched 5 record(s) in 4ms
```

## Beedrill (passo 6)
```
poke = db.pokemon.findOne({name:'Beedrill'})
{
  "_id": ObjectId("5643b6564dbfa84833f68d19"),
  "name": "Beedrill",
  "description": "Defende seu território",
  "type": "abelha venenosa",
  "attack": 90,
  "defense": 40,
  "height": 0.1
}
Fetched 1 record(s) in 1ms
```

## Atualização do Pikachu (passo 6)
```
poke.type = 'abelha'
abelha

db.pokemon.save(poke)
Updated 1 existing record(s) in 4ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

db.pokemon.findOne({name:'Beedrill'})
{
  "_id": ObjectId("5643b6564dbfa84833f68d19"),
  "name": "Beedrill",
  "description": "Defende seu território",
  "type": "abelha",
  "attack": 90,
  "defense": 40,
  "height": 0.1
}
```
