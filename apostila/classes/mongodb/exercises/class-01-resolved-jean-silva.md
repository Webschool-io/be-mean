
# MongoDB - Aula 01 - Exercício
autor: Jean Silva

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-10T22:22:05.370-0200	connected to: localhost
2015-11-10T22:22:05.371-0200	dropping: be-mean.restaurantes
2015-11-10T22:22:07.308-0200	imported 25359 documents

```

## Contando os restaurantes

```
db.restaurantes.find().count()
25359

```