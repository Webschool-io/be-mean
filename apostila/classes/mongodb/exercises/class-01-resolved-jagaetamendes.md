# MongoDB - Aula 01 - Exercício
autor: J. A. Gaeta Mendes

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json 
2015-11-11T16:52:07.568-0200	connected to: localhost
2015-11-11T16:52:07.568-0200	dropping: be-mean.restaurantes
2015-11-11T16:52:08.493-0200	imported 25359 documents
```

## Contando os restaurantes

```
MacBookPro(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
```
