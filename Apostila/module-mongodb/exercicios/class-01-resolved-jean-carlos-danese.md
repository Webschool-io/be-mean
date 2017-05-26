# MongoDB - Aula 01 - Exercício
autor: Jean Carlos Danese

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json 
2016-01-17T11:06:38.170-0200	connected to: 127.0.0.1
2016-01-17T11:06:38.171-0200	dropping: be-mean.restaurantes
2016-01-17T11:06:39.095-0200	imported 25359 documents

```

## Importando os restaurantes

```
db.restaurantes.find({}).count()
25359
```