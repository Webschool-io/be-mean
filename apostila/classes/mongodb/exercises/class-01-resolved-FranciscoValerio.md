# MongoDB - Aula 01 - Exercício
autor: Francisco Henrique Ruiz Valério

## Importando os restaurantes

	PS C:\Users\franc> mongoimport --db be-mean --collection restaurantes --drop --file 'C:\Be-Mean\MongoDb\restaurantes.json.txt'
	2015-11-09T21:02:40.678-0200    connected to: localhost
	2015-11-09T21:02:40.695-0200    dropping: be-mean.restaurantes
	2015-11-09T21:02:43.209-0200    imported 25359 documents
    

## Contando os restaurantes

	PS C:\Users\franc> mongo
	MongoDB shell version: 3.0.7
	connecting to: test
	> use be-mean
	switched to db be-mean
	> db.restaurantes.find({}).count()
	25359