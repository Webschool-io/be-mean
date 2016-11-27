# MongoDB - Aula 01 - Exercício
autor: Thiago Milani

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2016-07-22T22:06:18.300-0300    connected to: localhost
2016-07-22T22:06:18.301-0300    dropping: be-mean.restaurantes
2016-07-22T22:06:21.278-0300    [###################.....] be-mean.restaurantes9.4 MB/11.4 MB (83.0%)
2016-07-22T22:06:21.979-0300    [########################] be-mean.restaurantes11.4 MB/11.4 MB (100.0%)
2016-07-22T22:06:21.979-0300    imported 25359 documents

```

## Contando os restaurantes

```
zito-desktop(mongod-3.2.8) be-mean> db.restaurantes.find({}).count()
25359

```