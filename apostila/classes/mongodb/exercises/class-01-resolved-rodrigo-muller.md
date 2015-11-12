# MongoDB - Aula 01 - Exercício
autor: Rodrigo Müller

## Importando os restaurantes

	mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json 
	2015-11-11T18:51:46.636-0200	connected to: 127.0.0.1
	2015-11-11T18:51:46.637-0200	dropping: be-mean.restaurantes
	2015-11-11T18:51:47.614-0200	imported 25359 documents


## Contando os restaurantes

    	> use be-mean	
	switched to db be-mean
	> db.restaurantes.find({}).count()
	25359

