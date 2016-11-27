# MongoDB - Aula 01 - Exercício
autor: ROBERTO ZANIN

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2016-10-27T13:51:30.156-0200	connected to: localhost
2016-10-27T13:51:30.156-0200	dropping: be-mean.restaurantes
2016-10-27T13:51:31.689-0200	imported 25359 documents

```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359

```
