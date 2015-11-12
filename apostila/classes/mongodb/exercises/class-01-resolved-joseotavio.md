# MongoDB - Aula 01 - Exercício
Autor: Jose Otavio Quaglio

## Importando os restaurantes

```
$ mongoimport --host=127.0.0.1 --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-11T21:44:39.799-0200    connected to: 127.0.0.1
2015-11-11T21:44:39.800-0200    dropping: be-mean.restaurantes
2015-11-11T21:44:40.836-0200    imported 25359 documents
```

## Contando os restaurantes

```
> db.restaurantes.find({}).count()
25359
```
