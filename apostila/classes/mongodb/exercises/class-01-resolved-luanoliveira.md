# Mongo DB - Aula 01 - Exercício
Autor: Luan Oliveira

## Importando os restaurantes

luanoliveira@luanoliveira:~/www$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-11T17:03:24.549-0300	connected to: localhost
2015-11-11T17:03:24.550-0300	dropping: be-mean.restaurantes
2015-11-11T17:03:27.360-0300	imported 25359 documents

## Contando os restaurantes

luanoliveira(mongod-3.0.7) test> use be-mean
switched to db be-mean
luanoliveira(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
