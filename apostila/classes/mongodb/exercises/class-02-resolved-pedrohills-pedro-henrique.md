# MongoDb - Aula 02 - Exercício

1. Crie uma database chamada be-mean-pokemons;
2. Liste quais databases você possui nesse servidor;
3. Liste quais coleções você possui nessa database;
4. Insira pelo menos 5 pokemons **A SUA ESCOLHA** utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;
5. Liste os pokemons existentes na sua coleção;
6. Busque o `pickachu` e armazene-o em uma variável chamada `poke`;
7. Modifique sua `description` e salvê-o



## Estrutura

```md
# MongoDB - Aula 02 - Exercício
autor: Pedro Henrique

## Listagem das databases (passo 2)
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
be-mean-pokemons   0.078GB
contatooh          0.078GB
local              0.078GB

## Listagem das coleções (passo 3)
> show collections
system.indexes
teste

## Cadastro dos pokemons (passo 4)
> var pokemons = [
...   {
...     name: "Pikachu"
...     , description: 'Um pokémon de choque muito forte'
...     , attack: 35
...     , defense: 40
...     , height: 0.5
...   }
...   , {
...     name: "Charmander"
...     , description: 'Um pokémon de fogo muito forte'
...     , attack: 40
...     , defense: 35
...     , height: 0.4
...   }
...   , {
...     name: "Squirtle"
...     , description: 'Um pokémon de água muito forte'
...     , attack: 37
...     , defense: 30
...     , height: 0.3
...   }
...   , {
...     name: "Bulbasauro"
...     , description: 'Um pokémon de planta muito forte'
...     , attack: 45
...     , defense: 28
...     , height: 0.4
...   }
...   , {
...     name: "Pidgey"
...     , description: 'Um pokémon de vento muito forte'
...     , attack: 30
...     , defense: 50
...     , height: 0.5
...   }
... ];
> pokemons
[
        {
                "name" : "Pikachu",
                "description" : "Um pokémon de choque muito forte",
                "attack" : 35,
                "defense" : 40,
                "height" : 0.5
        },
        {
                "name" : "Charmander",
                "description" : "Um pokémon de fogo muito forte",
                "attack" : 40,
                "defense" : 35,
                "height" : 0.4
        },
        {
                "name" : "Squirtle",
                "description" : "Um pokémon de água muito forte",
                "attack" : 37,
                "defense" : 30,
                "height" : 0.3
        },
        {
                "name" : "Bulbasauro",
                "description" : "Um pokémon de planta muito forte",
                "attack" : 45,
                "defense" : 28,
                "height" : 0.4
        },
        {
                "name" : "Pidgey",
                "description" : "Um pokémon de vento muito forte",
                "attack" : 30,
                "defense" : 50,
                "height" : 0.5
        }
]
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

## Lista dos pokemons (passo 5)
> db.pokemons.find().pretty()
{
        "_id" : ObjectId("564291b535f1b5fe4ead743e"),
        "name" : "Pikachu",
        "description" : "Um pokémon de choque muito forte",
        "attack" : 35,
        "defense" : 40,
        "height" : 0.5
}
{
        "_id" : ObjectId("564291b535f1b5fe4ead743f"),
        "name" : "Charmander",
        "description" : "Um pokémon de fogo muito forte",
        "attack" : 40,
        "defense" : 35,
        "height" : 0.4
}
{
        "_id" : ObjectId("564291b535f1b5fe4ead7440"),
        "name" : "Squirtle",
        "description" : "Um pokémon de água muito forte",
        "attack" : 37,
        "defense" : 30,
        "height" : 0.3
}
{
        "_id" : ObjectId("564291b535f1b5fe4ead7441"),
        "name" : "Bulbasauro",
        "description" : "Um pokémon de planta muito forte",
        "attack" : 45,
        "defense" : 28,
        "height" : 0.4
}
{
        "_id" : ObjectId("564291b535f1b5fe4ead7442"),
        "name" : "Pidgey",
        "description" : "Um pokémon de vento muito forte",
        "attack" : 30,
        "defense" : 50,
        "height" : 0.5
}
>

## Pikachu (passo 6)
> var query = {name: 'Pikachu'}
> var poke = db.pokemons.findOne(query)

## Atualização do Pikachu (passo 7)
> poke
{
        "_id" : ObjectId("564291b535f1b5fe4ead743e"),
        "name" : "Pikachu",
        "description" : "Um pokémon de choque muito forte",
        "attack" : 35,
        "defense" : 40,
        "height" : 0.5
}
> poke.description = "Descrição editada, porém, continua sendo um pokémon de choque muito forte.";
Descrição editada, porém, continua sendo um pokémon de choque muito forte.
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

```
