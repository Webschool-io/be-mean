# MongoDB - Aula 01 - Exercício
autor: Guilherme Felipe de Sousa

## Importando os restaurantes

mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2016-01-27T00:47:49.051-0200	connected to: 127.0.0.1
2016-01-27T00:47:49.051-0200	dropping: be-mean.restaurantes
2016-01-27T00:47:50.519-0200	imported 25359 documents

## Contando os restaurantes

> db.restaurantes.find({}).count()
25359
