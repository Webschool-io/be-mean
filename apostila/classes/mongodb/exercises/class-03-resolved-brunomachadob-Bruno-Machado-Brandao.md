# MongoDB - Aula 03 - Exercício
autor: Bruno Machado Brandão

## Liste todos Pokemons com a altura **menor que** 0.5;
```
> var query = {height: {$lt: 0.5}};
> db.pokemons.find(query);
>
```

## Liste todos Pokemons com a altura **maior ou igual que** 0.5
```
> var query = {height: {$gte: 0.5}};
> db.pokemons.find(query)
{ "_id" : ObjectId("564337054a8a3633ea3b0965"), "name" : "Charmeleon", "description" : "When it swings its burning tail,
 it elevates the temperature to unbearably high levels.", "attack" : 64, "defense" : 58, "height" : 11 }
{ "_id" : ObjectId("564337cd4a8a3633ea3b0966"), "name" : "Squirtle", "description" : "After birth, its back swells and h
ardens into a shell. Powerfully sprays foam from its mouth.", "attack" : 48, "defense" : 65, "height" : 5 }
{ "_id" : ObjectId("5643384b4a8a3633ea3b0967"), "name" : "Diglett", "description" : "If a DIGLETT DIGS through a field,
it leaves the soil perfectly tilled and ideal for planting crops.", "attack" : 55, "defense" : 25, "height" : 2 }
{ "_id" : ObjectId("564338df4a8a3633ea3b0968"), "name" : "Meowth", "description" : "Descrição alterada", "attack" : 45,
"defense" : 35, "height" : 4 }
{ "_id" : ObjectId("564339644a8a3633ea3b0969"), "name" : "Machoke", "description" : "The belt around its waist holds bac
k its energy. Without it, this POKMON would be unstoppable.", "attack" : 100, "defense" : 70, "height" : 15 }
>
```

## Liste todos Pokemons com a altura **menor ou igual que** 0.5 **E** do tipo grama
```
> var query = {$and: [{height: {$lte: 0.5}}, {type: 'grass'}]};
> db.pokemons.find(query)
>
```

## Liste todos Pokemons com o name `Pikachu` **OU** com attack **menor ou igual que** 0.5
```
> var query = {$or: [{name: 'Pikachu'}, {height: {$lte: 0.5}}]};
> db.pokemons.find(query)
>
```

## Liste todos Pokemons com o attack **MAIOR OU IGUAL QUE** 48 **E** com  height **menor ou igual que** 0.5
```
> var query = {$and: [{height: {$lte: 0.5}}, {attack: {$gte: 48}}]};
> db.pokemons.find(query)
>
```