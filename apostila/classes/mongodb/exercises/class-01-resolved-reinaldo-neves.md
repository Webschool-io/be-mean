# MongoDB - Aula 01 - Exercício
autor: Reinaldo Neves

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file c:\temp\restaurantes.json
2015-11-11T00:35:11.112-0200    connected to: localhost
2015-11-11T00:35:11.115-0200    dropping: be-mean.restaurantes
2015-11-11T00:35:14.070-0200    [####################....] be-mean.restaurantes 9.8 MB/11.3 MB (86.3%)
2015-11-11T00:35:15.005-0200    imported 25359 documents

```

## Contando os restaurantes

```
db.restaurantes.count({})
25359

```
