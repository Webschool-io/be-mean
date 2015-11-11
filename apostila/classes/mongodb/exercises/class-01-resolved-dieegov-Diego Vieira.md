# MongoDB - Aula 01 - Exercício
autor: Diego Vieira

## Importando os restaurantes
C:\Users\diegovieira>mongoimport --db be-mean --collection restaurantes --drop --file c:\json\restaurantes.json
2015-11-11T10:09:43.138-0200    connected to: localhost
2015-11-11T10:09:43.139-0200    dropping: be-mean.restaurantes
2015-11-11T10:09:44.344-0200    imported 25359 documents

C:\Users\diegovieira>mongo
MongoDB shell version: 3.0.7
connecting to: test
> use be-mean
switched to db be-mean

## Contando os restaurantes
> db.restaurantes.find({}).count()
25359
