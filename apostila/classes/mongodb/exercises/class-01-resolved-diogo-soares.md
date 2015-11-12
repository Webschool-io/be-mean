# MongoDB - Aula 01 - Exercício
autor: Diogo Soares

## Importando os restaurantes

```
mongoimport --db 'be-mean' --collection 'restaurantes' --drop --file /Users/macbookpro1/Downloads/restaurantes.json
2015-11-10T17:22:22.762-0200	connected to: localhost
2015-11-10T17:22:22.763-0200	dropping: be-mean.restaurantes
2015-11-10T17:22:24.323-0200	imported 25359 documents
```

## Contando os restaurantes

be-mean> db.restaurantes.find({}).count()
25359
