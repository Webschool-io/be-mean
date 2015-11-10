# MongoDB - Aula 01 - Exercício
autor: Paulo Tosi

## Importando os restaurantes

```
mongoimport [ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json ]

2015-11-09T22:59:30.752-0200    connected to: localhost
2015-11-09T22:59:30.752-0200    dropping: be-mean.restaurantes
2015-11-09T22:59:31.948-0200    imported 25359 documents

```

## Contando os restaurantes

```
$ db.restaurantes.find({}).count()
25359

 ```