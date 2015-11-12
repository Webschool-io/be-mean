# MongoDB - Aula 01 - Exercício
autor: Charles de Freitas Garcia

## Importando os restaurantes
    mongoimport --db be-mean --collection restaurantes --drop --file c:\restaurantes.json
	2015-11-10T22:49:41.331-0200    connected to: localhost
	2015-11-10T22:49:41.334-0200    dropping: be-mean.restaurantes
	2015-11-10T22:49:41.385-0200    [#.......................] be-mean.restaurantes 695.1 KB/11.3 MB (6.0%)
	2015-11-10T22:49:42.848-0200    imported 25359 documents

## Contando os restaurantes
	> use be-mean
	> db.restaurantes.find({}).count()
	25359
	>
bye
	



