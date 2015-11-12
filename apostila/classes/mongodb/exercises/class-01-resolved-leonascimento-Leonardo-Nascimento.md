# MongoDB - Aula 01 - Exercício
autor: Leonardo Nascimento

## Importando os restaurantes

```JS
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
connected to: 127.0.0.1
2015-11-11T22:43:38.336-0300 dropping: be-mean.restaurantes
2015-11-11T22:43:39.937-0300 check 9 25359
2015-11-11T22:43:39.965-0300 imported 25359 objects
```

## Contando os restaurantes
```JS
leonardo(mongod-2.6.10) be-mean> db.restaurantes.find({}).count()
25359
```
