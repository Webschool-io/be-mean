# MongoDB - Aula 01 - Exercício
autor: Bruno Stoffel Berté

## Importando os restaurantes

```
brunoberte:mongodb brunoberte$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
2015-11-10T10:25:26.052-0200	[........................] be-mean.restaurantes	0.0 B/11.3 MB (0.0%)
2015-11-10T10:25:28.072-0200	connected to: localhost
2015-11-10T10:25:28.073-0200	dropping: be-mean.restaurantes
2015-11-10T10:25:29.052-0200	[####################....] be-mean.restaurantes	9.8 MB/11.3 MB (86.3%)
2015-11-10T10:25:29.253-0200	imported 25359 documents

```

## Contando os restaurantes

```

> db.restaurantes.find({}).count()
25359

```