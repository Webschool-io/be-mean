# MongoDB - Aula 01 - Exercício
autor: JEAN MATEUS SCUSSEL

## Importando os restaurantes 

```
root@jean-Inspiron-7520:/home/jean# mongoimport --db be-mean --collection restaurantes --drop --file /home/jean/Downloads/restaurantes.json
2015-11-09T21:44:56.217-0200	connected to: localhost
2015-11-09T21:44:56.217-0200	dropping: be-mean.restaurantes
2015-11-09T21:44:57.339-0200	imported 25359 documents

```

## Contando os restaurantes

```

jean-Inspiron-7520(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359

```
