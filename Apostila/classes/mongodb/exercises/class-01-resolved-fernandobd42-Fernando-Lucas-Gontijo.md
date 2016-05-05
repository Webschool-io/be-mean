MongoDB - Aula 01 - Exercício
autor: Fernando Lucas

## Importantos os restaurantes

	$ mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop restaurantes.json
	2016-04-19T15:42:06.739-0300    connected to: 127.0.0.1
	2016-04-19T15:42:06.740-0300    dropping: be-mean.restaurantes
	2016-04-19T15:42:08.927-0300    imported 25359 documents


## Contando os restaurantes

	db.restaurantes.find({}).count()
	25359
