# MongoDB - Aula 02 - Exercício
autor: Helam Moreira


## 1. Crie uma database chamada be-mean-pokemons;

```
PS C:\Users\helam> mongo be-mean-pokemons
MongoDB shell version: 3.0.5
connecting to: be-mean-pokemons

```

## 2. Liste quais databases você possui nesse servidor;

```
> show dbs
admin              0.078GB
be-mean-instagram  0.078GB
local              0.078GB
tarifador          0.078GB

```

## 3. Liste quais coleções você possui nessa database;

```
> show collections
>

```


## 4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;

```
> var pokemons = [
... {'name':'Sandshrew','description':'Seu corpo tem a capacidade de absorver água, sem perda, o que favorece sua sobrevivência no deserto','type':'Terra', 'attack': 32, defense: 20, height: 0.6  },
... {'name':'Nidorina','description':'Fica nervoso quando separado de seu grupo','type':'Poison', 'attack': 36, defense: 14, height: 0.8 },
... {'name':'Clefairy','description':'Em noites de lua cheia este pokemon se reune com seu grupo para cantar para lua','type':'Fairy', 'attack': 10, defense: 3, height: 0.6  },
... {'name':'Ninetales','description':'Lança um brilho sinistro pelos seus olhos vermelhos para controlar a mente de quem se atreve a olhar diretamente para ele','type':'Fox', 'attack': 41, defense: 30, height: 1.1 },
... {'name':'Mewtwo','description':'Foi criado por humanos que utilizaram manipulação genética','type':'Psychic', 'attack': 100, defense: 80, height: 2.0 }
... ];
> db.pokemons.insert(pokemons)
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
>


```



## 5. Liste os pokemons existentes na sua coleção;

```
> db.pokemons.find().pretty()
{
        "_id" : ObjectId("56450b1553af3f25bd6b032b"),
        "name" : "Sandshrew",
        "description" : "Seu corpo tem a capacidade de absorver água, sem perda, o que favorece sua sobrevivência no deserto",
        "type" : "Terra",
        "attack" : 32,
        "defense" : 20,
        "height" : 0.6
}
{
        "_id" : ObjectId("56450b1553af3f25bd6b032c"),
        "name" : "Nidorina",
        "description" : "Fica nervoso quando separado de seu grupo",
        "type" : "Poison",
        "attack" : 36,
        "defense" : 14,
        "height" : 0.8
}
{
        "_id" : ObjectId("56450b1553af3f25bd6b032d"),
        "name" : "Clefairy",
        "description" : "Em noites de lua cheia este pokemon se reune com seu grupo para cantar para lua",
        "type" : "Fairy",
        "attack" : 10,
        "defense" : 3,
        "height" : 0.6
}
{
        "_id" : ObjectId("56450b1553af3f25bd6b032e"),
        "name" : "Ninetales",
        "description" : "Lança um brilho sinistro pelos seus olhos vermelhos para controlar a mente de quem se atreve a olhar diretamente para ele",
        "type" : "Fox",
        "attack" : 41,
        "defense" : 30,
        "height" : 1.1
}
{
        "_id" : ObjectId("56450b1553af3f25bd6b032f"),
        "name" : "Mewtwo",
        "description" : "Foi criado por humanos que utilizaram manipulação genética",
        "type" : "Psychic",
        "attack" : 100,
        "defense" : 80,
        "height" : 2
}
>

```


## 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`;

```
> var query = {name:'Ninetales'}
> var poke = db.pokemons.findOne(query)
> poke;
{
        "_id" : ObjectId("56450b1553af3f25bd6b032e"),
        "name" : "Ninetales",
        "description" : "Lança um brilho sinistro pelos seus olhos vermelhos para controlar a mente de quem se atreve a olhar diretamente para ele",
        "type" : "Fox",
        "attack" : 41,
        "defense" : 30,
        "height" : 1.1
}
>

```

## 7. Modifique sua `description` e salvê-o

```
> poke.description = 'É um pokemon que tem 9 rabos. Ele pode viver por até mil anos, por isso é solitário';
É um pokemon que tem 9 rabos. Ele pode viver por até mil anos, por isso é solitário
> db.pokemons.save(poke)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>

```
