# MongoDB - Aula 01 - Exercício
autor: Arthur Ervas

## Importando os restaurantes

```
MBP-de-Arthur:~ arthurervas$ mongoimport --db be-mean --collection restaurantes --drop --file /Users/arthurervas/Documents/Projetos/cursos/be-mean-instagram/json/restaurantes.json
2015-11-09T21:37:35.447-0200	connected to: localhost
2015-11-09T21:37:35.448-0200	dropping: be-mean.restaurantes
2015-11-09T21:37:36.897-0200	imported 25359 documents
```

## Contando os restaurantes

```
> db.restaurantes.find({}).count()
25359
```