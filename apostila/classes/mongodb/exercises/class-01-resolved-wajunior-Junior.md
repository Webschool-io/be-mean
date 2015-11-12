# MongoDB - Aula 01 - Exercício
autor: WILSON ALBINO JUNIOR

## Importando os restaurantes

	root@junior-pc:/home/junior/mongo-hacker# mongoimport --db be-mean --collection restaurantes --drop --file /home/junior/Documentos/BE-MEAN/MongoDB/DB/data.json
	connected to: 127.0.0.1
	2015-11-09T23:22:29.426-0200 dropping: be-mean.restaurantes
	2015-11-09T23:22:30.419-0200 check 9 25359
	2015-11-09T23:22:30.722-0200 imported 25359 objects


## Contando os restaurantes

    	junior-pc(mongod-2.6.3) be-mean> db.restaurantes.find({}).count()
	25359

