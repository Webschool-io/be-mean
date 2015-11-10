# MongoDB - Aula 01 - Exercício
autor: Victor Gomes Baby

## Importando os restaurantes

MacBook-Pro-de-Victor:be-mean-modulo-mongodb victorgomesbaby$ mongoimport --db be-mean --collection restaurants --file data.json
2015-11-09T23:02:52.851-0200	connected to: localhost
2015-11-09T23:02:55.751-0200	[##########..............] be-mean.restaurants	5.2 MB/11.3 MB (45.5%)
2015-11-09T23:02:56.875-0200	imported 25359 documents


## Contando os restaurantes

> db.restaurants.find({}).count()
25359