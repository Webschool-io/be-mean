# MongoDB - Aula 01 - Exercício
autor: Eric Cristhiano

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-10T18:42:03.513-0200	connected to: localhost
2015-11-10T18:42:03.514-0200	dropping: be-mean.restaurantes
2015-11-10T18:42:04.736-0200	imported 25359 documents
```

## Contando os restaurantes

```
> db.restaurantes.find({}).count()
25359
```
