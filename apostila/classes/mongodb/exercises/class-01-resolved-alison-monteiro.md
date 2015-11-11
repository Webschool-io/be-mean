# MongoDB - Aula 01 - Exercício
autor: Alison Monteiro

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-09T21:50:35.734-0300    connected to: localhost
2015-11-09T21:50:35.734-0300    dropping: be-mean.restaurantes
2015-11-09T21:50:37.637-0300    imported 25359 documents

```

## Contando os restaurantes

```
switched to db be-mean
> db.restaurantes.find({}).count()
25359
```