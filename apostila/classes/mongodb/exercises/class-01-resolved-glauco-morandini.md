# MongoDB - Aula 01 - Exercício
autor: Glauco Morandini Martins

## Importando os restaurantes

mongoimport --db be-mean --collection restaurantes --drop --file c:\\mean\\restaurantes.json
2015-11-10T21:17:35.469-0200    connected to: localhost
2015-11-10T21:17:35.472-0200    dropping: be-mean.restaurantes
2015-11-10T21:17:37.848-0200    imported 25359 documents

## Contando os restaurantes

db.restaurantes.find({}).count()
25359