# MongoDB - Aula 02 - Exercício
autor: ANDERSON MORAES

## 1. Crie uma database chamada be-mean-pokemons:

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-instagram> use be-mean-pokemons
    switched to db be-mean-pokemons

    ```

## 2. Liste quais databases você possui nesse servidor:

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> show dbs
    db_amazonia      0.078GB
    local            0.078GB
    workshop-online  0.078GB

    ```

    ##### OBS.: Não listou a coleção criada no item 1 porque ainda não foi inserido nada.

## 3. Liste quais coleções você possui nessa database:

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> show collections
    pokemons        0.001MB / 0.008MB
    system.indexes  0.000MB / 0.008MB

    ```

    ##### OBS.: Eu executei esse item após o item 4, do contrário não listaria nenhuma coleção.

## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height:

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> var pokemon = [{'name':'Hitmonchan','description':'Espírito de Boxeador','type': 'lutador', 'attack': 50, 'defense': 30, height: 1.4 }, {'name':'Lickitung','description':'Lambedor','type': 'normal', 'attack': 30, 'defense': 30, height: 1.2 }, {'name':'Charmeleon','description':'Fogo no rabo','type': 'fogo', 'attack': 30, 'defense': 30, height: 1.1 }, {'name':'Blastoise','description':'Mano da água','type': 'água', 'attack': 40, 'defense': 40, height: 1.6 }, {'name':'Rattata','description':'Rato roxo','type': 'normal', 'attack': 30, 'defense': 20, height: 0.3 }]
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> db.pokemons.insert(pokemon)
    Inserted 1 record(s) in 1489ms
    BulkWriteResult({
      "writeErrors": [ ],
      "writeConcernErrors": [ ],
      "nInserted": 5,
      "nUpserted": 0,
      "nMatched": 0,
      "nModified": 0,
      "nRemoved": 0,
      "upserted": [ ]
    })

    ```

## 5. Liste os pokemons existentes na sua coleção:

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> db.pokemons.find()
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
      "description": "Mano da água",
      "type": "água",
      "attack": 40,
      "defense": 40,
      "height": 1.6
    }
    {
      "_id": ObjectId("56447efac21cb248fe6e99f9"),
      "name": "Rattata",
      "description": "Rato roxo",
      "type": "normal",
      "attack": 30,
      "defense": 20,
      "height": 0.3
    }
    Fetched 5 record(s) in 1ms

    ```

## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`:

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> var query = {name: 'Blastoise'}
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> var poke = db.pokemons.findOne(query)
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> poke
    {
      "_id": ObjectId("56447efac21cb248fe6e99f8"),
      "name": "Blastoise",
      "description": "Mano da água",
      "type": "água",
      "attack": 40,
      "defense": 40,
      "height": 1.6
    }

    ```

## 7. Modifique sua `description` e salvê-o:

    ```
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> poke.description = 'Pokemon da água'
    Pokemon da água
    Anderson-iMac(mongod-3.0.5) be-mean-pokemons> db.pokemons.save(poke)
    Updated 1 existing record(s) in 63ms
    WriteResult({
      "nMatched": 1,
      "nUpserted": 0,
      "nModified": 1
    })

    ```
