# MongoDB - Aula 01 - Exercício
autor: Dayan Barros

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-09T23:55:21.883-0300	connected to: localhost
2015-11-09T23:55:21.884-0300	dropping: be-mean.restaurantes
2015-11-09T23:55:23.513-0300	imported 25359 documents

```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359
```
