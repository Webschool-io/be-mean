# MongoDB - Aula 01 - Exercícios
autor: Gustavo Mathias Soares

## Importando os restaurantes  

	connected to: 127.0.0.1
	2015-11-09T22:03:12.151-0200 dropping: bemean.restaurante
	2015-11-09T22:03:12.685-0200 check 9 25359
	2015-11-09T22:03:12.764-0200 imported 25359 objects

## Contando os restaurantes  

	linux(mongod-2.6.3) bemean> db.restaurante.find({}).count()
	25359


