# MongoDB - Aula 02 - Exercício
autor: Yuri Sales

## Listagem das databases (passo 2)
```
Megazord(mongod-3.0.7) be-mean-pokemons> show dbs
be-mean           → 0.078GB
local             → 0.078GB
be-mean-instagram → 0.078GB
be-mean-teste     → 0.078GB
```

## Listagem das coleções (passo 3)
```
Megazord(mongod-3.0.7) be-mean-pokemons> show collections
//(Não tinha nenhuma coleção no momento)
```

## Cadastro dos pokemons (passo 4)
```
Megazord(mongod-3.0.7) be-mean-pokemons> var pokemon = 3{'name':'Meowth','description':'É um gatinho maroto','attack':2,'defense':2, 'height':0.4}
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)

Megazord(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Psyduck','description':'Um pato meio adoidado','attack':3,'defense':2,'height':0.8}
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)

Megazord(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Nidoran','description':'É um roedor maroto','attack':3,'defense':2,'height':0.4}
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)

Megazord(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Machop','description':'Pokemón maromba','attack':4,'defense':2, 'height':0.8}
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)

Megazord(mongod-3.0.7) be-mean-pokemons> var pokemon = {'name':'Krabby','description':'Parente do Sirigueijo','attack':5,'defense':4, 'height':0.4}
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(pokemon)
```

## Lista dos pokemons (passo 5)
```
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56429125ab67971ce106702e"),
  "name": "Nidoran",
  "description": "É um roedor maroto",
  "attack": 3,
  "defense": 2,
  "height": 0.4
}
{
  "_id": ObjectId("5642912fab67971ce106702f"),
  "name": "Meowth",
  "description": "É um gatinho maroto",
  "attack": 2,
  "defense": 2,
  "height": 0.4
}
{
  "_id": ObjectId("564291eeab67971ce1067030"),
  "name": "Psyduck",
  "description": "Um pato meio adoidado",
  "attack": 3,
  "defense": 2,
  "height": 0.8
}
{
  "_id": ObjectId("564292c4ab67971ce1067031"),
  "name": "Machop",
  "description": "Pokemón maromba",
  "attack": 4,
  "defense": 2,
  "height": 0.8
}
{
  "_id": ObjectId("56429327ab67971ce1067032"),
  "name": "Krabby",
  "description": "Parente do Sirigueijo",
  "attack": 5,
  "defense": 4,
  "height": 0.4
}

```

## Pokemon (passo 6)
```
Megazord(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({"name":'Meowth'})
```
## Atualização do Pokemon (passo 6)
```
Megazord(mongod-3.0.7) be-mean-pokemons> poke.description = 'Um gatinho abusado que fala pelos cotovelos'
Um gatinho abusado que fala pelos cotovelos
Megazord(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
```
