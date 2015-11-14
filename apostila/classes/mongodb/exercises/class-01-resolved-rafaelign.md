# MongoDB - Aula 01 - Exercício
autor: Rafael Crispim Ignácio

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-10T01:26:15.116-0200    connected to: localhost
2015-11-10T01:26:15.117-0200    dropping: be-mean.restaurantes
2015-11-10T01:26:16.868-0200    imported 25359 documents
```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359
```
