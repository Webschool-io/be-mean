# MongoDB - Aula 01 - Exercício
autor: Jéssica Cristina Carneiro

## Importando os restaurantes

mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-11T09:19:53.160-0500	connected to: localhost
2015-11-11T09:19:53.164-0500	dropping: be-mean.restaurantes
2015-11-11T09:19:55.895-0500	imported 25359 documents

## Contando os restaurantes

tardis(mongod-3.0.7) test> use be-mean
switched to db be-mean
tardis(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
