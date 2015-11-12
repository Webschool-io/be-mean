
# MongoDB - Aula 03 - Exercício
autor: Frankyston Lins

## Observações
    ```
    PS.: Todas as alturas que estão no meu banco de dados estão com inteiros, por isso fiz a pesquisa como 5
    PS.: Os dados não tem a opção tipo por isso fiz a query filtrando por nome (passo 3)
    ```

## Listagem todos os pokemons com a altura menor que 0.5 (passo 1)

    ```
    query = {height: {$lt: 5}}
    {
      "height": {
        "$lt": 5
      }
    }
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("5642842e2eed909a054ed446"),
      "name": "Pikachu",
      "description": "Sua descrição foi alterada... Esse é o passo 6 do segundo exercício de MongoDB da WebSchool",
      "attack": 55,
      "defense": 40,
      "height": 4
    }
    Fetched 1 record(s) in 1ms


    ```

## Listagem todos os pokemons com a altura menor ou igual a 0.5 (passo 2)

    ```
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> query = {height: {$lte: 5}}
    {
      "height": {
        "$lte": 5
      }
    }
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("5642842e2eed909a054ed446"),
      "name": "Pikachu",
      "description": "Sua descrição foi alterada... Esse é o passo 6 do segundo exercício de MongoDB da WebSchool",
      "attack": 55,
      "defense": 40,
      "height": 4
    }
    Fetched 1 record(s) in 1ms


    ```

## Listagem todos os pokemons com a altura menor ou igual a 0.5 e do tipo grama (passo 3)

    ```
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> query = {$and: [{height: {$lte: 5}}, {name: 'Pikachu'}] }
    {
      "$and": [
        {
          "height": {
            "$lte": 5
          }
        },
        {
          "name": "Pikachu"
        }
      ]
    }
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("5642842e2eed909a054ed446"),
      "name": "Pikachu",
      "description": "Sua descrição foi alterada... Esse é o passo 6 do segundo exercício de MongoDB da WebSchool",
      "attack": 55,
      "defense": 40,
      "height": 4
    }
    Fetched 1 record(s) in 1ms

    ```

## Listagem todos os pokemons com o nome pikachu ou com ataque menor ou igual a 0.5 (passo 4)

    ```
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> query = {$or: [{attack: {$lte: 5}}, {name: 'Pikachu'}] }
    {
      "$or": [
        {
          "attack": {
            "$lte": 5
          }
        },
        {
          "name": "Pikachu"
        }
      ]
    }
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("5642842e2eed909a054ed446"),
      "name": "Pikachu",
      "description": "Sua descrição foi alterada... Esse é o passo 6 do segundo exercício de MongoDB da WebSchool",
      "attack": 55,
      "defense": 40,
      "height": 4
    }
    Fetched 1 record(s) in 1ms

    ```

## Listagem todos os pokemons com ataque maior ou igual a 48 e com altura menor ou igual a 0.5 (passo 5)

    ```
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> query = {$and: [{attack: {$gte: 48}}, {height: {$lte: 5} }] }
    {
      "$and": [
        {
          "attack": {
            "$gte": 48
          }
        },
        {
          "height": {
            "$lte": 5
          }
        }
      ]
    }
    frankyston-pc(mongod-3.0.7) be-mean-pokemons> db.pokemons.find(query)
    {
      "_id": ObjectId("5642842e2eed909a054ed446"),
      "name": "Pikachu",
      "description": "Sua descrição foi alterada... Esse é o passo 6 do segundo exercício de MongoDB da WebSchool",
      "attack": 55,
      "defense": 40,
      "height": 4
    }
    Fetched 1 record(s) in 1ms

    ```
