# MongoDB - Aula 01 - Exercício
autor: ALEXANDRE LUIS TEIXEIRA

## Importando os restaurantes

mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
2015-11-11T13:57:59.124-0200	connected to: localhost
2015-11-11T13:57:59.165-0200	dropping: be-mean.restaurantes
2015-11-11T13:58:01.694-0200	[##########..............] be-mean.restaurantes5.0 MB/11.3 MB (44.0%)
2015-11-11T13:58:04.697-0200	[##########..............] be-mean.restaurantes5.2 MB/11.3 MB (45.5%)
2015-11-11T13:58:07.686-0200	[####################....] be-mean.restaurantes9.8 MB/11.3 MB (86.2%)
2015-11-11T13:58:10.570-0200	imported 25359 documents

## Contando os restaurantes

db.restaurantes.find({}).count()
25359

