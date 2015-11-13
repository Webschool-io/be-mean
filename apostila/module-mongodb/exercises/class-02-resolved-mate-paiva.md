# MongoDB - Aula 02 - Exercício autor: Mate Paiva

Criando database

```
mate@levelho:~$ mongo
MongoDB shell version: 3.0.7
connecting to: test
Mongo-Hacker 0.0.8
levelho(mongod-3.0.7) test> use be-mean-pokemons
switched to db be-mean-pokemons
```

Listando databases

```
levelho(mongod-3.0.7) be-mean-pokemons> show dbs
mate              → 0.078GB
local             → 0.078GB
be-mean-instagram → 0.078GB
be-mean           → 0.078GB
```

Criando colecao e Listando colecoes da database

```
levelho(mongod-3.0.7) be-mean-pokemons> show collections
*vazio*
```    
Inserindo os pokemons no banco

```
levelho(mongod-3.0.7) be-mean-pokemons> var Pokemon = function(name, description, attack, defense, height){
... this.name = name;
... this.description = description;
... this.attack = attack;
... this.defense = defense;
... this.height = height;
... }
levelho(mongod-3.0.7) be-mean-pokemons> 
levelho(mongod-3.0.7) be-mean-pokemons> var raichu = new Pokemon("Raichu", "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.", 90, 55, 8);
levelho(mongod-3.0.7) be-mean-pokemons> 
levelho(mongod-3.0.7) be-mean-pokemons> var snorlax = new Pokemon("Snorlax", "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.", 110, 65, 21);
levelho(mongod-3.0.7) be-mean-pokemons> 
levelho(mongod-3.0.7) be-mean-pokemons> var vulpix = new Pokemon("Vulpix", "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.", 41, 40, 6);
levelho(mongod-3.0.7) be-mean-pokemons> 
levelho(mongod-3.0.7) be-mean-pokemons> var dragonite = new Pokemon("Dragonite", "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.", 134, 95, 22);
levelho(mongod-3.0.7) be-mean-pokemons> 
levelho(mongod-3.0.7) be-mean-pokemons> var lugia = new Pokemon("Lugia", "Lugia's wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.", 90, 130, 52);

levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(raichu)
Inserted 1 record(s) in 1508ms
WriteResult({
  "nInserted": 1
})
Fetched 1 record(s) in 31ms
levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(snorlax)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(vulpix)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(dragonite)
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})
levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.insert(lugia)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})
```    
Lista os pokemons

```
levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56466997888331064ae5020f"),
  "name": "Raichu",
  "description": "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
  "attack": 90,
  "defense": 55,
  "height": 8
}
{
  "_id": ObjectId("564669b4888331064ae50210"),
  "name": "Snorlax",
  "description": "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.",
  "attack": 110,
  "defense": 65,
  "height": 21
}
{
  "_id": ObjectId("564669bb888331064ae50211"),
  "name": "Vulpix",
  "description": "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.",
  "attack": 41,
  "defense": 40,
  "height": 6
}
{
  "_id": ObjectId("564669c0888331064ae50212"),
  "name": "Dragonite",
  "description": "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
  "attack": 134,
  "defense": 95,
  "height": 22
}
{
  "_id": ObjectId("564669c5888331064ae50213"),
  "name": "Lugia",
  "description": "Lugia's wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.",
  "attack": 90,
  "defense": 130,
  "height": 52
}
Fetched 5 record(s) in 2ms
```  
Buscando Pokemon

```
levelho(mongod-3.0.7) be-mean-pokemons> var poke = db.pokemons.findOne({name:"Lugia"})
levelho(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("564669c5888331064ae50213"),
  "name": "Lugia",
  "description": "Lugia's wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.",
  "attack": 90,
  "defense": 130,
  "height": 52
}
```  
Alterando description e salvando

```
levelho(mongod-3.0.7) be-mean-pokemons> poke.description = "Uma pokemona!"
Uma pokemona!
levelho(mongod-3.0.7) be-mean-pokemons> poke
{
  "_id": ObjectId("564669c5888331064ae50213"),
  "name": "Lugia",
  "description": "Uma pokemona!",
  "attack": 90,
  "defense": 130,
  "height": 52
}
levelho(mongod-3.0.7) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 31ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

```  
