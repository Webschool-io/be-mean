# MongoDB - Aula 01 - Exercício
autor: Rafael Taro Osako

## Importando os restaurantes

 ```
Rafaels-MacBook-Pro:desktop rafaeltaro$ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-12-07T21:58:34.434-0200	connected to: localhost
2015-12-07T21:58:34.435-0200	dropping: be-mean.restaurantes
2015-12-07T21:58:35.571-0200	imported 25359 documents
```

## Contando os restaurantes

```
Rafaels-MacBook-Pro(mongod-3.0.7) test> use be-mean
switched to db be-mean
Rafaels-MacBook-Pro(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359

```