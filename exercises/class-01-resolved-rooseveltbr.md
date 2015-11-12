# MongoDB - Aula 01 - Exercício
autor: Roosevelt Padilha

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-12T03:49:50.553-0200    connected to: localhost
2015-11-12T03:49:50.557-0200    dropping: be-mean.restaurantes
2015-11-12T03:49:53.536-0200    [##########..............] be-mean.restaurantes 5.2 MB/11.3 MB (45.5%)
2015-11-12T03:49:55.834-0200    imported 25359 documents

```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359

```