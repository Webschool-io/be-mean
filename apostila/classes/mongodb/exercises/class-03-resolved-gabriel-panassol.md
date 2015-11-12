# MongoDB - Aula 03 - Exercício
autor: Gabriel Panassol
Detalhe: Realizei uma adaptação nos 2 ultimos exercicios para retornar valores de acordo com o meus pokemmons :)

## Criando tabela 
```
> use be-mean-pokemons
switched to db be-mean-pokemons
```

## Listando pokemons
``` 
> db.pokemons.find().pretty()
{
        "_id" : ObjectId("56428f3c154818645f78c7fb"),
        "name" : "Eletrode",
        "description" : "Se até mesmo um está separado do grupo, o vínculo entre a energia de seis irá torná-los voltar instantaneamente.",
        "type" : "Eletrico",
        "attack" : 40,
        "height" : 0.4
}
{
        "_id" : ObjectId("564298e0154818645f78c7fc"),
        "name" : "Blastoise",
        "description" : "Um Pokémon brutal com jatos de água pressurizada em seu escudo. Eles são usados para aborda alta velocidade",
        "type" : "Água",
        "attack" : 83,
        "height" : 1.6
}
{
        "_id" : ObjectId("5642990e154818645f78c7fd"),
        "name" : "Beedrill",
        "description" : "Ele pode derrubar qualquer oponente com suas poderosas ferrões filho poi. Ele às vezes ataques em enxames.",
        "type" : "Água",
        "attack" : 83,
        "height" : 1.6
}
{
        "_id" : ObjectId("56429921154818645f78c7fe"),
        "name" : "Pidgeotto",
        "description" : "Pidgeotto reivindica uma grande área como seu próprio território. Este Pokémon voa ao redor, patrulhando o seu espaço de vida. Se
 seu território for violado, ele não mostra misericórdia em cuidadosamente punir o inimigo com suas garras afiadas.",
        "type" : "Voador",
        "attack" : 80,
        "height" : 1.5
}
{
        "_id" : ObjectId("5642992f154818645f78c7ff"),
        "name" : "Raichu",
        "description" : "Pokemon Eletrico fudido!!",
        "type" : "Eletrico",
        "attack" : 90,
        "height" : 0.8
}
```

## Listando pokemons menor que 0.5
``` 
> var query = {height : {$lt:0.5}}
> db.pokemons.find(query).pretty()
{
        "_id" : ObjectId("56428f3c154818645f78c7fb"),
        "name" : "Eletrode",
        "description" : "Se até mesmo um está separado do grupo, o vínculo entre a energia de seis irá torná-los voltar instantaneamente.",
        "type" : "Eletrico",
        "attack" : 40,
        "height" : 0.4
}
```

## Listando pokemons maior ou igual que 0.5
```
> var query = {height : {$gte:0.5}}
> db.pokemons.find(query).pretty()
{
        "_id" : ObjectId("564298e0154818645f78c7fc"),
        "name" : "Blastoise",
        "description" : "Um Pokémon brutal com jatos de água pressurizada em seu escudo. Eles são usados para aborda alta velocidade",
        "type" : "Água",
        "attack" : 83,
        "height" : 1.6
}
{
        "_id" : ObjectId("5642990e154818645f78c7fd"),
        "name" : "Beedrill",
        "description" : "Ele pode derrubar qualquer oponente com suas poderosas ferrões filho poi. Ele às vezes ataques em enxames.",
        "type" : "Água",
        "attack" : 83,
        "height" : 1.6
}
{
        "_id" : ObjectId("56429921154818645f78c7fe"),
        "name" : "Pidgeotto",
        "description" : "Pidgeotto reivindica uma grande área como seu próprio território. Este Pokémon voa ao redor, patrulhando o seu espaço de vida. Se
 seu território for violado, ele não mostra misericórdia em cuidadosamente punir o inimigo com suas garras afiadas.",
        "type" : "Voador",
        "attack" : 80,
        "height" : 1.5
}
{
        "_id" : ObjectId("5642992f154818645f78c7ff"),
        "name" : "Raichu",
        "description" : "Pokemon Eletrico fudido!!",
        "type" : "Eletrico",
        "attack" : 90,
        "height" : 0.8
}
```

## Listando pokemons menor ou igual que 0.5 E tipo grama
```
> var query = {$and: [ {height:{$lte:0.5}} , {type:'grama'} ] }
> db.pokemons.find(query).pretty()

> var query = {$and: [ {height:{$gt:1.4}} , {type:'grama'} ] }
> db.pokemons.find(query).pretty()
{
        "_id" : ObjectId("5642990e154818645f78c7fd"),
        "name" : "Beedrill",
        "description" : "Ele pode derrubar qualquer oponente com suas poderosas ferrões filho poi. Ele às vezes ataques em enxames.",
        "type" : "grama",
        "attack" : 83,
        "height" : 1.6
}
```

## Listando os pokemons com nome 'Raichu' OU attack menor ou igual que 0.5
```
> var query = {$or: [ {name:'Raichu'}, {height:{$lte:0.5}} ] }
> db.pokemons.find(query).pretty()
{
        "_id" : ObjectId("56428f3c154818645f78c7fb"),
        "name" : "Eletrode",
        "description" : "Se até mesmo um está separado do grupo, o vínculo entre a energia de seis irá torná-los voltar instantaneamente.",
        "type" : "Eletrico",
        "attack" : 40,
        "height" : 0.4
}
{
        "_id" : ObjectId("5642992f154818645f78c7ff"),
        "name" : "Raichu",
        "description" : "Pokemon Eletrico fudido!!",
        "type" : "Eletrico",
        "attack" : 90,
        "height" : 0.8
}
```

## Listando pokemons com attack MAIOR OU IGUAL QUE 48 E height menor ou igual que 0.5
```
> var query = {$and: [ {attack:{$gte:48}} , {height:{$lte:0.5}} ] }
> db.pokemons.find(query).pretty()

> var query = {$and: [ {attack:{$gte:40}} , {height:{$lte:0.4}} ] }
> db.pokemons.find(query).pretty()
{
        "_id" : ObjectId("56428f3c154818645f78c7fb"),
        "name" : "Eletrode",
        "description" : "Se até mesmo um está separado do grupo, o vínculo entre a energia de seis irá torná-los voltar instantaneamente.",
        "type" : "Eletrico",
        "attack" : 40,
        "height" : 0.4
}
```
 