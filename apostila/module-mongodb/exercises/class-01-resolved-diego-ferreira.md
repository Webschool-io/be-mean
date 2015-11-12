# MongoDB - Aula 01 - Exercício
autor: DIEGO FERREIRA

## Importando os restaurantes

```
mongoimport --db be-mean-instagram --collection restaurantes --drop --file /data/restaurantes.json
2015-11-10T22:05:40.566-0200	connected to: localhost
2015-11-10T22:05:40.567-0200	dropping: be-mean-instagram.restaurantes
2015-11-10T22:05:42.280-0200	imported 25359 documents

```

## Contando os restaurantes

```
Air-de-Diego(mongod-3.0.7) be-mean-instagram> db.restaurantes.find({}).count()
25359

```
