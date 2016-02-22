# MongoDB - Aula 01 - Exercício
	autor: EDVALDO ELIAS FERREIRA

## Importando os restaurantes

    $ mongoimport --db be-mean --collection restaurantes --drop --file F:/BeMean/restaurantes.json
	2016-02-16T23:22:27.354-0200    connected to: localhost
	2016-02-16T23:22:27.356-0200    dropping: be-mean.restaurantes
	2016-02-16T23:22:29.160-0200    imported 25359 documents

## Contando os restaurantes

    $ mongo
	MongoDB shell version: 3.2.1
	connecting to: test
	use be-mean
	switched to db be-mean
	db
	be-mean
	db.restaurantes.find({}).count()
	25359