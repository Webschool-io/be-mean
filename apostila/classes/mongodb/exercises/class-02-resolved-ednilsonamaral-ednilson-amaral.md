## MongoDB - Aula 02 - Exercício  
Autor: Ednilson Amaral


1. Criando database
--------------------

```
mongo be-mean-pokemons
MongoDB shell version: 3.2.0-rc2-74-g78d3e85
connecting to: be-mean-pokemons
Mongo-Hacker 0.0.8
Server has startup warnings: 
2015-11-11T15:29:42.067-0200 I CONTROL  [initandlisten] 
2015-11-11T15:29:42.067-0200 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
2015-11-11T15:29:42.067-0200 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2015-11-11T15:29:42.067-0200 I CONTROL  [initandlisten]
```


2. Listando databases
----------------------

```
be-mean-pokemons> show dbs
be-mean           → 0.004GB
be-mean-instagram → 0.000GB
local             → 0.000GB
```


3. Listando as collections
---------------------------

```
be-mean-pokemons> show collections
EDNILSON-NB(mongod-3.2.0-rc2-74-g78d3e85) be-mean-pokemons> 
```


4. Inserindo os pokemons no bangue
-----------------------------------

```
be-mean-pokemons> db.pokemons.insert({name:'Rampardos',description:'Pode levar qualquer cascudo na cabeça que não vai sentir porra nenhuma',type:'rocha',attack:165,defense:60,height:1.6})  

be-mean-pokemons> db.pokemons.insert({name:'Slaking',description:'Pense em um cara preguiçoso, é esse pokebola aí',type:'normal',attack:160,defense:100,height:2})  

be-mean-pokemons> db.pokemons.insert({name:'Haxorus',description:'Esse é dócil viu, mas se baixar a pomba gira nele, fica muito agressivo',type:'dragão',attack:147,defense:90,height:1.8})  

be-mean-pokemons> db.pokemons.insert({name:'Rhyperior',description:'Esse resiste até a erupções',type:'rocha',attack:140,defense:130,height:2.4})  

be-mean-pokemons> db.pokemons.insert({name:'Metagross',description:'Pode ser mais inteligente que um computador esse fii',type:'psíquico',attack:135,defense:130,height:1.6})  
```

5. Listando os pokemons do bangue
----------------------------------

```
be-mean-pokemons> db.pokemons.find()
{  
  "_id": ObjectId("564391e9a74e7a8464f071e0"),  
  "name": "Rampardos",  
  "description": "Pode levar qualquer cascudo na cabeça que não vai sentir porra nenhuma",  
  "type": "rocha",  
  "attack": 165,  
  "defense": 60,  
  "height": 1.6  
}  
{  
  "_id": ObjectId("564391f6a74e7a8464f071e1"),  
  "name": "Rampardos",  
  "description": "Pode levar qualquer cascudo na cabeça que não vai sentir porra nenhuma",  
  "type": "rocha",  
  "attack": 165,  
  "defense": 60,  
  "height": 1.6  
}  
{  
  "_id": ObjectId("5643927ba74e7a8464f071e2"),  
  "name": "Slaking",  
  "description": "Pense em um cara preguiçoso, é esse pokebola aí",  
  "type": "normal",  
  "attack": 160,  
  "defense": 100,  
  "height": 2  
}  
{  
  "_id": ObjectId("56439409a74e7a8464f071e3"),  
  "name": "Haxorus",  
  "description": "Esse é dócil viu, mas se baixar a pomba gira nele, fica muito agressivo",  
  "type": "dragão",  
  "attack": 147,  
  "defense": 90,  
  "height": 1.8  
}  
{  
  "_id": ObjectId("56439541a74e7a8464f071e4"),  
  "name": "Rhyperior",  
  "description": "Esse resiste até a erupções",  
  "type": "rocha",  
  "attack": 140,  
  "defense": 130,  
  "height": 2.4  
}  
{  
  "_id": ObjectId("5643954ca74e7a8464f071e5"),  
  "name": "Metagross",  
  "description": "Pode ser mais inteligente que um computador esse fii",  
  "type": "psíquico",  
  "attack": 135,  
  "defense": 130,  
  "height": 1.6  
}  
Fetched 6 record(s) in 8ms  
```

6. Buscando um pokemon
-----------------------


```
be-mean-pokemons> var query = {name:'Metagross'}  
EDNILSON-NB(mongod-3.2.0-rc2-74-g78d3e85) be-mean-pokemons> var poke = db.pokemons.findOne(query)  
EDNILSON-NB(mongod-3.2.0-rc2-74-g78d3e85) be-mean-pokemons> poke  
{  
  "_id": ObjectId("5643954ca74e7a8464f071e5"),  
  "name": "Metagross",  
  "description": "Pode ser mais inteligente que um computador esse fii",  
  "type": "psíquico",  
  "attack": 135,  
  "defense": 130,  
  "height": 1.6  
}  
```


7. Modificando a description e salvando
-------------------------------------------

```
be-mean-pokemons> poke.description = 'Esse não tem Windows como SO'  
Esse não tem Windows como SO  
EDNILSON-NB(mongod-3.2.0-rc2-74-g78d3e85) be-mean-pokemons> poke  
{  
  "_id": ObjectId("5643954ca74e7a8464f071e5"),  
  "name": "Metagross",  
  "description": "Esse não tem Windows como SO",  
  "type": "psíquico",  
  "attack": 135,  
  "defense": 130,  
  "height": 1.6  
}  
EDNILSON-NB(mongod-3.2.0-rc2-74-g78d3e85) be-mean-pokemons> db.pokemons.save(poke)  
Updated 1 existing record(s) in 3ms  
WriteResult({  
  "nMatched": 1,  
  "nUpserted": 0,  
  "nModified": 1  
})  
```be-mean-pokemons> poke.description = 'Esse não tem Windows como SO'  
Esse não tem Windows como SO  
EDNILSON-NB(mongod-3.2.0-rc2-74-g78d3e85) be-mean-pokemons> poke  
{  
  "_id": ObjectId("5643954ca74e7a8464f071e5"),  
  "name": "Metagross",  
  "description": "Esse não tem Windows como SO",  
  "type": "psíquico",  
  "attack": 135,  
  "defense": 130,  
  "height": 1.6  
}  
EDNILSON-NB(mongod-3.2.0-rc2-74-g78d3e85) be-mean-pokemons> db.pokemons.save(poke)  
Updated 1 existing record(s) in 3ms  
WriteResult({  
  "nMatched": 1,  
  "nUpserted": 0,  
  "nModified": 1  
})  

