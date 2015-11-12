# MongoDB - Aula 01 - Exercício
autor: MARCELO FIGUEIRA

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
connected to: 127.0.0.1
2015-11-11T14:47:54.682-0300 dropping: be-mean.restaurantes
2015-11-11T14:47:55.391-0300 check 9 25359
2015-11-11T14:47:55.742-0300 imported 25359 objects


```

## Contando os restaurantes

```
marcelo-note(mongod-2.6.10) be-mean> db.restaurantes.find({}).count()
25359

