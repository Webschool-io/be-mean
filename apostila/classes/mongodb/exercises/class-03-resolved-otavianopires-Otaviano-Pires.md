# MongoDB - Aula 03 - Exercício
autor: Otaviano Pires Amancio

## 1. Liste todos Pokemons com a altura menor que 1.2;

```

> var query = {height: {$lt: 1.2}}
> db.pokemons.find(query)
{ "_id" : ObjectId("564481fc8844881046640960"), "name" : "Psyduck", "description" :
"Esse tem uma enxaqueca da ruim", "type" : "water", "attack" : 52, "defense" : 48, "height" : 0.8 }
{ "_id" : ObjectId("564481fc8844881046640961"), "name" : "Kakuna", "description" : "Esse é casca grossa", "type" : "bug", "attack" : 25, "defense" : 50, "height" : 0.6
}

```

## 2. Liste todos Pokemons com a altura maior ou igual que 1.2;

```

> var query = {height: {$gte: 1.2}}
> db.pokemons.find(query)
{ "_id" : ObjectId("564481fc8844881046640962"), "name" : "Victreebel", "description" : "Planta feia do caralho", "type" : "grass", "attack" : 105, "defense" : 65, "height" : 1.7 }
{ "_id" : ObjectId("564481fc8844881046640963"), "name" : "Slowpoke", "description" : "Esse é bobo pra caralho", "type" : "water", "attack" : 65, "defense" : 65, "height" : 1.2 }
{ "_id" : ObjectId("564481fc8844881046640964"), "name" : "Charizard", "description"
: "Eu taco fogo", "type" : "fire", "attack" : 84, "defense" : 78, "height" : 1.7 }

```

## 3. Liste todos Pokemons com a altura menor ou igual que 1.2 E do tipo "BUG";

```
> var query = {$and: [{height: {$lte: 1.2}}, {type: "bug"}]}
> db.pokemons.find(query)
{ "_id" : ObjectId("564481fc8844881046640961"), "name" : "Kakuna", "description" : "Esse é casca grossa", "type" : "bug", "attack" : 25, "defense" : 50, "height" : 0.6
}

```

## 4. Liste todos Pokemons com o name `Psyduck` OU com attack menor ou igual que 65;

```

> var query = {$or: [{name: "Psyduck"}, {attack: {$lte: 65}}]}
> db.pokemons.find(query)
{ "_id" : ObjectId("564481fc8844881046640960"), "name" : "Psyduck", "description" : "Esse tem uma enxaqueca da ruim", "type" : "water", "attack" : 52, "defense" : 48, "height" : 0.8 }
{ "_id" : ObjectId("564481fc8844881046640961"), "name" : "Kakuna", "description" : "Esse é casca grossa", "type" : "bug", "attack" : 25, "defense" : 50, "height" : 0.6 }
{ "_id" : ObjectId("564481fc8844881046640963"), "name" : "Slowpoke", "description" : "Esse é bobo pra caralho", "type" : "water", "attack" : 65, "defense" : 65, "height" : 1.2 }

```

## 5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 65 E com  height menor ou igual que 1.2;

```
> var query = {$and: [{attack: {$gte: 65}}, {height: {$lte: 1.2}}]}
> db.pokemons.find(query)
{ "_id" : ObjectId("564481fc8844881046640963"), "name" : "Slowpoke", "description" : "Esse é bobo pra caralho", "type" : "water", "attack" : 65, "defense" : 65, "height" : 1.2 }

```