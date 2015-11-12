# MongoDB - Aula 01 - Exercício
autor: Wilson Junior

## Importando os restaurantes

```

PS C:\Users\Wilson\code\be-mean-instagram-mongodb\exercises> mongoimport --db be-mean --collection restaurantes --host=1
27.0.0.1 --drop --file restaurantes.json
2015-11-12T03:34:42.999-0200    connected to: 127.0.0.1
2015-11-12T03:34:43.017-0200    dropping: be-mean.restaurantes
2015-11-12T03:34:45.996-0200    [###############.........] be-mean.restaurantes 7.3 MB/11.3 MB (64.6%)
2015-11-12T03:34:47.786-0200    imported 25359 documents

```

## Contando os restaurantes

```

db.restaurantes.find({}).count()
25359

```
