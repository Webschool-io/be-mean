# MongoDB - Aula 02 - Exercício
autor: Marcelo Santos

## Listagem das databases
```
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
local              0.078GB
```

## Listagem das coleções
```
> show collections
pokemons
system.indexes
```

## Cadastro dos pokemons
```
> var pokemon = {'name':'Geodude','description':'Possui um soco forte','type': 'rocha', attack: 80, height: 0.4 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Cubone','description':'Ataque de Osso','type': 'Terra', attack: 50, height: 0.4}
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Beedrill','description':'Abelha extremamente nervosa','type': 'inseto', attack: 90, height: 1.0}
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
>
> var pokemon = {'name':'Pidgeotto','description':'Rajada de Vento','type': 'Passaro', attack: 60, height: 1.1}
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Raichu','description':'Evolução do pikachu','type': 'eletrico', attack: 90, height: 0.8}
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
>
> var pokemon = {'name':'Jigglypuff','description':'Toca um cançao de dormi','type': 'fada', attack: 45, height: 0.5}
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Psyduck','description':'Mais atrapalhado que o mister bean','type': 'agua', attack: 52, height: 0.8}
>
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Alakazam','description':'Rei da hypnose','type': 'pisiquico', attack: 50, height: 1.5}
> db.pokemons.insert(pokemon)
```
## Listagem dos pokemons
```
> db.pokemons.find()
{ "_id" : ObjectId("56428ae7076736334239996d"), "name" : "Geodude", "description" : "Possui um soco forte", "type" : "rocha", "attack" : 80, "height" : 0.4 }
{ "_id" : ObjectId("56428b1a076736334239996e"), "name" : "Cubone", "description" : "Ataque de Osso", "type" : "Terra", "attack" : 50, "height" : 0.4 }
{ "_id" : ObjectId("56428b28076736334239996f"), "name" : "Beedrill", "description" : "Abelha extremamente nervosa", "type" : "inseto", "attack" : 90, "height" : 1 }
{ "_id" : ObjectId("56428b320767363342399970"), "name" : "Pidgeotto", "description" : "Rajada de Vento", "type" : "Passaro", "attack" : 60, "height" : 1.1 }
{ "_id" : ObjectId("56428b3e0767363342399971"), "name" : "Raichu", "description" : "Evolução do pikachu", "type" : "eletrico", "attack" : 90, "height" : 0.8 }
{ "_id" : ObjectId("56428b470767363342399972"), "name" : "Jigglypuff", "description" : "Toca um cançao de dormi", "type" : "fada", "attack" : 45, "height" : 0.5 }
{ "_id" : ObjectId("56428b510767363342399973"), "name" : "Psyduck", "description" : "Mais atrapalhado que o mister bean", "type" : "agua", "attack" : 52, "height" : 0.8 }
{ "_id" : ObjectId("56428b590767363342399974"), "name" : "Alakazam", "description" : "Rei da hypnose", "type" : "pisiquico", "attack" : 50, "height" : 1.5 }
```

## Buscar e alterar um pokemon
```
> var query = {name: 'Alakazam'}
> var poke = db.pokemons.findOne(query)
> poke.description = "Tem medo de fantasmas"
Tem medo de fantasmas
> poke
{
        "_id" : ObjectId("56428b590767363342399974"),
        "name" : "Alakazam",
        "description" : "Tem medo de fantasmas",
        "type" : "pisiquico",
        "attack" : 50,
        "height" : 1.5
}
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })
> db.pokemons.find()
{ "_id" : ObjectId("56428b590767363342399974"), "name" : "Alakazam", "description" : "Tem medo de fantasmas", "type" : "pisiquico", "attack" : 50, "height" : 1.5 }
```
