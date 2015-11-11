# MongoDB - Aula 01 - Exercício
autor: Pablo R. Dinella

## Importando os restaurantes

```
owner@Pablos-MacBook-Air:/$ mongoimport --db be-mean-instagram --collection restaurantes --drop --file /Users/owner/Downloads/restaurantes.json
2015-11-10T17:42:29.321-0200	connected to: localhost
2015-11-10T17:42:29.323-0200	dropping: be-mean-instagram.restaurantes
2015-11-10T17:42:31.941-0200	imported 25359 documents
```

## Contando os restaurantes

```
> db.restaurantes.find({}).count()
25359
```
