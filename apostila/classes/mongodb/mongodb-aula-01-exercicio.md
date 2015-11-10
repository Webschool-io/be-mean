# MongoDB - Aula 01 - Exercício
autor: Bruno Stoffel Berté

## Importando os restaurantes

```
brunoberte:mongodb brunoberte$ mongoimport --db be-mean -c restaurantes --drop ./restaurantes.json
2015-11-10T08:52:55.929-0200	[........................] be-mean.restaurantes	0.0 B/11.3 MB (0.0%)
2015-11-10T08:52:57.964-0200	connected to: localhost
2015-11-10T08:52:57.967-0200	dropping: be-mean.restaurantes
2015-11-10T08:52:58.925-0200	[###############.........] be-mean.restaurantes	7.4 MB/11.3 MB (65.7%)
2015-11-10T08:52:59.535-0200	imported 25359 documents

```

## Contando os restaurantes

```

> db.restaurantes.find({}).count()
25359

```