# MongoDB - Aula 01 - Exercício
autor: David Lee

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json                                                                ✔ (git)-[master]-
2016-01-02T10:13:38.536-0200	connected to: localhost
2016-01-02T10:13:38.537-0200	dropping: be-mean.restaurantes
2016-01-02T10:13:39.102-0200	imported 25359 documents
```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359
```
