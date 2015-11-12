#MongoDB - Aula 01 - Exercício
autor: Cauê Almeida

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-11T21:02:30.460-0200    connected to: localhost
2015-11-11T21:02:30.460-0200    dropping: be-mean.restaurantes
2015-11-11T21:02:32.094-0200    imported 25359 documents

```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359

```