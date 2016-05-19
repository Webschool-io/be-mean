# MongoDB - Aula 01 - Exercício
autor: Rafael Lee

## Importando os restaurantes

 ```
mongoimport --db be-mean --collection restaurantes --host=127.0.0.1 --drop --fil
e restaurantes.json
2016-05-18T20:29:54.777-0300    connected to: 127.0.0.1
2016-05-18T20:29:54.779-0300    dropping: be-mean.restaurantes
2016-05-18T20:29:57.423-0300    imported 25359 documents
```

## Contando os restaurantes
```
db.restaurantes.find({}).count()
25359
```