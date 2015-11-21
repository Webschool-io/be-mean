# MongoDB - Aula 01 - Exercício
autor: LUCAS SÉRIO MAHLE


## Importando os restaurantes

-> mongoimport --db be-mean-mongo --collection restaurantes --drop --file restaurantes.json
2015-11-21T15:55:35.173-0300	connected to: localhost
2015-11-21T15:55:35.174-0300	dropping: be-mean-mongo.restaurantes
2015-11-21T15:55:36.687-0300	imported 25359 documents


## Contando os restaurantes

-> db.restaurantes.find({}).count()
25359
