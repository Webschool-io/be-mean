# MongoDb - Aula 02 - Exercício

1. Crie uma database chamada be-mean-pokemons;
2. Liste quais databases você possui nesse servidor;
3. Liste quais coleções você possui nessa database;
4. Insira pelo menos 5 pokemons **A SUA ESCOLHA** utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;
5. Liste os pokemons existentes na sua coleção;
6. Busque o `pickachu` e armazene-o em uma variável chamada `poke`;
7. Modifique sua `description` e salvê-o



## Estrutura

```md
# MongoDB - Aula 02 - Exercício
autor: Camilo Campos

## Listagem das databases (passo 2)
```
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> show dbs
be-mean-instagram → 0.078GB
be-mean           → 0.078GB
local             → 0.078GB
admin             → (empty)
```
## Listagem das coleções (passo 3)
```
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> show collections
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> 
```
## Cadastro dos pokemons (passo 4)
```
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> var pokemon = [{name:"gabumon", type:"fire", height: 0.9},{name:"pinokomon", type:"wood", height: 1.5},{name:"devilmon", type:"dark", height: 3.0}]

camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> db.pokemon.insert(pokemon)

Inserted 1 record(s) in 523ms
BulkWriteResult({
  "writeErrors": [ ],
  "writeConcernErrors": [ ],
  "nInserted": 3,
  "nUpserted": 0,
  "nMatched": 0,
  "nModified": 0,
  "nRemoved": 0,
  "upserted": [ ]
})
```

## Lista dos pokemons (passo 5)
```
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> db.pokemon.find()
{
  "_id": ObjectId("5643e3193b1fb9352ed6db1c"),
  "name": "gabumon",
  "type": "fire",
  "height": 0.9
}
{
  "_id": ObjectId("5643e3193b1fb9352ed6db1d"),
  "name": "pinokomon",
  "type": "wood",
  "height": 1.5
}
{
  "_id": ObjectId("5643e3193b1fb9352ed6db1e"),
  "name": "devilmon",
  "type": "dark",
  "height": 3
}
Fetched 3 record(s) in 3ms
```

## Pikachu (passo 6)
```
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> var query = {name: "gabumon"}
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> var poke = db.pokemon.findOne(query)
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> poke
{
  "_id": ObjectId("5643e3193b1fb9352ed6db1c"),
  "name": "gabumon",
  "type": "fire",
  "height": 0.9
}
```

## Atualização do Pikachu (passo 6)

```
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> var query = {name: "gabumon"}
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> query
{
  "name": "gabumon"
}
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> db.pokemon.find(query)
{
  "_id": ObjectId("5643e3193b1fb9352ed6db1c"),
  "name": "gabumon",
  "type": "fire",
  "height": 0.9
}
Fetched 1 record(s) in 1ms
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> var query = {name: "gabumon"}
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> var poke = db.pokemon.findOne(query)
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> poke
{
  "_id": ObjectId("5643e3193b1fb9352ed6db1c"),
  "name": "gabumon",
  "type": "fire",
  "height": 0.9
}
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> poke.type
fire
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> poke.type = "dinosaur"
dinosaur
camilo-Inspiron-N5110(mongod-2.6.11) be-mean-pokemon> db.pokemon.save(poke)
Updated 1 existing record(s) in 30ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})

```
## Envio

[Veja na nossa Wiki](https://github.com/Webschool-io/be-mean-instagram/wiki/Exerc%C3%ADcios)

1. Crie o repositório específico do módulo. Ex.: be-mean-instagram-mongodb
2. Crie a solução do exercício localmente nesse repositório, usando sempre o padrão `class-02-resolved-suissa-jean-nascimento.md`
3. Dê um `fork` no repositório oficial https://github.com/Webschool-io/be-mean-instagram/
4. Vá até a pasta do módulo desejado e **COLE** seu arquivo na pasta `exercises`
5. Crie um **Pull Request** enviando **APENAS** o seu arquivo sem modificar mais nada.
6. Na mensagem do commit/pull request favor seguir o padrão: Jean Nascimento - MongoDB - Exercicio 02 resolvido
7. Levante as mão para o céu e agradeça se acaso tiver ... #brinks
