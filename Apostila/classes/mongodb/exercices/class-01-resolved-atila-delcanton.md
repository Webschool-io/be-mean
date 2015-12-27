# MongoDB - Aula 01 - Exercício
autor: Átila Delcanton Rampazo

##importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2015-12-27T14:47:04.990-0200	connected to: 127.0.0.1
2015-12-27T14:47:04.990-0200	dropping: be-mean.restaurantes
2015-12-27T14:47:05.761-0200	imported 25359 documents
```

## Contando so restaurantes

```
db.restaurantes.find({}).count()
25359
```
