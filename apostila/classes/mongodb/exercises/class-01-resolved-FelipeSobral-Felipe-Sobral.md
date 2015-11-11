# MongoDB - Aula 01 - Exercício
autor: Felipe Sobral

## Importando os restaurantes
	felipe@felipe-pc:~$ mongoimport --db bemean --collection restaurantes --drop --file /home/felipe/Downloads/data.json
	2015-11-10T09:19:53.460-0200	connected to: localhost
	2015-11-10T09:19:53.460-0200	dropping: bemean.restaurantes
	2015-11-10T09:19:54.984-0200	imported 25359 documents

## Contando os restaurantes

	felipe@felipe-pc:~$ mongo
	MongoDB shell version: 3.0.7
	connecting to: test
	> use bemean
	switched to db bemean
	> db.restaurantes.find({}).count()
	25359
