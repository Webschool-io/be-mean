# MongoDB - Aula 01 - Exercício
autor: Douglas Hennrich

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-10T02:12:10.248-0200	connected to: localhost
2015-11-10T02:12:10.249-0200	dropping: be-mean.restaurantes
2015-11-10T02:12:12.306-0200	imported 25359 documents
```

## Contando os restaurantes

```
MacBook-Pro-de-Douglas(mongod-3.0.6) be-mean> db.restaurantes.find({}).count()
25359
```
