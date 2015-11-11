# MongoDB - Aula 01 - Exercício
autor: Max Arouca

## Importando os restaurantes

```
$ mongoimport --db be-mean --collection restaurantes --drop --file ./restaurantes.json
2015-11-09T21:59:41.750-0300    connected to: localhost
2015-11-09T21:59:41.750-0300    dropping: be-mean.restaurantes
2015-11-09T21:59:42.878-0300    imported 25359 documents

```

## Contando os restaurantes

```
MacMax(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359

```