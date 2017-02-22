# MongoDB - Aula 01 - Exercício
autor: Lucas Frutig

## Importando os restaurantes

```
$ mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2017-02-22T12:01:08.138-0300    connected to: 127.0.0.1
2017-02-22T12:01:08.158-0300    dropping: be-mean.restaurantes
2017-02-22T12:01:10.124-0300    imported 25359 documents


```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359


```