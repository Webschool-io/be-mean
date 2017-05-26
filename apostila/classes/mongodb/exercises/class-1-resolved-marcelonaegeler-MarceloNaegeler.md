# MongoDB - Aula 01 - Exercício
autor: Marcelo André Naegeler

## Importando os restaurantes

	```
	mongoimport --db restaurantes --collection restaurantes --drop --file ~/restaurantes.json 
	2015-11-11T09:52:58.629-0200	connected to: localhost
	2015-11-11T09:52:58.652-0200	dropping: restaurantes.restaurantes
	2015-11-11T09:53:01.550-0200	[##################......] restaurantes.restaurantes	8.9 MB/11.3 MB (79.0%)
	2015-11-11T09:53:03.396-0200	imported 25359 documents
	```

## Contando os restaurantes

	```
	> db.restaurantes.find({}).count();
	25359
	```
