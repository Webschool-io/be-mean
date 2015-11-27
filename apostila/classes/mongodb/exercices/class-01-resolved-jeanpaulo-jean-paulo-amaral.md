# MongoDB - Aula 01 - Exercício
autor: Jean Paulo Amaral

## Importando os restaurantes

```
mongoimport --db be-mean-instagram --collection restaurantes --host=127.0.0.1 --drop --file restaurantes.json
2015-11-27T04:14:40.446+0000    connected to: 127.0.0.1
2015-11-27T04:14:40.449+0000    dropping: be-mean-instagram.restaurantes
2015-11-27T04:14:43.434+0000    [########################] be-mean-instagram.restaurantes 11.3 MB/11.3 MB (100.0%)
2015-11-27T04:14:43.529+0000    imported 25359 documents
```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359
```