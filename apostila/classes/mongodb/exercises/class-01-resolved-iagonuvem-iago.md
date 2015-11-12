
# MongoDB - Aula 01 - Exercício
autor: Iago Nuvem

## Importando os restaurantes
	Iago Nuvem@IAGO /C/Program Files/MongoDB/Server/3.0/bin
	$ mongoimport.exe --db be-mean --collection restaurants --drop --file restauran
	ts.json
	2015-11-11T12:09:11.392-0200    connected to: localhost
	2015-11-11T12:09:11.395-0200    dropping: be-mean.restaurants
	2015-11-11T12:09:12.817-0200    imported 25359 documents

## Contando os restaurantes
	Iago Nuvem@IAGO /C/Program Files/MongoDB/Server/3.0/bin
	$ mongo.exe be-mean
	MongoDB shell version: 3.0.7
	connecting to: be-mean
	> db.restaurants.find({}).count()
	25359 

	
