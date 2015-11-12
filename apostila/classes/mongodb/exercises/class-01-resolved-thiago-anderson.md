# MongoDB - Aula 01 - Exercício
autor: Jean Nascimento

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2015-11-12T00:43:01.126-0200	connected to: 127.0.0.1
2015-11-12T00:43:01.127-0200	dropping: be-mean.restaurantes
2015-11-12T00:43:03.595-0200	imported 25359 documents

```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359
```
