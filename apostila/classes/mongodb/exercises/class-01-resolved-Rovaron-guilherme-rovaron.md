# MongoDB - Aula 01 - Exercício
autor: Guilherme Rovaron

## Importando a collection

```
mongoimport --db be-mean --collection restaurantes --drop --file /data/restaurantes.json
connected to: 127.0.0.1
Tue Nov 10 04:18:16.697 dropping: be-mean.restaurantes
Tue Nov 10 04:18:18.499 check 9 25359
Tue Nov 10 04:18:19.191 imported 25359 objects
```

## Contando os registros

```
MongoDB shell version: 2.4.9
connecting to: test
> use be-mean
switched to db be-mean
> db.restaurantes.find({}).count()
25359
```
