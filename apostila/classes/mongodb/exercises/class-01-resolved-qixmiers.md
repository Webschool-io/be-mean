# MongoDB - Aula 01 - Exercício
autor: Ricardo Pereira

## Importando os restaurantes

	```
	MBP-de-Ricardo:mongo-hacker ricardo$ mongoimport --db be-mean --collection restaurantes --file /Users/ricardo/Downloads/restaurantes.json
	
	2015-11-10T00:01:15.217-0200	connected to: localhost
	
	2015-11-10T00:01:18.139-0200	[####################....] be-mean.restaurantes	9.7 MB/11.3 MB (85.4%)
	
	2015-11-10T00:01:18.587-0200	imported 25359 documents
	
	```

## Contando os restaurantes

	```
	MBP-de-Ricardo(mongod-3.0.3) be-mean> db.restaurantes.find({}).count();
	25359
	```