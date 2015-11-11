# MongoDB - Aula 02 - Exercício
autor: Fábio Calheiros

## Listagem das databases (passo 2)
> use be-mean-pokemons
switched to db be-mean-pokemons
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB
>

## Listagem das coleções (passo 3)
> show collections
>

## Cadastro dos pokemons (passo 4)

> var pokemon = {'name':'Electrike','description':'Electrike stores electricity
in its long body hair','type': 'Eletric', 'attack': 30, height: 0.6 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Blastoise','description':'Blastoise has water spouts th
at protrude from its shell','type': 'Water', 'attack': 40, height: 1.6 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Charizard','description':'Charizard flies around the sk
y in search of powerful opponents.','type': 'Fire', 'attack': 40, height: 1.7 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Jigglypuff','description':'Jigglypuff's vocal cords can
 freely adjust the wavelength of its voice','type': 'Normal', 'attack': 20, heig
ht: 0.5 }
2015-11-10T23:29:31.122-0200 E QUERY    SyntaxError: Unexpected identifier
> var pokemon = {'name':'Jigglypuff','description':'Jigglypuffs vocal cords can
freely adjust the wavelength of its voice','type': 'Normal', 'attack': 20, heigh
t: 0.5 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })
> var pokemon = {'name':'Zubat','description':'Zubat remains quietly unmoving in
 a dark spot during the bright daylight hours','type': 'Poison', 'attack': 20, h
eight: 0.8 }
> db.pokemons.insert(pokemon)
WriteResult({ "nInserted" : 1 })

## Lista dos pokemons (passo 5)

{ "_id" : ObjectId("564299ae511ba8f81d73d9c2"), "name" : "Electrike", "description" : "Electrike stores electric
ity in its long body hair", "type" : "Eletric", "attack" : 30, "height" : 0.6 }
{ "_id" : ObjectId("564299cb511ba8f81d73d9c3"), "name" : "Blastoise", "description" : "Blastoise has water spout
s that protrude from its shell", "type" : "Water", "attack" : 40, "height" : 1.6 }
{ "_id" : ObjectId("564299e7511ba8f81d73d9c4"), "name" : "Charizard", "description" : "Charizard flies around th
e sky in search of powerful opponents.", "type" : "Fire", "attack" : 40, "height" : 1.7 }
{ "_id" : ObjectId("56429a28511ba8f81d73d9c5"), "name" : "Jigglypuff", "description" : "Jigglypuffs vocal cords
can freely adjust the wavelength of its voice", "type" : "Normal", "attack" : 20, "height" : 0.5 }
{ "_id" : ObjectId("56429a3c511ba8f81d73d9c6"), "name" : "Zubat", "description" : "Zubat remains quietly unmovin
g in a dark spot during the bright daylight hours", "type" : "Poison", "attack" : 20, "height" : 0.8 }

## Pikachu (passo 6)

> var query = {name: 'Charizard'}
> var pokemonescolhido = db.pokemons.findOne(query)
>

## Atualização do Pikachu (passo 6)

> pokemonescolhido.description = "esse pokemon é muito loko"
esse pokemon é muito loko
> pokemonescolhido
{
        "_id" : ObjectId("564299e7511ba8f81d73d9c4"),
        "name" : "Charizard",
        "description" : "esse pokemon é muito loko",
        "type" : "Fire",
        "attack" : 40,
        "height" : 1.7
}