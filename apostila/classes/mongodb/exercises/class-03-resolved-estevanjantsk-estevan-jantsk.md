# MongoDB - Aula 03 - Exercício
autor: Estevan Jantsk

## Info: Dados utilizados para realizar os exercícios da Aula 03;
```
> db.pokemons.find()
{ "_id" : ObjectId("5642717bce53631fd9ce8527"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type" : "electric", "attack" : 55, "height" : 0.4 }
{ "_id" : ObjectId("564271ffce53631fd9ce8528"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
{ "_id" : ObjectId("5642720ece53631fd9ce8529"), "name" : "Charmander", "description" : "Esse é o cão chupando manga de fofinho", "type" : "fogo", "attack" : 52, "height" : 0.6 }
{ "_id" : ObjectId("56427272ce53631fd9ce852a"), "name" : "Squirtle", "description" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "height" : 0.5 }
{ "_id" : ObjectId("564273d0ce53631fd9ce852b"), "name" : "Caterpie", "description" : "Larva lutadora", "type" : "inseto", "attack" : 30, "height" : 0.3 }
{ "_id" : ObjectId("564282d9ce53631fd9ce852c"), "name" : "Voltorb", "description" : "Aaaaaaaa que delícia cara!!!", "type" : "electric", "attack" : 30, "height" : 104 }
>
```

## 1. Liste todos Pokemons com a altura menor que 0.5;
```
> var query = {height: {$lt: 0.5}}
> db.pokemons.find(query)
{ "_id" : ObjectId("5642717bce53631fd9ce8527"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type" : "electric", "attack" : 55, "height" : 0.4 }
{ "_id" : ObjectId("564271ffce53631fd9ce8528"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
{ "_id" : ObjectId("564273d0ce53631fd9ce852b"), "name" : "Caterpie", "description" : "Larva lutadora", "type" : "inseto", "attack" : 30, "height" : 0.3 }
>
```

## 2. Liste todos Pokemons com a altura maior ou igual que 0.5;
```
> var query = {height: {$gte: 0.5}}
> db.pokemons.find(query)
{ "_id" : ObjectId("5642720ece53631fd9ce8529"), "name" : "Charmander", "description" : "Esse é o cão chupando manga de fofinho", "type" : "fogo", "attack" : 52, "height" : 0.6 }
{ "_id" : ObjectId("56427272ce53631fd9ce852a"), "name" : "Squirtle", "description" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "height" : 0.5 }
{ "_id" : ObjectId("564282d9ce53631fd9ce852c"), "name" : "Voltorb", "description" : "Aaaaaaaa que delícia cara!!!", "type" : "electric", "attack" : 30, "height" : 104 }
>
```

## 3. Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama;
```
> var query = {$and:[{height: {$lte: 0.5}}, {type:"grama"}]};
> db.pokemons.find(query)
{ "_id" : ObjectId("564271ffce53631fd9ce8528"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
>
```

## 4. Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5;
```
> var query = {$or:[{attack: {$lte: 0.5}}, {name:"Pikachu"}]};
> db.pokemons.find(query);
{ "_id" : ObjectId("5642717bce53631fd9ce8527"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type" : "electric", "attack" : 55, "height" : 0.4 }
>
```

## 5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5;
```
> var query = {$and:[{attack: {$gte: 48}}, {height:{$lte:0.5}}]};
> db.pokemons.find(query);
{ "_id" : ObjectId("5642717bce53631fd9ce8527"), "name" : "Pikachu", "description" : "Rato elétrico bem fofinho", "type" : "electric", "attack" : 55, "height" : 0.4 }
{ "_id" : ObjectId("564271ffce53631fd9ce8528"), "name" : "Bulbassauro", "description" : "Chicote de trepadeira", "type" : "grama", "attack" : 49, "height" : 0.4 }
{ "_id" : ObjectId("56427272ce53631fd9ce852a"), "name" : "Squirtle", "description" : "Ejeta água que passarinho não bebe", "type" : "água", "attack" : 48, "height" : 0.5 }
>
```