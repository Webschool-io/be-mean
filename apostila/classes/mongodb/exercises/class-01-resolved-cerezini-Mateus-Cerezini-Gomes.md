# MongoDB - Aula 01 - Exercício
autor: Mateus Cerezini Gomes

## Importando os restaurantes

```
mongoimport --db be-mean-instagram --collection restaurantes --drop --file be-mean-instagram/apostila/mongodb/data/restaurantes.json 
2015-11-09T23:00:59.219-0200	connected to: localhost
2015-11-09T23:00:59.219-0200	dropping: be-mean-instagram.restaurantes
2015-11-09T23:01:00.020-0200	imported 25359 documents

```

## Contando os restaurantes

```
> db.restaurantes.find({}).count()
25359

```

