# MongoDB - Aula 01 - Exercício
autor: Douglas Cofferi

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file
restaurantes.json
2015-11-10T22:22:37.495-0200    connected to: 127.0.0.1
2015-11-10T22:22:37.500-0200    dropping: be-mean.restaurantes
2015-11-10T22:22:39.838-0200    [####################....] be-mean.restaurantes 9.5 MB/11.4 MB (84.0%)
2015-11-10T22:22:40.191-0200    imported 25359 documents

```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359

```