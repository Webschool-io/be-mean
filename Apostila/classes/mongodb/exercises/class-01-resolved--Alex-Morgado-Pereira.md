# MongoDB - Aula 01 - Exercício
autor: Alex Morgado Pereira

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2016-07-30T18:23:28.983-0300    connected to: localhost
2016-07-30T18:23:28.984-0300    dropping: be-mean.restaurantes
2016-07-30T18:23:30.013-0300    imported 25359 documents

```

## Contando os restaurantes

```
alex-morgado(mongod-3.2.6) be-mean> use be-mean
switched to db be-mean
alex-morgado(mongod-3.2.6) be-mean> db.restaurantes.find({}).count()
25359

```