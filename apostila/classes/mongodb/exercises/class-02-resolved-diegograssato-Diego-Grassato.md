# MongoDB - Aula 02 - Exercício
autor: Diego Pereira Grassato

## 1. Crie uma database chamada be-mean-pokemons

```
a12c1841e174(mongod-2.4.9) test> use be-mean-pokemons
switched to db be-mean-pokemons
a12c1841e174(mongod-2.4.9) be-mean-pokemons>

```

## 2. Liste quais databases você possui nesse servidor

```
a12c1841e174(mongod-2.4.9) be-mean-pokemons> show dbs
local     0.078GB
doctrine  0.203GB
a12c1841e174(mongod-2.4.9) be-mean-pokemons>
```

## 3. Liste quais coleções você possui nessa database;

```
a12c1841e174(mongod-2.4.9) be-mean-pokemons>  show collections

```

## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;

```
a12c1841e174(mongod-2.4.9) test> var pokemons = [{'name':'Gyarados','description':'Jiraiya','type': 'water', attack: 125, height: 518.1 }, {'name':'Greninja','description':'Sapo ninja','type': 'water', attack: 95, height: 88.2 }, {'name':'Volcanion','description':'Volcano','type': 'fire', attack: 110, height: 429.9 }, {'name':'Spearow','description':'Quase o jack','type': 'normal', attack: 60, height: 4.4 }, {'name':'Zubat','description':'Ponto fraco: Ozzy','type': 'normal', attack: 55, height: 16.5 }];
a12c1841e174(mongod-2.4.9) test> db.pokemons.insert(pokemons);
Inserted 1 record(s) in 1003ms
a12c1841e174(mongod-2.4.9) test>
```

## 5. Liste os pokemons existentes na sua coleção;

  ```
  a12c1841e174(mongod-2.4.9) test> db.pokemons.find()
{
  "_id": ObjectId("5645012b15f94b334d7d340a"),
  "name": "Gyarados",
  "description": "Jiraiya",
  "type": "water",
  "attack": 125,
  "height": 518.1
}
{
  "_id": ObjectId("5645012b15f94b334d7d340b"),
  "name": "Greninja",
  "description": "Sapo ninja",
  "type": "water",
  "attack": 95,
  "height": 88.2
}
{
  "_id": ObjectId("5645012b15f94b334d7d340c"),
  "name": "Volcanion",
  "description": "Volcano",
  "type": "fire",
  "attack": 110,
  "height": 429.9
}
{
  "_id": ObjectId("5645012b15f94b334d7d340d"),
  "name": "Spearow",
  "description": "Quase o jack",
  "type": "normal",
  "attack": 60,
  "height": 4.4
}
{
  "_id": ObjectId("5645012b15f94b334d7d340e"),
  "name": "Zubat",
  "description": "Ponto fraco: Ozzy",
  "type": "normal",
  "attack": 55,
  "height": 16.5
}
Fetched 5 record(s) in 11ms

  ```

## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;

  ```
  a12c1841e174(mongod-2.4.9) test>  var query = {name: 'Zubat'};
a12c1841e174(mongod-2.4.9) test> var poke = db.pokemons.findOne(query);
a12c1841e174(mongod-2.4.9) test> poke
{
  "_id": ObjectId("5645012b15f94b334d7d340e"),
  "name": "Zubat",
  "description": "Ponto fraco: Ozzy",
  "type": "normal",
  "attack": 55,
  "height": 16.5
}
```

## 7. Modifique sua `description` e salvê-o

  ```
  a12c1841e174(mongod-2.4.9) test> poke.description = "Ponto forte: Ozzy"
  Ponto forte: Ozzy
  a12c1841e174(mongod-2.4.9) test> db.pokemons.save(poke)
  Updated 1 existing record(s) in 1ms
  a12c1841e174(mongod-2.4.9) test> poke
  {
    "_id": ObjectId("5645012b15f94b334d7d340e"),
    "name": "Zubat",
    "description": "Ponto forte: Ozzy",
    "type": "normal",
    "attack": 55,
    "height": 16.5
  }
```
