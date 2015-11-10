# MongoDB - Aula 01 - Exercício
autor: Otaviano Pires Amancio

## Importando os restaurantes

```
C:\data>mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-11-10T13:02:48.037-0200    connected to: localhost
2015-11-10T13:02:48.038-0200    dropping: be-mean.restaurantes
2015-11-10T13:02:48.904-0200    imported 25359 documents
```

## Contando os restaurantes

```
db.restaurantes.find({}).count()
25359

 ```
