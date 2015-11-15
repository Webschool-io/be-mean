# MongoDB - Aula 03 - Exercício
autor: Helam Moreira


## 1. Liste todos Pokemons com a altura menor que 0.5;
```
> var query = {height:{$lt:0.5}}
> db.pokemons.find(query)
>

```


## 2. Liste todos Pokemons com a altura maior ou igual que 0.5;
```
> var query = {height:{$gte:0.5}}
> db.pokemons.find(query).pretty()
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
        "description" : "É um pokemon que tem 9 rabos. Ele pode viver por até mil anos, por isso é solitário",
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


## 3. Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama;
```
> var query = {height:{$lte:0.5}, type:'grass'}
> db.pokemons.find(query)
>

```


## 4. Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5;
```
> var query = {attack:{$lte:0.5}, name:'Pikachu'}
> db.pokemons.find(query)
>

```


## 5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5;
```
> var query = {attack:{$gte:48}, height:{$lte:0.5}}
> db.pokemons.find(query)
>

```