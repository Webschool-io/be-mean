# MongoDB - Aula 01 - Exercício
autor: Felipe Orlando Begliomini Souza

## Importando os restaurantes
```
Mongo DB ❯ mongoimport --db bemean --collection restaurantes --drop --file restaurante.json 
2015-11-10T20:39:26.275-0200	connected to: localhost
2015-11-10T20:39:26.275-0200	dropping: bemean.restaurantes
2015-11-10T20:39:28.031-0200	imported 25359 documents
```

## Contando os restaurantes
```
Air-de-Felipe(mongod-3.0.7) test> use bemean
switched to db bemean

Air-de-Felipe(mongod-3.0.7) bemean> db.restaurantes.find({}).count()
25359
```
