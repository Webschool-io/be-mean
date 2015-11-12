# MongoDB - Aula 02 - Exercício
autor: Guilherme Rovaron (https://github.com/Rovaron)

## Criando o database
```
> use be-mean-pokemons
switched to db be-mean-pokemons
```

## Listando databases no meu servidor
```
> show dbs
be-mean-pokemons  0.078GB
local             0.078GB
test              0.078GB
```

## Listando coleções da database be-mean-pokemons
```
> show collections
pokemons
system.indexes
```

## Inserindo pokemons
```
> db.pokemons.insert({nome: "Shiny Scyther", description: "Inseto voador gigante boladão ceifador de vidas", attack: 333, defense: 100, height: 30.00})
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert({nome: "AecioSnows", description: "Tipo voador, nariz com coloração branca", attack: 2, defense: 8001, height: 80.00})
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert({nome: "Dilmee", description: "Parente do slowking, so fica boiando e repetindo coisas sem sentido", attack: 0.13, defense: 0, height: 88.00})
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert({nome: "Scizor", description: "Evolução do scyther nem sei qual é mais bolado", attack: 999, defense: 999, height: 33.33})
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert({nome: "Hitmonlee", description: "Homenagem ao mestre bruce lee, da vuadora até na sombra", attack: 9999999, defense: 999999, height: 60.33})
WriteResult({ "nInserted" : 1 })
```

## Listando pokemons
```
> db.pokemons.find()
{ "_id" : ObjectId("5643ca4fe728f5449c816791"), "nome" : "Shiny Scyther", "description" : "Inseto voador gigante boladão ceifador de vidas", "attack" : 333, "defense" : 100, "height" : 30 }
{ "_id" : ObjectId("5643cb34e728f5449c816792"), "nome" : "AecioSnows", "description" : "Tipo voador, nariz com coloração branca", "attack" : 2, "defense" : 8001, "height" : 80 }
{ "_id" : ObjectId("5643cbafe728f5449c816793"), "nome" : "Dilmee", "description" : "Parente do slowking, so fica boiando e repetindo coisas sem sentido", "attack" : 0.13, "defense" : 0, "height" : 88 }
{ "_id" : ObjectId("5643cc2fe728f5449c816794"), "nome" : "Scizor", "description" : "Evolução do scyther nem sei qual é mais bolado", "attack" : 999, "defense" : 999, "height" : 33.33 }
{ "_id" : ObjectId("5643cc9ee728f5449c816795"), "nome" : "Hitmonlee", "description" : "Homenagem ao mestre bruce lee, da vuadora até na sombra", "attack" : 9999999, "defense" : 999999, "height" : 60.33 }
```

## Buscando pokemon
```
> var query = {nome: "Shiny Scyther"}
> var poke = db.pokemons.findOne(query)
> poke
{
        "_id" : ObjectId("5643ca4fe728f5449c816791"),
        "nome" : "Shiny Scyther",
        "description" : "Inseto voador gigante boladão ceifador de vidas",
        "attack" : 333,
        "defense" : 100,
        "height" : 30
}
```

## Alterando Pokemon
```
> poke.description = "Pokemon mais loco da galáxia"
Pokemon mais loco da galáxia
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```
