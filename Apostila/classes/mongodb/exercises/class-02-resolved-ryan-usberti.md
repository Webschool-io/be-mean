# MongoDB - Aula 02 - Exercício
autor: RYAN USBERTI

## Criando database be-mean-pokemon

    ```
     ryan@ryan-VirtualBox:~$ mongo be-mean-pokemons

    ```

## Listando as databases

    ```
     
ryan-VirtualBox(mongod-3.2.3) be-mean-pokemons> show dbs
be-mean           ? 0.004GB
be-mean-instagram ? 0.000GB
be-mean-pokemons  ? 0.000GB
local             ? 0.000GB


    ```

## Listando collections

    ```
    ryan-VirtualBox(mongod-3.2.3) be-mean-pokemons> show collections
pokemons ? 0.001MB / 0.035MB

    ```


## Inserindo pokemons

    ```
    
ryan-VirtualBox(mongod-3.2.3) be-mean-pokemons> db.pokemons.insert({name:"Mr. Mime",description:"Um palhaço",attack:38,defense:35,height:1.3})
Inserted 1 record(s) in 2ms
WriteResult({
  "nInserted": 1
})


    ```


## Listando Pokemons

    ```
    
ryan-VirtualBox(mongod-3.2.3) be-mean-pokemons> db.pokemons.find()
{
  "_id": ObjectId("56ca04eff13efc314f1526d0"),
  "name": "Metapod",
  "description": "Estou em um casulo",
  "attack": 20,
  "defense": 45,
  "height": 0.7
}
{
  "_id": ObjectId("56ca054ef13efc314f1526d1"),
  "name": "Clefairy",
  "description": "Uma coisa bem fofa",
  "attack": 35,
  "defense": 30,
  "height": 0.6
}
{
  "_id": ObjectId("56ca0587f13efc314f1526d2"),
  "name": "Gloom",
  "description": "Sou muito feio",
  "attack": 40,
  "defense": 50,
  "height": 0.8
}
{
  "_id": ObjectId("56ca05cff13efc314f1526d3"),
  "name": "Ponyta",
  "description": "Quase um pegasus",
  "attack": 40,
  "defense": 50,
  "height": 1
}
{
  "_id": ObjectId("56ca0632f13efc314f1526d4"),
  "name": "Mr. Mime",
  "description": "Um palhaço",
  "attack": 38,
  "defense": 35,
  "height": 1.3
}
Fetched 5 record(s) in 21ms



    ```


## Buscar e armazenar um pokemon

    ```
    
ryan-VirtualBox(mongod-3.2.3) be-mean-pokemons> var query = {name:"Ponyta"}
ryan-VirtualBox(mongod-3.2.3) be-mean-pokemons> var poke = db.pokemons.findOne(query)
ryan-VirtualBox(mongod-3.2.3) be-mean-pokemons> poke
{
  "_id": ObjectId("56ca05cff13efc314f1526d3"),
  "name": "Ponyta",
  "description": "Quase um pegasus",
  "attack": 40,
  "defense": 50,
  "height": 1
}


    ```


## Alterar a description do pokemon encontrado

    ```
    
ryan-VirtualBox(mongod-3.2.3) be-mean-pokemons> poke.description = "Cavalo de fogo"
Cavalo de fogo
ryan-VirtualBox(mongod-3.2.3) be-mean-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})


    ```