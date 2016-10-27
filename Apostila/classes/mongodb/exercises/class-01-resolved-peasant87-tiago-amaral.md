# MongoDB - Aula 01 - Exercício
autor: Tiago Amaral

## Importando os restaurantes

	```
	mongoimport --db be-mean --collection restaurantes --drop restaurantes.json 
	2016-10-20T00:05:15.169-0200	connected to: localhost
	2016-10-20T00:05:15.169-0200	dropping: be-mean.restaurantes
	2016-10-20T00:05:16.106-0200	imported 25359 documents

	```

## Contando os restaurantes

	```
	db.restaurantes.find({}).count()
	25359

	```