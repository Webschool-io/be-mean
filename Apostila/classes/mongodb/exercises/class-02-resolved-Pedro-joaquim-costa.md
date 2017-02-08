 # MongoDB - Aula 01 - Exercício
autor: Pedro joaquim da costa

## 1

    ```
   unus-HP-Notebook(mongod-2.6.11) test> use be-mean-pokemons


    ```

## 2

    ```
   unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> show dbs
   admin   → (empty)
   be-mean → 0.078GB
   local   → 0.078GB



    ```
 
 ## 3

    ```
  unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> show collections
  pokemons       → 0.001MB / 0.008MB
  system.indexes → 0.000MB / 0.008MB




    ```
 ## 4

    ```
 unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> var pokemon = {'name':'Venusaur','description':' Ele tem uma flor muito grande ','type': 'seed', attack: 30, height: 0.2 }
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 25ms
WriteResult({
  "nInserted": 1
})
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> var pokemon = {'name':'Butterfree','description':'Tem hablidade de encontrar  flores','type': 'borboleta', attack: 30, height: 0.1 }
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> var pokemon = {'name':'Metapod','description':'Nao se move rapido','type': 'cocoon', attack: 30, height: 0.7 }
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 9ms
WriteResult({
  "nInserted": 1
})
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> var pokemon = {'name':'Wartortle','description':'A cauda dele eh grande','type': 'tartaruga', attack: 30, height: 0.1 }
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 3ms
WriteResult({
  "nInserted": 1
})
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> var pokemon = {'name':'Ivysaur','description':'tem um suport para sua flor','type': 'seed', attack: 30, height: 0.7 }
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> db.pokemons.save(pokemon)
Inserted 1 record(s) in 4ms
WriteResult({
  "nInserted": 1
})



    ```
 ## 5

    ```
  unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("589b1abc896e4d76eb894eec"),
  "name": "Caterpie",
  "description": "Larva lutadora",
  "type": "inseto",
  "attack": 30,
  "height": 0.3
}
{
  "_id": ObjectId("589b1b5f896e4d76eb894eed"),
  "name": "Pikachu",
  "description": "Rato eletrico bem fofinho",
  "type": "eletric",
  "attack": 100,
  "height": 0.4
}
{
  "_id": ObjectId("589b1bb3896e4d76eb894eee"),
  "name": "Bulsauro",
  "description": "chicote eletrico trepadeira",
  "type": "grama",
  "attack": 49,
  "height": 0.4
}
{
  "_id": ObjectId("589b1c10896e4d76eb894eef"),
  "name": "Charmander",
  "description": "cao chupador de manga fofinho",
  "type": "fogo",
  "attack": 59,
  "height": 0.2
}
{
  "_id": ObjectId("589b1c52896e4d76eb894ef0"),
  "name": "Squirtle",
  "description": "enjecta agua que passaro nao bebe",
  "type": "agua",
  "attack": 48,
  "height": 0.1
}
{
  "_id": ObjectId("589b238e896e4d76eb894ef1"),
  "name": "Wartortle",
  "description": "A cauda dele eh grande",
  "type": "tartaruga",
  "attack": 30,
  "height": 0.1
}
{
  "_id": ObjectId("589b239d896e4d76eb894ef2"),
  "name": "Venusaur",
  "description": " Ele tem uma flor muito grande ",
  "type": "seed",
  "attack": 30,
  "height": 0.2
}
{
  "_id": ObjectId("589b23b0896e4d76eb894ef3"),
  "name": "Butterfree",
  "description": "Tem hablidade de encontrar  flores",
  "type": "borboleta",
  "attack": 30,
  "height": 0.1
}
{
  "_id": ObjectId("589b23bc896e4d76eb894ef4"),
  "name": "Metapod",
  "description": "Nao se move rapido",
  "type": "cocoon",
  "attack": 30,
  "height": 0.7
}
{
  "_id": ObjectId("589b23c6896e4d76eb894ef5"),
  "name": "Wartortle",
  "description": "A cauda dele eh grande",
  "type": "tartaruga",
  "attack": 30,
  "height": 0.1
}
{
  "_id": ObjectId("589b23dc896e4d76eb894ef6"),
  "name": "Ivysaur",
  "description": "tem um suport para sua flor",
  "type": "seed",
  "attack": 30,
  "height": 0.7
}
Fetched 11 record(s) in 11ms




    ```
 ## 6

    ```
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> var query = {name:'Pikachu'}
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> var pika = db.pokemons.findOne(query)
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> pika
{
  "_id": ObjectId("589b1b5f896e4d76eb894eed"),
  "name": "Pikachu",
  "description": "Rato eletrico bem fofinho",
  "type": "eletric",
  "attack": 100,
  "height": 0.4
}


    ```
 ## 7

    ```
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> pika.description = 'O rato mas zika do pokemon'
O rato mas zika do pokemon
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> pika
{
  "_id": ObjectId("589b1b5f896e4d76eb894eed"),
  "name": "Pikachu",
  "description": "O rato mas zika do pokemon",
  "type": "eletric",
  "attack": 100,
  "height": 0.4,
  "descrition": "O rato mas zika do pokemon"
}
unus-HP-Notebook(mongod-2.6.11) be-mean-pokemons> var pika = db.pokemons.save(pika)
Updated 1 existing record(s) in 32ms



