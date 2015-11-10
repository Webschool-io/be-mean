# MongoDB - Aula 01 - Exercício
autor: Marcelo H M Dias

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
```
```
2015-11-09T23:26:38.773-0200	connected to: localhost
2015-11-09T23:26:38.773-0200	dropping: be-mean.restaurantes
2015-11-09T23:26:39.345-0200	imported 25359 documents
```

## Contando os restaurantes

```
MH-Note(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
MH-Note(mongod-3.0.7) be-mean> 
```