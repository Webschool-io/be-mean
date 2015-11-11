# MongoDB - Aula 01 - Exercício
autor: Asafe Damasceno dos Santos

## Importando os restaurantes

	avengers:mongodb asafeds$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes_ex1.json 
	2015-11-10T23:32:02.445-0200	connected to: localhost
	2015-11-10T23:32:02.446-0200	dropping: be-mean.restaurantes
	2015-11-10T23:32:04.469-0200	imported 25359 documents    

## Contando os restaurantes

	avengers:mongodb asafeds$ mongo
	MongoDB shell version: 3.0.7
	connecting to: test
	Mongo-Hacker 0.0.8
	Server has startup warnings: 
	2015-11-10T21:42:08.568-0200 I CONTROL  [initandlisten] 
	2015-11-10T21:42:08.568-0200 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
	avengers(mongod-3.0.7) test> use be-mean
	switched to db be-mean
	avengers(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
	25359
	avengers(mongod-3.0.7) be-mean> exit
	bye
	avengers:mongodb asafeds$ 
