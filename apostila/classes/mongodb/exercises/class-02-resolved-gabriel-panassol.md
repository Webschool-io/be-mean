# MongoDB - Aula 02 - Exercício
autor: Gabriel Panassol


## Criando tabela 
```
> use be-mean-pokemons
switched to db be-mean-pokemons
```

## Listando tabelas
``` 
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
restaurante        0.078GB
```

## Listando collections
```
> show collections
system.indexes
```

## Inserindo 5 pokemons
```
> var eletrode = {'name':'Eletrode','description':'Se até mesmo um está separado do grupo, o vínculo entre a energia de seis irá torná-los voltar instant
aneamente."','type':'Eletrico',attack:40,height:4}
> db.pokemons.insert(eletrode)
WriteResult({ "nInserted" : 1 })

> var blastoise = {'name':'Blastoise','description':'Um Pokémon brutal com jatos de água pressurizada em seu escudo. Eles são usados para aborda alta velo
cidade','type':'Água',attack:83,height:16}
> db.pokemons.insert(blastoise)
WriteResult({ "nInserted" : 1 })

> var beedrill = {'name':'Beedrill','description':'Ele pode derrubar qualquer oponente com suas poderosas ferrões filho poi. Ele às vezes ataques em enxam
es.','type':'Água',attack:83,height:16}
> db.pokemons.insert(beedrill)
WriteResult({ "nInserted" : 1 })

> var pidgeotto = {'name':'Pidgeotto','description':'Pidgeotto reivindica uma grande área como seu próprio território. Este Pokémon voa ao redor, patrulha
ndo o seu espaço de vida. Se seu território for violado, ele não mostra misericórdia em cuidadosamente punir o inimigo com suas garras afiadas.','type':'V
oador',attack:80,height:15}
> db.pokemons.insert(pidgeotto)
WriteResult({ "nInserted" : 1 })

> var raichu = {'name':'Raichu','description':'Se as bolsas elétricos em seus bochechas ficam totalmente carregada, ambas as orelhas vai ficar para cima',
'type':'Eletrico',attack:90,height:8}
> db.pokemons.insert(raichu)
WriteResult({ "nInserted" : 1 })
```

## Listando os pokemons
```
> db.pokemons.find({}).pretty();
{
        "_id" : ObjectId("56428f3c154818645f78c7fb"),
        "name" : "Eletrode",
        "description" : "Se até mesmo um está separado do grupo, o vínculo entre a energia de seis irá torná-los voltar instantaneamente.",
        "type" : "Eletrico",
        "attack" : 40,
        "height" : 4
}
{
        "_id" : ObjectId("564298e0154818645f78c7fc"),
        "name" : "Blastoise",
        "description" : "Um Pokémon brutal com jatos de água pressurizada em seu escudo. Eles são usados para aborda alta velocidade",
        "type" : "Água",
        "attack" : 83,
        "height" : 16
}
{
        "_id" : ObjectId("5642990e154818645f78c7fd"),
        "name" : "Beedrill",
        "description" : "Ele pode derrubar qualquer oponente com suas poderosas ferrões filho poi. Ele às vezes ataques em enxames.",
        "type" : "Água",
        "attack" : 83,
        "height" : 16
}
{
        "_id" : ObjectId("56429921154818645f78c7fe"),
        "name" : "Pidgeotto",
        "description" : "Pidgeotto reivindica uma grande área como seu próprio território. Este Pokémon voa ao redor, patrulhando o seu espaço de vida. Se
 seu território for violado, ele não mostra misericórdia em cuidadosamente punir o inimigo com suas garras afiadas.",
        "type" : "Voador",
        "attack" : 80,
        "height" : 15
}
{
        "_id" : ObjectId("5642992f154818645f78c7ff"),
        "name" : "Raichu",
        "description" : "Se as bolsas elétricos em seus bochechas ficam totalmente carregada, ambas as orelhas vai ficar para cima",
        "type" : "Eletrico",
        "attack" : 90,
        "height" : 8
}
```

## Buscando um pokemon e armazenando numa variavel
```
> var query = {name:'Raichu'}
> var p = db.pokemons.findOne(query)
> p
{
        "_id" : ObjectId("5642992f154818645f78c7ff"),
        "name" : "Raichu",
        "description" : "Se as bolsas elétricos em seus bochechas ficam totalmente carregada, ambas as orelhas vai ficar para cima",
        "type" : "Eletrico",
        "attack" : 90,
        "height" : 8
}
```

## Modificando o resultado
```
> var query = {name:'Raichu'}
> var p = db.pokemons.findOne(query)
> p
{
        "_id" : ObjectId("5642992f154818645f78c7ff"),
        "name" : "Raichu",
        "description" : "Se as bolsas elétricos em seus bochechas ficam totalmente carregada, ambas as orelhas vai ficar para cima",
        "type" : "Eletrico",
        "attack" : 90,
        "height" : 8
}
> var query = {name:'Raichu'}
> var p = db.pokemons.findOne(query)
> p
{
        "_id" : ObjectId("5642992f154818645f78c7ff"),
        "name" : "Raichu",
        "description" : "Se as bolsas elétricos em seus bochechas ficam totalmente carregada, ambas as orelhas vai ficar para cima",
        "type" : "Eletrico",
        "attack" : 90,
        "height" : 8
}
> p.description = "Pokemon Eletrico fudido!!"
Pokemon Eletrico fudido!!
> db.pokemons.save(p)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> var p = db.pokemons.findOne(query)
> p
{
        "_id" : ObjectId("5642992f154818645f78c7ff"),
        "name" : "Raichu",
        "description" : "Pokemon Eletrico fudido!!",
        "type" : "Eletrico",
        "attack" : 90,
        "height" : 8
}
```
 