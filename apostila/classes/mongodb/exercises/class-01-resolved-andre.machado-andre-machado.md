# MongoDB - Aula 01 - Exercício
autor: André Machado

## Importando os restaurantes

mongoimport --db be-mean-instagram --collection restaurantes --drop --file restaurantes.json 
2015-11-09T20:13:32.710-0300	connected to: localhost
2015-11-09T20:13:32.711-0300	dropping: be-mean-instagram.restaurantes
2015-11-09T20:13:34.053-0300	imported 25359 documents


## Contando os restaurantes

> db.restaurantes.find({}).count()
25359

