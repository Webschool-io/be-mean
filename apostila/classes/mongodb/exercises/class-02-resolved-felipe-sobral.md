# MongoDB - Aula 02 - Exercício
Autor: Felipe Sobral

## Listagem das databases (passo 2)
```
felipe-pc(mongod-3.0.7) test>
be-mean-pokemon  0.031GB 
bemean           0.063GB 
local            0.031GB 
```

## Listagem das coleções (passo 3)
```
> use be-mean-pokemon<br>
switched to db be-mean-pokemon<br>
> show collections
```

## Cadastro dos pokemons (passo 4)
```
> var pokemons = [{'name':'Ivysaur','description':'There is a bud on this Pokémons back. To support its weight, Ivysaurs legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, its a sign that the bud will bloom into a large flower soon.','type':'Poison','attack':'62','defense':'63', 'height':'10'},{'name':'Blastoise','description':'Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.','type':'Water','attack':'83','defense':'100','height':'16'},{'name':'Rattata','description':'Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.','type':'Normal','attack':'56','defense':'35','height':'3'},{'name':'Heatmor','description':'Using their very hot, flame-covered tongues, they burn through Durants steel bodies and consume their insides.','type':'Fire','attack':'97','defense':'66','height':'14'},{'name':'Boldore ','description':'Because its energy was too great to be contained, the energy leaked and formed orange crystals.','type':'Rock','attack':'105','defense':'105','height':'9'}];
> db.pokemons.insert(pokemons);

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
> be-mean-pokemon> db.pokemons.find()
{
  "_id": ObjectId("56433350342f68f460c236b4"),
  "name": "Ivysaur",
  "description": "There is a bud on this Pokémons back. To support its weight, Ivysaurs legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, its a sign that the bud will bloom into a large flower soon.",
  "type": "Poison",
  "attack": "62",
  "defense": "63",
  "height": "10"
}
{
  "_id": ObjectId("56433350342f68f460c236b5"),
  "name": "Blastoise",
  "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
  "type": "Water",
  "attack": "83",
  "defense": "100",
  "height": "16"
}
{
  "_id": ObjectId("56433350342f68f460c236b6"),
  "name": "Rattata",
  "description": "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
  "type": "Normal",
  "attack": "56",
  "defense": "35",
  "height": "3"
}
{
  "_id": ObjectId("56433350342f68f460c236b7"),
  "name": "Heatmor",
  "description": "Using their very hot, flame-covered tongues, they burn through Durants steel bodies and consume their insides.",
  "type": "Fire",
  "attack": "97",
  "defense": "66",
  "height": "14"
}
{
  "_id": ObjectId("56433350342f68f460c236b8"),
  "name": "Boldore",
  "description": "Because its energy was too great to be contained, the energy leaked and formed orange crystals.",
  "type": "Rock",
  "attack": "105",
  "defense": "105",
  "height": "9"
}

Fetched 5 record(s) in 34ms
```

## Pokemon (passo 6)
```
felipe-pc(mongod-3.0.7) be-mean-pokemon> var query ={'name':'Boldore'}
felipe-pc(mongod-3.0.7) be-mean-pokemon> var poke = db.pokemons.findOne(query)
```

## Atualização do Pokemon (passo 7)
```
felipe-pc(mongod-3.0.7) be-mean-pokemon> poke.description = "Pokemon Boladão"
felipe-pc(mongod-3.0.7) be-mean-pokemon> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
```
