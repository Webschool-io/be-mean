# MongoDB - Aula 01 - Exercício
autor: Ademílson F. Tonato

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file ./restaurantes.json
2015-11-09T21:20:17.270-0200 connected to: 127.0.0.1
2015-11-09T21:20:17.270-0200 dropping: be-mean.restaurantes
2015-11-09T21:20:18.450-0200 check 9 25359
2015-11-09T21:20:18.518-0200 imported 25359 objects
```

## Contando os restaurantes

```
lucasft(mongod-2.6.10) be-mean> db.restaurantes.find({}).count()
25359
```
