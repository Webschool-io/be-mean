# MongoDB - Aula 01 - Exercício
autor: Talita Oliveira

## Importando os restaurantes

```
$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-12-06T18:05:45.801-0300    connected to: localhost
2015-12-06T18:05:45.802-0300    dropping: be-mean.restaurantes
2015-12-06T18:05:47.492-0300    imported 25359 documents


```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359
```