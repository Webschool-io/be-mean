# MongoDB - Aula 01 - Exercício
autor: MARCOS ALEXANDRE

## Importando os restaurantes

root@marcos-Aspire-5350:/data/db# mongoimport --host=127.0.0.1 --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-09T22:20:17.341-0200	connected to: 127.0.0.1
2015-11-09T22:20:17.342-0200	dropping: be-mean.restaurantes
2015-11-09T22:20:19.880-0200	imported 25359 documents

## Contando os restaurantes

> db.restaurantes.find({}).count()
25359
>
