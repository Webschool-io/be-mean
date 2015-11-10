# MongoDB - Aula 01 - Exercício
autor: Carlo Schneider

## Importando os restaurantes

```
Carlos-MBP:www carlo$ mongoimport --db be-mean --collection restaurantes --drop --file /Users/carlo/Documents/www/bemean/mongodb/restaurantes.json
2015-11-09T23:23:51.909-0200  connected to: localhost
2015-11-09T23:23:51.909-0200  dropping: be-mean.restaurantes
2015-11-09T23:23:53.367-0200  imported 25359 documents
```

## Contando os restaurantes

```
Carlos-MBP(mongod-3.0.6) be-mean> db.restaurantes.find({}).count()
25359
```
