# MongoDB - Aula 02 - Exercício
autor: Bruno Machado Brandão

## Listagem das databases (passo 2)

```
> show dbs
be-mean   0.078GB
bountyDb  0.078GB
gelChat   0.078GB
local     0.078GB
test      0.078GB
test3     0.078GB
```

## Listagem das coleções (passo 3)
```
> show collections
>
```

## Cadastro dos pokemons (passo 4)
```
> db.pokemons.insert({
	"name": "Charmeleon",
	"description": "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
	"attack": 64,
	"defense": 58,
	"height": 11
})
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert({
	"name": "Squirtle",
	"description": "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
	"attack": 48,
	"defense": 65,
	"height": 5
})
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert({
	"name": "Diglett",
	"description": "If a DIGLETT DIGS through a field, it leaves the soil perfectly tilled and ideal for planting crops.",
	"attack": 55,
	"defense": 25,
	"height": 2
})
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert({
	"name": "Meowth",
	"description": "All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.",
	"attack": 45,
	"defense": 35,
	"height": 4
})
WriteResult({ "nInserted" : 1 })
> db.pokemons.insert({
	"name": "Machoke",
	"description": "The belt around its waist holds back its energy. Without it, this POKMON would be unstoppable.",
	"attack": 100,
	"defense": 70,
	"height": 15
})
WriteResult({ "nInserted" : 1 })
```

## Lista dos pokemons (passo 5)

```
> db.pokemons.find()
{ "_id" : ObjectId("564337054a8a3633ea3b0965"), "name" : "Charmeleon", "description" : "When it swings its burning tail,
 it elevates the temperature to unbearably high levels.", "attack" : 64, "defense" : 58, "height" : 11 }
{ "_id" : ObjectId("564337cd4a8a3633ea3b0966"), "name" : "Squirtle", "description" : "After birth, its back swells and h
ardens into a shell. Powerfully sprays foam from its mouth.", "attack" : 48, "defense" : 65, "height" : 5 }
{ "_id" : ObjectId("5643384b4a8a3633ea3b0967"), "name" : "Diglett", "description" : "If a DIGLETT DIGS through a field,
it leaves the soil perfectly tilled and ideal for planting crops.", "attack" : 55, "defense" : 25, "height" : 2 }
{ "_id" : ObjectId("564338df4a8a3633ea3b0968"), "name" : "Meowth", "description" : "All it does is sleep during the dayt
ime. At night, it patrols its territory with its eyes aglow.", "attack" : 45, "defense" : 35, "height" : 4 }
{ "_id" : ObjectId("564339644a8a3633ea3b0969"), "name" : "Machoke", "description" : "The belt around its waist holds bac
k its energy. Without it, this POKMON would be unstoppable.", "attack" : 100, "defense" : 70, "height" : 15 }
>
```

## Meowth (passo 6)
```
> var query = {name: 'Meowth'};
> var poke = db.pokemons.findOne(query)
> poke
{
    "_id" : ObjectId("564338df4a8a3633ea3b0968"),
    "name" : "Meowth",
    "description" : "All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.",
    "attack" : 45,
    "defense" : 35,
    "height" : 4
}
```
## Atualização do Meowth (passo 6)
```
> poke.description = "Descrição alterada";
Descrição alterada
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```