# MongoDB - Aula 01 - Exercício
autor: Otavio Barbosa

## Importando os restaurantes

```
mongoimport mongoimport --db be-mean --collection restaurantes --drop --file ~/be-mean/mongodb/exercicio01/restaurantes.json
2015-11-09T22:55:32.282-0300	connected to: localhost
2015-11-09T22:55:32.283-0300	dropping: be-mean.restaurantes
2015-11-09T22:55:33.757-0300	imported 25359 documents
```

## Contando os restaurantes

```
> db.restaurantes.find({}).count()
25359
```
