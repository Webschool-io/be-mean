# MongoDB - Aula 01 - Exercício
autor: Emerson

## Importando os restaurantes


mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2016-02-02T06:45:20.131-0800	connected to: localhost
2016-02-02T06:45:20.132-0800	dropping: be-mean.restaurantes
2016-02-02T06:45:23.115-0800	[########################] be-mean.restaurantes	11.3 MB/11.3 MB (100.0%)
2016-02-02T06:45:23.372-0800	[########################] be-mean.restaurantes	11.3 MB/11.3 MB (100.0%)
2016-02-02T06:45:23.372-0800	imported 25359 documents


    

## Contando os restaurantes


emersons-MacBook:documents Emerson$ mongo
MongoDB shell version: 3.2.1
connecting to: test
Server has startup warnings: 
2016-02-02T06:29:34.768-0800 I CONTROL  [initandlisten] 
2016-02-02T06:29:34.768-0800 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
> use be-mean;
switched to db be-mean
> db.restaurantes.find({}).count()
25359


