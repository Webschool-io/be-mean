# MongoDB - Aula 01 - Exercício
autor: Carlos Lima

## Importando os restaurantes
```
	MacBook-de-Carlos:Desktop carlos$ mongoimport --db be-mean  --collection restaurantes --drop --file restaurantes.json 
	2015-11-11T21:51:22.256-0200	connected to: localhost
	2015-11-11T21:51:22.301-0200	dropping: be-mean.restaurantes
	2015-11-11T21:51:25.301-0200	[##########..............] be-mean.restaurantes	5.2 MB/11.3 MB (45.5%)
	2015-11-11T21:51:27.259-0200	imported 25359 documents
```
## Contando os restaurantes
```
	MacBook-de-Carlos(mongod-3.0.5) be-mean> db.restaurantes.find({}).count()
	25359
```