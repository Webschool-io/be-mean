# MongoDB - Aula 01 - Exercício
autor: Jonatas Sales

## Importando os restaurantes

```
2015-11-10T18:48:30.327-0500	connected to: 127.0.0.1
2015-11-10T18:48:30.330-0500	dropping: be-mean.restaurantes
2015-11-10T18:48:32.673-0500	imported 25359 documents
```

## Contando os restaurantes

```
Jonatass-MacBook-Air(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
```
