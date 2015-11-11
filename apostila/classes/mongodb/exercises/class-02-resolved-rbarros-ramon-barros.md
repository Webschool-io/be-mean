```md
# MongoDB - Aula 02 - Exercício
autor: Ramon Barros

## Criação da database (passo 1)
rbarros:~/workspace (master) $ mongo be-mean-pokemons
MongoDB shell version: 2.6.11
connecting to: be-mean-pokemons

## Listagem das databases (passo 2)
> show dbs
admin              (empty)
be-mean-instagram  0.078GB
local              0.078GB

## Listagem das coleções (passo 3)
> show collections
>

## Cadastro dos pokemons (passo 4)
> var pokemon = { 
    name: 'Blastoise', 
    description: 'Ele pode dispara balas de águas com precisão.',
    attack: 85, 
    defense: 105 
}
> db.pokemons.insert(pokemon);
WriteResult({ 
    "nInserted" : 1 
})
> var pokemon = { 
    name: 'Pidgey',
    description: 'Esse sabe onde fica o Alegrete',
    attack: 35,
    defense: 35
}
> db.pokemons.insert(pokemon);
WriteResult({ 
    "nInserted" : 1 
})
> var pokemon = {
    name: 'Sandslash',
    description: 'Um rato com espinhos pontiagudos',
    attack: 45 ,
    defense: 55
}
> db.pokemons.insert(pokemon);
WriteResult({ 
    "nInserted" : 1 
})
> var pokemon = { 
    name: 'Jigglypuff',
    description: 'Faz o inimigo dormir como um anjo.',
    attack: 45,
    defense: 25
}
> db.pokemons.insert(pokemon);
WriteResult({ 
    "nInserted" : 1 
})
> var pokemon = {
    name: 'Ninetales',
    description: 'Ganha o controle da mente do inimigo.',
    attack: 81,
    defense: 100
}
> db.pokemons.insert(pokemon);
WriteResult({ 
    "nInserted" : 1 
})

## Lista dos pokemons (passo 5)
> db.pokemons.find();
{ 
    "_id" : ObjectId("56431288af9b736e94f81e53"), 
    "name" : "Blastoise", 
    "description" : "Ele pode dispara balas de águas com precisão.", 
    "attack" : 85, 
    "defense" : 105 
}
{ 
    "_id" : ObjectId("564312e2af9b736e94f81e54"), 
    "name" : "Pidgey", 
    "description" : "Esse sabe onde fica o Alegrete", 
    "attack" : 35, 
    "defense" : 35 
}
{ 
    "_id" : ObjectId("564315a6af9b736e94f81e55"), 
    "name" : "Sandslash", 
    "description" : "Um rato com espinhos pontiagudos", 
    "attack" : 45, 
    "defense" : 55 
}
{ 
    "_id" : ObjectId("564315baaf9b736e94f81e56"), 
    "name" : "Jigglypuff", 
    "description" : "Faz o inimigo dormir como um anjo.", 
    "attack" : 45, 
    "defense" : 25 
}
{ 
    "_id" : ObjectId("564315c8af9b736e94f81e57"), 
    "name" : "Ninetales", 
    "description" : "Ganha o controle da mente do inimigo.", 
    "attack" : 81, 
    "defense" : 100 
}

## Busca de pokemon (passo 6)
var query = { name: 'Ninetales' }
> var poke = db.pokemons.findOne(query)
> poke
{
        "_id" : ObjectId("564315c8af9b736e94f81e57"),
        "name" : "Ninetales",
        "description" : "Ganha o controle da mente do inimigo.",
        "attack" : 81,
        "defense" : 100
}

## Atualização do pokemon (passo 6)
> poke.description = 'Dizem que pode viver até mil anos.'
Dizem que pode viver até mil anos.
> db.pokemons.save(poke)
WriteResult({ 
    "nMatched" : 1,
    "nUpserted" : 0,
    "nModified" : 1
})
> db.pokemons.find(query)
{ 
    "_id" : ObjectId("564315c8af9b736e94f81e57"),
    "name" : "Ninetales",
    "description" : "Dizem que pode viver até mil anos.",
    "attack" : 81,
    "defense" : 100
}

```
