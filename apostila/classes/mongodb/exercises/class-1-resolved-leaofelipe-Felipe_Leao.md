
# MongoDB - Aula 01 - Exercício
autor: Felipe Leão

## Importando restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-09T22:23:46.612-0200	connected to: localhost
2015-11-09T22:23:46.614-0200	dropping: be-mean.restaurantes
2015-11-09T22:23:49.575-0200	[####################....] be-mean.restaurantes	9.8 MB/11.3 MB (86.3%)
2015-11-09T22:23:50.257-0200	imported 25359 documents

```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359

```
