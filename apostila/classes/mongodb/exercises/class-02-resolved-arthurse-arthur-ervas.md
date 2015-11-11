# MongoDB - Aula 02 - Exercício
autor: Arthur Ervas

## Listagem das databases (passo 2)
```
> show dbs
be-mean            0.078GB
be-mean-instagram  0.078GB
local              0.078GB
```

## Listagem das coleções (passo 3)
```
> show collections
pokemons
system.indexes
```

## Cadastro dos pokemons (passo 4)
```
> var pokemons = [
	{
		'name': 'ManderFunker',
		'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		'attack': 60,
		'defense': 85,
		'height': 12
		},
	{
		'name': 'Pirinpimpim',
		'description': 'Impedit laboriosam, blanditiis sapiente quisquam consectetur nesciunt adipisci.',
		'attack': 22,
		'defense': 55,
		'height': 5
		},
	{
		'name': 'Iridium Manolo',
		'description': 'Dolores delectus ipsum tempora tempore esse reprehenderit.',
		'attack': 76,
		'defense': 88,
		'height': 9
		},
	{
		'name': 'Ytumamatambien',
		'description': 'Incidunt saepe, suscipit beatae amet velit nulla in quaerat harum reprehenderit perspiciatis error.',
		'attack': 66,
		'defense': 95,
		'height': 10
	},
	{
		'name': 'Ueslei',
		'description': 'Fugiat nesciunt earum rerum consequuntur vel, eveniet provident dolorem accusamus saepe. Harum, quo.',
		'attack': 99,
		'defense': 88,
		'height': 77
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
```

## Lista dos pokemons (passo 5)
```
> db.pokemons.find()
{ "_id" : ObjectId("564296f68afd01aec4f77e3d"), "name" : "ManderFunker", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "attack" : 60, "defense" : 85, "height" : 12 }
{ "_id" : ObjectId("564296f68afd01aec4f77e3e"), "name" : "Pirinpimpim", "description" : "Impedit laboriosam, blanditiis sapiente quisquam consectetur nesciunt adipisci.", "attack" : 22, "defense" : 55, "height" : 5 }
{ "_id" : ObjectId("564296f68afd01aec4f77e3f"), "name" : "Iridium Manolo", "description" : "Dolores delectus ipsum tempora tempore esse reprehenderit.", "attack" : 76, "defense" : 88, "height" : 9 }
{ "_id" : ObjectId("564296f68afd01aec4f77e40"), "name" : "Ytumamatambien", "description" : "Incidunt saepe, suscipit beatae amet velit nulla in quaerat harum reprehenderit perspiciatis error.", "attack" : 66, "defense" : 95, "height" : 10 }
{ "_id" : ObjectId("564296f68afd01aec4f77e41"), "name" : "Ueslei", "description" : "Fugiat nesciunt earum rerum consequuntur vel, eveniet provident dolorem accusamus saepe. Harum, quo.", "attack" : 99, "defense" : 88, "height" : 77 }
```

## Pirinpimpim (passo 6)
```
> var pokem = { name: 'Pirinpimpim'  }
> var pokeitem = db.pokemons.findOne(pokem)
> pokeitem
{
	"_id" : ObjectId("564296f68afd01aec4f77e3e"),
	"name" : "Pirinpimpim",
	"description" : "Impedit laboriosam, blanditiis sapiente quisquam consectetur nesciunt adipisci.",
	"attack" : 22,
	"defense" : 55,
	"height" : 5
}
```


## Atualização do Pirinpimpim (passo 6)
```
> pokeitem.description = "Esse é o zica do pântano!"
Esse é o zica do pântano!
> db.pokemons.save(pokeitem)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```