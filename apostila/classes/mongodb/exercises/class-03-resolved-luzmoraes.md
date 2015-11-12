# MongoDB - Aula 03 - Exercício
autor: ANDERSON MORAES

## 1. Liste todos Pokemons com a altura menor que 0.5;

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> var query = {height: {$lt: 0.5}}
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("56447efac21cb248fe6e99f9"),
      "name": "Rattata",
      "description": "Rato roxo",
      "type": "normal",
      "attack": 30,
      "defense": 20,
      "height": 0.3
    }
    Fetched 1 record(s) in 19ms

    ```

## 2. Liste todos Pokemons com a altura maior ou igual que 0.5;

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> var query = {height: {$gte: 0.5}}
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("56447efac21cb248fe6e99f5"),
      "name": "Hitmonchan",
      "description": "Espírito de Boxeador",
      "type": "lutador",
      "attack": 50,
      "defense": 30,
      "height": 1.4
    }
    {
      "_id": ObjectId("56447efac21cb248fe6e99f6"),
      "name": "Lickitung",
      "description": "Lambedor",
      "type": "normal",
      "attack": 30,
      "defense": 30,
      "height": 1.2
    }
    {
      "_id": ObjectId("56447efac21cb248fe6e99f7"),
      "name": "Charmeleon",
      "description": "Fogo no rabo",
      "type": "fogo",
      "attack": 30,
      "defense": 30,
      "height": 1.1
    }
    {
      "_id": ObjectId("56447efac21cb248fe6e99f8"),
      "name": "Blastoise",
      "description": "Pokemon da água",
      "type": "água",
      "attack": 40,
      "defense": 40,
      "height": 1.6
    }
    Fetched 4 record(s) in 2ms

    ```


## 3. Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama;

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> var q1 = {height: {$lte: 0.5}}
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> var q2 = {type: "grama"}
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> db.pokemons.find({$and: [q1, q2]})

    {
      "_id": ObjectId("5644a21bc21cb248fe6e99fa"),
      "name": "Gramium",
      "description": "Pokemon da grama",
      "type": "grama",
      "attack": 30,
      "defense": 35,
      "height": 0.4
    }
    Fetched 1 record(s) in 0ms

    ```

## 4. Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5;

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> var q1 = {name: "Pikachu"}
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> var q2 = {attack: {$lte: 0.5}}
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> db.pokemons.find({$or: [q1, q2]})
    {
      "_id": ObjectId("5644a37cc21cb248fe6e99fb"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    Fetched 1 record(s) in 13ms

    ```

## 5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5;

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> var q1 = {attack: {$gte: 48}}
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> var q2 = {height: {$lte: 0.5}}
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> db.pokemons.find({$and: [q1, q2]})

    {
      "_id": ObjectId("5644a37cc21cb248fe6e99fb"),
      "name": "Pikachu",
      "description": "Rato elétrico bem fofinho",
      "type": "electric",
      "attack": 55,
      "height": 0.4
    }
    {
      "_id": ObjectId("5644a3cdc21cb248fe6e99fc"),
      "name": "Bulbassauro",
      "description": "Chicote de trepadeira",
      "type": "grama",
      "attack": 49,
      "height": 0.4
    }
    {
      "_id": ObjectId("5644a3cdc21cb248fe6e99fe"),
      "name": "Squirtle",
      "description": "Ejeta água que passarinho não bebe",
      "type": "água",
      "attack": 48,
      "height": 0.5
    }
    Fetched 3 record(s) in 1ms

    ```




